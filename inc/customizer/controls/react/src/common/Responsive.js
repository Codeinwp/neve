import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;
const {
	Button,
	Dashicon,
	Tooltip,
	ButtonGroup
} = wp.components;

class ResponsiveControl extends Component {
	constructor(props) {
		super( props );
		this.state = {
			view: 'desktop'
		};
		this.linkResponsiveButtons();
	}

	render() {
		let { view } = this.state,
				deviceMap = {
					'desktop': {
						'tooltip': __( 'Desktop', 'neve' ),
						'icon': 'desktop'
					},
					'tablet': {
						'tooltip': __( 'Tablet', 'neve' ),
						'icon': 'tablet'
					},
					'mobile': {
						'tooltip': __( 'Mobile', 'neve' ),
						'icon': 'smartphone'
					}
				};

		let controlClasses = 'neve-responsive-control-bar';
		if ( !this.props.hideResponsive ) {
			controlClasses += ' bordered';
		}
		if ( this.props.hideResponsive ) {
			return ( '' );
		}
		return (
				<Fragment>
					<div className={controlClasses}>
						{this.props.controlLabel && <span
								className="customize-control-title">{this.props.controlLabel}</span>}
						{
							!this.props.hideResponsive &&
							<div className="floating-controls">
								<ButtonGroup>
									{Object.keys( deviceMap ).map( (device) => {
										return (
												<Tooltip text={deviceMap[device].tooltip}>
													<Button
															isTertiary
															className={( device === view ?
																	'active-device ' :
																	'' ) + device}
															onClick={() => {
																let event = new CustomEvent(
																		'neveChangedRepsonsivePreview', {
																			'detail': device
																		} );
																document.dispatchEvent( event );
															}}
													>
														<Dashicon icon={deviceMap[device].icon}/>
													</Button>
												</Tooltip>
										);
									} )}
								</ButtonGroup>
							</div>
						}
					</div>
					<div className="neve-responsive-controls-content">
						{this.props.children}
					</div>
				</Fragment>
		);
	}

	changeViewType(device) {
		this.setState( { view: device } );
		wp.customize.previewedDevice( device );
		this.props.onChange( device );
	}

	linkResponsiveButtons() {
		let self = this;
		document.addEventListener( 'neveChangedRepsonsivePreview', function(e) {
			self.changeViewType( e.detail );
		} );
	}
}

ResponsiveControl.propTypes = {
	onChange: PropTypes.func,
	controlLabel: PropTypes.string
};

export default ResponsiveControl;
