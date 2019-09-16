/* jshint esversion: 6 */
import PropTypes from 'prop-types';

import GoogleFontsControl from './GoogleFontsControl.js';

const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;
const {
	MediaPlaceholder
} = wp.editor;

const {
	Button,
	ButtonGroup,
	RangeControl,
	FocalPointPicker,
	Dashicon,
	ColorPalette,
	ToggleControl
} = wp.components;

class TypefaceComponent extends Component {
	constructor(props) {
		super( props );
		let value = props.control.setting.get();
		this.state = {
			type: value.type || 'color',
			imageUrl: value.imageUrl || '',
			focusPoint: value.focusPoint || { x: 0.5, y: 0.5 },
			colorValue: value.colorValue || '#ffffff',
			overlayColorValue: value.overlayColorValue || '#000000',
			overlayOpacity: value.overlayOpacity || 50,
			fixed: value.fixed || false
		};
	}

	getButtons() {
		let types = ['color', 'image'],
				labels = { 'color': __( 'Color' ), 'image': __( 'Image' ) },
				buttons = [],
				self = this;
		types.map( function(type) {
			buttons.push(
					<Button
							isPrimary={self.state.type === type}
							isDefault={self.state.type !== type}
							onClick={(e) => {
								self.setState( { type: type } );
								self.updateSetting();
							}}
					>
						{labels[type]}
					</Button> );
		} );

		return buttons;
	}

	render() {
		return (
				<Fragment>
					<div className="neve-typeface-control">
						{this.props.control.params.label && <span
								className="customize-control-title">{this.props.control.params.label}</span>}
						<GoogleFontsControl/>
					</div>
				</Fragment>
		);
	}

	updateSetting() {
		setTimeout( () => {
			this.props.control.setting.set( {
				...this.props.control.setting.get(),
				...this.state
			} );
		}, 100 );
	}
}

TypefaceComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default TypefaceComponent;
