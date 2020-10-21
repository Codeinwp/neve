import { Dropdown, Button, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import CustomPalette from './CustomPalette';
import classnames from 'classnames';

const GlobalColorsPicker = ( {
	colors,
	customColors,
	onChange,
	activeColor,
	isGlobal,
} ) => {
	const buttonClasses = classnames( [
		'global-color-picker',
		{ active: isGlobal },
	] );

	return (
		<Dropdown
			renderToggle={ ( { isOpen, onToggle } ) => (
				<Button
					onClick={ onToggle }
					aria-expanded={ isOpen }
					role="button"
					className={ buttonClasses }
					icon="admin-site-alt3"
				/>
			) }
			renderContent={ () => (
				<>
					<CustomPalette
						onChange={ onChange }
						colors={ colors }
						title={ __( 'Global Colors', 'neve' ) }
						activeColor={ activeColor }
					/>
					<CustomPalette
						disableShortcut
						onChange={ onChange }
						colors={ customColors }
						activeColor={ activeColor }
					/>
				</>
			) }
		/>
	);
};

export default withSelect( ( select ) => {
	const { getPalettes, getActivePalette } = select( 'neve-global-colors' );
	const palettes = getPalettes();
	const active = getActivePalette();
	const activeNow = palettes[ active ];

	return {
		colors: activeNow.colors,
		customColors: activeNow.customColors,
	};
} )( GlobalColorsPicker );
