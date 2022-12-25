// import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { debounce } from 'lodash';
import { Accordion, ColorControl } from '@neve-wp/components';

const PaletteColors = ({ values, save }) => {
	const updateColorInPalette = (colorSlug, val) => {
		const nextValues = { ...values };
		if (nextValues[colorSlug].value === val) {
			return false;
		}
		nextValues[colorSlug].value = val;
		save(nextValues);
	};

	return (
		<Accordion label={__('Custom Colors', 'neve')}>
			<div className="color-array-wrap">
				{Object.keys(values).map((slug) => {
					return (
						<ColorControl
							disableGlobal
							key={slug}
							label={values[slug].label}
							selectedColor={values[slug].value}
							onChange={debounce((value) => {
								updateColorInPalette(slug, value);
							}, 100)}
						/>
					);
				})}
			</div>
		</Accordion>
	);
};
export default PaletteColors;
