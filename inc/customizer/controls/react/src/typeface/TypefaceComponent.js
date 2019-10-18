/* jshint esversion: 6 */
import PropTypes from 'prop-types';

import ResponsiveControl from '../common/Responsive.js';
import TextTransform from './TextTransform.js';
import NumberControl from '../common/NumberControl.js';

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
			flag: false,
		};
	}

	render() {
		let self = this;
		return (
				<Fragment>
					{this.props.control.params.label &&
					<span className="customize-control-title">
							{this.props.control.params.label}
						</span>}
					<div className="neve-typeface-control">
						<TextTransform
								onChange={(textTransform) => {
									this.setState( { textTransform } );
									this.updateValues();
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
									this.updateValues();
								}}
						/>
						<ResponsiveControl
								onChange={(currentDevice) => this.setState(
										{ currentDevice } )}>
							<NumberControl
									label={__( 'Font Size', 'neve' )}
									default={this.controlParams.size_default[this.state.currentDevice]}
									onChange={(val) => {
										let value = self.state.fontSize;
										value[self.state.currentDevice] = val;
										self.setState( { fontSize: value } );
										this.updateValues();
									}}
									step={this.state.fontSize.suffix[this.state.currentDevice] ===
									'em' ? 0.1 : 1}
									onReset={() => {
										let value = this.state.fontSize;
										value.suffix[this.state.currentDevice] = this.controlParams.size_default.suffix[this.state.currentDevice];
										value[this.state.currentDevice] = this.controlParams.size_default[this.state.currentDevice];
										this.setState( { fontSize: value } );
										this.updateValues();
									}}
									value={this.state.fontSize[this.state.currentDevice]}
									units={this.controlParams.size_units}
									activeUnit={this.state.fontSize.suffix[this.state.currentDevice]}
									onUnitChange={(val) => {
										let value = self.state.fontSize;
										value.suffix[self.state.currentDevice] = val;
										self.setState( { fontSize: value } );
										this.updateValues();
									}}
							/>
							<NumberControl
									label={__( 'Line Height', 'neve' )}
									step={0.1}
									default={this.controlParams.line_height_default[this.state.currentDevice]}
									onChange={(val) => {
										let value = this.state.lineHeight;
										value[this.state.currentDevice] = val;
										this.setState( { lineHeight: value } );
										this.updateValues();
									}}
									onReset={() => {
										let value = this.state.lineHeight;
										value[this.state.currentDevice] = this.controlParams.line_height_default[this.state.currentDevice];
										this.setState( { lineHeight: value } );
										this.updateValues();
									}}
									value={this.state.lineHeight[this.state.currentDevice]}
									max={4}
									min={0.5}
							/>
							<NumberControl
									label={__( 'Letter Spacing', 'neve' )}
									step={0.1}
									default={this.controlParams.letter_spacing_default[this.state.currentDevice]}
									onChange={(val) => {
										let value = this.state.letterSpacing;
										value[this.state.currentDevice] = val;
										this.setState( { letterSpacing: value } );
										this.updateValues();
									}}
									onReset={() => {
										let value = this.state.letterSpacing;
										value[this.state.currentDevice] = this.controlParams.letter_spacing_default[this.state.currentDevice];
										this.setState( { letterSpacing: value } );
										this.updateValues();
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

	updateValues() {
		setTimeout( () => {
		this.props.control.setting.set( {
			textTransform: this.state.textTransform,
			fontWeight: this.state.fontWeight,
			fontSize: {...this.state.fontSize},
			lineHeight: {...this.state.lineHeight},
			letterSpacing: {...this.state.letterSpacing},
			flag: ! this.state.flag
		} );
		}, 10 );
	}
}

TypefaceComponent.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default TypefaceComponent;
