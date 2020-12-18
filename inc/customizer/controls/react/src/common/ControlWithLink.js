/* global NeveProReactCustomize */

const ControlWithLink = ( { link, children } ) => {
	if ( typeof NeveProReactCustomize !== 'undefined' ) {
		const { whiteLabel } = NeveProReactCustomize;

		if ( whiteLabel ) {
			return children;
		}
	}

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
