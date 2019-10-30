/* jshint esversion: 6 */
import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const {
	Component
} = wp.element;

const {
	ButtonGroup,
	Button,
	Dashicon,
	Tooltip
} = wp.components;

class TextTransform extends Component {
	constructor(props) {
		super( props );
		this.state = {
			value: 'none'
		};
	}

	render() {
		return (
				<div className="neve-text-transform">
				<span className="customize-control-title">
					{__( 'Text Transform', 'neve' )}
				</span>
					<ButtonGroup className="buttons">
						{this.getButtons()}
					</ButtonGroup>
				</div>
		);
	}

	getButtons() {
		let types = {
					none: {
						label: 'none',
						tooltip: __( 'None', 'neve' )
					},
					capitalize: {
						label: 'Aa',
						tooltip: __( 'Capitalize', 'neve' )
					},
					lowercase: {
						label: 'aa',
						tooltip: __( 'Lowercase', 'neve' )
					},
					uppercase: {
						label: 'AA',
						tooltip: __( 'Uppercase', 'neve' )
					}
				},
				buttons = [],
				self = this;
		Object.keys( types ).map( function(type) {
			buttons.push(
					<Tooltip text={types[type].tooltip}>
						<Button
								isDefault
								className={self.props.value === type ? 'is-active' : ''}
								onClick={() => {
									self.props.onChange( type );
								}}
						>
							{type === 'none' && <Dashicon icon="no"/> || types[type].label}
						</Button>
					</Tooltip>
			);
		} );

		return buttons;
	}
}

TextTransform.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export default TextTransform;
