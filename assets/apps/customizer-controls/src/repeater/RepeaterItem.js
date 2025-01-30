import { dragHandle, chevronDown, chevronUp } from '@wordpress/icons';
import { Icon, Tooltip } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';
import PropTypes from 'prop-types';

import { VisibilityIcon, HiddenIcon } from '../common';
import RepeaterItemContent from './RepeaterItemContent';

const Handle = () => (
	<Tooltip text={__('Drag to Reorder', 'neve')}>
		<button
			aria-label={__('Drag to Reorder', 'neve')}
			className="handle"
			onClick={(e) => {
				e.preventDefault();
			}}
		>
			<Icon icon={dragHandle} size={18} />
		</button>
	</Tooltip>
);

const RepeaterItem = ({
	fields,
	newItemFields,
	value,
	itemIndex,
	onToggle,
	onContentChange,
	onRemove,
}) => {
	const [expanded, setExpanded] = useState(false);

	const itemLabel = () => {
		let label = __('Item', 'neve');
		if (value[itemIndex].title) {
			label = value[itemIndex].title;
		}
		if (value[itemIndex].field) {
			label = value[itemIndex].field;
		}
		return <span className="label">{label}</span>;
	};

	const toggleExpand = (e) => {
		e.preventDefault();
		setExpanded(!expanded);
	};

	const visible = value[itemIndex].visibility === 'yes';

	return (
		<div
			className={classnames('neve-sortable-item', {
				visible,
				disabled: !visible,
			})}
		>
			<div className="top-bar">
				<Handle />
				{itemLabel()}

				<div className="actions">
					<Tooltip text={__('Toggle Controls', 'neve')}>
						<button
							className="toggle-controls"
							onClick={toggleExpand}
							aria-label={__('Toggle Controls', 'neve')}
						>
							<Icon
								size={18}
								icon={expanded ? chevronUp : chevronDown}
							/>
						</button>
					</Tooltip>

					<span className="separator" />

					<Tooltip text={__('Toggle Visibility', 'neve')}>
						<button
							aria-label={__('Toggle Visibility', 'neve')}
							className="toggle"
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								onToggle(itemIndex);
							}}
						>
							<Icon
								icon={visible ? VisibilityIcon : HiddenIcon}
								size={18}
							/>
						</button>
					</Tooltip>
				</div>
			</div>

			<RepeaterItemContent
				expanded={expanded}
				fields={fields}
				newItemFields={newItemFields}
				value={value}
				index={itemIndex}
				onContentChange={onContentChange}
				onRemove={(index) => {
					setExpanded(false);
					onRemove(index);
				}}
			/>
		</div>
	);
};

RepeaterItem.propTypes = {
	fields: PropTypes.object.isRequired,
	newItemFields: PropTypes.object.isRequired,
	value: PropTypes.array.isRequired,
	itemIndex: PropTypes.number.isRequired,
	onToggle: PropTypes.func.isRequired,
	onContentChange: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
};

export default RepeaterItem;
