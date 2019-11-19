/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import RadioIcons from '../common/RadioIcons.js';

const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;

const { RangeControl, ColorPalette, Panel, PanelBody, PanelRow } = wp.components;

class ButtonAppearanceComponent extends Component {
	constructor(props) {
		super( props );
		let value = props.control.setting.get();
		this.state = {
			type: value.type,
			background: value.background || '',
			backgroundHover: value.backgroundHover || '',
			text: value.text || '',
			textHover: value.textHover || '',
			borderRadius: value.borderRadius || 3,
			borderWidth: value.borderWidth || 1
		};
		this.updateValues(this.state);
	}

	getBorderControls() {
		return (
				<Fragment>
					<span className="customize-control-title">{__( 'Border',
							'neve' )}</span>
					<div className="range-control">
						<span>{__( 'Radius', 'neve' )}</span>
						<RangeControl
								value={this.state.borderRadius}
								initialPosition={this.state.borderRadius}
								beforeIcon="minus"
								afterIcon="plus"
								min={0}
								max={50}
								step={1}
								onChange={
									(borderRadius) => this.setState( { borderRadius },
											this.updateValues( { borderRadius } ) )
								}
						/>
					</div>
					{this.state.type === 'outline' && <div className="range-control">
						<span>{__( 'Width', 'neve' )}</span>
						<RangeControl
								value={this.state.borderWidth}
								initialPosition={this.state.borderWidth}
								beforeIcon="minus"
								afterIcon="plus"
								min={1}
								max={20}
								step={1}
								onChange={
									(borderWidth) => this.setState( { borderWidth },
											this.updateValues( { borderWidth } ) )
								}
						/>
					</div>}
				</Fragment>
		);
	}

	getColors() {
		const settings = {
					normal: {
						label: __( 'Normal', 'neve' ),
						controls: {
							background: __( 'Background', 'neve' ),
							text: this.state.type === 'fill' && __( 'Text', 'neve' ) ||
									__( 'Text and Border', 'neve' )
						}
					},
					hover: {
						label: __( 'Hover', 'neve' ),
						controls: {
							backgroundHover: __( 'Background', 'neve' ),
							textHover: this.state.type === 'fill' && __( 'Text', 'neve' ) ||
									__( 'Text and Border', 'neve' )
						}
					}
				},
				palette = [
					{ name: 'black', color: '#000000' },
					{ name: 'white', color: '#ffffff' },
					{ name: 'red', color: '#cc433c' },
					{ name: 'orange', color: '#d39b48' },
					{ name: 'green', color: '#95d45a' },
					{ name: 'blue', color: '#3972b8' }
				],
				self = this;

		if ( this.props.control.params.no_hover ) {
			delete settings.hover;
		}
		return (
				<Fragment>
					<span className="customize-control-title">
						{__( 'Color settings', 'neve' )}
					</span>
					<Panel>
						{
							Object.keys( settings ).map( (type) => {
								return (
										<PanelBody
												title={this.props.control.params.no_hover ?
														'' :
														settings[type].label}
												initialOpen={type === 'normal'}
										>
											{
												Object.keys( settings[type].controls ).
														map( (controlSlug) => {
															return (
																	<Fragment>
																		<PanelRow>
																			<span>{settings[type].controls[controlSlug]}</span>
																		</PanelRow>
																		<PanelRow>
																			<ColorPalette
																					colors={palette}
																					value={self.state[controlSlug]}
																					onChange={(value) => {
																						self.setState(
																								{ [controlSlug]: value || '' },
																								self.updateValues( {
																									[controlSlug]: value || ''
																								} ) );
																					}}
																			/>
																			<div
																					className="neve-color-preview"
																					style={{ backgroundColor: self.state[controlSlug] }}>
																			</div>
																		</PanelRow>
																	</Fragment>
															);
														} )
											}
										</PanelBody>
								);
							} )
						}
					</Panel>
				</Fragment>
		);
	}

