import { ReactSortable } from 'react-sortablejs';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import {
	Tooltip,
	Icon,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import { useMemo, useState } from '@wordpress/element';
import { useCallback, useEffect } from 'react';
import ResponsiveRangeComponent from '../responsive-range/ResponsiveRangeComponent';
import { RadioIcons } from '@neve-wp/components';

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
	const label = components[item.id]?.label || components[item.id];

	const hasControls = useMemo(() => {
		return (
			!!components[item.id]?.controls &&
			Object.keys(components[item.id].controls).length > 0
		);
	});

	const [open, setOpen] = useState(false);

	const toggleSubcontrols = (e) => {
		e.preventDefault();
		setOpen(!open);
	};

	return (
		<div
			className={classnames('neve-sortable-item', {
				visible: item.visible,
				disabled: !item.visible,
				'no-toggle': !allowsToggle,
			})}
		>
			<div className="top-bar">
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

				{item.visible && (
					<div className="actions">
						{hasControls && (
							<Tooltip text={__('Toggle Controls', 'neve')}>
								<button
									className="toggle-controls"
									onClick={toggleSubcontrols}
									aria-label={__('Toggle Controls', 'neve')}
								>
									<Icon
										icon={
											open
												? 'arrow-up-alt2'
												: 'arrow-down-alt2'
										}
									/>
								</button>
							</Tooltip>
						)}

						<Handle />
					</div>
				)}
			</div>
			{hasControls && open && item.visible && (
				<div className={classnames('sortable-subcontrols', { open })}>
					{Object.entries(components[item.id].controls).map(
						([id, args]) => {
							return (
								<InnerControl key={id} id={id} args={args} />
							);
						}
					)}
				</div>
			)}
		</div>
	);
};

const InnerControl = ({ id, args }) => {
	const { label, type, attrs, initialValue, description } = args;

	const defaultValue = wp.customize.value(id).get();

	const [value, setValue] = useState(initialValue || defaultValue);

	const [isActive, setActive] = useState(false);

	useEffect(() => {
		setActive(wp.customize.control(id).active());
	}, []);

	const updateStatus = useCallback((status) => {
		setActive(status);
	}, []);

	useEffect(() => {
		wp.customize.control(id).active.bind(updateStatus);

		return () => {
			wp.customize.control(id).active.unbind(updateStatus);
		};
	}, []);

	const onChange = (nextVal) => {
		wp.customize.value(id).set(nextVal);
	};

	const handleValueChangeWithPrevent = (e) => {
		e.preventDefault();
		handleValueChange(e.target.value);
	};

	const handleValueChange = (val) => {
		setValue(val);
		onChange(val);
	};

	if (!isActive) {
		return null;
	}

	return (
		<div id={`sub-control-${id}`}>
			{!['toggle', 'responsive-range'].includes(type) && (
				<>
					{label && <span className="subcontrol-label">{label}</span>}
					{description && (
						<span className="subcontrol-description">
							{description}
						</span>
					)}
				</>
			)}
			<div>
				{type === 'select' && (
					<select
						value={value}
						onBlur={handleValueChangeWithPrevent}
						onChange={handleValueChangeWithPrevent}
					>
						{Object.entries(args.choices).map(
							([val, optionLabel]) => (
								<option key={val} value={val}>
									{optionLabel}
								</option>
							)
						)}
					</select>
				)}
				{type === 'range' && (
					<RangeControl
						resetFallbackValue={
							attrs?.defaultVal === 0
								? 0
								: attrs?.defaultVal || ''
						}
						value={
							parseFloat(value) === 0
								? 0
								: parseFloat(value) || ''
						}
						allowReset
						onChange={handleValueChange}
						step={attrs?.step || 1}
						min={attrs?.min || 0}
						max={attrs?.max || 100}
					/>
				)}
				{type === 'text' && (
					<input
						type="text"
						value={value}
						onChange={handleValueChangeWithPrevent}
					/>
				)}
				{type === 'toggle' && (
					<ToggleControl
						checked={value}
						label={label}
						help={description}
						onChange={handleValueChange}
					/>
				)}
				{type === 'responsive-range' && (
					<ResponsiveRangeComponent
						control={wp.customize.control(id)}
					/>
				)}
				{type === 'button-group' && (
					<RadioIcons
						options={args.choices}
						value={value}
						onChange={handleValueChange}
						showLabels
					/>
				)}
			</div>
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

	value = value.filter((element) => {
		return components.hasOwnProperty(element.id);
	});

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
				{value
					.filter((element) => {
						return components.hasOwnProperty(element.id);
					})
					.map((item, index) => (
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
	value: PropTypes.array.isRequired,
	allowsToggle: PropTypes.bool,
	components: PropTypes.object.isRequired,
};

export default Ordering;
