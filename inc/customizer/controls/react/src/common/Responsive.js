import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;
const {
	Button,
	Dashicon,
	Dropdown,
	IconButton
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
		let { view } = this.state;
		return (
				<Fragment>
					<div className="neve-responsive-control-bar">
						{this.props.controlLabel &&
						<span
								className="customize-control-title">{this.props.controlLabel}</span>
						}
						{!this.props.hideResponsive && <div className="floating-controls">
							<Dropdown
									position="top left"
									renderToggle={({ isOpen, onToggle }) => (
											<IconButton
													icon={'mobile' === view ? 'smartphone' : view}
													label={__( 'Responsiveness Settings', 'neve' )}
													className="is-button"
													onClick={onToggle}
													aria-expanded={isOpen}
											/>
									)}
									renderContent={({ onToggle }) => (
											<div className="neve-devices-dropdown">
												<Button
														className={{ 'is-selected': 'desktop' === view }}
														onClick={() => {
															onToggle();
															this.changeViewType( 'desktop' );
														}}
												>
													<Dashicon icon="desktop"/>
													<span className="popover-title">
											{__( 'Desktop', 'neve' )}
										</span>
												</Button>

												<Button
														className={{ 'is-selected': 'tablet' === view }}
														onClick={() => {
															onToggle();
															this.changeViewType( 'tablet' );
														}}
												>
													<Dashicon icon="tablet"/>
													<span className="popover-title">
											{__( 'Tablet Devices', 'neve' )}
										</span>
												</Button>

												<Button
														className={{ 'is-selected': 'mobile' === view }}
														onClick={() => {
															onToggle();
															this.changeViewType( 'mobile' );
														}}
												>
													<Dashicon icon="smartphone"/>
													<span className="popover-title">
											{__( 'Smartphones', 'neve' )}
										</span>
												</Button>
											</div>
									)}
							/>
						</div> }
					</div>
					{this.props.children}
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