	getTypeControls() {
		const types = {
			fill: {
				label: 'fill',
				tooltip: __( 'Filled', 'neve' ),
				icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 11.01"
						className="button-filled-svg">
					<rect width="32.58" height="11.01" rx="1"/>
					<path d="M5,7.93V3.07H8.22V4H6.06V5H8v.91H6.06v2Z"/>
					<path d="M9,3.07h1.09V7.93H9Z"/>
					<path d="M14.45,7v.94H11.21V3.07H12.3V7Z"/>
					<path d="M18.4,7v.94H15.16V3.07h1.09V7Z"/>
					<path d="M19.11,7.93V3.07h3.28V4H20.2v1h1.94v.9H20.2V7h2.35v.92Z"/>
					<path
							d="M27.62,5.5a2.88,2.88,0,0,1-.2,1.1,2.11,2.11,0,0,1-.56.78,2.38,2.38,0,0,1-.88.46A4.13,4.13,0,0,1,24.82,8c-.2,0-.43,0-.69,0a6.48,6.48,0,0,1-.77-.1V3.13A6.35,6.35,0,0,1,24.15,3l.7,0A4.45,4.45,0,0,1,26,3.15a2.32,2.32,0,0,1,.87.45,1.92,1.92,0,0,1,.56.77A2.93,2.93,0,0,1,27.62,5.5ZM24.45,7h.42a1.59,1.59,0,0,0,1.22-.41,1.61,1.61,0,0,0,.4-1.14,1.62,1.62,0,0,0-.38-1.16A1.6,1.6,0,0,0,24.91,4h-.23l-.23,0Z"/>
				</svg>
			},
			outline: {
				label: 'outline',
				tooltip: __( 'Outline', 'neve' ),
				icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.01 12.01"
						className="button-outline-svg">
					<rect className="a" x="0.5" y="0.5" width="38.01" height="11.01"
							rx="1.08"/>
					<path
							d="M9.38,6A2.83,2.83,0,0,1,9.19,7.1a2.12,2.12,0,0,1-.51.8,2.14,2.14,0,0,1-.76.48,2.76,2.76,0,0,1-1,.16A2.65,2.65,0,0,1,6,8.38a2.18,2.18,0,0,1-.77-.48,2.14,2.14,0,0,1-.52-.8A2.83,2.83,0,0,1,4.54,6a2.88,2.88,0,0,1,.19-1.1,2.54,2.54,0,0,1,.53-.8A2.32,2.32,0,0,1,6,3.63,2.58,2.58,0,0,1,7,3.47a2.69,2.69,0,0,1,.94.16,2.27,2.27,0,0,1,.77.48,2.36,2.36,0,0,1,.52.8A2.88,2.88,0,0,1,9.38,6ZM5.67,6a2.11,2.11,0,0,0,.09.64,1.38,1.38,0,0,0,.25.5,1.13,1.13,0,0,0,.4.32A1.35,1.35,0,0,0,7,7.58a1.33,1.33,0,0,0,.54-.11,1.17,1.17,0,0,0,.41-.32,1.56,1.56,0,0,0,.25-.5A2.11,2.11,0,0,0,8.25,6a2.17,2.17,0,0,0-.09-.65,1.47,1.47,0,0,0-.25-.5,1.17,1.17,0,0,0-.41-.32A1.33,1.33,0,0,0,7,4.43a1.35,1.35,0,0,0-.55.11,1.16,1.16,0,0,0-.4.33,1.31,1.31,0,0,0-.25.5A2.11,2.11,0,0,0,5.67,6Z"/>
					<path
							d="M12.19,8.54a2.58,2.58,0,0,1-.88-.14,1.79,1.79,0,0,1-.62-.4,1.55,1.55,0,0,1-.35-.61,2.47,2.47,0,0,1-.12-.79v-3h1.1V6.51a1.75,1.75,0,0,0,.06.5,1.2,1.2,0,0,0,.18.34.73.73,0,0,0,.28.19,1.44,1.44,0,0,0,.37,0,.92.92,0,0,0,.65-.24,1.19,1.19,0,0,0,.24-.84V3.58h1.1v3a2.47,2.47,0,0,1-.12.79,1.62,1.62,0,0,1-.36.61,1.7,1.7,0,0,1-.63.4A2.66,2.66,0,0,1,12.19,8.54Z"/>
					<path d="M18.86,3.58v.93H17.39V8.44H16.3V4.51H14.83V3.58Z"/>
					<path d="M22.81,7.5v.94H19.56V3.58h1.09V7.5Z"/>
					<path d="M23.51,3.58H24.6V8.44H23.51Z"/>
					<path
							d="M29,8.44q-.46-.82-1-1.65a16.16,16.16,0,0,0-1.16-1.53V8.44H25.73V3.58h.89q.22.22.51.57t.57.72c.2.25.39.52.58.79l.54.79V3.58h1.09V8.44Z"/>
					<path
							d="M31,8.44V3.58h3.28V4.5H32.13v1h1.94v.9H32.13V7.52h2.35v.92Z"/>
				</svg>
			}
		};

		return (
				<RadioIcons options={types} onChange={(type) => {
					this.setState( { type }, this.updateValues( { type } ) );
				}} value={this.state.type}/>
		);
	}

	render() {
		return (
				<div className="neve-button-appearance-control">
					{this.props.control.params.label &&
					<span
							className="customize-control-title">
						{this.props.control.params.label}
					</span>}
					<div className="neve-white-background-control">
						<span className="customize-control-title">{
							__( 'Style', 'neve' )
						}</span>
						{this.getTypeControls()}
						{this.getBorderControls()}
						{this.getColors()}
					</div>
				</div>
		);
	}

	updateValues(value) {
		this.props.control.setting.set( {
			...this.props.control.setting.get(),
			...value
		} );
	}
}

ButtonAppearanceComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default ButtonAppearanceComponent;
