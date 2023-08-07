import React from 'react';
import { Icon } from '@wordpress/components';
import SVG from '../utils/svg';

interface SearchProps {
	onSubmit?: (e: React.FormEvent) => void; // Updated type for onSubmit
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	searchText?: string;
}

const Search: React.FC<SearchProps> = ({ onSubmit, onChange, searchText }) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		if (onSubmit) {
			e.preventDefault(); // Prevent form submission
			onSubmit(e);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="search-form">
			<input
				type="text"
				value={searchText}
				onChange={handleInputChange}
				className="search-input"
			/>
			<button type="submit" className="search-button">
				<Icon icon={SVG.search} />
			</button>
		</form>
	);
};

export default Search;
