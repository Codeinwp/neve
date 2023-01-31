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
