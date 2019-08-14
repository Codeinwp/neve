import PropTypes from 'prop-types';
import NeveColorPicker from '../common/NeveColorPicker.js';

const ALLOWED_MEDIA_TYPES = ['audio'];
const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;
const {
	MediaUpload,
	MediaUploadCheck
} = wp.blockEditor;
const {
	MediaPlaceholder
} = wp.editor;
const {
	Button,
	ButtonGroup,
	RangeControl
} = wp.components;

class BackgroundComponent extends Component {
	constructor(props) {
		props.control.focus();
		super( props );
		let value = props.control.setting.get();
		this.state = {
			type: value.type || 'color',
			imageUrl: value.imageUrl || '',
			focusPoint: value.focusPoint || [50, 50],
			colorValue: value.colorValue || '',
			overlayColorValue: value.overlayColorValue || '',
			overlayOpacity: value.overlayOpacity || 50
		};
	}

	getButtons() {
		let types = ['color', 'image'],
				labels = { 'color': __( 'Color' ), 'image': __( 'Image' ) },
				buttons = [],
				currentVals = this.state,
				self = this;
		types.map( function(type) {
			buttons.push(
					<Button
							isPrimary={currentVals.type === type}
							isDefault={currentVals.type !== type}
							onClick={() => {
								self.setState( { type } );
								self.updateSetting();
							}}
					>
						{labels[type]}
					</Button> );
		} );

		return buttons;
	}

	render() {
		let self = this;
		return (
				<Fragment>
					<ButtonGroup className="neve-background-type-control">
						{this.getButtons()}
					</ButtonGroup>
					{this.state.type === 'color' &&
					<NeveColorPicker
							label={__( 'Background Color' )}
							colorChangeCallback={(value) => {
								self.setState( { colorValue: value.hex } );
								self.updateSetting();
							}}
							colorValue={this.state.colorValue}/>
					}
					{this.state.type === 'image' &&
					<Fragment>
						<MediaPlaceholder
								icon="format-image"
								labels={ {
									title: __( 'Background Image' ),
									name: __( 'an image' )
								} }
								onSelect={ (e) => {
									console.log(e)
								} }
								accept="image/*"
								allowedTypes={ ['image'] }
						/>
						<NeveColorPicker
								label={__( 'Overlay Color' )}
								colorChangeCallback={(value) => {
									self.setState( { overlayColorValue: value.hex } );
									self.updateSetting();
								}}
								colorValue={this.state.overlayColorValue}/>
						<RangeControl
								label={__( 'Overlay Opacity' )}
								value={this.state.overlayOpacity}
								onChange={(overlayOpacity) => {
									this.setState( { overlayOpacity } );
									this.updateSetting();
								}}
								min="0"
								max="100"
						/>
					</Fragment>
					}
				</Fragment>
		);
	}

	updateSetting() {
		this.props.control.setting.set( {
			type: this.state.type,
			imageUrl: this.state.imageUrl,
			focusPoint: this.state.focusPoint,
			colorValue: this.state.colorValue,
			overlayColorValue: this.state.overlayColorValue,
			overlayOpacity: this.state.overlayOpacity
		} );
	}
}

BackgroundComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default BackgroundComponent;
