/* global neveDash */
import Accordion from './Accordion';
import InputForm from './Options/InputForm';
import Toggle from './Options/Toggle';
import { changeOption } from '../utils/rest';
import classnames from 'classnames';

import { Button, ToggleControl, Dashicon } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { Fragment, useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

const ModuleCard = ( {
	slug,
	setToast,
	changeModuleStatus,
	getModuleStatus,
	tier,
} ) => {
	const [ loading, setLoading ] = useState( false );
	const {
		nicename,
		description,
		availabilityLevel,
		options,
		order,
		links,
		documentation,
		// eslint-disable-next-line camelcase
		required_actions,
	} = neveDash.modules[ slug ];
	const { upgradeLinks } = neveDash;

	const renderOptionsAccordions = () => {
		return options.map( ( group, index ) => {
			const { label, options } = group;
			return (
				<Accordion key={ index } title={ label }>
					<div>
						{ Object.keys( options ).map( ( optionSlug, index ) => {
							const { label, type, placeholder } = options[
								optionSlug
							];
							return (
								<Fragment key={ index }>
									{ 'text' === type && (
										<InputForm
											label={ label }
											slug={ optionSlug }
											placeholder={ placeholder }
										/>
									) }
									{ 'toggle' === type && (
										<Toggle
											label={ label }
											slug={ optionSlug }
										/>
									) }
								</Fragment>
							);
						} ) }
					</div>
				</Accordion>
			);
		} );
	};

	return (
		<div className={ classnames( [ 'card', 'module-card', slug ] ) }>
			<div className="card-header">
				<h3 className="title">{ nicename }</h3>
				<div className="toggle-wrap">
					{ tier < availabilityLevel ? (
						<Button
							isPrimary
							href={ upgradeLinks[ availabilityLevel ] }
						>
							{ __( 'Upgrade', 'neve' ) }
						</Button>
					) : (
						<Fragment>
							{ required_actions && (
								<span
									className="required"
									dangerouslySetInnerHTML={ {
										__html: required_actions,
									} }
								/>
							) }
							{ loading && (
								<Dashicon
									size={ 18 }
									icon="update"
									className="is-loading"
								/>
							) }
							{ ! required_actions && (
								<ToggleControl
									checked={ getModuleStatus( slug ) || false }
									onChange={ ( value ) => {
										setLoading( true );
										changeOption( slug, value, true ).then(
											( r ) => {
												if ( r.success ) {
													changeModuleStatus(
														slug,
														value
													);
													setLoading( false );
													setToast(
														( value
															? __(
																	'Module Activated',
																	'neve'
															  )
															: __(
																	'Module Deactivated.',
																	'neve'
															  ) ) +
															` (${ nicename })`
													);
													return false;
												}
												setLoading( false );
												setToast(
													__(
														'Could not activate module. Please try again.',
														'neve'
													)
												);
											}
										);
									} }
								/>
							) }
						</Fragment>
					) }
				</div>
			</div>
			<div className="card-content">
				<p className="card-description">
					{ description + ' ' }
					{ documentation.url && (
						<a href={ documentation.url }>
							{ __( 'Learn More', 'neve' ) }
						</a>
					) }
				</p>
				{ links && getModuleStatus( slug ) && (
					<div className="actions">
						{ links.map( ( link, index ) => (
							<Button key={ index } isSecondary href={ link.url }>
								{ link.label }
							</Button>
						) ) }
					</div>
				) }
				{ 0 < options.length &&
					true === getModuleStatus( slug ) &&
					-1 < tier && (
						<div className="module-options">
							{ renderOptionsAccordions() }
						</div>
					) }
			</div>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getModuleStatus, getLicenseTier } = select( 'neve-dashboard' );
		return {
			getModuleStatus: ( slug ) => getModuleStatus( slug ),
			tier: getLicenseTier(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { changeModuleStatus, setToast } = dispatch( 'neve-dashboard' );
		return {
			changeModuleStatus: ( slug, value ) =>
				changeModuleStatus( slug, value ),
			setToast: ( message ) => setToast( message ),
		};
	} )
)( ModuleCard );
