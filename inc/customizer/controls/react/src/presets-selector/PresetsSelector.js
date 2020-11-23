/* jshint esversion: 6 */

import PropTypes from 'prop-types';
import { maybeParseJson } from '../common/common';

import { Component } from '@wordpress/element';
import { Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

class PresetsSelector extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			search: '',
		};

		this.replaceSettings = this.replaceSettings.bind( this );
	}

	/**
	 * You can get the value in the console with this command:
	 *
	 * copy(HFG.getSettings());
	 *
	 * @return {*}
	 */
	getPresets() {
		const { presets } = this.props.control.params;

		return presets.filter( ( preset ) => {
			return preset.label
				.toLowerCase()
				.includes( this.state.search.toLowerCase() );
		} );
	}

	render() {
		const presets = this.getPresets();
		return (
			<div className="neve-preset-selector">
				<div className="search">
					<input
						type="search"
						placeholder={ __( 'Search Header Presets…' ) }
						onChange={ ( e ) => {
							this.setState( { search: e.target.value } );
						} }
					/>
				</div>
				{ presets.length > 0 ? (
					presets.map( ( preset, index ) => {
						return (
							<Tooltip key={ index } text={ preset.label }>
								<button
									onClick={ ( e ) => {
										e.preventDefault();
										this.replaceSettings( preset.setup );
									} }
								>
									<img
										src={ preset.image }
										alt={ preset.label }
									/>
								</button>
							</Tooltip>
						);
					} )
				) : (
					<p>{ __( 'No header presets found', 'neve' ) }</p>
				) }
			</div>
		);
	}

	replaceSettings( setup ) {
		setup = maybeParseJson( setup );
		if ( typeof NeveProReactCustomize === 'undefined' ) {
			Object.keys( setup ).map( ( themeMod ) => {
				if ( themeMod === 'hfg_header_layout' ) {
					wp.customize
						.control( themeMod )
						.setting.set( setup[ themeMod ] );
					document.dispatchEvent(
						new CustomEvent( 'neve-changed-builder-value', {
							detail: {
								value: maybeParseJson( setup[ themeMod ] ),
								id: 'header',
							},
						} )
					);
					return false;
				}
				if ( ! wp.customize.control( themeMod ) ) return false;
				if (
					[ 'text', 'textarea', 'select' ].includes(
						wp.customize.control( themeMod ).params.type
					)
				) {
					wp.customize
						.control( themeMod )
						.setting.set( setup[ themeMod ] );
					return false;
				}

				document.dispatchEvent(
					new CustomEvent( 'neve-changed-customizer-value', {
						detail: {
							value: setup[ themeMod ] || '',
							id: themeMod,
						},
					} )
				);
			} );
			return false;
		}
		document.dispatchEvent(
			new CustomEvent( 'neve-preset-changed', {
				detail: {
					themeMods: setup,
				},
			} )
		);
	}
}

PresetsSelector.propTypes = {
	control: PropTypes.object.isRequired,
};

export default PresetsSelector;
