import { ReactSortable } from 'react-sortablejs';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';
import { Tooltip, Icon } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

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

const Item = ({ item, onToggle, components, allowsToggle = true }) => {
	const label = components[item.id];
	return (
		<div
			className={classnames([
				'neve-sortable-item',
				item.visible === true ? 'visible' : 'disabled',
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
			<span className="label">{label}</span>
			{item.visible && <Handle />}
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
	value,
	components,
	allowsToggle = true,
}) => {
	const handleToggle = (item) => {
		const newValue = value.map((e) => {
			if (e.id === item) {
				e.visible = !e.visible;
			}
			return e;
		});
		handleChange(newValue);
	};

	const handleChange = (newVal) => {
		const updatedValue = newVal.sort((x, y) => {
			if (x.visible === y.visible) {
				return 0;
			}
			if (x.visible) {
				return -1;
			}
			return 1;
		});
		onUpdate(updatedValue);
	};

	useEffect(() => {
		const maybeNormalizeData = (val) => {
			const needNormalize =
				val.filter((e) => typeof e === 'string').length > 0;
			if (needNormalize) {
				return val.map((element) => {
					return { id: element, visible: true };
				});
			}
			return val;
		};

		const normalizedValue = maybeNormalizeData(value);

		const enabledItems = normalizedValue.map((element) => {
			element.visible = true;
			return element;
		});

		const disabledItems = Object.keys(components)
			.filter((element) => {
				return (
					enabledItems.filter((el) => {
						return element === el.id;
					}).length === 0
				);
			})
			.map((element) => {
				return { id: element, visible: false };
			});

		onUpdate([...enabledItems, ...disabledItems]);
	}, []);

	return (
		<>
			{label /* TODO: Add proper label id for this */ && (
				/* eslint-disable-next-line jsx-a11y/label-has-for */
				<label className="customize-control-title">{label}</label>
			)}
			<ReactSortable
				className="items-list"
				list={value}
				setList={handleChange}
				animation={300}
				handle=".handle"
			>
				{value.map((item, index) => (
					<Item
						key={'ordering-element-' + index}
						item={item}
						onToggle={handleToggle}
						allowsToggle={allowsToggle}
						components={components}
					/>
				))}
			</ReactSortable>
		</>
	);
};

Ordering.propTypes = {
	label: PropTypes.string.isRequired,
	onUpdate: PropTypes.func.isRequired,
	value: PropTypes.object.isRequired,
	allowsToggle: PropTypes.bool,
	components: PropTypes.array.isRequired,
};

export default Ordering;
