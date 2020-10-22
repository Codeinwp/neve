import Accordion from './Accordion';
import { withSelect, withDispatch } from '@wordpress/data';
import { Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { debounce } from 'lodash';
import ColorControl from '../common/ColorControl.js';

const PaletteColors = ( {
	palette,
	defaults,
	activePalette,
	palettes,
	updatePalettes,
} ) => {
	const { colors, allowDeletion } = palette;

	const labelMap = {
		'primary-accent': __( 'Primary Accent', 'neve' ),
		'secondary-accent': __( 'Secondary Accent', 'neve' ),
		'site-bg': __( 'Site Background', 'neve' ),
		'light-bg': __( 'Light Background', 'neve' ),
		'dark-bg': __( 'Dark Background', 'neve' ),
		'text-color': __( 'Text Color', 'neve' ),
		'text-dark-bg': __( 'Text Dark Background', 'neve' ),
		'custom-color-1': __( 'Custom Color 1', 'neve' ),
		'custom-color-2': __( 'Custom Color 2', 'neve' ),
	};

	const defaultColors = defaults.palettes[ activePalette ]
		? {
				...defaults.palettes[ activePalette ].colors,
		  }
		: {};

	const updateColorInPalette = ( colorSlug, val ) => {
		const newPalettes = { ...palettes };
		newPalettes[ activePalette ].colors[ colorSlug ] = val;
		updatePalettes( newPalettes );
	};

	const resetPalette = () => {
		const newPalettes = { ...palettes };
		newPalettes[ activePalette ].colors = defaultColors;
		updatePalettes( newPalettes );
	};

	const paletteHasDefaultColors =
		Object.keys( defaultColors ).filter( ( colorKey ) => {
			return defaultColors[ colorKey ] !== colors[ colorKey ];
		} ).length < 1;

	return (
		<Accordion>
			<div className="color-array-wrap">
				{ Object.keys( labelMap ).map( ( slug ) => {
					return (
						<Fragment key={ slug }>
							{ slug === 'custom-color-1' && <hr /> }
							<ColorControl
								disableGlobal
								key={ slug }
								label={ labelMap[ slug ] }
								selectedColor={ colors[ slug ] }
								defaultValue={
									defaults.palettes[ activePalette ]
										? defaults.palettes[ activePalette ]
												.colors[ slug ]
										: '#FFFFFF'
								}
								onChange={ debounce( ( value ) => {
									updateColorInPalette( slug, value );
								}, 100 ) }
							/>
						</Fragment>
					);
				} ) }
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
