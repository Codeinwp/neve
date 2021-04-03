const IconColor = ({ title }) => {
	return (
		<div className="nv-repeater--field">
			<label>{title}</label>
			<div className="nv--color-picker">
				<div className="wp-picker-container">
					<button type="button" className="button wp-color-result">
						<span>Select Color</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default IconColor;
