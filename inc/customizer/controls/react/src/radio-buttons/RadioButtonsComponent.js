/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import RadioIcons from '../common/RadioIcons';
import SVG from '../common/svg.js';
import classnames from 'classnames';

const { __ } = wp.i18n;
const {
	Component
} = wp.element;

class RadioButtonsComponent extends Component {
	constructor(props) {
		super( props );
		this.state = {
			value: props.control.setting.get()
		};
		this.getChoices = this.getChoices.bind( this );
	}

	getChoices() {
		if ( this.props.control.params.is_for === 'logo' ) {
			return {
				default: {
					tooltip: __( 'Logo Only', 'neve' ),
					icon: SVG.logoOnly
				},
				logoTitle: {
					tooltip: __( 'Logo - Title & Tagline', 'neve' ),
					icon: SVG.logoTitle
				},
				titleLogo: {
					tooltip: __( 'Title & Tagline - Logo', 'neve' ),
					icon: SVG.titleLogo
				},
				logoTopTitle: {
					tooltip: __( 'Logo on Top', 'neve' ),
					icon: SVG.logoTopTitle
				}
			};
		}

		return this.props.control.params.choices;
	}

	render() {
		const wrapClasses = classnames( [
			'neve-white-background-control',
			{ 'large-buttons': this.props.control.params.large_buttons === true }] );
		return (
				<div className={wrapClasses}>
					{this.props.control.params.label &&
					<span
							className="customize-control-title">{this.props.control.params.label}</span>}
					<RadioIcons
							value={this.state.value}
							options={this.getChoices()}
							onChange={(value) => {
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
