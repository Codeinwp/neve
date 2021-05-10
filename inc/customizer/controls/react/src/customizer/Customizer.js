import Item from './Item';
import { Button } from '@wordpress/components';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableList = SortableContainer(({ children }) => (
	<div className="repeater-wrap">{children}</div>
));

const SortableItem = SortableElement(
	({
		value,
		key,
		index,
		updateValue,
		idx,
		fields,
		setValue,
		changeVisibility,
		removeFields,
	}) => {
		// console.log("index", index); // undefined -- WHY??!
		// Therefore, I decided to send another prop to keep the index value = idx
		return (
			<Item
				key={key}
				index={idx}
				value={value}
				fields={fields}
				onUpdate={setValue}
				updateValue={updateValue}
				changeVisibility={changeVisibility}
				removeFields={removeFields}
			/>
		);
	}
);

const Customizer = ({ value, setValue, fields }) => {
	const handleSortEnd = ({ oldIndex, newIndex }) => {
		setValue(arrayMove(value, oldIndex, newIndex));
	};

	const changeVisibility = (idx) => {
		console.log(idx);
		const nextValue = [...value];
		if (nextValue[idx].visibility === 'yes') {
			nextValue[idx].visibility = 'no';
		} else {
			nextValue[idx].visibility = 'yes';
		}

		setValue(nextValue);
	};

	const updateFieldValues = (idx, newVal) => {
		const nextValue = [...value];
		if (newVal === '' || !newVal) {
			nextValue[idx].title = `Item ${idx + 1}`;
		} else {
			nextValue[idx].title = newVal;
		}
		setValue(nextValue);
	};

	const addMoreFields = () => {
		const nextValue = [...value];
		nextValue.push({
			title: 'Item',
			url: '#',
			icon: '',
			visibility: 'yes',
			icon_color: '',
			background_color: '',
		});
		setValue(nextValue);
	};

	const removeFields = (idx) => {
		// const valueAfterRemoved = [...value];
		// valueAfterRemoved.splice(
		// 	valueAfterRemoved.indexOf(valueAfterRemoved[idx]),
		// 	1
		// );
		// setValue(valueAfterRemoved);
	};

	return (
		<div>
			<SortableList
				items={value}
				axis="y"
				useDragHandle
				onSortEnd={handleSortEnd}
			>
				{value.map((itemVal, _index) => {
					// console.log(_index); // --> 0 1 2 3
					return (
						<SortableItem
							key={_index}
							index={_index} // ??
							idx={_index}
							value={itemVal}
							fields={fields}
							setValue={setValue}
							updateValue={updateFieldValues}
							changeVisibility={changeVisibility}
							removeFields={removeFields}
						/>
					);
				})}
			</SortableList>
			<div className="customizer-footer">
				<Button className="add-more-fields" onClick={addMoreFields}>
					Add more
				</Button>
			</div>
		</div>
	);
};

export default Customizer;
