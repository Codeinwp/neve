import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { closeSmall, cog, menu } from '@wordpress/icons';
import {
	Draggable,
	DraggableStateSnapshot,
	DraggingStyle,
} from 'react-beautiful-dnd';
import { BuilderContext } from '../BuilderContext';
import React from 'react';
import classnames from 'classnames';
import { RowTypes, SlotTypes, StringObjectKeys } from '../../@types/utils';

interface Props {
	id: string;
	index: number;
	slotId: SlotTypes;
	rowId: RowTypes;
	inSidebar?: boolean;
}

const BuilderItem: React.FC<Props> = ({
	rowId,
	slotId,
	id,
	index,
	inSidebar,
}) => {
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
		if (rowId === 'sidebar') {
			nextItems[rowId].splice(index, 1);
		} else {
			nextItems[rowId][slotId].splice(index, 1);
		}
		setDraggableItems({ ...draggableItems, currentDevice: nextItems });
	};

	const getStyle = (
		style: DraggingStyle,
		snapshot: DraggableStateSnapshot
	): DraggingStyle | StringObjectKeys => {
		if (!snapshot.isDropAnimating) {
			return style;
		}
		return {
			...style,
			transitionDuration: `0.001s`,
		};
	};

	return (
		<Draggable key={id} draggableId={id} index={index}>
			{(provided, snapshot) => {
				const { isDragging } = snapshot;
				const itemClasses = classnames('draggable', {
					'builder-item': !inSidebar,
					'sidebar-builder-item': inSidebar,
				});
				return (
					<div
						id={id}
						className={itemClasses}
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						style={getStyle(
							// @ts-ignore
							provided.draggableProps.style,
							snapshot
						)}
					>
						<div
							className={classnames('builder-item-inner', {
								dragging: isDragging,
							})}
						>
							{inSidebar && (
								<Button
									icon={menu}
									iconSize={16}
									label={__('Drag to builder', 'neve')}
									{...provided.dragHandleProps}
								/>
							)}
							<span>{name}</span>
							{!isDragging && !inSidebar && (
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
