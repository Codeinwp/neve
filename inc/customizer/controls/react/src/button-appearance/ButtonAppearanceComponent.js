/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import RadioIcons from '../common/RadioIcons.js';
import SizingControl from '../common/Sizing.js';
import ColorControl from '../common/ColorControl';

import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { mapValues } from 'lodash';

class ButtonAppearanceComponent extends Component {
	constructor( props ) {
		super( props );
		const value = props.control.setting.get();
		const defaultsFromControl = {
			borderRadius: {
				top: 3,
				right: 3,
				bottom: 3,
				left: 3,
			},
			borderWidth: {
				top: 1,
				right: 1,
				bottom: 1,
				left: 1,
			},
		};

		// If this is the old, non-array version of radius, we convert.
		if ( typeof value.borderRadius === 'number' ) {
			value.borderRadius = {
				top: value.borderRadius,
				right: value.borderRadius,
				bottom: value.borderRadius,
				left: value.borderRadius,
			};
		}
		// If this is the old, non-array version of radius, we convert.
		if ( typeof value.borderWidth === 'number' ) {
			value.borderWidth = {
				top: value.borderWidth,
				right: value.borderWidth,
				bottom: value.borderWidth,
				left: value.borderWidth,
			};
		}

		this.defaultVals = props.control.params.defaultVals
			? {
					...props.control.params.defaultVals,
					...defaultsFromControl,
			  }
			: defaultsFromControl;

		this.state = {
			type: value.type,
			background: value.background || '',
			backgroundHover: value.backgroundHover || '',
			text: value.text || '',
			textHover: value.textHover || '',
			borderRadius: value.borderRadius || this.defaultVals.borderRadius,
			borderWidth: value.borderWidth || this.defaultVals.borderWidth,
			radiusLinked: false,
			widthLinked: false,
		};
		// Set linking.
		this.state.radiusLinked = this.isLinked( this.state.borderRadius );
		this.state.widthLinked = this.isLinked( this.state.borderWidth );

		// this.updateValues(this.state)

		this.renderBorderControls = this.renderBorderControls.bind( this );
		this.renderTypeControls = this.renderTypeControls.bind( this );
		this.renderColors = this.renderColors.bind( this );
	}

	renderBorderControls() {
		const radiusOptions = [
			{
				type: 'top',
				value: this.state.borderRadius.top,
			},
			{
				type: 'right',
				value: this.state.borderRadius.right,
			},
			{
				type: 'bottom',
				value: this.state.borderRadius.bottom,
			},
			{
				type: 'left',
				value: this.state.borderRadius.left,
			},
		];
		const widthOptions = [
			{
				type: 'top',
				value: this.state.borderWidth.top,
			},
			{
				type: 'right',
				value: this.state.borderWidth.right,
			},
			{
				type: 'bottom',
				value: this.state.borderWidth.bottom,
			},
			{
				type: 'left',
				value: this.state.borderWidth.left,
			},
		];

		return (
			<Fragment>
				<span className="customize-control-title">
					{ __( 'Border Radius', 'neve' ) }
				</span>
				<SizingControl
					min={ 0 }
					max={ 100 }
					step={ 1 }
					options={ radiusOptions }
					defaults={ this.defaultVals.borderRadius }
					linked={ this.state.radiusLinked }
					onLinked={ () =>
						this.setState( {
							radiusLinked: ! this.state.radiusLinked,
						} )
					}
					onChange={ ( optionType, numericValue ) => {
						let newVal;
						if ( this.state.radiusLinked ) {
							newVal = mapValues(
								this.state.borderRadius,
								() => numericValue
							);
						} else {
							newVal = {
								...this.state.borderRadius,
								[ optionType ]: numericValue,
							};
						}
						this.setState( { borderRadius: newVal } );
						this.updateValues( { borderRadius: newVal } );
					} }
					onReset={ () => {
						this.setState( {
							borderRadius: this.defaultVals.borderRadius,
						} );
						this.updateValues( {
							borderRadius: this.defaultVals.borderRadius,
						} );
					} }
				/>
				{ this.state.type === 'outline' && (
					<Fragment>
						<span className="customize-control-title">
							{ __( 'Border Width', 'neve' ) }
						</span>
						<SizingControl
							min={ 0 }
							max={ 100 }
							step={ 1 }
							options={ widthOptions }
							defaults={ this.defaultVals.borderWidth }
							linked={ this.state.widthLinked }
							onLinked={ () =>
								this.setState( {
									widthLinked: ! this.state.widthLinked,
								} )
							}
							onChange={ ( optionType, numericValue ) => {
								let newVal;
								if ( this.state.widthLinked ) {
									newVal = mapValues(
										this.state.borderWidth,
										() => numericValue
									);
								} else {
									newVal = {
										...this.state.borderWidth,
										[ optionType ]: numericValue,
									};
								}
								this.setState( { borderWidth: newVal } );
								this.updateValues( { borderWidth: newVal } );
							} }
							onReset={ () => {
								this.setState( {
									borderWidth: this.defaultVals.borderWidth,
								} );
								this.updateValues( {
									borderWidth: this.defaultVals.borderWidth,
								} );
							} }
						/>
					</Fragment>
				) }
			</Fragment>
		);
	}

