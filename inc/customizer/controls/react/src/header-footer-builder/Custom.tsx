import { useState, useEffect, useMemo } from '@wordpress/element';
import { BuilderContext } from './BuilderContext';
import { BuilderContentInterface } from '../@types/utils';
import { NewHeader } from './oldData';
import Builder from './components/Builder';
import Sidebar from './components/Sidebar';
import BuilderResponsiveSwitcher from './components/BuilderResponsiveSwitcher';
import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import arrayMove from 'array-move';
import classnames from 'classnames';
import { getUsedItemsFromItems } from './common/utils';

const Custom: React.FC = () => {
	const [currentBuilder, setCurrentBuilder] = useState<string>('header');
	const [currentDevice, setCurrentDevice] = useState<string>('mobile');
	const [
		draggableItems,
		updateDraggableItems,
	] = useState<BuilderContentInterface>(NewHeader);
	const [usedItems, setUsedItems] = useState<string[]>(
		getUsedItemsFromItems(draggableItems, currentDevice)
	);

	const [dragging, setDragging] = useState(false);

	const setDraggableItems = (items: BuilderContentInterface) => {
		updateDraggableItems(items);
		setUsedItems(getUsedItemsFromItems(items, currentDevice));
	};

	const onDragEnd = (result: DropResult) => {
		const { source, destination, draggableId } = result;

		if (!destination) {
			return false;
		}

		const nextItems = { ...draggableItems[currentDevice] };

		const composedDestination = destination.droppableId.split('|');
		const destRow = composedDestination[0];
		const destSlot = composedDestination[1];

		// Create the row if it's not in the data array.
		if (!nextItems[destRow]) {
			nextItems[destRow] = {};
		}

		// Create the slot if it's not in the data array.
		if (!nextItems[destRow][destSlot]) {
			nextItems[destRow][destSlot] = [];
		}

		//Dropped from sidebar.
		if (source.droppableId === 'components-sidebar') {
			nextItems[destRow][destSlot].splice(destination.index, 0, {
				id: draggableId,
			});
			setDraggableItems({ ...draggableItems, currentDevice: nextItems });
			return false;
		}

		const composedSource = source.droppableId.split('|');
		const sourceRow = composedSource[0];
		const sourceSlot = composedSource[1];

		//Same container.
		if (source.droppableId === destination.droppableId) {
			nextItems[sourceRow][sourceSlot] = arrayMove(
				nextItems[sourceRow][sourceSlot],
				source.index,
				destination.index
			);

			setDraggableItems({ ...draggableItems, currentDevice: nextItems });

			return false;
		}

		//Other Container.
		const tempItem = nextItems[sourceRow][sourceSlot][source.index];
		nextItems[sourceRow][sourceSlot].splice(source.index, 1);
		nextItems[destRow][destSlot].splice(destination.index, 0, tempItem);

		setDraggableItems({ ...draggableItems, currentDevice: nextItems });
	};

	const wrapClasses = 'test'; // classnames({ 'is-dragging': dragging });

	return (
		<div className={wrapClasses}>
			<BuilderContext.Provider
				value={{
					draggableItems,
					setDraggableItems,
					currentDevice,
					setCurrentDevice,
					setCurrentBuilder,
					currentBuilder,
				}}
			>
				<DragDropContext
					onDragEnd={onDragEnd}
					onBeforeCapture={() => setDragging(true)}
				>
					<Sidebar items={draggableItems} usedItems={usedItems} />
					<div className="hfg-builder">
						<BuilderResponsiveSwitcher>
							<Builder />
						</BuilderResponsiveSwitcher>
					</div>
				</DragDropContext>
			</BuilderContext.Provider>
		</div>
	);
};

export default Custom;
