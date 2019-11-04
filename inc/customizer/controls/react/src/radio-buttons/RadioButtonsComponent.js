/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import RadioIcons from "../common/RadioIcons";

const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;

class RadioButtonsComponent extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			value: props.control.setting.get()
		};
		this.choices = props.control.params.choices;
	}

	render() {
		return (
			<div className="neve-white-background-control">
				{this.props.control.params.label &&
				<span className="customize-control-title">{this.props.control.params.label}</span>}
				<RadioIcons
					value={this.state.value}
					options={this.choices}
					onChange={( value ) => {
						this.setState( { value } );
						this.props.control.setting.set( value );
					}}/>
			</div>
		);
	}
}

RadioButtonsComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default RadioButtonsComponent;
