/* global neveDash */
import Accordion from './Accordion';
import {changeOption} from '../utils/rest';

const {ToggleControl, Button} = wp.components;
const {withSelect, withDispatch} = wp.data;
const {Fragment} = wp.element;
const {compose} = wp.compose;
const {__} = wp.i18n;

const ModuleCard = ({slug, toggleModule, getStatus, tier}) => {
	const {
		nicename,
		description,
		availabilityLevel,
		options,
		order,
		documentation,
		// eslint-disable-next-line camelcase
		required_actions
	} = neveDash.modules[slug];
	const {upgradeLinks} = neveDash;
	const {proApi} = neveDash;

	function renderOptionsAccordions() {
		return options.map((group) => {
			const {label, options} = group;
			return (
				<Accordion title={label}>
					<form>
						{Object.keys(options).map((optionSlug) => {
							const {label, type} = options[optionSlug];
							return (
								<div className="field-wrap text">
									{ 'text' === type &&
										<Fragment>
											{label && <label for={optionSlug}>{label}</label>}
											<input type='text' name={optionSlug}/>
										</Fragment>
									}
									{'toggle' === type &&
									<ToggleControl/>
									}
								</div>

							);
						})}
					</form>
				</Accordion>
			);
		});
	}

	return (
		<div className="card module-card">
			<div className="card-header">
				{/*{tier}*/}
				{/*{availabilityLevel}*/}
				<h3 className="title">{nicename}</h3>
				<div className="toggle-wrap">
					{
						tier < availabilityLevel ?
							<Button isPrimary href={upgradeLinks[availabilityLevel]}>
								{__('Upgrade', 'neve')}
							</Button> :
							<ToggleControl
								checked={getStatus(slug)}
								onChange={(value) => {
									toggleModule(slug, value);
									changeOption('nv_pro_' + slug + '_status', value);
								}}
							/>
					}
				</div>
			</div>
			<div className="card-content">
				<p className="card-description">
					{description + ' '}
					{documentation &&
					<a href={documentation}>{__('Learn More', 'neve')}</a>
					}
				</p>
				{(0 < options.length && true === getStatus(slug) ) &&
				<div className="module-options">
					{renderOptionsAccordions()}
				</div>
				}
			</div>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const {getModuleStatus, getLicenseTier} = select('neve-dashboard');
		return {
			getStatus: (slug) => getModuleStatus(slug),
			tier: getLicenseTier()
		};
	}),
	withDispatch((dispatch) => {
		const {changeModuleStatus} = dispatch('neve-dashboard');
		return {
			toggleModule: (slug, value) => {
				changeModuleStatus(slug, value);
			}
		};
	})
)(ModuleCard);
