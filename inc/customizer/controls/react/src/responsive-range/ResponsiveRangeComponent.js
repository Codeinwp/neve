/* jshint esversion: 6 */

import PropTypes from 'prop-types';
import classnames from 'classnames';
import ResponsiveControl from '../common/Responsive';
import { maybeParseJson, getIntValAsResponsive } from '../common/common';

import { RangeControl, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { mapValues } from 'lodash';

const ResponsiveRangeComponent = ( { control } ) => {
	const parsedValue = maybeParseJson( control.setting.get() );
	const [ currentDevice, setCurrentDevice ] = useState( 'desktop' );
	const [ value, setValue ] = useState( parsedValue );

	useEffect( () => {
		// If a value is int, make it responsive.
		const responsiveConverted = getIntValAsResponsive(
			control.setting.get()
		);
		if ( value !== responsiveConverted ) {
			setValue( responsiveConverted );
		}
		document.addEventListener( 'neve-changed-customizer-value', ( e ) => {
			if ( ! e.detail ) return false;
			if ( e.detail.id !== control.id ) return false;
			// Make sure we translate int values to responsive values.
			const incomingValue = getIntValAsResponsive( e.detail.value );

			setValue( maybeParseJson( incomingValue ) );
			control.setting.set( JSON.stringify( incomingValue ) );
		} );
	}, [] );

	const { label } = control.params;
	const {
		hideResponsive,
		units,
		defaultVal,
		step,
		min,
		max,
	} = control.params.input_attrs;

	const unitButtons = () => {
		if ( ! units ) {
			return null;
		}

		if ( units.length === 1 ) {
			return (
				<Button isSmall disabled className="active alone">
					{ units[ 0 ] }
				</Button>
			);
		}

		return units.map( ( unit, index ) => {
			const buttonClass = classnames( {
				active: value[ self.state.currentDevice + '-unit' ] === unit,
			} );
			return (
				<Button
					key={ index }
					isSmall
					className={ buttonClass }
					onClick={ () => {
						const nextValue = { ...value };
						nextValue[ currentDevice + '-unit' ] = unit;
						if ( unit !== 'em' ) {
							nextValue[ currentDevice ] = mapValues(
								nextValue[ currentDevice ],
								( value ) =>
									value ? parseInt( value ) : value
							);
						}
						setValue( nextValue );
						control.setting.set( nextValue );
					} }
				>
					{ unit }
				</Button>
			);
		} );
	};

	const controlHeader = () => {
		return (
			<div className="neve-control-header">
				{ label && (
					<span className="customize-control-title">{ label }</span>
				) }
				<ResponsiveControl
					onChange={ ( device ) => setCurrentDevice( device ) }
					hideResponsive={ hideResponsive || false }
				/>
				<div className="neve-units">{ unitButtons() }</div>
			</div>
		);
	};

	const updateValues = ( newValue ) => {
		const nextValue = { ...value };
		nextValue[ currentDevice ] = newValue;
		setValue( nextValue );
		control.setting.set( JSON.stringify( nextValue ) );
	};

	let displayValue = parseInt( value[ currentDevice ] );
	displayValue = displayValue === 0 ? 0 : displayValue || '';

	return (
		<div className="neve-white-background-control neve-range-control">
			{ controlHeader() }
			<div className="range-wrap">
				<RangeControl
					resetFallbackValue={ defaultVal[ currentDevice ] }
					value={ displayValue }
					min={ min < 0 ? min : 0 }
					max={ max || 100 }
					step={ step || 1 }
					allowReset
					onChange={ ( nextValue ) => {
						updateValues( nextValue );
					} }
				/>
			</div>
		</div>
	);
};

ResponsiveRangeComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ResponsiveRangeComponent;
