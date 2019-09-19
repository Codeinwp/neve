/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import ResponsiveControl from '../common/Responsive.js';
import SizingControl from '../common/Sizing.js';

const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;
const {
	ButtonGroup,
	Button,
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
				<Fragment>
					<ResponsiveControl
							controlLabel={this.props.control.params.label}
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
								linked={this.state.linked}
								onLinked={() => this.setState( { linked: !this.state.linked } )}
								onChange={(optionType, numericValue) => {
									this.updateValues( optionType, numericValue );
								}}
								onReset={() => {
									let devices = ['mobile', 'desktop', 'tablet'];
									let value = { ...this.state.value };
									devices.map( (device) => {
										value[device] = mapValues( value[device], () => '' );
									} );
									this.setState( { value } );
									this.props.control.setting.set( value );
								}}
						/>
						<div className="neve-units">
							<ButtonGroup className="units">
								{this.getButtons()}
							</ButtonGroup>
						</div>
					</ResponsiveControl>
				</Fragment>
		);
	}

	getButtons() {
		let types = ['px', 'em', '%'],
				buttons = [],
				self = this;
		types.map( function(type) {
			buttons.push(
					<Button
							isDefault
							className={self.state.value[self.state.currentDevice +
							'-unit'] === type ? 'is-active' : ''}
							onClick={() => {
								let value = { ...self.state.value };
								value[self.state.currentDevice + '-unit'] = type;
								if( type !== 'em') {
									value[self.state.currentDevice] = mapValues(
											value[self.state.currentDevice],
											(value) => value ? parseInt( value ) : value );
								}
								self.setState( { value } );
								self.props.control.setting.set( value );
							}}
					>
						{type}
					</Button> );
		} );

		return buttons;
	}

	updateValues(optionType, numericValue) {
		let value = { ...this.state.value };
		numericValue = numericValue === 0 ? 0 : numericValue || '';
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
