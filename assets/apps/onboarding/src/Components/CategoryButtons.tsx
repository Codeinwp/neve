import React from 'react';

interface CategoryButtonsProps {
	categories: string[];
	selectedCategory?: string | null;
	onCategorySelect: (category: string) => void;
}

const CategoryButtons: React.FC<CategoryButtonsProps> = ({
	categories,
	selectedCategory,
	onCategorySelect,
}) => {
	return (
		<div className="category-tabs">
			{categories.map((category) => (
				<button
					className={`tab ${
						category === selectedCategory ? 'active' : ''
					}`}
					key={category}
					onClick={() => onCategorySelect(category)}
				>
					{category}
				</button>
			))}
		</div>
	);
};

export default CategoryButtons;
