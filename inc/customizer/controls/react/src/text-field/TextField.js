const TextField = ({ title, label }) => {
	return (
		<div className="nv-repeater--field">
			<label>{label}</label>
			<input
				type="text"
				className="nv-repeater-text-field has-value"
				value={title}
			/>
		</div>
	);
};

export default TextField;
