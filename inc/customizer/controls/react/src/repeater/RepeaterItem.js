import { useState } from '@wordpress/element';
import RepeaterItemContent from './RepeaterItemContent';
import { Icon, Tooltip } from '@wordpress/components';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import PropTypes from 'prop-types';

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
	fields,
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
	const itemLabel = (
		<span className="repeater-item-title">
			{value[itemIndex].title === '' ? 'Item' : value[itemIndex].title}
		</span>
	);

	const toggleExpand = () => {
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
				{!sorting && (
					<button
						className="nv-repeater-expand-button"
						onClick={toggleExpand}
					>
						{itemLabel}
						{expanded ? arrowUp : arrowDown}
					</button>
				)}
				{sorting && itemLabel}
				{sorting && <Handle />}
			</div>
			{!sorting && expanded && (
				<RepeaterItemContent
					fields={fields}
					value={value}
					index={itemIndex}
					onContentChange={onContentChange}
					onRemove={(index) => {
						setExpanded(false);
						onRemove(index);
					}}
				/>
			)}
		</div>
	);
};

export const SortableRepeaterItem = SortableElement(RepeaterItem);

RepeaterItem.propTypes = {
	fields: PropTypes.object.isRequired,
	value: PropTypes.array.isRequired,
	itemIndex: PropTypes.number.isRequired,
	sorting: PropTypes.bool.isRequired,
	onToggle: PropTypes.func.isRequired,
	onContentChange: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default RepeaterItem;
