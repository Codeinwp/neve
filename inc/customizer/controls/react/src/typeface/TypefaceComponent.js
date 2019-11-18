/* jshint esversion: 6 */
import PropTypes from 'prop-types';

import ResponsiveControl from '../common/Responsive.js';
import NumberControl from '../common/NumberControl.js';
import RadioIcons from '../common/RadioIcons';

const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;

const {
	SelectControl
} = wp.components;

class TypefaceComponent extends Component {
	constructor(props) {
		super( props );

		let value = props.control.setting.get();
		let defaultParams = {
			size_units: ['px', 'em'],
			weight_default: 400,
			text_transform: 'none',
			size_default: {
				suffix: {
					mobile: 'px',
					tablet: 'px',
					desktop: 'px'
				},
				mobile: 15,
				tablet: 15,
				desktop: 15
			},
			line_height_default: {
				mobile: 1.6,
				tablet: 1.6,
				desktop: 1.6
			},
			letter_spacing_default: {
				mobile: 0,
				tablet: 0,
				desktop: 0
			}
		};

		this.controlParams = props.control.params.input_attrs ? {
			...defaultParams,
			...props.control.params.input_attrs
		} : defaultParams;

		this.state = {
			currentDevice: 'desktop',
			fontSize: value.fontSize,
			lineHeight: value.lineHeight,
			letterSpacing: value.letterSpacing,
			fontWeight: value.fontWeight,
			textTransform: value.textTransform,
			flag: false
		};
	}

