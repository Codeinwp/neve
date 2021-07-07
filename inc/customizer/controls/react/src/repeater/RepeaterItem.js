import { useState } from '@wordpress/element';
import {
	Button,
	Icon,
	SelectControl,
	TextControl,
	Tooltip,
} from '@wordpress/components';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import ColorControl from '../common/ColorControl';

const Item = ({
	value,
	index,
	sorting,
	onToggle,
	onContentChange,
	onRemove,
}) => {
	const [expanded, setExpanded] = useState(false);

	const arrowUp = <Icon icon="arrow-up" />;
	const arrowDown = <Icon icon="arrow-down" />;
	const visibleIcon = <Icon icon="visibility" />;
	const hiddenIcon = <Icon icon="hidden" />;

	const visible = value[index].visibility === 'yes';

	const toggleExpand = (e) => {
		e.preventDefault();
		setExpanded(!expanded);
	};

	return (
		<div className="nv-repeater-item">
			<div
				className={classnames([
					'nv-repeater-item-header',
					{ 'visibility-hidden': !visible },
				])}
			>
				<Tooltip text={__('Toggle Visibility', 'neve')}>
					<button
						aria-label={__('Toggle Visibility', 'neve')}
						className="toggle repeater-visibility-button"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							onToggle(index);
						}}
					>
						{visible ? visibleIcon : hiddenIcon}
					</button>
				</Tooltip>
				<button
					style={{
						border: 'none',
						backgroundColor: 'white',
						display: 'flex',
						width: '100%',
					}}
					onClick={toggleExpand}
				>
					<h4>
						{' '}
						{value[index].title === ''
							? 'Item'
							: value[index].title}{' '}
					</h4>
					{!sorting && (
						<div className="repeater-expand-arrow">
							{expanded ? arrowUp : arrowDown}
						</div>
					)}
				</button>
			</div>
			{expanded && (
				<ItemContent
					value={value}
					index={index}
					onContentChange={onContentChange}
					onRemove={onRemove}
				/>
			)}
		</div>
	);
};

const ItemContent = ({ value, index, onContentChange, onRemove }) => {
	const controls = [];

	const transform = (key) => {
		switch (key) {
			case 'title':
				return (
					<TextControl
						label={__('Title')}
						value={value[index].title}
						onChange={onContentChange('title')}
						key="item-title"
					/>
				);
			case 'icon':
				return (
					<SelectControl
						label={__('Icon')}
						value={value[index].icon}
						onChange={onContentChange('icon')}
						options={[
							{
								value: value[index].icon,
								label: value[index].icon,
							},
						]}
						key="item-icon"
					/>
				);
			case 'url':
				return (
					<TextControl
						label="Link"
						value={value[index].url}
						onChange={onContentChange('url')}
						key="item-url"
					/>
				);
			case 'icon_color':
				return (
					<ColorControl
						label={__('Icon Color')}
						selectedColor={value[index].icon_color}
						onChange={onContentChange('icon_color')}
						disableGlobal
						key="item-icon-color"
					/>
				);
			case 'background_color':
				return (
					<ColorControl
						label={__('Background Color')}
						selectedColor={value[index].background_color}
						onChange={onContentChange('background_color')}
						disableGlobal
						key="item-background_color"
					/>
				);
			case 'item_type':
				return (
					<SelectControl
						label={__('Type')}
						value={value[index].item_type}
						onChange={onContentChange('item_type')}
						options={[
							{ value: 'text', label: 'Text' },
							{ value: 'email', label: 'Email' },
							{ value: 'phone', label: 'Phone' },
						]}
						key="item-type"
					/>
				);
			default:
				return null;
		}
	};

	for (const [key] of Object.entries(value[index])) {
		controls.push(transform(key));
	}

	return (
		<div className="nv-repeater-content">
			{controls}
			<Button isDestructive isLink onClick={() => onRemove(index)}>
				Remove
			</Button>
		</div>
	);
};

export default Item;
