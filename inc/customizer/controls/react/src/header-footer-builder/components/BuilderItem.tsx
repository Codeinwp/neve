import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { closeSmall, cog } from '@wordpress/icons';
import { Draggable, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { BuilderContext } from '../BuilderContext';
import React from 'react';
import classnames from 'classnames';
import { RowTypes, SlotTypes } from '../../@types/utils';

interface Props {
	id: string;
	index: number;
	slotId: SlotTypes;
	rowId: RowTypes;
}

const BuilderItem: React.FC<Props> = ({ rowId, slotId, id, index }) => {
	const {
		currentBuilder,
		draggableItems,
		setDraggableItems,
		currentDevice,
	} = useContext(BuilderContext);
	const componentData = window.HFG_Layout_Builder[currentBuilder].items[id];
	const { name } = componentData;

	const openComponentPanel = () => {
		console.log(`Focus Panel:`, id);
	};

	const removeComponent = () => {
		const nextItems = { ...draggableItems[currentDevice] };
		nextItems[rowId][slotId].splice(index, 1);
		setDraggableItems({ ...draggableItems, currentDevice: nextItems });
	};

	const getStyle = (
		style: Record<string, string | number>,
		snapshot: DraggableStateSnapshot
	): Record<string, string | number> => {
		if (!snapshot.isDropAnimating) {
			return style;
		}
		return {
			...style,
			// cannot be 0, but make it super tiny
			transitionDuration: `0.001s`,
		};
	};

	return (
		<Draggable key={id} draggableId={id} index={index}>
			{(provided, snapshot) => {
				const { isDragging } = snapshot;

				return (
					<div
						id={id}
						className="draggable builder-item"
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						style={getStyle(
							provided.draggableProps.style,
							snapshot
						)}
					>
						<div
							className={classnames('builder-item-inner', {
								dragging: isDragging,
							})}
						>
							<span>{name}</span>
							{!isDragging && (
								<div className="actions">
									<Button
										icon={cog}
										iconSize={16}
										onClick={openComponentPanel}
										label={__('Component Settings', 'neve')}
									/>
									<Button
										icon={closeSmall}
										iconSize={16}
										onClick={removeComponent}
										label={__('Remove Component', 'neve')}
									/>
								</div>
							)}
						</div>
					</div>
				);
			}}
		</Draggable>
	);
};

export default BuilderItem;
