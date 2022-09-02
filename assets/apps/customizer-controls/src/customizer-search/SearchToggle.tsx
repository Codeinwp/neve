import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Search Toggle.
 *
 * @class
 */
const SearchToggle: React.FC = () => {
	/**
	 * Trigger toggle event.
	 *
	 * @return {void}
	 */
	const searchToggle = () => {
		document.dispatchEvent(
			new window.CustomEvent('nv-customizer-search-toggle', {
				detail: {},
			})
		);
	};

	return (
		<>
			<Button
				icon="search"
				iconSize={28}
				isSmall
				isLink
				label={__('Search', 'neve') + ' ' + __('Toggle', 'neve')}
				onClick={searchToggle}
			>
				<span className="screen-reader-text">
					{__('Search', 'neve')}
				</span>
			</Button>
		</>
	);
};

export default SearchToggle;
