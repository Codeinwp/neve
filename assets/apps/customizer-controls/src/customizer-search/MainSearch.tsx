import { createPortal } from '@wordpress/element';
import React, { useState } from 'react';
import SearchToggle from './SearchToggle';
import SearchComponent from './SearchComponent';

/**
 * Type MainSearchProps
 */
type MainSearchProps = {
	search: HTMLDivElement;
	button: HTMLDivElement;
	results: HTMLDivElement;
};

/**
 * MainSearch Component
 *
 * @param {MainSearchProps} MainSearchProps
 * @class
 */
const MainSearch: React.FC<MainSearchProps> = ({ search, button, results }) => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<>
			{createPortal(
				<SearchToggle
					onToggle={() => {
						setIsOpened(!isOpened);
					}}
				/>,
				button
			)}
			{createPortal(<SearchComponent isOpened={isOpened} />, search)}
			{createPortal(<div id="neve-customize-search-results" />, results)}
		</>
	);
};

export default MainSearch;
