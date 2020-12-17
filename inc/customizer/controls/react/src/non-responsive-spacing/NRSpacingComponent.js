/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SizingControl from '../common/Sizing.js';

import { useState, useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const NRSpacingComponent = ( { control } ) => {
	const { params = {}, setting } = control;

	const controlParams = {
		min: 0,
		max: 300,
		units: [ 'px', 'em', '%' ],
		label: false,
		defaultVal: { top: 0, right: 0, bottom: 0, left: 0, unit: 'px' },
		...params,
	};

	const { min, max, units, label, defaultVal } = controlParams;
	const [ isLinked, setLinked ] = useState( false );
	const [ value, setValue ] = useState( {
		...defaultVal,
		...setting.get(),
	} );
	const { top, right, bottom, left, unit } = value;

	// Checks if values are linked on rerender.
	useEffect( () => {
		const values = [ top, right, bottom, left ];
		const equal = values.every( ( value ) => value == values[ 0 ] );
		if ( equal ) {
			setLinked( true );
		}
	}, [ value ] );

	// Used for outside value changes.
	useEffect( () => {
		document.addEventListener( 'neve-changed-customizer-value', ( e ) => {
			if ( ! e.detail ) return false;
			if ( e.detail.id !== control.id ) return false;
			this.updateValue( e.detail.value || defaultVal );
		} );
	}, [] );

	const options = [
		{ type: 'top', label: __( 'Top', 'neve' ), value: top },
		{ type: 'right', label: __( 'Right', 'neve' ), value: right },
		{ type: 'bottom', label: __( 'Bottom', 'neve' ), value: bottom },
		{ type: 'left', label: __( 'Left', 'neve' ), value: left },
	];

	const handleLink = () => setLinked( ! isLinked );

	const handleReset = () => {
		setValue( defaultVal );
		setting.set( defaultVal );
	};

	const handleUpdate = ( optionType, numericValue ) => {
		const nextValue = { ...value };
		if ( isLinked ) {
			nextValue.top = numericValue;
			nextValue.bottom = numericValue;
			nextValue.left = numericValue;
			nextValue.right = numericValue;
		} else {
			nextValue[ optionType ] = numericValue;
		}

		setValue( nextValue );
		setting.set( nextValue );
	};

	const handleUnitChange = ( unitType ) => {
		const nextValue = { ...value };
		nextValue.unit = unitType;

		if ( unitType !== 'em' ) {
			nextValue.top = parseInt( nextValue.top );
			nextValue.right = parseInt( nextValue.right );
			nextValue.bottom = parseInt( value.bottom );
			nextValue.left = parseInt( value.left );
		}

		setValue( nextValue );
		setting.set( nextValue );
	};

	const Units = () => {
		if ( units.length === 1 ) {
			return (
				<Button isSmall disabled className="active alone">
					{ units[ 0 ] }
				</Button>
			);
		}

		return units.map( ( unitType, index ) => {
			const buttonClass = classnames( {
				active: unit === unitType,
			} );
			return (
				<Button
					key={ index }
					isSmall
					className={ buttonClass }
					onClick={ () => handleUnitChange( unitType ) }
				>
					{ unitType }
				</Button>
			);
		} );
	};

	const wrapClasses = classnames( [
		'neve-white-background-control',
		'neve-sizing',
	] );

	return (
		<div className={ wrapClasses }>
			<div className="neve-control-header">
				{ label && (
					<span className="customize-control-title">{ label }</span>
				) }
				<div className="neve-units">
					<Units />
				</div>
			</div>
			<SizingControl
				min={ min }
				max={ max }
				step={ unit === 'em' ? 0.1 : 1 }
				options={ options }
				defaults={ defaultVal }
				linked={ isLinked }
				onLinked={ handleLink }
				onChange={ handleUpdate }
				onReset={ handleReset }
			/>
		</div>
	);
};

NRSpacingComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default NRSpacingComponent;
