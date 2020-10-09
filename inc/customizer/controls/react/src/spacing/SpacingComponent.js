/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ResponsiveControl from '../common/Responsive.js';
import SizingControl from '../common/Sizing.js';
import { mergeDeep } from '../common/common';

import { Component } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { mapValues } from 'lodash';

class SpacingComponent extends Component {
	constructor( props ) {
		super( props );

		const defaultParams = {
			min: -300,
			max: 300,
			hideResponsiveButtons: false,
			units: [ 'px', 'em', '%' ],
		};

		this.controlParams = props.control.params.input_attrs
			? {
					...defaultParams,
					...props.control.params.input_attrs,
			  }
			: defaultParams;

		const baseDefault = {
			mobile: { top: 0, right: 0, bottom: 0, left: 0 },
			tablet: { top: 0, right: 0, bottom: 0, left: 0 },
			desktop: { top: 0, right: 0, bottom: 0, left: 0 },
			'mobile-unit': 'px',
			'tablet-unit': 'px',
			'desktop-unit': 'px',
		};
		this.defaultValue = props.control.params.default
			? {
					...baseDefault,
					...props.control.params.default,
			  }
			: baseDefault;

		const dbVal = props.control.setting.get();
		const value = mergeDeep( this.defaultValue, dbVal );

		this.state = {
			value,
			linked: true,
			currentDevice: 'desktop',
		};

		if ( ! this.shouldValuesBeLinked() ) {
			this.state.linked = false;
		}

		this.shouldValuesBeLinked = this.shouldValuesBeLinked.bind( this );
		this.getButtons = this.getButtons.bind( this );
		this.updateValue = this.updateValue.bind( this );
		this.setValue = this.setValue.bind( this );
	}

	render() {
		const options = [
			{
				type: 'top',
				value: this.state.value[ this.state.currentDevice ].top,
			},
			{
				type: 'right',
				value: this.state.value[ this.state.currentDevice ].right,
			},
			{
				type: 'bottom',
				value: this.state.value[ this.state.currentDevice ].bottom,
			},
			{
				type: 'left',
				value: this.state.value[ this.state.currentDevice ].left,
			},
		];
		const { hideResponsiveButtons } = this.controlParams;

		const wrapClasses = classnames( [
			'neve-white-background-control',
			'neve-sizing',
		] );

		return (
			<div className={ wrapClasses }>
				<div className="neve-control-header">
					{ this.props.control.params.label && (
						<span className="customize-control-title">
							{ this.props.control.params.label }
						</span>
					) }
					<ResponsiveControl
						hideResponsive={ hideResponsiveButtons }
						onChange={ ( currentDevice ) => {
							this.setState( { currentDevice } );
							this.setState( {
								linked: this.shouldValuesBeLinked(),
							} );
						} }
					/>
					<div className="neve-units">{ this.getButtons() }</div>
				</div>
				<SizingControl
					min={ this.controlParams.min }
					max={ this.controlParams.max }
					step={
						this.state.value[
							this.state.currentDevice + '-unit'
						] === 'em'
							? 0.1
							: 1
					}
					options={ options }
					defaults={ this.defaultValue[ this.state.currentDevice ] }
					linked={ this.state.linked }
					onLinked={ () =>
						this.setState( { linked: ! this.state.linked } )
					}
					onChange={ ( optionType, numericValue ) => {
						this.setValue( optionType, numericValue );
					} }
					onReset={ () => {
						this.setState( { value: this.defaultValue } );
						this.props.control.setting.set( this.defaultValue );
					} }
				/>
			</div>
		);
	}

	getButtons() {
		const self = this;
		const { units } = this.controlParams;

		if ( units.length === 1 ) {
			return (
				<Button isSmall disabled className="active alone">
					{ units[ 0 ] }
				</Button>
			);
		}
		return units.map( ( unit, index ) => {
			const buttonClass = classnames( {
				active:
					self.state.value[ self.state.currentDevice + '-unit' ] ===
					unit,
			} );
			return (
				<Button
					key={ index }
					isSmall
					className={ buttonClass }
					onClick={ () => {
						const value = { ...self.state.value };
						value[ self.state.currentDevice + '-unit' ] = unit;
						if ( unit !== 'em' ) {
							value[
								self.state.currentDevice
							] = mapValues(
								value[ self.state.currentDevice ],
								( value ) =>
									value ? parseInt( value ) : value
							);
						}
						self.setState( { value } );
						self.props.control.setting.set( value );
					} }
				>
					{ unit }
				</Button>
			);
		} );
	}

	setValue( optionType, numericValue ) {
		const value = { ...this.state.value };
		if ( this.state.linked ) {
			value[ this.state.currentDevice ] = mapValues(
				value[ this.state.currentDevice ],
				() => numericValue
			);
		} else {
			value[ this.state.currentDevice ] = {
				...value[ this.state.currentDevice ],
				[ optionType ]: numericValue,
			};
		}

		this.updateValue( value );
	}

	updateValue( value ) {
		this.setState( { value } );
		this.props.control.setting.set( value );
	}

	shouldValuesBeLinked() {
		const values = [
			this.state.value[ this.state.currentDevice ].top,
			this.state.value[ this.state.currentDevice ].right,
			this.state.value[ this.state.currentDevice ].bottom,
			this.state.value[ this.state.currentDevice ].left,
		];
		// eslint-disable-next-line eqeqeq
		return values.every( ( value ) => value == values[ 0 ] );
	}

	componentDidMount() {
		const { control } = this.props;

		document.addEventListener( 'neve-changed-customizer-value', ( e ) => {
			if ( ! e.detail ) return false;
			if ( e.detail.id !== control.id ) return false;

			this.updateValue( e.detail.value || this.defaultValue );
		} );
	}
}

SpacingComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default SpacingComponent;
