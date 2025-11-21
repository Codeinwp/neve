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
import { dragHandle, chevronDown, chevronUp } from '@wordpress/icons';
import {
	useMemo,
	useState,
	useCallback,
	useEffect,
	useRef,
} from '@wordpress/element';
import { RadioIcons } from '@neve-wp/components';

import { VisibilityIcon, HiddenIcon } from '../common';
import useKeyboardSorting from '../common/useKeyboardSorting';
import ResponsiveRangeComponent from '../responsive-range/ResponsiveRangeComponent';
import ResponsiveRadioButtonsComponent from '../responsive-radio-buttons/ResponsiveRadioButtonsComponent';
import SpacingComponent from '../spacing/SpacingComponent';

const Handle = ({ handleRef, onKeyDown, onBlur, isActive }) => {
	return (
		<Tooltip text={__('Drag to Reorder', 'neve')}>
			<button
				ref={handleRef}
				aria-label={__('Drag to Reorder', 'neve')}
				className={classnames('handle', {
					'keyboard-active': isActive,
				})}
				onClick={(e) => {
					e.preventDefault();
				}}
				onKeyDown={onKeyDown}
				onBlur={onBlur}
				tabIndex={0}
			>
				<Icon icon={dragHandle} size={18} />
			</button>
		</Tooltip>
	);
};

const Item = ({
	item,
	onToggle,
	components,
	allowsToggle = true,
	locked = false,
	itemIndex,
	totalItems,
	onMove,
	isKeyboardActive,
	onKeyboardActiveChange,
}) => {
	const label = components[item.id]?.label || components[item.id];

	const { handleRef, handleKeyDown, handleBlur } = useKeyboardSorting(
		itemIndex,
		totalItems,
		onMove,
		isKeyboardActive,
		onKeyboardActiveChange
	);

	const hasControls = useMemo(() => {
		return (
			!!components[item.id]?.controls &&
			Object.keys(components[item.id].controls).length > 0
		);
	}, []);

	const [open, setOpen] = useState(false);

	const toggleSubcontrols = (e) => {
		e.preventDefault();
		setOpen(!open);
	};

	const [activeControls, setActiveControls] = useState(false);

	const checkSubcontrolsActive = () => {
		if (!hasControls) return;

		const hasActive =
			Object.keys(components[item.id].controls)
				.map((control) => {
					return wp.customize.control(control).active();
				})
				.filter(Boolean).length > 0;

		setActiveControls(hasActive);
	};

	useEffect(() => {
		if (!hasControls) return;

		checkSubcontrolsActive();

		wp.customize.control.bind('change', checkSubcontrolsActive);

		return () => {
			wp.customize.control.unbind('change', checkSubcontrolsActive);
		};
	}, []);

	return (
		<div
			className={classnames('neve-sortable-item', {
				visible: item.visible,
				disabled: !item.visible,
				'no-toggle': !allowsToggle,
			})}
		>
			<div className="top-bar">
				{locked ? (
					<Tooltip
						text={__('Ordering locked for current layout', 'neve')}
					>
						<button className="locked" disabled>
							<Icon icon={dragHandle} size={18} />
						</button>
					</Tooltip>
				) : (
					<Handle
						handleRef={handleRef}
						onKeyDown={handleKeyDown}
						onBlur={handleBlur}
						isActive={isKeyboardActive}
					/>
				)}
				<span className="label">{label}</span>

				<div className="actions">
					{activeControls && (
						<Tooltip text={__('Toggle Controls', 'neve')}>
							<button
								className="toggle-controls"
								onClick={toggleSubcontrols}
								aria-label={__('Toggle Controls', 'neve')}
							>
								<Icon
									size={18}
									icon={open ? chevronUp : chevronDown}
								/>
							</button>
						</Tooltip>
					)}

					<span className="separator" />

					{allowsToggle && (
						<Tooltip text={__('Toggle Visibility', 'neve')}>
							<button
								disabled={locked}
								aria-label={__('Toggle Visibility', 'neve')}
								className="toggle"
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									onToggle(item.id);
								}}
							>
								<Icon
									icon={
										item.visible
											? VisibilityIcon
											: HiddenIcon
									}
									size={18}
								/>
							</button>
						</Tooltip>
					)}
				</div>
			</div>
			{activeControls && (
				<div className={classnames('sortable-subcontrols', { open })}>
					<div className="sortable-subcontrols-inner">
						{Object.entries(components[item.id].controls).map(
							([id, args]) => {
								return (
									<InnerControl
										key={id}
										id={id}
										args={args}
									/>
								);
							}
						)}
					</div>
				</div>
			)}
		</div>
	);
};

const InnerControl = ({ id, args }) => {
	const {
		label: overrideLabel,
		description: overrideDescription,
		type,
		attrs,
		initialValue,
	} = args;

	const label =
		overrideLabel || wp.customize?.control(id)?.params?.label || '';

	const description =
		overrideDescription ||
		wp.customize?.control(id)?.params?.description ||
		'';

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
			{![
				'toggle',
				'responsive-range',
				'responsive-button-group',
				'responsive-spacing',
			].includes(type) && (
				<>
					{label && <span className="subcontrol-label">{label}</span>}
					{description && (
						<span
							className="subcontrol-description"
							dangerouslySetInnerHTML={{ __html: description }}
						/>
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
						help={
							description ? (
								<span
									dangerouslySetInnerHTML={{
										__html: description,
									}}
								/>
							) : null
						}
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
				{type === 'responsive-button-group' && (
					<ResponsiveRadioButtonsComponent
						control={wp.customize.control(id)}
					/>
				)}
				{type === 'responsive-spacing' && (
					<SpacingComponent control={wp.customize.control(id)} />
				)}
			</div>
		</div>
	);
};

Item.propTypes = {
	item: PropTypes.object.isRequired,
	onToggle: PropTypes.func.isRequired,
	allowsToggle: PropTypes.bool.isRequired,
	itemIndex: PropTypes.number.isRequired,
	totalItems: PropTypes.number.isRequired,
	onMove: PropTypes.func.isRequired,
	components: PropTypes.object.isRequired,
	locked: PropTypes.bool,
	isKeyboardActive: PropTypes.bool.isRequired,
	onKeyboardActiveChange: PropTypes.func.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
};

const Ordering = ({
	label,
	onUpdate,
	value,
	components,
	locked = [],
	allowsToggle = true,
}) => {
	// Track active item by stable id, not by index or object reference.
	const activeItemIdRef = useRef(null);
	const [, forceUpdate] = useState({});
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

	const handleMove = (fromIndex, toIndex) => {
		const newValue = [...value];
		const [movedItem] = newValue.splice(fromIndex, 1);
		newValue.splice(toIndex, 0, movedItem);
		// Active id persists because item.id does not change.
		handleChange(newValue);
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
							locked={locked.includes(item.id)}
							key={item.id}
							item={item}
							onToggle={handleToggle}
							allowsToggle={allowsToggle}
							components={components}
							itemIndex={index}
							totalItems={value.length}
							onMove={handleMove}
							isKeyboardActive={
								activeItemIdRef.current === item.id
							}
							onKeyboardActiveChange={(active) => {
								activeItemIdRef.current = active
									? item.id
									: null;
								forceUpdate({});
							}}
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
