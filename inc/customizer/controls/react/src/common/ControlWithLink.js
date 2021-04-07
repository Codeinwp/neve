/* global NeveProReactCustomize */

import { __ } from '@wordpress/i18n';

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

		let linkProps = {};
		if ( link.new_tab ) {
			linkProps.target = '_blank';
			linkProps.rel    = 'noopener';
		}

		return <a
			href={link.url}
			{...linkProps}
		>
			{link.new_tab ? <><span className="screen-reader-text">{ __( '(opens in a new tab)', 'neve') }</span><svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" viewBox="0 0 512 512" width="12" height="12" style={{marginRight: '5px'}}><path fill="currentColor" d="M432 320H400a16 16 0 0 0-16 16V448H64V128H208a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48A48 48 0 0 0 0 112V464a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V336A16 16 0 0 0 432 320ZM488 0h-128c-21.4 0-32 25.9-17 41l35.7 35.7L135 320.4a24 24 0 0 0 0 34L157.7 377a24 24 0 0 0 34 0L435.3 133.3 471 169c15 15 41 4.5 41-17V24A24 24 0 0 0 488 0Z"/></svg></> : ''}
			{link.string}
		</a>;
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