	renderColors() {
		if ( ! this.state.type ) {
			return null;
		}
		const settings = {
			normal: {
				label: __( 'Normal', 'neve' ),
				controls: {
					background: __( 'Background', 'neve' ),
					text:
						this.state.type === 'fill'
							? __( 'Text', 'neve' )
							: __( 'Text and Border', 'neve' ),
				},
			},
			hover: {
				label: __( 'Hover', 'neve' ),
				controls: {
					backgroundHover: __( 'Background', 'neve' ),
					textHover:
						this.state.type === 'fill'
							? __( 'Text', 'neve' )
							: __( 'Text and Border', 'neve' ),
				},
			},
		};

		const self = this;

		if ( this.props.control.params.no_hover ) {
			delete settings.hover;
		}
		return (
			<Panel>
				{ Object.keys( settings ).map( ( type, index ) => {
					return (
						<PanelBody
							key={ index }
							title={
								this.props.control.params.no_hover
									? ''
									: settings[ type ].label
							}
							initialOpen={ type === 'normal' }
						>
							{ Object.keys( settings[ type ].controls ).map(
								( controlSlug, index ) => {
									return (
										<Fragment key={ index }>
											<PanelRow>
												<ColorControl
													label={
														settings[ type ]
															.controls[
															controlSlug
														]
													}
													selectedColor={
														self.state[
															controlSlug
														]
													}
													onChange={ ( value ) => {
														self.setState(
															{
																[ controlSlug ]:
																	value || '',
															},
															self.updateValues( {
																[ controlSlug ]:
																	value || '',
															} )
														);
													} }
												/>
											</PanelRow>
										</Fragment>
									);
								}
							) }
						</PanelBody>
					);
				} ) }
			</Panel>
		);
	}

	renderTypeControls() {
		const types = {
			fill: {
				label: 'fill',
				tooltip: __( 'Filled', 'neve' ),
				icon: 'text',
			},
			outline: {
				label: 'outline',
				tooltip: __( 'Outline', 'neve' ),
				icon: 'text',
			},
		};

		return (
			<RadioIcons
				options={ types }
				onChange={ ( type ) => {
					this.setState( { type }, this.updateValues( { type } ) );
				} }
				value={ this.state.type }
			/>
		);
	}

	render() {
		return (
			<div className="neve-button-appearance-control">
				{ this.props.control.params.label && (
					<span className="customize-control-title">
						{ this.props.control.params.label }
					</span>
				) }
				<div className="neve-white-background-control">
					<span className="customize-control-title">
						{ __( 'Style', 'neve' ) }
					</span>
					{ this.renderTypeControls() }
					{ this.renderBorderControls() }
					{ this.renderColors() }
				</div>
			</div>
		);
	}

	componentDidMount() {
		const { control } = this.props;

		document.addEventListener( 'neve-changed-customizer-value', ( e ) => {
			if ( ! e.detail ) return false;
			if ( e.detail.id !== control.id ) return false;
			// Migrate border-radius and border-width
			const r = e.detail.value.borderRadius;
			if ( r && ( typeof r === 'string' || typeof r === 'number' ) ) {
				e.detail.value.borderRadius = {
					top: r,
					bottom: r,
					right: r,
					left: r,
				};
			}

			const w = e.detail.value.borderWidth;
			if ( w && ( typeof w === 'string' || typeof w === 'number' ) ) {
				e.detail.value.borderWidth = {
					top: w,
					bottom: w,
					right: w,
					left: w,
				};
			}
			this.setState( { ...this.state, ...e.detail.value } );
			this.updateValues( e.detail.value );
		} );
	}

	updateValues( value ) {
		this.props.control.setting.set( {
			...this.props.control.setting.get(),
			...value,
		} );
	}

	isLinked( object ) {
		// eslint-disable-next-line eqeqeq
		return Object.values( object ).every(
			( value ) => value == Object.values( object )[ 0 ]
		);
	}
}

ButtonAppearanceComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ButtonAppearanceComponent;
