import React from 'react';
import CategoryButtons from "./CategoryButtons";

interface StepTwoProps {
	onNextStep: () => void;
	onCategorySelect: (category: string) => void;
	websiteType: string;
}

const StepTwo: React.FC<StepTwoProps> = ({ websiteType, onCategorySelect }) => {

	return (
		<div>
			<h2>Step 2: Review your selection</h2>
			<p>You have selected: {websiteType}</p>
			<CategoryButtons
				categories={[
					'All',
					'Business',
					'Personal',
					'Blogging',
					'Portfolio',
					'E-Shop',
				]}
				onCategorySelect={onCategorySelect}
				selectedCategory={websiteType}
			/>
		</div>
	);
};

export default StepTwo;
