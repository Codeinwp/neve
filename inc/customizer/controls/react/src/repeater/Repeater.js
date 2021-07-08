import '../scss/_repeater.scss';
import { SortableRepeaterItem } from './RepeaterItem';
import PropTypes from 'prop-types';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { SortableContainer } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const List = SortableContainer(({ children }) => (
	<div className="nv-repeater-items-container">{children}</div>
));

const Repeater = ({ value, onUpdate }) => {
	const [sorting, setSorting] = useState(false);

	const handleToggle = (index) => {
		const newValue = [...value];
		newValue[index].visibility =
			value[index].visibility === 'yes' ? 'no' : 'yes';
		onUpdate(newValue);
	};

	const handleAddItem = () => {
		const newValue = [...value];
		const newItem = {};

		for (const [field] of Object.entries(newValue[0])) {
			newItem[field] = '';
		}

		newItem.visibility = 'yes';
		newValue.push(newItem);
		onUpdate(newValue);
	};

	const handleRemove = (index) => {
		const newValue = [...value];
		newValue.splice(index, 1);
		onUpdate(newValue);
	};

	const handleContentChange = (index, newItemValue) => {
		const newValue = [...value];
		newValue[index] = newItemValue;
		onUpdate(newValue);
	};

	const handleSortEnd = ({ newIndex, oldIndex }) => {
		const newOrder = arrayMove(value, oldIndex, newIndex);
		onUpdate(newOrder);
	};

	return (
		<>
			<List lockAxis="y" useDragHandle onSortEnd={handleSortEnd}>
				{value.map((val, index) => {
					return (
						<SortableRepeaterItem
							className="nv-repeater-item"
							value={value}
							itemIndex={index}
							onToggle={handleToggle}
							onContentChange={(newItemValue) =>
								handleContentChange(index, newItemValue)
							}
							onRemove={handleRemove}
							index={index}
							sorting={sorting}
							key={'repeater-item-' + index}
						/>
					);
				})}
			</List>
			<div className="nv-repeater-options">
				{value.length > 1 && (
					<Button
						className="nv-repeater-reorder-button"
						isLink
						onClick={() => {
							setSorting(!sorting);
						}}
					>
						{sorting ? 'Done' : 'Reorder'}
					</Button>
				)}
				<Button isSecondary onClick={handleAddItem}>
					Add Item
				</Button>
			</div>
		</>
	);
};

Repeater.propTypes = {
	value: PropTypes.array.isRequired,
};

export default Repeater;
