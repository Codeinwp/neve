import React from 'react';
import { __ } from '@wordpress/i18n';
import CategoryButtons from './CategoryButtons';
import Search from './Search';
import { CATEGORIES } from '../utils/common';

interface StepOneProps {
	onNextStep: () => void;
	onCategorySelect: (category: string) => void;
	onSearchUpdate: (searchText: string) => void;
}

const StepOne: React.FC<StepOneProps> = ({
	onNextStep,
	onCategorySelect,
	onSearchUpdate,
}) => {
	const handleCategorySelect = (category: string) => {
		onCategorySelect(category);
		onNextStep();
	};

	const handleSearchUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSearchText = e.target.value;
		onSearchUpdate(newSearchText);
	};

	return (
		<>
			<h1>{__('What type of website are you creating?', 'neve')}</h1>
			<p>
				{__(
					'Pick a category and we will provide you with relevant suggestions so you can find the starter site that works best for you.',
					'neve'
				)}
			</p>
			<CategoryButtons
				categories={CATEGORIES}
				onCategorySelect={handleCategorySelect}
			/>
			<div className="search-container">
				<p> {__('Or search for a site', 'neve')}</p>
				<Search onSubmit={onNextStep} onChange={handleSearchUpdate} />
			</div>
		</>
	);
};

export default StepOne;
