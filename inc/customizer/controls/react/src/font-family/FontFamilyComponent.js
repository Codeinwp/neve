/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import FontFamilySelector from './FontFamilySelector.js';

const {
	Component,
	Fragment
} = wp.element;

class TypefaceComponent extends Component {
	constructor(props) {
		super( props );
		let value = props.control.setting.get();
		this.state = {
			fontFamily: value,
			fontFamilySource: null
		};
	}

	render() {
		let self = this;
		return (
				<Fragment>
					{this.props.control.params.label &&
					<span className="customize-control-title">
							{this.props.control.params.label}
					</span>
					}
					<div className="neve-typeface-control neve-white-background-control">
						<FontFamilySelector
								selected={this.state.fontFamily}
								onFontChoice={(fontFamilySource, fontFamily) => {
									self.setState( { fontFamily, fontFamilySource } );
									self.updateControl();
								}}
						/>
					</div>
				</Fragment>
		);
	}

	updateControl() {
		setTimeout( () => {
			this.props.control.setting.set( this.state.fontFamily );
			wp.customize.previewer.send( 'font-selection', {
				'value': this.state.fontFamily,
				'source': this.state.fontFamilySource,
				'controlId': this.props.control.id,
				'type': this.props.control.params.type
			} );
		}, 100 );
	}
}

TypefaceComponent.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default TypefaceComponent;
