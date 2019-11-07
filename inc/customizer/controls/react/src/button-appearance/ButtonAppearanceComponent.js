/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import RadioIcons from '../common/RadioIcons.js';

const { __ } = wp.i18n;
const {
	Component,
	Fragment,
} = wp.element;

const { RangeControl, ColorPalette, Panel, PanelBody, PanelRow } = wp.components;

class ButtonAppearanceComponent extends Component {
	constructor(props) {
		super( props );
		let value = props.control.setting.get();
		this.state = {
			type: value.type,
			background: value.background || '#333',
			backgroundHover: value.backgroundHover || '#333',
			text: value.text || '#fff',
			textHover: value.textHover || '#fff',
			borderRadius: value.borderRadius || 3,
			borderWidth: value.borderWidth || 1
		};
	}

	getBorderControls() {
		return (
				<Fragment>
					<span className="customize-control-title">{__( 'Border', 'neve' )}</span>
					<div className="range-control">
						<span>{__('Radius', 'neve')}</span>
						<RangeControl
								value={this.state.borderRadius}
								initialPosition={this.state.borderRadius}
								beforeIcon="minus"
								afterIcon="plus"
								min={0}
								max={50}
								step={1}
								onChange={
									(e) => this.setState( { borderRadius: e } )
								}
						/>
					</div>
					{this.state.type === 'outline' && <div className="range-control">
						<span>{__('Width', 'neve')}</span>
						<RangeControl
								value={this.state.borderWidth}
								initialPosition={this.state.borderWidth}
								beforeIcon="minus"
								afterIcon="plus"
								min={1}
								max={20}
								step={1}
								onChange={
									(e) => this.setState( { borderWidth: e } )
								}
						/>
					</div>}
				</Fragment>
		);
	}

	getColors() {
		const settings = {
					background: {
						label: __( 'Normal', 'neve' ),
						controls: {
							background: __( 'Background', 'neve' ),
							text: __( 'Text', 'neve' )
						}
					},
					text: {
						label: __( 'Hover', 'neve' ),
						controls: {
							backgroundHover: __( 'Background', 'neve' ),
							textHover: __( 'Text', 'neve' )
						}
					}
				},
				palette = [
					{ name: 'black', color: '#000000' },
					{ name: 'white', color: '#ffffff' },
					{ name: 'red', color: '#cc433c' },
					{ name: 'orange', color: '#d39b48' },
					{ name: 'green', color: '#95d45a' },
					{ name: 'blue', color: '#3972b8' }
				],
				self = this;

		let panels = (
				<Fragment>
					<span className="customize-control-title">
						{__( 'Color settings', 'neve' )}
					</span>
					<Panel>
						{
							Object.keys( settings ).map( (type) => {
								return (
										<PanelBody
												title={settings[type].label}
												initialOpen={false}
										>
											{
												Object.keys( settings[type].controls ).
														map( (controlSlug) => {
															return (
																	<Fragment>
																		<PanelRow>
																			<span>{settings[type].controls[controlSlug]}</span>
																		</PanelRow>
																		<PanelRow>
																			<ColorPalette
																					colors={palette}
																					value={self.state[controlSlug]}
																					onChange={(value) => {
																						self.setState(
																								{ [controlSlug]: value } );
																					}}
																			/>
																			<div
																					className="neve-color-preview"
																					style={{ backgroundColor: self.state[controlSlug] }}>
																			</div>
																		</PanelRow>
																	</Fragment>
															);
														} )
											}
										</PanelBody>
								);
							} )
						}
					</Panel>
				</Fragment>
		);
		return ( panels );
	}

	render() {
		const types = {
			fill: {
				label: 'fill',
				tooltip: __( 'Filled', 'neve' ),
				icon: 'star-filled'
			},
			outline: {
				label: 'outline',
				tooltip: __( 'Outline', 'neve' ),
				icon: 'star-empty'
			}
		};

		return (
				<div className="neve-button-appearance-control">
					{this.props.control.params.label &&
					<span
							className="customize-control-title">
						{this.props.control.params.label}
					</span>}
					<div className="neve-white-background-control">
						<span className="customize-control-title">{
							__( 'Button Style', 'neve' )
						}</span>
						<RadioIcons options={types} onChange={(type) => {
							this.setState( { type } );
						}} value={this.state.type}/>
						{this.getBorderControls()}
						{this.getColors()}
					</div>
				</div>
		);
	}
}

ButtonAppearanceComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default ButtonAppearanceComponent;
