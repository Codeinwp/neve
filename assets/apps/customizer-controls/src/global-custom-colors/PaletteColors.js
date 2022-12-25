// import { Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { debounce } from 'lodash';
import { Accordion, ColorControl } from '@neve-wp/components';

const PaletteColors = ({ values, defaults, save }) => {
	const { palettes } = values;
	const ACTIVE_PALETTE = 'customColors';
	const palette = palettes[ACTIVE_PALETTE];
	const { colors } = palette;

	// TODO: replace with the real data
	const REGISTERED_CUSTOM_COLORS = [
		{
			'nv-custom-1': __('Custom Color #1', 'neve'),
			'nv-custom-2': __('Custom Color #2', 'neve'),
		},
	];

	const updateColorInPalette = (colorSlug, val) => {
		const nextValues = { ...values };
		if (nextValues.palettes[ACTIVE_PALETTE].colors[colorSlug] === val) {
			return false;
		}
		nextValues.palettes[ACTIVE_PALETTE].colors[colorSlug] = val;
		save(nextValues);
	};

	return (
		<Accordion label={__('Custom Colors', 'neve')}>
			<div className="color-array-wrap">
				{REGISTERED_CUSTOM_COLORS.map((group, index) => {
					return (
						<Fragment key={ACTIVE_PALETTE + '_' + index}>
							{index > 0 && <hr />}
							{Object.keys(group).map((slug) => {
								return (
									<ColorControl
										disableGlobal
										key={slug}
										label={group[slug]}
										selectedColor={colors[slug]}
										defaultValue={
											defaults.palettes[ACTIVE_PALETTE]
												? defaults.palettes[
														ACTIVE_PALETTE
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
			</div>
		</Accordion>
	);
};
export default PaletteColors;
