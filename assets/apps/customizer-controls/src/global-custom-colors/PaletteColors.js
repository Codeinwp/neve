import { Button, Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { debounce } from 'lodash';
import { Accordion, ColorControl } from '@neve-wp/components';

const PaletteColors = ({ values, save }) => {
	const addNewColor = () => {
		const nextValues = { ...values };

		const newId = newColorSlot();

		nextValues[`custom-${newId}`] = {
			label: `Custom ${newId}`,
			value: '#fff',
		};

		save(nextValues);
	};

	// Returns available slot number for new custom color (sorts slugs which starts with "custom-")
	const newColorSlot = () => {
		const customSlugs = Object.keys(values).filter((slug) => {
			return slug.substring(0, 7) === 'custom-';
		});

		customSlugs.sort();

		const lastSlug = customSlugs.at(-1);
		const lastSlugNo = lastSlug.substring(7);
		return parseInt(lastSlugNo) + 1;
	};

	const updateColorInPalette = (colorSlug, label, val) => {
		const nextValues = { ...values };
		if (nextValues[colorSlug].value === val) {
			return false;
		}
		nextValues[colorSlug].label = label;
		nextValues[colorSlug].value = val;
		save(nextValues);
	};

	return (
		<>
			<Accordion label={__('Custom Colors', 'neve')}>
				<div className="color-array-wrap">
					{Object.keys(values).map((slug) => {
						if (slug === 'flag') {
							return null;
						}

						return (
							<ColorControl
								disableGlobal
								key={slug}
								label={values[slug].label}
								selectedColor={values[slug].value}
								onChange={debounce((value) => {
									updateColorInPalette(
										slug,
										values[slug].label,
										value
									);
								}, 100)}
							/>
						);
					})}
					<Button
						className="new-custom-color"
						onClick={() => {
							addNewColor();
						}}
						variant="secondary"
					>
						{__('Add Custom Color', 'neve')}
						<Dashicon icon="plus-alt2" />
					</Button>
				</div>
			</Accordion>
		</>
	);
};
export default PaletteColors;
