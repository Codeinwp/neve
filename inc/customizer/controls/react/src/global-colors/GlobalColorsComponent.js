import GlobalColors from './GlobalColors';
import { useState } from '@wordpress/element';

const GlobalColorsComponent = ({ control }) => {
	const { label, defaultValues } = control.params;
	const [values, setValues] = useState({ ...control.setting.get() });

	const save = (nextValue) => {
		//State
		setValues(nextValue);

		//Customize
		if (nextValue.flag) {
			delete nextValue.flag;
		} else {
			nextValue.flag = true;
		}
		control.setting.set(nextValue);

		//CSS Tag Update
		const cssTag = document.querySelector('#nv-css-vars-inline-css');
		const { activePalette, palettes } = nextValue;
		const currentPalette = palettes[activePalette];
		const { colors } = currentPalette;

		let style = ':root{';

		Object.keys(colors).map((slug) => {
			style += `--${slug}:${colors[slug]};`;
			return false;
		});
		style += '}';

		cssTag.innerHTML = style;
	};

	return (
		<GlobalColors
			onChange={save}
			currentValue={values}
			label={label}
			defaultValues={defaultValues}
		/>
	);
};

export default GlobalColorsComponent;
