/* jshint esversion: 6 */
import PropTypes from 'prop-types';

import FontFamilySelector from './FontFamilySelector.js';

const { __ } = wp.i18n;
const {
	Component,
} = wp.element;

class TypefaceComponent extends Component {
	constructor(props) {
		super( props );
		this.state = {
			fontFamily: '',
			fontFamilySource: ''
		};
	}

	render() {
		let self = this;
		return (
				<div className="neve-typeface-control">
					<FontFamilySelector
							selected={this.state.fontFamily}
							selectedType={this.state.fontFamilySource}
							onFontChoice={(fontFamilySource, fontFamily) => {
								self.setState( { fontFamilySource, fontFamily } );
								this.props.onChange( this.state );
							}}
					/>
				</div>
		);
	}
}

TypefaceComponent.propTypes = {
	onChange: PropTypes.func.isRequired
};

export default TypefaceComponent;
