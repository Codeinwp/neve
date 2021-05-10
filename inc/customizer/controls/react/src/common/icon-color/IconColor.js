import ColorControl from '../ColorControl';

const IconColor = ({ label }) => {
	return (
		<div className="nv-repeater--field">
			<ColorControl
				defaultValue=""
				label={label}
				onChange={function noRefCheck() {}}
				selectedColor="#f00"
			/>
		</div>
	);
};

export default IconColor;
