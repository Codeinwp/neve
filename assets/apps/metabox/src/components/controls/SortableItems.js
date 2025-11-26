import { withDispatch } from '@wordpress/data';
import { ReactSortable } from 'react-sortablejs';
import { Button, Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useRef, useState } from '@wordpress/element';
import useKeyboardSorting from '../../../../customizer-controls/src/common/useKeyboardSorting';

const SortableItem = ({
	item,
	index,
	total,
	elements,
	toggle,
	onMove,
	activeItemIdRef,
	forceUpdate,
}) => {
	const { id, visible } = item;
	const isActive = activeItemIdRef.current === id;
	const { handleRef, handleKeyDown, handleBlur } = useKeyboardSorting(
		index,
		total,
		(from, to) => onMove(from, to),
		isActive,
		(active) => {
			activeItemIdRef.current = active ? id : null;
			forceUpdate({});
		}
	);

	return (
		<div className={`ti-sortable-item-area ti-sortable-item-area-${id}`}>
			<div
				className={
					visible ? 'ti-sortable-item' : 'ti-sortable-item hidden'
				}
			>
				<Button
					isTertiary
					icon={visible ? 'visibility' : 'hidden'}
					label={__('Toggle', 'neve')}
					showTooltip={true}
					className="ti-sortable-item-toggle"
					onClick={() => toggle(id)}
				/>
				<div className="ti-sortable-item-label">{elements[id]}</div>
				<div
					className={`ti-sortable-handle${
						isActive ? ' keyboard-active' : ''
					}`}
				>
					<Tooltip text={__('Drag to Reorder', 'neve')}>
						<button
							ref={handleRef}
							aria-label={__('Drag to Reorder', 'neve')}
							aria-grabbed={isActive ? 'true' : 'false'}
							className="ti-sortable-handle-btn"
							onClick={(e) => e.preventDefault()}
							onKeyDown={handleKeyDown}
							onBlur={handleBlur}
							tabIndex={0}
							type="button"
						>
							<span className="dashicons dashicons-menu" />
						</button>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

const SortableItems = (props) => {
	const { value, elements, updateElement, toggle } = props;
	const activeItemIdRef = useRef(null);
	const [, forceUpdate] = useState({});

	const handleMove = (fromIndex, toIndex) => {
		if (fromIndex === toIndex) {
			return;
		}
		const newValue = [...value];
		const [moved] = newValue.splice(fromIndex, 1);
		newValue.splice(toIndex, 0, moved);
		updateElement(newValue);
	};

	return (
		<div>
			<ReactSortable
				className="neve-meta-control neve-meta-sortable-items"
				list={value}
				setList={updateElement}
				handle=".ti-sortable-handle"
				animation={300}
			>
				{value.map((item, index) => (
					<SortableItem
						key={item.id}
						item={item}
						index={index}
						total={value.length}
						elements={elements}
						toggle={toggle}
						onMove={handleMove}
						activeItemIdRef={activeItemIdRef}
						forceUpdate={forceUpdate}
					/>
				))}
			</ReactSortable>
		</div>
	);
};

export default withDispatch((dispatch, props) => {
	const { stateUpdate, id } = props;
	return {
		updateElement(value) {
			const dbValue = value
				.filter(function (element) {
					return element.visible === true;
				})
				.map((element) => {
					return element.id;
				});
			stateUpdate(id, JSON.stringify(dbValue));
			dispatch('core/editor').editPost({
				meta: { [props.id]: JSON.stringify(dbValue) },
			});
		},

		toggle(currentValue) {
			const { value } = props;
			const updatedValue = value.map(function (element) {
				if (element.id === currentValue) {
					element.visible = !element.visible;
				}
				return element;
			});
			this.updateElement(updatedValue);
		},
	};
})(SortableItems);
