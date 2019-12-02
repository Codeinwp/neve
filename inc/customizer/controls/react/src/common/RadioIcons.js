/* jshint esversion: 6 */
import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const {
	Component
} = wp.element;

const {
	ButtonGroup,
	Toolbar,
} = wp.components;

class RadioIcons extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			value: 'none'
		};
	}

	render() {
		return (
			<div className="neve-radio-icons">
				<ButtonGroup className="buttons">
					{this.getButtons()}
				</ButtonGroup>
			</div>
		);
	}

	getButtons() {
		let types = this.props.options,
			self = this;

		let controls = Object.keys( types ).map( ( type ) => {
			return {
				title: types[type].tooltip,
				icon: types[type].icon,
				isActive: self.props.value === type,
				onClick: () => {
					self.props.onChange( type );
				}
			}
		} )

		return <Toolbar controls={controls}/>;
	}
}

RadioIcons.propTypes = {
	options: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export default RadioIcons;
