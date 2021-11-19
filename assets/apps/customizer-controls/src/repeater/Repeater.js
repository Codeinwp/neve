import '../scss/_repeater.scss';
import RepeaterItem from './RepeaterItem';
import PropTypes from 'prop-types';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { ReactSortable } from 'react-sortablejs';
import { __ } from '@wordpress/i18n';

const Repeater = ({ fields, value, onUpdate }) => {
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
			if (field === 'visibility') {
				newItem[field] = 'yes';
				continue;
			}

			if (typeof value[0][field] === 'boolean') {
				newItem[field] = true;
				continue;
			}

			if (fields[field].type === 'select') {
				newItem[field] = Object.keys(fields[field].choices)[0];
				continue;
			}
			newItem[field] = '';
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
				if (![...Object.keys(fields), 'visibility'].includes(k)) {
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
			<ReactSortable
				className="nv-repeater-items-container"
				list={value}
				setList={setList}
				animation={300}
				forceFallback={true}
				handle=".nv-repeater-handle"
			>
				{value.map((val, index) => {
					return (
						<RepeaterItem
							className="nv-repeater-item"
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
				{!sorting && (
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
	onUpdate: PropTypes.func.isRequired,
};

export default Repeater;
