import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const {
	Component
} = wp.element;
const {
	ToggleControl
} = wp.components;

class ToggleComponent extends Component {
	constructor(props) {
		super( props );
		this.state = {
			value: props.control.setting.get()
		};
	}

	toggleValue(newValue) {
		this.setState( {
			value: newValue
		} );
		this.props.control.setting.set( newValue );
	}

	render() {
		return (
				<ToggleControl
						label={__( 'A customizer toggle' )}
						checked={this.state.value}
						onChange={(value) => this.toggleValue( value )}
				/>
		);
	}
}

ToggleComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default ToggleComponent;
