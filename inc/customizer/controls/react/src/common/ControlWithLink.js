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
				<a href="#link-select" onClick={handleFocus}>
					{link.string}
				</a>
			);
		}

		return <a href={link.url}>{link.string}</a>;
	};

	const Description = () => {
		if (link.description) {
			return link.description + ' ';
		}
		return '';
	};

	return (
		<>
			{children}
			{link && link.description && <hr />}
			{link && (
				<p className="neve-customizer-link">
					<Description />
					<Link />
				</p>
			)}
		</>
	);
};

export default ControlWithLink;
