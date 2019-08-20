/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import NeveColorPicker from '../common/NeveColorPicker.js';

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
	ToggleControl
} = wp.components;

class BackgroundComponent extends Component {
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
		let self = this;
		return (
				<Fragment>
					{this.props.control.params.label && <span
							class="customize-control-title">{this.props.control.params.label}</span>}
					<div className="control--top-toolbar">
						<ButtonGroup className="neve-background-type-control">
							{this.getButtons()}
						</ButtonGroup>
					</div>
					<div className="control--body">
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
							{!this.state.imageUrl && <MediaPlaceholder
									icon="format-image"
									labels={{
										title: __( 'Image' ),
										instructions: __(
												'Select from the Media Library or upload a new image' )
									}}
									onSelect={(imageData) => {
										this.setState( { imageUrl: imageData.url } );
										this.updateSetting();
									}}
									allowedTypes={['image']}
							/> ||
							<Fragment>
								<Button
										className="remove-image"
										isDestructive
										isLink
										onClick={() => {
											this.setState( { imageUrl: '' } );
											this.updateSetting();
										}}>
									<Dashicon icon="no"/>
									Remove Image</Button>
								<FocalPointPicker
										url={this.state.imageUrl}
										value={this.state.focusPoint}
										onChange={(val) => {
											this.setState( {
												focusPoint: {
													x: parseFloat( val.x ).toFixed( 2 ),
													y: parseFloat( val.y ).toFixed( 2 )
												}
											} );
											this.updateSetting();
										}}/>
							</Fragment>}
							<ToggleControl
									label={__( 'Fixed Background' )}
									checked={this.state.fixed}
									onChange={(fixed) => {
										this.setState( { fixed: fixed } );
										this.updateSetting();
									}}
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

BackgroundComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default BackgroundComponent;
