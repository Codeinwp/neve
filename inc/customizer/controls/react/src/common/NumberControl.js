import PropTypes from 'prop-types';
import SizingControl from '../common/Sizing.js';

const { __ } = wp.i18n;
const {
	ButtonGroup,
	Button
} = wp.components;
const { Component, Fragment } = wp.element;

class NumberControl extends Component {

	constructor(props) {
		super( props );
	}

	render() {
		let { label, units, value } = this.props;
		return (
				<div className="neve-number-control-wrap">
					<div className="header">
						{label && <span className="customize-control-title">{label}</span>}
						{
							units && <div className="neve-units inline">
								<ButtonGroup className="units">
									{this.getButtons()}
								</ButtonGroup>
							</div>
						}
					</div>
					<SizingControl
							noLinking
							noRange
							options={[{ 'value': value }]}
							onChange={( value ) => { this.props.onChange( value ); }}
							max={this.props.max || 100}
							min={this.props.min || 0}
							step={this.props.step || 1}
							onReset={() => {
								this.props.onReset();
							}}
					/>
				</div>
		);
	}

	getButtons() {
		let { units } = this.props;
		if ( !units ) return '';
		let buttons = [],
				self = this;
		units.map( function(type) {
			buttons.push(
					<Button
							isDefault
							className={self.props.activeUnit === type ? 'is-active' : ''}
							onClick={() => {
								self.props.onUnitChange( type );
							}}
					>
						{type}
					</Button> );
		} );

		return buttons;
	}
}

NumberControl.propTypes = {
	label: PropTypes.string,
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	units: PropTypes.array || PropTypes.bool,
	onUnitChange: PropTypes.func,
	activeUnit: PropTypes.string,
	max: PropTypes.number,
	min: PropTypes.number,
	step: PropTypes.number,
};

export default NumberControl;
