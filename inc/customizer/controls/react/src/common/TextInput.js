import { useState } from '@wordpress/element';

const TextInput = ({ label, type, val, updateTitle }) => {
	const [inputValue, setInputValue] = useState(val);

	const onChangeInput = (e) => {
		setInputValue(e.target.value);
		updateTitle(e.target.value);
	};

	return (
		<div className="nv-text-input">
			{/* eslint-disable-next-line jsx-a11y/label-has-for */}
			<label className="customize-control-title">{label}</label>
			<input
				type={type}
				value={inputValue}
				onChange={(e) => onChangeInput(e)}
			/>
		</div>
	);
};

export default TextInput;
