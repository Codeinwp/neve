import React from 'react';
import classnames from 'classnames';

interface CategoryButtonsProps {
	categories: Record<string, string>;
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
			{Object.keys(categories).map((key, index) => {
				const classes = classnames([
					'tab',
					key,
					{ active: key === selectedCategory },
				]);

				return (
					<button
						className={classes}
						key={index}
						onClick={() => onCategorySelect(key)}
					>
						{categories[key]}
					</button>
				);
			})}
		</div>
	);
};

export default CategoryButtons;
