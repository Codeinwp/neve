import Accordion from './Accordion';
import { withSelect, withDispatch } from '@wordpress/data';
import { Button, Icon } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { __, sprintf } from '@wordpress/i18n';
import { uniqueId } from 'lodash';
import ColorControl from '../common/ColorControl.js';

const PaletteColors = ( {
	palette,
	defaults,
	activePalette,
	palettes,
	updatePalettes,
} ) => {
	const { colors, customColors, allowDeletion } = palette;

	const labelMap = {
		'primary-accent': __( 'Primary Accent', 'neve' ),
		'secondary-accent': __( 'Secondary Accent', 'neve' ),
		'site-bg': __( 'Site Background', 'neve' ),
		'light-bg': __( 'Light Background', 'neve' ),
		'dark-bg': __( 'Dark Background', 'neve' ),
		'text-color': __( 'Text Color', 'neve' ),
		'text-dark-bg': __( 'Text Dark Background', 'neve' ),
	};

	const defaultPaletteColors = defaults.palettes[ activePalette ]
		? {
				...defaults.palettes[ activePalette ].colors,
		  }
		: {};

	const updateColorInPalette = ( colorSlug, val ) => {
		const newPalettes = { ...palettes };
		newPalettes[ activePalette ].colors[ colorSlug ] = val;
		updatePalettes( newPalettes );
	};

	const updateCustomColorInPalette = ( id, val ) => {
		const newPalettes = { ...palettes };
		newPalettes[ activePalette ].customColors[ id ] = val;
		updatePalettes( newPalettes );
	};

	const addNewCustomColor = () => {
		const newPalettes = { ...palettes };
		const id = uniqueId( 'color-' );
		newPalettes[ activePalette ].customColors = {
			...newPalettes[ activePalette ].customColors,
			[ id ]: '#ffffff',
		};
		updatePalettes( newPalettes );
	};

	const deleteCustomColor = ( id ) => {
		const newPalettes = { ...palettes };
		delete newPalettes[ activePalette ].customColors[ id ];
		updatePalettes( newPalettes );
	};

	const resetPalette = () => {
		const newPalettes = { ...palettes };
		newPalettes[ activePalette ].colors = defaultPaletteColors;
		updatePalettes( newPalettes );
	};

	const paletteHasDefaultColors =
		Object.keys( defaultPaletteColors ).filter( ( colorKey ) => {
			return defaultPaletteColors[ colorKey ] !== colors[ colorKey ];
		} ).length < 1;

	return (
		<Accordion>
			<div className="color-array-wrap">
				{ Object.keys( labelMap ).map( ( slug ) => {
					return (
						<ColorControl
							disableGlobal
							key={ slug }
							label={ labelMap[ slug ] }
							selectedColor={ colors[ slug ] }
							defaultValue={
								defaults.palettes[ activePalette ]
									? defaults.palettes[ activePalette ][ slug ]
									: '#FFFFFF'
							}
							onChange={ ( value ) => {
								updateColorInPalette( slug, value );
							} }
						/>
					);
				} ) }
				<hr />
				{ customColors &&
					Object.keys( customColors ).map( ( id, index ) => {
						return (
							<ColorControl
								disableGlobal
								deletable={ true }
								onDelete={ () => {
									deleteCustomColor( id );
								} }
								label={ sprintf(
									/* translators: %d index of custom color [1,2,3...] */
									__( 'My custom color %d', 'neve' ),
									index + 1
								) }
								key={ index }
								selectedColor={
									customColors[ id ] || '#FFFFFF'
								}
								onChange={ ( value ) =>
									updateCustomColorInPalette( id, value )
								}
							/>
						);
					} ) }
				<Button
					isLink
					className="add-custom-color"
					disabled={ Object.keys( palette.customColors ).length > 7 }
					onClick={ addNewCustomColor }
				>
					{ __( 'Add a global color' ) } <Icon icon="plus-alt" />
				</Button>
				{ ! allowDeletion && (
					<>
						<hr />
						<Button
							isLink
							className="reset-palette"
							onClick={ resetPalette }
							disabled={ paletteHasDefaultColors }
							icon="image-rotate"
						>
							{ __( 'Reset all to default', 'neve' ) }
						</Button>
					</>
				) }
			</div>
		</Accordion>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getPalettes, getActivePalette } = select(
			'neve-global-colors'
		);

		const activePalette = getActivePalette();
		const palettes = getPalettes();

		return {
			palette: palettes[ activePalette ],
			palettes,
			activePalette,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { updatePalettes } = dispatch( 'neve-global-colors' );

		return {
			updatePalettes,
		};
	} )
)( PaletteColors );
