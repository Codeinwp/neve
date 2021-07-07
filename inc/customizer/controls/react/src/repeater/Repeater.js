import '../scss/_repeater.scss';
import Item from './RepeaterItem';
import PropTypes from 'prop-types';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

const List = ({ children }) => (
	<div className="nv-repeater-items-container">{children}</div>
);

const Repeater = ({ value, onUpdate }) => {
	const [sorting, setSorting] = useState(false);
	const isContact = value[0]
		? value[0].hasOwnProperty('item_type')
		: undefined;

	const handleToggle = (index) => {
		const newValue = [...value];
		newValue[index].visibility =
			value[index].visibility === 'yes' ? 'no' : 'yes';
		onUpdate(newValue);
	};

	const handleAddItem = () => {
		const newValue = [...value];
		if (!isContact) {
			newValue.push({
				visibility: 'yes',
				title: '',
				icon: '',
				url: '',
				icon_color: '',
				background_color: '',
			});
			onUpdate(newValue);
			return;
		}

		newValue.push({
			title: '',
			icon: '',
			item_type: '',
			visibility: 'yes',
		});
		onUpdate(newValue);
	};

	const handleRemove = (index) => {
		const newValue = [...value];
		newValue.splice(index, 1);

		onUpdate(newValue);
	};

	const handleContentChange = (index) => (type) => (newData) => {
		const newValue = [...value];

		switch (type) {
			case 'title':
				newValue[index].title = newData;
				break;
			case 'icon':
				newValue[index].icon = newData;
				break;
			case 'url':
				newValue[index].url = newData;
				break;
			case 'icon_color':
				newValue[index].icon_color = newData;
				break;
			case 'background_color':
				newValue[index].background_color = newData;
				break;
			case 'item_type':
				newValue[index].item_type = newData;
				break;
		}
		onUpdate(newValue);
	};

	const listItems = [];
	for (let i = 0; i < value.length; ++i) {
		listItems[i] = (
			<Item
				value={value}
				onToggle={handleToggle}
				onContentChange={handleContentChange(i)}
				onRemove={handleRemove}
				index={i}
				sorting={sorting}
				key={'repeater-item-' + i}
			/>
		);
	}

	return (
		<>
			<List children={listItems} />
			<div className="nv-repeater-options">
				{value.length > 1 && (
					<Button
						isLink
						style={{ padding: '0 10px 0 10px' }}
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
