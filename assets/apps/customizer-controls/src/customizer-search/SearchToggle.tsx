import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Type SearchToggleProps
 */
type SearchToggleProps = {
	onToggle: () => void;
};

/**
 * Search Toggle.
 *
 * @param {SearchToggleProps} SearchToggleProps
 * @class
 */
const SearchToggle: React.FC<SearchToggleProps> = ({ onToggle }) => {
	return (
		<>
			<Button
				icon="search"
				iconSize={28}
				isSmall
				isLink
				label={__('Search', 'neve') + ' ' + __('Toggle', 'neve')}
				onClick={onToggle}
			>
				<span className="screen-reader-text">
					{__('Search', 'neve')}
				</span>
			</Button>
		</>
	);
};

export default SearchToggle;
