import React from 'react';
import { CATEGORIES } from '../utils/common';
import CategoryButtons from './CategoryButtons';
import Search from './Search';
import { __ } from '@wordpress/i18n';

interface StepTwoProps {
	onNextStep: () => void;
	onCategorySelect: (category: string) => void;
	websiteType: string;
	onSearchUpdate: (searchText: string) => void;
	searchText: string;
}

const StepTwo: React.FC<StepTwoProps> = ({
	onNextStep,
	websiteType,
	onCategorySelect,
	onSearchUpdate,
	searchText,
}) => {
	const handleSearchUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSearchText = e.target.value;
		onSearchUpdate(newSearchText);
	};

	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault(); // Prevent the form from submitting
	};

	return (
		<>
			<h1>{__('Choose a design', 'neve')}</h1>
			<Search
				onSubmit={handleSearchSubmit} // Prevents form submission
				onChange={handleSearchUpdate}
				searchText={searchText}
			/>
			<CategoryButtons
				categories={CATEGORIES}
				onCategorySelect={onCategorySelect}
				selectedCategory={websiteType}
			/>
		</>
	);
};

export default StepTwo;
