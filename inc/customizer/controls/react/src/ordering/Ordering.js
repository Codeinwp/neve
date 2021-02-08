import {
	SortableContainer,
	SortableElement,
	SortableHandle,
} from 'react-sortable-hoc';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import arrayMove from 'array-move';

import { __ } from '@wordpress/i18n';
import { Tooltip, Icon } from '@wordpress/components';

const List = SortableContainer(({ children }) => (
	<div className="items-list">{children}</div>
));

const Handle = SortableHandle(() => (
	<Tooltip text={__('Drag to Reorder', 'neve')}>
		<button
			aria-label={__('Drag to Reorder', 'neve')}
			className="handle"
			onClick={(e) => {
				e.preventDefault();
			}}
		>
			<Icon icon="menu" />
		</button>
	</Tooltip>
));

const Item = ({
	label,
	slug,
	onToggle,
	className,
	allowsToggle = true,
	disabled = false,
}) => {
	return (
		<div
			className={classnames([
				'neve-sortable-item',
				className,
				{ 'no-toggle': !allowsToggle },
			])}
		>
			{allowsToggle && (
				<Tooltip text={__('Toggle Visibility', 'neve')}>
					<button
						aria-label={__('Toggle Visibility', 'neve')}
						className="toggle"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							onToggle(slug);
						}}
					>
						<Icon icon="visibility" />
					</button>
				</Tooltip>
			)}
			<span className="label">{label}</span>
			{!disabled && <Handle />}
		</div>
	);
};

Item.propTypes = {
	label: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	onToggle: PropTypes.func.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
};

const SortableItem = SortableElement(Item);

const Ordering = ({
	onUpdate,
	components,
	label,
	value,
	allowsToggle = true,
}) => {
	const disabled = Object.keys(components).filter(
		(item) => !value.includes(item)
	);

	const handleSortEnd = ({ newIndex, oldIndex }) => {
		const newOrder = arrayMove(value, oldIndex, newIndex);
		onUpdate(newOrder);
	};

	const handleToggle = (slug) => {
		let newValue = [...value];
		if (newValue.includes(slug)) {
			newValue = newValue.filter((item) => item !== slug);
		} else {
			newValue.push(slug);
		}

		onUpdate(newValue);
	};

	return (
		<>
			{label && (
				<label className="customize-control-title">{label}</label>
			)}
			<List
				items={value}
				lockAxis="y"
				useDragHandle
				onSortEnd={handleSortEnd}
			>
				{value.map(
					(slug, index) =>
						Object.keys(components).includes(slug) && (
							<SortableItem
								key={index}
								label={components[slug]}
								index={index}
								slug={slug}
								onToggle={handleToggle}
								allowsToggle={allowsToggle}
							/>
						)
				)}

				{disabled.map((slug, index) => (
					<Item
						className="disabled"
						key={index}
						slug={slug}
						label={components[slug]}
						index={index}
						onToggle={handleToggle}
						allowsToggle={allowsToggle}
						disabled
					/>
				))}
			</List>
		</>
	);
};

Ordering.propTypes = {
	onUpdate: PropTypes.func.isRequired,
	components: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.array.isRequired,
	allowsToggle: PropTypes.bool,
};

export default Ordering;
