const Toggle = ({ categoryLabel, label, accordion }) => {
	const expandHeading = (e) => {
		e.currentTarget.parentElement.classList.toggle('expanded');
	};

	return (
		<>
			{categoryLabel && (
				<span className="customize-control-title">{categoryLabel}</span>
			)}
			<div
				className="neve-customizer-heading"
				onClick={expandHeading}
				role="button"
				tabIndex="0"
				onKeyPress={expandHeading}
			>
				<span className="accordion-heading">{label}</span>
				{accordion && <span className="accordion-expand-button"></span>}
			</div>
		</>
	);
};

export default Toggle;
