/* jshint esversion: 6 */
import PropTypes from 'prop-types';

import FontFamilySelector from './FontFamilySelector.js';
import ResponsiveControl from '../common/Responsive.js';
import TextTransform from './TextTransform.js';
import NumberControl from '../common/NumberControl.js';

const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;

const {
	Button,
	ButtonGroup,
	SelectControl
} = wp.components;

class TypefaceComponent extends Component {
	constructor(props) {
		super( props );

		let value = props.control.setting.get();

		console.log( value );

		this.state = {
			currentDevice: 'desktop',
			// fontFamilySource: '',
			fontFamily: value.fontFamily,
			fontSize: value.fontSize,
			lineHeight: value.lineHeight,
			fontWeight: value.fontWeight,
			textTransform: value.textTransform
		};
	}

	render() {
		let self = this;
		// console.log( this.state );
		return (
				<Fragment>
					{this.props.control.params.label &&
					<span className="customize-control-title">
							{this.props.control.params.label}
						</span>}
					<div className="neve-typeface-control">
						<FontFamilySelector
								selected={this.state.fontFamily}
								selectedType={this.state.fontFamilySource}
								onFontChoice={(fontFamilySource, fontFamily) => {
									self.setState( { fontFamilySource, fontFamily } );
								}}
						/>

						<TextTransform
								onChange={(textTransform) => {
									this.setState( { textTransform } );
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
								onChange={(fontWeight) => this.setState( { fontWeight } )}
						/>
						<ResponsiveControl
								onChange={(currentDevice) => this.setState(
										{ currentDevice } )}>
							<NumberControl
									label={__( 'Font Size', 'neve' )}
									onChange={(val) => {
										let value = self.state.fontSize;
										value[self.state.currentDevice] = val;
										self.setState( { fontSize: value } );
										console.log( val );
									}}
									onReset={() => {
										console.log( 'reset' );
									}}
									value={this.state.fontSize[this.state.currentDevice]}
									units={['px', 'em']}
									activeUnit={this.state.fontSize.suffix[this.state.currentDevice]}
									onUnitChange={(val) => {
										let value = self.state.fontSize;
										value.suffix[self.state.currentDevice] = val;
										self.setState( { fontSize: value } );
									}}
							/>
							<NumberControl
									label={__( 'Line Height', 'neve' )}
									onChange={(e) => {
										console.log( e );
									}}
									onReset={() => {
										console.log( 'reset' );
									}}
									value="10"
							/>
							<NumberControl
									label={__( 'Letter Spacing', 'neve' )}
									onChange={(e) => {
										console.log( e );
									}}
									onReset={() => {
										console.log( 'reset' );
									}}
									value="10"
							/>
						</ResponsiveControl>
					</div>
				</Fragment>
		);
	}

}

TypefaceComponent.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default TypefaceComponent;
