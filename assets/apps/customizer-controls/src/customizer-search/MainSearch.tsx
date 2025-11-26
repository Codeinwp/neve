import { createPortal } from '@wordpress/element';
import React, { useState } from 'react';
import SearchComponent, { Control } from './SearchComponent';
import SearchResults from './SearchResults';

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
	const [query, setQuery] = useState('');
	const [matchResults, setMatchResults] = useState([] as Control[]);

	return (
		<>
			{createPortal(
				<SearchComponent
					search={query}
					setSearch={setQuery}
					matchResults={matchResults}
					setMatchResults={setMatchResults}
				/>,
				search
			)}
			{createPortal(
				<SearchResults
					matchResults={matchResults}
					query={query}
					setQuery={setQuery}
				/>,
				results
			)}
		</>
	);
};

export default MainSearch;
