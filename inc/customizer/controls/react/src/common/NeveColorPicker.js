/* jshint esversion: 6 */
import PropTypes from 'prop-types';

const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;
const {
	Button,
	Dashicon,
	ColorPicker,
	Popover
} = wp.components;

class NeveColorPicker extends Component {
	constructor(props) {
		super( props );
		this.state = {
			popoverOpen: false,
			buttonColor: this.props.colorValue
		};
	}

	render() {
		let self = this;
		let buttonStyle = {
			backgroundColor: this.state.buttonColor
		};
		return (
				<Fragment>
					<div className="neve-colorpicker-wrap">
						{this.props.label && <label>{this.props.label}</label>}
						<Button
								style={buttonStyle}
								className="neve-open-popover"
								isDefault
								onClick={(e) => {
									this.setState( { popoverOpen: true } );
								}}
						>
							{this.state.popoverOpen &&
							<Popover onClickOutside={(e) => {
								this.setState( { popoverOpen: false } );
							}}>
								<ColorPicker
										disableAlpha
										onFocusOutside={() => false}
										color={this.state.buttonColor}
										onChangeComplete={(value) => {
											this.setState( { buttonColor: value.hex } );
											self.props.colorChangeCallback( value );
										}}
								/>
								<Button
										isLink
										onClick={(e) => {
											e.stopPropagation();
											self.setState( { popoverOpen: false } );
										}}
								>
									<Dashicon icon="yes"/>
									{__( 'Done' )}
								</Button>
							</Popover>
							}
						</Button>
					</div>
				</Fragment>
		);
	}
}

NeveColorPicker.propTypes = {
	colorChangeCallback: PropTypes.func.isRequired,
	colorValue: PropTypes.string.isRequired,
	label: PropTypes.string
};

export default NeveColorPicker;
