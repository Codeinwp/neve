/* jshint esversion: 6 */

import PropTypes from 'prop-types';
import RadioIcons from '../common/RadioIcons';
import ResponsiveControl from '../common/Responsive';

import { useState, useEffect } from '@wordpress/element';

const ResponsiveRadioButtonsComponent = ( { control } ) => {
	const { choices, label } = control.params;
	const [ value, setValue ] = useState( control.setting.get() );
	const [ device, setDevice ] = useState( 'desktop' );
	const updateValue = ( newValue ) => {
		setValue( newValue );
		control.setting.set( newValue );
	};

	useEffect( () => {
		const isMenuAlignment =
			control.id.indexOf( 'primary-menu' ) > -1 ||
			control.id.indexOf( 'secondary-menu' ) > -1;
		// Migrate previously string value into responsive.
		if ( typeof value === 'string' ) {
			setValue( {
				mobile: isMenuAlignment ? 'left' : value,
				tablet: isMenuAlignment ? 'left' : value,
				desktop: value,
			} );
		}

		document.addEventListener( 'neve-changed-customizer-value', ( e ) => {
			if ( ! e.detail ) return false;
			if ( e.detail.id !== control.id ) return false;

			let recievedValue = e.detail.value;

			// Migrate previously string value into responsive.
			if ( typeof recievedValue === 'string' ) {
				recievedValue = {
					mobile: isMenuAlignment ? 'left' : recievedValue,
					tablet: isMenuAlignment ? 'left' : recievedValue,
					desktop: recievedValue,
				};
				updateValue( recievedValue );
			}
		} );
	}, [] );

	return (
		<div className="neve-white-background-control">
			<div className="neve-control-header">
				{ label && (
					<span className="customize-control-title">{ label }</span>
				) }
				<ResponsiveControl
					onChange={ ( device ) => setDevice( device ) }
				/>
			</div>
			<RadioIcons
				value={ value[ device ] }
				options={ choices }
				onChange={ ( newVal ) => {
					updateValue( {
						...value,
						[ device ]: newVal,
					} );
				} }
			/>
		</div>
	);
};

ResponsiveRadioButtonsComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ResponsiveRadioButtonsComponent;
