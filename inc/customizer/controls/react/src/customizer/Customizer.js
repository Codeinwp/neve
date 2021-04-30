import Repeater from './Repeater';
import { useEffect } from '@wordpress/element';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableList = SortableContainer(({ children }) => (
	<div className="items-list">{children}</div>
));

const SortableItem = SortableElement(
	({ value, index, fields, setValue, changeVisibility }) => {
		// console.log('sortable item index', index); // --> undefined
		return (
			<div>
				<Repeater
					key={index}
					index={index}
					value={value}
					fields={fields}
					onUpdate={setValue}
					changeVisibility={changeVisibility}
				/>
			</div>
		);
	}
);

const Customizer = ({ value, setValue, fields }) => {
	const onSortEnd = ({ newIndex, oldIndex }) => {
		const newOrder = arrayMove(value, oldIndex, newIndex);
		setValue(newOrder);
	};

	console.log('value in customizer', value);
	const changeVisibility = (hiddenField) => {
		console.log('hidden field', hiddenField);
		const index = value.findIndex(
			(field) => field.visibility !== hiddenField.visibility
		);

		if (index !== -1) {
			value[index] = hiddenField;
			setValue(value);
		}
	};

	return (
		<SortableList
			items={value}
			lockAxis="y"
			useDragHandle
			onSortEnd={onSortEnd}
		>
			{value.map((itemVal, index) => {
				return (
					<SortableItem
						key={index}
						value={itemVal}
						index={index}
						fields={fields}
						setValue={setValue}
						changeVisibility={changeVisibility}
					/>
				);
			})}
		</SortableList>
	);
};

export default Customizer;
