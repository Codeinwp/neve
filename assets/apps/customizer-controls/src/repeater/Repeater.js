import '../scss/_repeater.scss';
import RepeaterItem from './RepeaterItem';
import PropTypes from 'prop-types';
import { Button } from '@wordpress/components';
import { ReactSortable } from 'react-sortablejs';
import { __ } from '@wordpress/i18n';
import { useRef, useState } from '@wordpress/element';

const Repeater = ({
	label,
	fields,
	allowNew,
	value,
	onUpdate,
	newItemFields,
}) => {
	const itemFields =
		Object.keys(newItemFields).length > 0 ? newItemFields : fields;
	// Track active item by a stable key (slug or generated) independent of index.
	const activeItemKeyRef = useRef(null);
	const [, forceUpdate] = useState({});

	// Ensure each existing item has a stable internal key for keyboard tracking (preserved across moves).
	value.forEach((obj) => {
		if (!obj.__kbKey) {
			obj.__kbKey =
				obj.slug ||
				'kb-' +
					Date.now().toString(36) +
					Math.random().toString(36).slice(2, 8);
		}
	});

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

		// Assign stable key before pushing so initial activation works.
		newItem.__kbKey =
			newItem.slug ||
			'kb-' +
				Date.now().toString(36) +
				Math.random().toString(36).slice(2, 8);
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

	const handleMove = (fromIndex, toIndex) => {
		const newValue = [...value];
		const [movedItem] = newValue.splice(fromIndex, 1);
		newValue.splice(toIndex, 0, movedItem);
		setList(newValue);
	};
	const setList = (l) => {
		const allowed = [
			...Object.keys(itemFields),
			'title',
			'visibility',
			'blocked',
			'slug',
			'__kbKey', // preserve stable keyboard key
		];
		const final = l.map((i) => {
			Object.keys(i).forEach((k) => {
				if (!allowed.includes(k)) {
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
				className="items-list"
				list={value}
				setList={(newItems, _, { dragging }) => {
					if (!dragging) {
						return;
					}
					setList(newItems);
				}}
				animation={300}
				forceFallback={true}
				handle=".handle"
			>
				{value.map((val, index) => {
					const reactKey = val.__kbKey;
					return (
						<RepeaterItem
							className="nv-repeater-item"
							newItemFields={newItemFields}
							fields={fields}
							value={value}
							itemIndex={index}
							key={'repeater-item-' + reactKey}
							onToggle={handleToggle}
							onContentChange={(newItemValue) =>
								handleContentChange(index, newItemValue)
							}
							onRemove={handleRemove}
							index={index}
							totalItems={value.length}
							onMove={handleMove}
							isKeyboardActive={
								activeItemKeyRef.current === val.__kbKey
							}
							onKeyboardActiveChange={(active) => {
								activeItemKeyRef.current = active
									? val.__kbKey
									: null;
								forceUpdate({});
							}}
						/>
					);
				})}
			</ReactSortable>
			{allowNew === 'yes' && (
				<div className="nv-repeater-options">
					<Button
						isSmall
						isSecondary
						onClick={handleAddItem}
						className="nv-repeater-add-item-button"
					>
						{__('Add Item', 'neve')}
					</Button>
				</div>
			)}
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
