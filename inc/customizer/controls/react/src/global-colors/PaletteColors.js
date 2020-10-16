import Accordion from './Accordion';
import { withSelect, withDispatch } from '@wordpress/data';
import { Button, Icon } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { __, sprintf } from '@wordpress/i18n';
import ColorControl from '../common/ColorControl.js';

const PaletteColors = ( {
	palette,
	defaults,
	activePalette,
	palettes,
	updatePalettes,
} ) => {
	const { colors, customColors, isDeleteable } = palette;

	const labelMap = {
		primaryAccent: __( 'Primary Accent', 'neve' ),
		secondaryAccent: __( 'Secondary Accent', 'neve' ),
		siteBackground: __( 'Site Background', 'neve' ),
		lightBackground: __( 'Light Background', 'neve' ),
		darkBackground: __( 'Dark Background', 'neve' ),
		textColor: __( 'Text Color', 'neve' ),
		textDarkBackground: __( 'Text Dark Background', 'neve' ),
	};

	const defaultPaletteColors = {
		...defaults.palettes[ activePalette ].colors,
	};

	const updateColorInPalette = ( colorSlug, val ) => {
		const newPalettes = { ...palettes };
		newPalettes[ activePalette ].colors[ colorSlug ] = val;
		updatePalettes( newPalettes );
	};

	const updateCustomColorInPalette = ( colorIndex, val ) => {
		const newPalettes = { ...palettes };
		newPalettes[ activePalette ].customColors[ colorIndex ] = val;
		updatePalettes( newPalettes );
	};

	const addNewCustomColor = () => {
		const newPalettes = { ...palettes };
		newPalettes[ activePalette ].customColors.push( '#ffffff' );
		updatePalettes( newPalettes );
	};

	const deleteCustomColor = ( index ) => {
		const newPalettes = { ...palettes };
		newPalettes[ activePalette ].customColors.splice( index, 1 );
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
							key={ slug }
							label={ labelMap[ slug ] }
							selectedColor={ colors[ slug ] }
							defaultValue={
								defaults.palettes[ activePalette ][ slug ]
							}
							onChange={ ( value ) => {
								updateColorInPalette( slug, value );
							} }
						/>
					);
				} ) }
				<hr />
				{ customColors &&
					customColors.map( ( color, index ) => {
						return (
							<ColorControl
								deletable={ true }
								onDelete={ () => {
									deleteCustomColor( index );
								} }
								label={ sprintf(
									/* translators: %d index of custom color [1,2,3...] */
									__( 'My custom color %d', 'neve' ),
									index + 1
								) }
								key={ index }
								selectedColor={
									customColors[ index ] || '#FFFFFF'
								}
								onChange={ ( value ) =>
									updateCustomColorInPalette( index, value )
								}
							/>
						);
					} ) }
				<Button
					isLink
					className="add-custom-color"
					disabled={ palette.customColors.length > 7 }
					onClick={ addNewCustomColor }
				>
					{ __( 'Add a global color' ) } <Icon icon="plus-alt" />
				</Button>
				{ ! isDeleteable && (
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
	withDispatch( ( dispatch, props ) => {
		const { updatePalettes } = dispatch( 'neve-global-colors' );

		return {
			updatePalettes,
		};
	} )
)( PaletteColors );
