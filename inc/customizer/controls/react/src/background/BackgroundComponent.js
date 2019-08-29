/* jshint esversion: 6 */
import PropTypes from 'prop-types';

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
				labels = {
					'color': __( 'Color', 'neve' ),
					'image': __( 'Image', 'neve' )
				},
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

		const colors = [
			{ name: 'black', color: '#000000' },
			{ name: 'white', color: '#ffffff' },
			{ name: 'red', color: '#cc433c' },
			{ name: 'orange', color: '#d39b48' },
			{ name: 'green', color: '#95d45a' },
			{ name: 'blue', color: '#3972b8' }
		];

		return (
				<Fragment>
					{this.props.control.params.label && <span
							className="customize-control-title">{this.props.control.params.label}</span>}
					<div className="control--top-toolbar">
						<ButtonGroup className="neve-background-type-control">
							{this.getButtons()}
						</ButtonGroup>
					</div>
					<div className="control--body">
						{this.state.type === 'color' &&
						<Fragment><ColorPalette
								colors={colors}
								value={this.state.colorValue}
								onChange={(colorValue) => {
									self.setState( { colorValue } );
									self.updateSetting();
								}}
						/>
							<div
									className="color-preview"
									style={{ backgroundColor: this.state.colorValue }}>
							</div>
						</Fragment>
						}
						{this.state.type === 'image' &&
						<Fragment>
							{!this.state.imageUrl && <MediaPlaceholder
									icon="format-image"
									labels={{
										title: __( 'Image', 'neve' ),
										instructions: __(
												'Select from the Media Library or upload a new image',
												'neve' )
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
									label={__( 'Fixed Background', 'neve' )}
									checked={this.state.fixed}
									onChange={(fixed) => {
										this.setState( { fixed: fixed } );
										this.updateSetting();
									}}
							/>
							<span className="customize-control-title">{
								__( 'Overlay Color', 'neve' )
							}</span>
							<ColorPalette
									colors={colors}
									value={this.state.overlayColorValue}
									onChange={(overlayColorValue) => {
										self.setState( { overlayColorValue } );
										self.updateSetting();
									}}
							/>
							<div
									className="color-preview"
									style={{ backgroundColor: this.state.overlayColorValue }}>
							</div>
							<RangeControl
									label={__( 'Overlay Opacity', 'neve' )}
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
