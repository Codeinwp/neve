import { useState } from '@wordpress/element';

const TextInput = ({ label, type, val, updateTitle, index }) => {
	const [inputValue, setInputValue] = useState(val);

	const onChangeInput = (e) => {
		setInputValue(e.target.value);
		updateTitle(index, e.target.value, type, label);
	};

	return (
		<div className="field-repeat">
			{/* eslint-disable-next-line jsx-a11y/label-has-for */}
			<label className="customize-control-title">{label}</label>
			<input type={type} value={inputValue} onChange={onChangeInput} />
		</div>
	);
};

export default TextInput;
