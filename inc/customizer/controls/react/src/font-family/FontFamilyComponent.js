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
			fontFamily: value
		};
	}

	render() {
		let self = this;
		return (
				<Fragment>
					<div className="neve-typeface-control">
						<FontFamilySelector
								label={this.props.control.params.label}
								selected={this.state.fontFamily}
								onFontChoice={(fontFamilySource, fontFamily) => {
									self.setState( { fontFamily } );
									self.updateControl( fontFamily );
								}}
						/>
					</div>
				</Fragment>
		);
	}

	updateControl(fontFamily) {
		this.props.control.setting.set( fontFamily );
	}
}

TypefaceComponent.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default TypefaceComponent;
