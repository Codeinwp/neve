/* global neveDash */
import Accordion from './Accordion';
import {send} from '../utils/rest';

const {ToggleControl, Button} = wp.components;
const {withSelect, withDispatch} = wp.data;
const {useState} = wp.element;
const {compose} = wp.compose;
const {__} = wp.i18n;

const ModuleCard = ({slug, toggleModule, getStatus, tier}) => {
	const {
		nicename,
		description,
		order,
		availabilityLevel,
		settingsForm,
		documentation,
		// eslint-disable-next-line camelcase
		required_actions
	} = neveDash.modules[slug];
	const {upgradeLinks} = neveDash;
	const {proApi} = neveDash;

	return (
		<div className="card module-card">
			<div className="card-header">
				{tier}
				{availabilityLevel}
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
									send( proApi + '/save_options', {slug, value} ).then((r) => {
										console.log(r);
									});
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
