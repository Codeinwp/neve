import { useState } from '@wordpress/element';
import RepeaterItemContent from './RepeaterItemContent';
import { Icon, Tooltip } from '@wordpress/components';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';

const Handle = SortableHandle(() => (
	<Tooltip text={__('Drag to Reorder', 'neve')}>
		<button
			aria-label={__('Drag to Reorder', 'neve')}
			className="nv-repeater-handle"
			onClick={(e) => {
				e.preventDefault();
			}}
		>
			<Icon icon="menu" />
		</button>
	</Tooltip>
));

const RepeaterItem = ({
	value,
	itemIndex,
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

	const toggleExpand = () => {
		if (sorting) return;
		setExpanded(!expanded);
	};

	const visible = value[itemIndex].visibility === 'yes';

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
							onToggle(itemIndex);
						}}
					>
						{visible ? visibleIcon : hiddenIcon}
					</button>
				</Tooltip>
				<button
					className="nv-repeater-expand-button"
					onClick={toggleExpand}
				>
					<h4>
						{value[itemIndex].title === ''
							? 'Item'
							: value[itemIndex].title}
					</h4>
					{!sorting && (expanded ? arrowUp : arrowDown)}
					{sorting && visible && <Handle />}
				</button>
			</div>
			{!sorting && expanded && (
				<RepeaterItemContent
					value={value}
					index={itemIndex}
					onContentChange={onContentChange}
					onRemove={onRemove}
				/>
			)}
		</div>
	);
};

export const SortableRepeaterItem = SortableElement(RepeaterItem);
export default RepeaterItem;
