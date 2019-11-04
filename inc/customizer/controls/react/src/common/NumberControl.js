import PropTypes from 'prop-types';
import SizingControl from '../common/Sizing.js';

const { __ } = wp.i18n;
const {
	ToolbarButton,
	Toolbar
} = wp.components;
const { Component } = wp.element;

class NumberControl extends Component {

	constructor( props ) {
		super( props );
	}

	render() {
		let { label, units, value } = this.props;
		return (
			<div className="neve-number-control-wrap">
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
					onChange={( type, value ) => {
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
			px: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<g>
					<path
						d="M10,10.71a5.32,5.32,0,0,1-.2,1.49,3.53,3.53,0,0,1-.59,1.16,2.67,2.67,0,0,1-1,.75,3.1,3.1,0,0,1-1.33.27,3.89,3.89,0,0,1-.78-.08,4,4,0,0,1-.69-.23v2.66h-2V7.42l.62-.15.73-.13.78-.09.76,0a4.48,4.48,0,0,1,1.56.26A3.26,3.26,0,0,1,9,8a3,3,0,0,1,.72,1.16A4.39,4.39,0,0,1,10,10.71Zm-2,.06a2.42,2.42,0,0,0-.42-1.49,1.44,1.44,0,0,0-1.23-.56l-.5,0-.37,0V12.4a1.51,1.51,0,0,0,.49.2,2.1,2.1,0,0,0,.61.09C7.48,12.69,8,12.05,8,10.77Z"/>
					<path
						d="M14.1,9.16l1.41-2h2.06l-2.45,3.43a22.48,22.48,0,0,1,1.5,1.93c.43.64.78,1.2,1.05,1.7H15.52l-.27-.5-.36-.63a3.88,3.88,0,0,0-.42-.56L14,12.13l-.42.39a2.43,2.43,0,0,0-.39.52c-.13.21-.25.42-.37.63s-.23.39-.33.57h-2c.11-.22.26-.48.44-.79s.39-.62.61-.95.46-.64.71-.95.51-.59.76-.86c-.44-.63-.86-1.23-1.27-1.8l-1.2-1.71h2.16Z"/>
				</g>
			</svg>,
			em: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<g>
					<path
						d="M.9,10.72a4.18,4.18,0,0,1,.29-1.64A3.62,3.62,0,0,1,1.94,7.9,3.26,3.26,0,0,1,3,7.19,3.35,3.35,0,0,1,4.28,7a3.14,3.14,0,0,1,2.38.92,3.78,3.78,0,0,1,.87,2.7c0,.12,0,.25,0,.39s0,.26,0,.37H3a1.37,1.37,0,0,0,.58,1,2.34,2.34,0,0,0,1.37.36A6.38,6.38,0,0,0,6,12.57a4.38,4.38,0,0,0,.87-.25l.26,1.62a2.39,2.39,0,0,1-.43.17c-.18.05-.37.1-.59.14l-.71.1c-.25,0-.5,0-.75,0A4.61,4.61,0,0,1,3,14.11a3.25,3.25,0,0,1-1.17-.78,3,3,0,0,1-.68-1.16A4.54,4.54,0,0,1,.9,10.72ZM5.6,10a2.1,2.1,0,0,0-.09-.5A1.37,1.37,0,0,0,5.28,9a1.22,1.22,0,0,0-.39-.31,1.28,1.28,0,0,0-.58-.12,1.43,1.43,0,0,0-.58.11,1.13,1.13,0,0,0-.4.31,1.31,1.31,0,0,0-.25.43A3.18,3.18,0,0,0,3,10Z"/>
					<path
						d="M13,10.45a2.84,2.84,0,0,0-.25-1.37,1,1,0,0,0-.86-.4l-.39,0-.38.05V14.2h-2V7.38c.17,0,.37-.09.6-.14l.73-.14q.38-.06.78-.09L12,7a3.35,3.35,0,0,1,1.25.19,3,3,0,0,1,.78.46,3.79,3.79,0,0,1,1-.48A3.31,3.31,0,0,1,16,7a3.51,3.51,0,0,1,1.39.23,2.07,2.07,0,0,1,.86.67,2.37,2.37,0,0,1,.44,1,5.87,5.87,0,0,1,.13,1.31v4h-2V10.45a2.86,2.86,0,0,0-.24-1.37,1,1,0,0,0-.86-.4,2.13,2.13,0,0,0-.45.08,1.89,1.89,0,0,0-.47.2,3.55,3.55,0,0,1,.12.65c0,.23,0,.48,0,.74V14.2H13Z"/>
				</g>
			</svg>
		}
		let { units } = this.props;
		if ( !units ) return '';
		if ( units.length === 1 ) {
			return <ToolbarButton className="is-active is-single" isActive isDisabled icon={svg[units[ 0 ]]}/>
		}
		let controls = units.map( ( unit ) => {
			return {
				title: unit,
				icon: svg[ unit ],
				isActive: self.props.activeUnit === unit,
				onClick: () => {
					self.props.onUnitChange( unit );
				}
			}
		} )
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
	step: PropTypes.number,
};

export default NumberControl;
