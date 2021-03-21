import React from 'react';
import arrayMove from 'array-move';
import { useContext } from '@wordpress/element';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { BuilderContext } from '../BuilderContext';
import BuilderRow from './BuilderRow';

const Builder: React.FC = () => {
	const {
		draggableItems,
		setDraggableItems,
		currentDevice,
		currentBuilder,
	} = useContext(BuilderContext);

	const currentBuilderProps = window.HFG_Layout_Builder[currentBuilder];

	const { rows } = currentBuilderProps;

	const onDragEnd = (result: DropResult) => {
		const { source, destination, draggableId } = result;

		if (!destination) {
			return false;
		}

		const nextItems = { ...draggableItems[currentDevice] };

		const composedSource = source.droppableId.split('|');
		const composedDestination = destination.droppableId.split('|');

		const sourceRow = composedSource[0];
		const sourceSlot = composedSource[1];
		const destRow = composedDestination[0];
		const destSlot = composedDestination[1];

		console.log(destRow, destSlot);

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

		// Create the row if it's not in the data array.
		if (!nextItems[destRow]) {
			nextItems[destRow] = {};
		}

		// Create the slot if it's not in the data array.
		if (!nextItems[destRow][destSlot]) {
			nextItems[destRow][destSlot] = [];
		}

		//Other Container.
		const tempItem = nextItems[sourceRow][sourceSlot][source.index];
		nextItems[sourceRow][sourceSlot].splice(source.index, 1);
		nextItems[destRow][destSlot].splice(destination.index, 0, tempItem);

		setDraggableItems({ ...draggableItems, currentDevice: nextItems });
	};

	const currentDeviceItems = draggableItems[currentDevice];

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="rows-wrapper">
				{rows.sidebar && (
					<div className="vertical-rows">
						<BuilderRow
							rowId="sidebar"
							key="sidebar"
							rowItems={currentDeviceItems.sidebar}
						/>
					</div>
				)}
				<div className="horizontal-rows">
					{Object.keys(rows).map((rowId, rowIndex) => {
						if (rowId === 'sidebar') {
							return null;
						}
						return (
							<BuilderRow
								rowId={rowId}
								key={rowIndex}
								rowItems={currentDeviceItems[rowId]}
							/>
						);
					})}
				</div>
			</div>
		</DragDropContext>
	);
};

export default Builder;
