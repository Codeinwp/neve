import GlobalCustomColors from './GlobalCustomColors';
import { useState } from '@wordpress/element';

const GlobalColorsComponent = ({ control }) => {
	const { label, defaultValues } = control.params;
	const [values, setValues] = useState({ ...control.setting.get() });

	const save = (nextValue) => {
		//State
		setValues(nextValue);

		// //Customize
		if (nextValue.flag) {
			delete nextValue.flag;
		} else {
			nextValue.flag = true;
		}
		control.setting.set(nextValue);

		//CSS Tag Update
		let customColors = ':root{';
		Object.keys(nextValue).map((slug) => {
			if (slug !== 'flag') {
				customColors += `--${slug}:${nextValue[slug].val};`;
			}
			return false;
		});
		customColors += '}';

		let styleElement = document.getElementById('nv-custom-colors-vars');
		// Check if the CSS already exists
		if (styleElement) {
			styleElement.innerHTML = customColors;
		} else {
			// If the CSS doesn't exist, create a new style element and add it to the head
			styleElement = document.createElement('style');
			styleElement.id = 'nv-custom-colors-vars';
			styleElement.innerHTML = customColors;
			document.head.appendChild(styleElement);
		}
	};

	return (
		<GlobalCustomColors
			onChange={save}
			currentValue={values}
			label={label}
			defaultValues={defaultValues}
		/>
	);
};

export default GlobalColorsComponent;
