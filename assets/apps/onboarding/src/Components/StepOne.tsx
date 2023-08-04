import React from 'react';
import { useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import CategoryButtons from './CategoryButtons';

interface StepOneProps {
	onNextStep: () => void;
	onCategorySelect: (category: string) => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNextStep, onCategorySelect }) => {
	const handleCategorySelect = (category: string) => {
		onCategorySelect(category);
		onNextStep();
	};

	return (
		<div>
			<h1>{__('What type of website are you creating?', 'neve')}</h1>
			<p>
				{__(
					'Pick a category and we will provide you with relevant suggestions so you can find the starter site that works best for you.',
					'neve'
				)}
			</p>
			<CategoryButtons
				categories={[
					'Business',
					'Personal',
					'Blogging',
					'Portfolio',
					'E-Shop',
				]}
				onCategorySelect={handleCategorySelect}
			/>
		</div>
	);
};

export default StepOne;
