const ControlWithLink = ( { control, children } ) => {
	const attrs = JSON.parse( control.params.input_attrs );
	const link = attrs.link || null;

	return (
		<>
			{ children }
			{ link && (
				<p className="neve-customizer-link">
					<a href={ link.url }>{ link.string }</a>
				</p>
			) }
		</>
	);
};

export default ControlWithLink;
