import { Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { rotateLeft } from '@wordpress/icons';
import { debounce } from 'lodash';
import {
	Accordion,
	globalPaletteColors,
	ColorControl,
} from '@neve-wp/components';

const PaletteColors = ({ values, defaults, save }) => {
	const { palettes, activePalette } = values;
	const palette = palettes[activePalette];
	const { colors, allowDeletion } = palette;

	const defaultColors = defaults.palettes[activePalette]
		? {
				...defaults.palettes[activePalette].colors,
		  }
		: {};

	const updateColorInPalette = (colorSlug, val) => {
		const nextValues = { ...values };
		if (nextValues.palettes[activePalette].colors[colorSlug] === val) {
			return false;
		}
		nextValues.palettes[activePalette].colors[colorSlug] = val;
		save(nextValues);
	};

	const resetPalette = () => {
		const nextValues = { ...values };
		nextValues.palettes[activePalette].colors = defaultColors;
		save(nextValues);
	};

	const paletteHasDefaultColors =
		Object.keys(defaultColors).filter((colorKey) => {
			return defaultColors[colorKey] !== colors[colorKey];
		}).length < 1;

	return (
		<Accordion label={__('Palette Colors', 'neve')}>
			<div className="color-array-wrap">
				{globalPaletteColors.map((group, index) => {
					return (
						<Fragment key={activePalette + '_' + index}>
							{index > 0 && <hr />}
							{Object.keys(group).map((slug) => {
								return (
									<ColorControl
										disableGlobal
										key={slug}
										label={group[slug]}
										selectedColor={colors[slug]}
										defaultValue={
											defaults.palettes[activePalette]
												? defaults.palettes[
														activePalette
												  ].colors[slug]
												: '#FFFFFF'
										}
										onChange={debounce((value) => {
											updateColorInPalette(slug, value);
										}, 100)}
									/>
								);
							})}
						</Fragment>
					);
				})}
				{!allowDeletion && (
					<>
						<hr />
						<Button
							isLink
							className="reset-palette"
							onClick={resetPalette}
							disabled={paletteHasDefaultColors}
							icon={rotateLeft}
						>
							{__('Reset all to default', 'neve')}
						</Button>
					</>
				)}
			</div>
		</Accordion>
	);
};
export default PaletteColors;
