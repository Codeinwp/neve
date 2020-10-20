import { useState } from '@wordpress/element';
import { Popover, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import CustomPalette from './CustomPalette';

const GlobalColorsPicker = ( { colors, customColors, onChange } ) => {
	const [ open, setOpen ] = useState( false );

	const closePopover = () => setOpen( false );
	const openPopover = () => setOpen( true );

	return (
		<span
			role="button"
			className="global-color-picker"
			onClick={ openPopover }
		>
			<Icon icon="admin-site-alt3" />
			{ open && (
				<Popover onFocusOutside={ closePopover } position="top center">
					<CustomPalette
						onChange={ onChange }
						colors={ colors }
						title={ __( 'Global Colors', 'neve' ) }
					/>
					<CustomPalette
						onChange={ onChange }
						colors={ customColors }
					/>
				</Popover>
			) }
		</span>
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
