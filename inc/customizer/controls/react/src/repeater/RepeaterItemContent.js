import { FIELDS } from '../../../../../../stories/utils/values';
import { Button, SelectControl, TextControl } from '@wordpress/components';
import ColorControl from '../common/ColorControl';

const RepeaterItemContent = ({ value, index, onContentChange, onRemove }) => {
	const changeContent = (type, newData) => {
		const newItemValue = { ...value[index] };
		newItemValue[type] = newData;
		onContentChange(newItemValue);
	};

	const toComponent = (key) => {
		if (FIELDS[key] === undefined) return null;
		switch (FIELDS[key].type) {
			case 'text':
				return (
					<TextControl
						label={FIELDS[key].label}
						value={value[index][key]}
						onChange={(newData) => changeContent(key, newData)}
						key={key + index}
					/>
				);
			case 'icon':
				return (
					<SelectControl
						label={FIELDS[key].label}
						value={value[index][key]}
						onChange={(newData) => changeContent(key, newData)}
						options={[
							{
								value: value[index].icon,
								label: value[index].icon,
							},
						]}
						key={key + index}
					/>
				);
			case 'color':
				return (
					<ColorControl
						label={FIELDS[key].label}
						selectedColor={value[index][key]}
						onChange={(newData) => changeContent(key, newData)}
						disableGlobal
						key={key + index}
					/>
				);
			case 'select':
				return (
					<SelectControl
						label={FIELDS[key].label}
						value={value[index][key]}
						onChange={(newData) => changeContent(key, newData)}
						options={
							// ???
							Object.values(FIELDS[key].choices)
								.map(Object.entries)
								.map(([[k, v]]) => {
									return { value: k, label: v };
								})
						}
						key={key + index}
					/>
				);
		}
	};

	return (
		<div className="nv-repeater-content">
			{Object.entries(value[index]).map(([key]) => {
				return toComponent(key);
			})}
			{value.length > 1 && (
				<Button
					className="nv-repeater-remove-button"
					isDestructive
					isLink
					onClick={() => onRemove(index)}
				>
					Remove
				</Button>
			)}
		</div>
	);
};

export default RepeaterItemContent;
