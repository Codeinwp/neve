/* global NeveProReactCustomize */

import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components'
import {externalLinkIcon} from '../../../../../admin/metabox/src/helpers/icons'

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
			{link.new_tab ? <><span className="screen-reader-text">{ __( '(opens in a new tab)', 'neve') }</span><Icon icon={externalLinkIcon}/></> : ''}
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