	render() {
		let textTransforms = {
			none: {
				label: 'none',
				tooltip: __( 'None', 'neve' ),
				icon: 'no'
			},
			capitalize: {
				label: 'Aa',
				tooltip: __( 'Capitalize', 'neve' ),
				icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<g>
						<path
								d="M8.84,14.2c-.11-.32-.22-.66-.34-1s-.23-.68-.35-1H4.51l-.35,1q-.18.51-.33,1H1.66c.35-1,.68-1.93,1-2.78s.62-1.65.92-2.4.6-1.47.89-2.14.6-1.34.91-2h2c.3.65.6,1.31.9,2s.6,1.38.9,2.14.61,1.55.92,2.4.65,1.78,1,2.78ZM6.32,7c-.05.14-.11.32-.2.55s-.2.51-.31.81l-.39,1c-.14.36-.28.75-.43,1.15H7.65L7.24,9.36c-.14-.36-.26-.7-.38-1l-.32-.81C6.45,7.32,6.38,7.13,6.32,7Z"/>
						<path
								d="M14.53,7a4.81,4.81,0,0,1,1.48.2,2.43,2.43,0,0,1,.95.58,2.18,2.18,0,0,1,.5.91,4.48,4.48,0,0,1,.15,1.2V14l-1.2.22a12.06,12.06,0,0,1-1.85.13,5.86,5.86,0,0,1-1.24-.12,2.7,2.7,0,0,1-1-.4,1.74,1.74,0,0,1-.62-.72A2.52,2.52,0,0,1,11.52,12a2.08,2.08,0,0,1,.25-1,1.93,1.93,0,0,1,.67-.69,3,3,0,0,1,1-.37,5.8,5.8,0,0,1,1.11-.11c.26,0,.49,0,.7,0a3.65,3.65,0,0,1,.49.09V9.74a1.14,1.14,0,0,0-.31-.82,1.55,1.55,0,0,0-1.08-.31,6.63,6.63,0,0,0-1,.08,4.16,4.16,0,0,0-.86.21l-.26-1.61.44-.12c.17,0,.36-.08.57-.11L13.84,7Q14.19,7,14.53,7Zm.16,5.85h.57l.43,0V11.23l-.37-.05-.44,0a3,3,0,0,0-.53,0,1.42,1.42,0,0,0-.44.12.81.81,0,0,0-.29.26.7.7,0,0,0-.11.4.69.69,0,0,0,.32.65A1.75,1.75,0,0,0,14.69,12.8Z"/>
					</g>
				</svg>
			},
			lowercase: {
				label: 'aa',
				tooltip: __( 'Lowercase', 'neve' ),
				icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<g>
						<path
								d="M6.05,7a4.77,4.77,0,0,1,1.48.2,2.43,2.43,0,0,1,1,.58,2.18,2.18,0,0,1,.5.91,4.48,4.48,0,0,1,.15,1.2V14l-1.2.22a12.06,12.06,0,0,1-1.85.13,5.86,5.86,0,0,1-1.24-.12,2.78,2.78,0,0,1-1-.4,1.74,1.74,0,0,1-.62-.72A2.52,2.52,0,0,1,3,12a2.08,2.08,0,0,1,.25-1A1.93,1.93,0,0,1,4,10.29a3.09,3.09,0,0,1,1-.37A5.83,5.83,0,0,1,6,9.81q.39,0,.69,0a3.65,3.65,0,0,1,.49.09V9.74a1.14,1.14,0,0,0-.31-.82,1.55,1.55,0,0,0-1.08-.31,6.63,6.63,0,0,0-1,.08A4.33,4.33,0,0,0,4,8.9L3.7,7.29l.44-.12c.17,0,.36-.08.57-.11L5.36,7Q5.71,7,6.05,7Zm.16,5.85h.57l.43,0V11.23l-.37-.05-.44,0a3,3,0,0,0-.53,0,1.5,1.5,0,0,0-.44.12.81.81,0,0,0-.29.26A.7.7,0,0,0,5,12a.69.69,0,0,0,.32.65A1.75,1.75,0,0,0,6.21,12.8Z"/>
						<path
								d="M13.48,7a4.7,4.7,0,0,1,1.47.2,2.36,2.36,0,0,1,1,.58,2,2,0,0,1,.5.91,4.48,4.48,0,0,1,.15,1.2V14l-1.19.22a12.11,12.11,0,0,1-1.86.13,5.93,5.93,0,0,1-1.24-.12,2.78,2.78,0,0,1-1-.4,1.81,1.81,0,0,1-.62-.72A2.52,2.52,0,0,1,10.47,12a2,2,0,0,1,.25-1,1.9,1.9,0,0,1,.66-.69,3.15,3.15,0,0,1,1-.37,5.72,5.72,0,0,1,1.11-.11q.39,0,.69,0a3.37,3.37,0,0,1,.49.09V9.74a1.1,1.1,0,0,0-.31-.82,1.5,1.5,0,0,0-1.07-.31,6.77,6.77,0,0,0-1,.08,4.33,4.33,0,0,0-.86.21l-.25-1.61.43-.12.57-.11L12.79,7Q13.12,7,13.48,7Zm.16,5.85h.56l.43,0V11.23l-.36-.05-.44,0a2.93,2.93,0,0,0-.53,0,1.42,1.42,0,0,0-.44.12.85.85,0,0,0-.3.26.7.7,0,0,0-.1.4.68.68,0,0,0,.31.65A1.76,1.76,0,0,0,13.64,12.8Z"/>
					</g>
				</svg>
			},
			uppercase: {
				label: 'AA',
				tooltip: __( 'Uppercase', 'neve' ),
				icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<g>
						<path
								d="M7.39,14.2c-.11-.32-.22-.66-.34-1s-.23-.68-.35-1H3.06l-.35,1q-.18.51-.33,1H.21c.35-1,.68-1.93,1-2.78s.62-1.65.92-2.4.6-1.47.89-2.14.6-1.34.91-2h2c.3.65.61,1.31.9,2s.6,1.38.9,2.14.61,1.55.92,2.4.65,1.78,1,2.78ZM4.87,7c0,.14-.11.32-.2.55s-.2.51-.31.81S4.12,9,4,9.37s-.28.75-.43,1.15H6.2L5.79,9.36c-.14-.36-.26-.7-.38-1l-.32-.81C5,7.32,4.93,7.13,4.87,7Z"/>
						<path
								d="M17.56,14.2c-.1-.32-.21-.66-.33-1l-.36-1H13.24c-.12.33-.24.67-.35,1s-.23.67-.33,1H10.38c.35-1,.68-1.93,1-2.78S12,9.77,12.3,9s.6-1.47.89-2.14.6-1.34.91-2h2c.31.65.61,1.31.91,2s.59,1.38.9,2.14.61,1.55.92,2.4.65,1.78,1,2.78ZM15.05,7l-.21.55-.3.81-.39,1c-.14.36-.29.75-.43,1.15h2.66c-.14-.4-.28-.79-.42-1.16s-.26-.7-.38-1l-.31-.81Z"/>
						<path
								d="M7.38,14.2c-.1-.32-.21-.66-.33-1l-.36-1H3.06q-.18.49-.36,1l-.33,1H.2c.35-1,.68-1.93,1-2.78s.62-1.65.92-2.4.6-1.47.89-2.14.59-1.34.91-2h2c.31.65.61,1.31.91,2S7.4,8.26,7.7,9s.61,1.55.93,2.4.64,1.78,1,2.78ZM4.86,7c0,.14-.11.32-.2.55s-.19.51-.31.81S4.11,9,4,9.37s-.29.75-.44,1.15H6.19L5.78,9.36c-.13-.36-.26-.7-.38-1l-.32-.81C5,7.32,4.92,7.13,4.86,7Z"/>
						<path
								d="M17.56,14.2c-.11-.32-.22-.66-.34-1s-.23-.68-.35-1H13.23l-.35,1q-.18.51-.33,1H10.38c.35-1,.68-1.93,1-2.78S12,9.77,12.29,9s.6-1.47.89-2.14.6-1.34.91-2h2c.3.65.6,1.31.9,2s.6,1.38.9,2.14.61,1.55.92,2.4.65,1.78,1,2.78ZM15,7c0,.14-.11.32-.2.55s-.2.51-.31.81-.24.64-.39,1-.28.75-.43,1.15h2.66L16,9.36c-.14-.36-.26-.7-.38-1l-.32-.81C15.17,7.32,15.1,7.13,15,7Z"/>
					</g>
				</svg>
			}
		};
		let self = this;
		return (
				<Fragment>
					{this.props.control.params.label &&
					<span className="customize-control-title">
							{this.props.control.params.label}
						</span>}
					<div className="neve-typeface-control neve-white-background-control">
						<span className="customize-control-title">
							{__( 'Text Transform', 'neve' )}
						</span>
						<RadioIcons
								options={textTransforms}
								onChange={(textTransform) => {
									this.setState( { textTransform } );
									this.updateValues( { textTransform } );
								}}
								value={this.state.textTransform}/>

						<span className="customize-control-title">
						{__( 'Font Weight', 'neve' )}
					</span>
						<SelectControl
								value={this.state.fontWeight}
								options={[
									{ value: 100, label: '100' },
									{ value: 200, label: '200' },
									{ value: 300, label: '300' },
									{ value: 400, label: '400' },
									{ value: 500, label: '500' },
									{ value: 600, label: '600' },
									{ value: 700, label: '700' },
									{ value: 800, label: '800' },
									{ value: 900, label: '900' }
								]}
								onChange={(fontWeight) => {
									this.setState( { fontWeight } );
									this.updateValues( { fontWeight } );
								}}
						/>
						<ResponsiveControl
								onChange={(currentDevice) => this.setState(
										{ currentDevice } )}>
							<NumberControl
									className="font-size"
									label={__( 'Font Size', 'neve' )}
									default={this.controlParams.size_default[this.state.currentDevice]}
									onChange={(val) => {
										let value = self.state.fontSize;
										value[self.state.currentDevice] = val;
										self.setState( { fontSize: value } );
										self.updateValues( { fontSize: value } );
									}}
									step={this.state.fontSize.suffix[this.state.currentDevice] ===
									'em' ? 0.1 : 1}
									onReset={() => {
										let value = this.state.fontSize;
										value.suffix[this.state.currentDevice] = this.controlParams.size_default.suffix[this.state.currentDevice];
										value[this.state.currentDevice] = this.controlParams.size_default[this.state.currentDevice];
										this.setState( { fontSize: value } );
										this.updateValues( { fontSize: value } );
									}}
									value={this.state.fontSize[this.state.currentDevice]}
									units={this.controlParams.size_units}
									activeUnit={this.state.fontSize.suffix[this.state.currentDevice]}
									onUnitChange={(val) => {
										let value = self.state.fontSize;
										value.suffix[self.state.currentDevice] = val;
										self.setState( { fontSize: value } );
										self.updateValues( { fontSize: value } );
									}}
							/>
							<NumberControl
									className="line-height"
									label={__( 'Line Height', 'neve' )}
									step={0.1}
									default={this.controlParams.line_height_default[this.state.currentDevice]}
									onChange={(val) => {
										let value = this.state.lineHeight;
										value[this.state.currentDevice] = val;
										this.setState( { lineHeight: value } );
										this.updateValues( { lineHeight: value } );
									}}
									onReset={() => {
										let value = this.state.lineHeight;
										value[this.state.currentDevice] = this.controlParams.line_height_default[this.state.currentDevice];
										this.setState( { lineHeight: value } );
										this.updateValues( { lineHeight: value } );
									}}
									value={this.state.lineHeight[this.state.currentDevice]}
									max={4}
									min={0.5}
							/>
							<NumberControl
									className="letter-spacing"
									label={__( 'Letter Spacing', 'neve' )}
									step={0.1}
									default={this.controlParams.letter_spacing_default[this.state.currentDevice]}
									onChange={(val) => {
										let value = this.state.letterSpacing;
										value[this.state.currentDevice] = val;
										this.setState( { letterSpacing: value } );
										this.updateValues( { letterSpacing: value } );
									}}
									onReset={() => {
										let value = this.state.letterSpacing;
										value[this.state.currentDevice] = this.controlParams.letter_spacing_default[this.state.currentDevice];
										this.setState( { letterSpacing: value } );
										this.updateValues( { letterSpacing: value } );
									}}
									value={this.state.letterSpacing[this.state.currentDevice]}
									max={20}
									min={-5}
							/>
						</ResponsiveControl>
					</div>
				</Fragment>
		);
	}

	updateValues(value) {
		this.props.control.setting.set( {
			...this.props.control.setting.get(),
			...value,
			flag: !this.props.control.setting.get().flag
		} );
	}
}

TypefaceComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default TypefaceComponent;
