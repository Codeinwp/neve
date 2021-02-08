/* global NeveProReactCustomize */

const ControlWithLink = ({ link, children }) => {
	if (typeof NeveProReactCustomize !== 'undefined') {
		const { whiteLabel } = NeveProReactCustomize;

		if (whiteLabel) {
			return children;
		}
	}

	const handleFocus = () => {
		wp.customize[link.focus[0]](link.focus[1]).focus();
	};

	const Link = () => {
		if (link.focus) {
			return (
				<a href="#" onClick={handleFocus}>
					{link.string}
				</a>
			);
		}

		return <a href={link.url}>{link.string}</a>;
	};

	return (
		<>
			{children}
			{link && (
				<p className="neve-customizer-link">
					<Link />
				</p>
			)}
		</>
	);
};

export default ControlWithLink;
