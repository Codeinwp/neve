import { useEffect, useState } from '@wordpress/element';
import { fontVariantMap as variantMap } from '../common/common';
import MultiSelect from '../multiselect/MultiSelect';
import { __ } from '@wordpress/i18n';

export function VariantSelector({ setting, fontFamily }) {
	const { fontVariants } = window.NeveReactCustomize;
	const [value, setValue] = useState(setting() || []);

	const updateValues = (nextValues) => {
		setValue(nextValues);
		setting.set(nextValues);
	};

	useEffect(() => {
		if (!fontVariants[fontFamily]) {
			return;
		}

		const variants = [...fontVariants[fontFamily]];
		const nextValue = value.filter((selectedVariant) =>
			variants.includes(selectedVariant)
		);

		updateValues(nextValue);
	}, [fontFamily]);

	if (!fontVariants[fontFamily]) {
		return null;
	}

	if (fontVariants[fontFamily].length < 1) {
		return null;
	}

	const variants = [...fontVariants[fontFamily]];
	const options = {};

	variants.forEach((variant) => {
		variant = variant.toString();
		options[variant] = variantMap[variant];
	});

	return (
		<MultiSelect
			label={__('Additional Font Variants', 'neve')}
			choices={options}
			currentValue={value}
			onChange={updateValues}
		/>
	);
}

//TODO: proptypes
VariantSelector.propTypes = {};
