import { ReactSortable } from 'react-sortablejs';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';
import { Tooltip, Icon } from '@wordpress/components';

const Handle = () => (
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
);

const Item = ({
	item,
	onToggle,
	allowsToggle = true,
	className,
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
							onToggle(item.id);
						}}
					>
						<Icon icon="visibility" />
					</button>
				</Tooltip>
			)}
			<span className="label">{item.label}</span>
			{!disabled && <Handle />}
		</div>
	);
};

Item.propTypes = {
	item: PropTypes.object.isRequired,
	onToggle: PropTypes.func.isRequired,
	allowsToggle: PropTypes.bool.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
};

const Ordering = ({
	label,
	onUpdate,
	components,
	items,
	allowsToggle = true,
}) => {
	const disabled = Object.keys(components)
		.filter((item) => !items.some((e) => e.id === item))
		.map((item) => {
			return { id: item, label: components[item] };
		});

	const handleToggle = (item) => {
		let newValue = [...items];
		if (newValue.some((e) => e.id === item)) {
			newValue = newValue.filter((element) => item !== element.id);
		} else {
			newValue.push({ id: item, label: components[item] });
		}
		onUpdate(newValue);
	};

	return (
		<>
			{label /* TODO: Add proper label id for this */ && (
				/* eslint-disable-next-line jsx-a11y/label-has-for */
				<label className="customize-control-title">{label}</label>
			)}
			<ReactSortable
				className="items-list"
				list={items}
				setList={onUpdate}
				animation={300}
				handle=".handle"
			>
				{items.map((item, index) => (
					<Item
						key={index}
						item={item}
						onToggle={handleToggle}
						allowsToggle={allowsToggle}
					/>
				))}
			</ReactSortable>
			{disabled.map((item, index) => (
				<Item
					className="disabled"
					key={index}
					item={item}
					onToggle={handleToggle}
					allowsToggle={allowsToggle}
					disabled
				/>
			))}
		</>
	);
};

Ordering.propTypes = {
	label: PropTypes.string.isRequired,
	onUpdate: PropTypes.func.isRequired,
	components: PropTypes.object.isRequired,
	items: PropTypes.object.isRequired,
	allowsToggle: PropTypes.bool,
};

export default Ordering;
