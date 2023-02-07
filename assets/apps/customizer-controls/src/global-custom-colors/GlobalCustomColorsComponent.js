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
		const cssTag = document.querySelector(
			'#nv-custom-color-vars-inline-css'
		);
		let style = ':root{';
		Object.keys(nextValue).map((slug) => {
			if (slug !== 'flag') {
				style += `--${slug}:${nextValue[slug].val};`;
			}
			return false;
		});
		style += '}';
		cssTag.innerHTML = style;
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
