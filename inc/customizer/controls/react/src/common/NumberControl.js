import PropTypes from 'prop-types';
import SizingControl from '../common/Sizing.js';
import SVG from '../common/svg.js';

const { __ } = wp.i18n;
const {
	ToolbarButton,
	Toolbar
} = wp.components;
const { Component } = wp.element;

class NumberControl extends Component {

	constructor(props) {
		super( props );
	}

	render() {
		let { label, units, value, className } = this.props;
		return (
				<div className={className + ' neve-number-control-wrap'}>
					<div className="neve-control-header">
						{label && <span className="customize-control-title">{label}</span>}
						{
							units && <div className="neve-units inline">
								{this.getButtons()}
							</div>
						}
					</div>
					<SizingControl
							noLinking
							noRange
							options={[{ 'value': value }]}
							onChange={(type, value) => {
								this.props.onChange( value );
							}}
							max={this.props.max || 100}
							min={this.props.min || 0}
							step={this.props.step || 1}
							defaults={this.props.default}
							onReset={() => {
								this.props.onReset();
							}}
					/>
				</div>
		);
	}

	getButtons() {
		let self = this;
		let svg = {
			px: SVG.px,
			em: SVG.em
		};
		let { units } = this.props;
		if ( !units ) return '';
		if ( units.length === 1 ) {
			return <ToolbarButton className="is-active is-single" isActive isDisabled
					icon={svg[units[0]]}/>;
		}
		let controls = units.map( (unit) => {
			return {
				title: unit,
				icon: svg[unit],
				isActive: self.props.activeUnit === unit,
				onClick: () => {
					self.props.onUnitChange( unit );
				}
			};
		} );
		return <Toolbar controls={controls} className="units"/>;
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
	default: PropTypes.number,
	max: PropTypes.number,
	min: PropTypes.number,
	step: PropTypes.number
};

export default NumberControl;
