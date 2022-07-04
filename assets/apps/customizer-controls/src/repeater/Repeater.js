import '../scss/_repeater.scss';
import RepeaterItem from './RepeaterItem';
import PropTypes from 'prop-types';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { ReactSortable } from 'react-sortablejs';
import { __ } from '@wordpress/i18n';

const Repeater = ({
	label,
	fields,
	allowNew,
	value,
	onUpdate,
	newItemFields,
}) => {
	const [sorting, setSorting] = useState(false);
	const itemFields =
		Object.keys(newItemFields).length > 0 ? newItemFields : fields;

	const handleToggle = (index) => {
		const newValue = [...value];
		newValue[index].visibility =
			value[index].visibility === 'yes' ? 'no' : 'yes';
		onUpdate(newValue);
	};

	const handleAddItem = () => {
		const newValue = [...value];
		const newItem = {};
		for (const [field] of Object.entries(itemFields)) {
			newItem.visibility = 'yes';

			if (typeof value[0][field] === 'boolean') {
				newItem[field] = true;
				if (field === 'hide_on_mobile') {
					newItem[field] = false;
				}
				continue;
			}

			// If the type is variable, get the first type in the array.
			let type = itemFields[field].type;
			if (typeof type === 'object') {
				type = Object.values(itemFields[field].type)[0];
			}

			// If field type is select, the default value for a new field is the first item from select options
			if (type === 'select') {
				let choices = itemFields[field].choices;
				if (typeof Object.values(choices)[0] === 'object') {
					choices = Object.values(itemFields[field].choices)[0];
				}
				newItem[field] = Object.keys(choices)[0];
				continue;
			}

			newItem[field] = itemFields[field].default;
		}

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

	const setList = (l) => {
		const final = l.map((i) => {
			Object.keys(i).forEach((k) => {
				if (
					![
						...Object.keys(itemFields),
						'title',
						'visibility',
						'blocked',
						'slug',
					].includes(k)
				) {
					delete i[k];
				}
			});
			return i;
		});

		onUpdate(final);
		return final;
	};

	return (
		<div className="nv-repeater">
			{label && <span className="customize-control-title">{label}</span>}

			<ReactSortable
				className="nv-repeater-items-container"
				list={value}
				setList={(newItems, _, { dragging }) => {
					if (!dragging) {
						return;
					}
					setList(newItems);
				}}
				animation={300}
				forceFallback={true}
				handle=".nv-repeater-handle"
			>
				{value.map((val, index) => {
					return (
						<RepeaterItem
							className="nv-repeater-item"
							newItemFields={newItemFields}
							fields={fields}
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
			</ReactSortable>
			<div className="nv-repeater-options">
				{value.length > 1 && (
					<Button
						className="nv-repeater-reorder-button"
						isLink
						onClick={() => {
							setSorting(!sorting);
						}}
					>
						{sorting ? __('Done', 'neve') : __('Reorder', 'neve')}
					</Button>
				)}
				{!sorting && allowNew === 'yes' && (
					<Button
						isSecondary
						onClick={handleAddItem}
						className="nv-repeater-add-item-button"
					>
						{__('Add Item', 'neve')}
					</Button>
				)}
			</div>
		</div>
	);
};

Repeater.propTypes = {
	value: PropTypes.array.isRequired,
	fields: PropTypes.object.isRequired,
	newItemFields: PropTypes.object,
	allowNew: PropTypes.oneOf(['no', 'yes']).isRequired,
	onUpdate: PropTypes.func.isRequired,
};

export default Repeater;
