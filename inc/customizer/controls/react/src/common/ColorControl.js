import PropTypes from 'prop-types';

import { ColorPicker, Button, Dropdown } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ColorControl = ( { label, selectedColor, onChange, defaultValue } ) => {
	let toggle = null;

	const handleChange = ( value ) => {
		const { r, g, b, a } = value.rgb;
		if ( a < 1 ) {
			onChange( `rgba(${ r }, ${ g }, ${ b }, ${ a })` );
			return false;
		}
		onChange( value.hex );
	};

	const handleClear = () => {
		onChange( defaultValue || '' );
		toggle();
	};

	return (
		<div className="neve-control-header neve-color-component">
			{ label && (
				<span className="customize-control-title">{ label }</span>
			) }

			<Dropdown
				renderToggle={ ( { isOpen, onToggle } ) => {
					toggle = onToggle;
					return (
						<Button
							isSecondary
							onClick={ onToggle }
							aria-expanded={ isOpen }
						>
							<span
								className="color"
								style={ { backgroundColor: selectedColor } }
							/>
							<span className="gradient" />
						</Button>
					);
				} }
				renderContent={ () => (
					<>
						<a href="#" />
						<ColorPicker
							color={ selectedColor }
							onChangeComplete={ handleChange }
						/>
						{ selectedColor && (
							<Button
								className="clear"
								isPrimary
								onClick={ handleClear }
							>
								{ __( 'Clear', 'neve' ) }
							</Button>
						) }
					</>
				) }
			/>
		</div>
	);
};

ColorControl.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	selectedColor: PropTypes.string.isRequired,
	defaultValue: PropTypes.string,
};

export default ColorControl;
