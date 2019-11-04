/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import ResponsiveControl from '../common/Responsive.js';
import SizingControl from '../common/Sizing.js';

const { __ } = wp.i18n;
const {
	Component,
} = wp.element;
const {
	Toolbar,
} = wp.components;
const {
	mapValues
} = lodash;

class SpacingComponent extends Component {
	constructor(props) {
		super( props );
		let value = props.control.setting.get();
		this.state = {
			value,
			linked: true,
			currentDevice: 'desktop'
		};

		if ( !this.shouldValuesBeLinked() ) {
			this.state.linked = false;
		}

		let defaultParams = {
			min: -300,
			max: 300,
			hideResponsiveButtons: false
		};

		this.controlParams = props.control.params.input_attrs ? {
			...defaultParams,
			...props.control.params.input_attrs
		} : defaultParams;

		let baseDefault = {
			'mobile': { 'top': 0, 'right': 0, 'bottom': 0, 'left': 0 },
			'tablet': { 'top': 0, 'right': 0, 'bottom': 0, 'left': 0 },
			'desktop': { 'top': 0, 'right': 0, 'bottom': 0, 'left': 0 },
			'mobile-unit': 'px',
			'tablet-unit': 'px',
			'desktop-unit': 'px'
		};
		this.defaultValue = props.control.params.default ? {
			...baseDefault,
			...props.control.params.default
		} : baseDefault;
	}

	render() {

		let options = [
			{
				'type': 'top',
				'value': this.state.value[this.state.currentDevice]['top']
			},
			{
				'type': 'right',
				'value': this.state.value[this.state.currentDevice]['right']
			},
			{
				'type': 'bottom',
				'value': this.state.value[this.state.currentDevice]['bottom']
			},
			{
				'type': 'left',
				'value': this.state.value[this.state.currentDevice]['left']
			}
		];

		return (
				<div className="neve-white-background-control">
					<div className="neve-control-header">
						{this.props.control.params.label &&
						<span className="customize-control-title">{this.props.control.params.label}</span>}
						<div className="neve-units inline">
							{this.getButtons()}
						</div>
					</div>
					<ResponsiveControl
							hideResponsive={this.controlParams.hideResponsiveButtons}
							onChange={(currentDevice) => {
								this.setState( { currentDevice } );
								this.setState( { linked: this.shouldValuesBeLinked() } );
							}}
					>
						<SizingControl
								min={this.controlParams.min}
								max={this.controlParams.max}
								step={this.state.value[this.state.currentDevice + '-unit'] ===
								'em' ? 0.1 : 1}
								options={options}
								defaults={ this.defaultValue[this.state.currentDevice] }
								linked={this.state.linked}
								onLinked={() => this.setState( { linked: !this.state.linked } )}
								onChange={(optionType, numericValue) => {
									this.updateValues( optionType, numericValue );
								}}
								onReset={() => {
									this.setState( { value: this.defaultValue } );
									this.props.control.setting.set( this.defaultValue );
								}}
						/>
					</ResponsiveControl>
				</div>
		);
	}

	getButtons() {
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
			</svg>,
			'%': <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<g>
					<path
						d="M9.1,7.7c0,0.8-0.2,1.5-0.6,1.9s-1,0.7-1.7,0.7S5.4,10.1,5,9.7S4.3,8.6,4.3,7.7S4.5,6.3,5,5.8s1-0.7,1.7-0.7     S8,5.4,8.4,5.8S9.1,6.9,9.1,7.7z M7.5,7.7c0-0.5-0.1-0.8-0.2-1C7.1,6.5,6.9,6.4,6.7,6.4c-0.3,0-0.5,0.1-0.6,0.3s-0.2,0.5-0.2,1     s0.1,0.8,0.2,1C6.2,9,6.4,9.1,6.7,9.1c0.2,0,0.5-0.1,0.6-0.3C7.5,8.5,7.5,8.2,7.5,7.7z M11.7,5.4h1.9l-5.2,9.3H6.4L11.7,5.4z      M15.7,12.3c0,0.8-0.2,1.5-0.6,1.9c-0.4,0.4-1,0.7-1.7,0.7s-1.3-0.2-1.7-0.7s-0.6-1.1-0.6-1.9c0-0.8,0.2-1.5,0.6-1.9     c0.4-0.4,1-0.7,1.7-0.7s1.3,0.2,1.7,0.7C15.5,10.8,15.7,11.4,15.7,12.3z M14.2,12.3c0-0.5-0.1-0.8-0.2-1     c-0.2-0.2-0.4-0.3-0.6-0.3c-0.3,0-0.5,0.1-0.6,0.3c-0.2,0.2-0.2,0.5-0.2,1s0.1,0.8,0.2,1s0.4,0.3,0.6,0.3c0.2,0,0.5-0.1,0.6-0.3     C14.1,13,14.2,12.7,14.2,12.3z"/>
				</g>
			</svg>
		}
		let self = this;
		let controls = ['px', 'em', '%'].map( ( unit ) => {
			return {
				title: unit,
				icon: svg[ unit ],
				isActive: self.state.value[ self.state.currentDevice + '-unit' ] === unit,
				onClick: () => {
					let value = { ...self.state.value };
					value[ self.state.currentDevice + '-unit' ] = unit;
					if ( unit !== 'em' ) {
						value[ self.state.currentDevice ] = mapValues(
							value[ self.state.currentDevice ],
							( value ) => value ? parseInt( value ) : value );
					}
					self.setState( { value } );
					self.props.control.setting.set( value );
				}
			}
		} )
		return <Toolbar controls={controls} className="units"/>;
	}

	updateValues(optionType, numericValue) {
		let value = { ...this.state.value };
		if ( this.state.linked ) {
			value[this.state.currentDevice] = mapValues(
					value[this.state.currentDevice], () => numericValue );
		} else {
			value[this.state.currentDevice] = {
				...value[this.state.currentDevice],
				[optionType]: numericValue
			};
		}

		this.setState( { value } );
		this.props.control.setting.set( value );
	}

	shouldValuesBeLinked() {
		let values = [
			this.state.value[this.state.currentDevice]['top'],
			this.state.value[this.state.currentDevice]['right'],
			this.state.value[this.state.currentDevice]['bottom'],
			this.state.value[this.state.currentDevice]['left']
		];

		return values.every( value => value === values[0] );
	}
}

SpacingComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default SpacingComponent;
