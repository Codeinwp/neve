import { DragDropContext } from 'react-beautiful-dnd';
import BuilderRow from './BuilderRow';
import { BuilderContext } from '../BuilderContext';
import { useContext } from '@wordpress/element';

import arrayMove from 'array-move';

const Builder = () => {
	const { draggableItems, setDraggableItems, currentDevice } = useContext(
		BuilderContext
	);

	const onDragEnd = (result) => {
		const { source, destination, draggableId } = result;

		if (!destination) {
			return false;
		}

		const nextItems = { ...draggableItems[currentDevice] };

		//Same container.
		if (source.droppableId === destination.droppableId) {
			nextItems[destination.droppableId] = arrayMove(
				nextItems[source.droppableId],
				source.index,
				destination.index
			);

			setDraggableItems({ ...draggableItems, currentDevice: nextItems });

			return false;
		}

		//Other Container.
		const tempItem = nextItems[source.droppableId][source.index];
		nextItems[source.droppableId].splice(source.index, 1);
		nextItems[destination.droppableId].splice(
			destination.index,
			0,
			tempItem
		);

		setDraggableItems({ ...draggableItems, currentDevice: nextItems });
	};

	const currentDeviceRows = draggableItems[currentDevice];

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			{Object.keys(currentDeviceRows).map((rowId, rowIndex) => {
				return (
					<BuilderRow
						rowId={rowId}
						key={rowIndex}
						index={rowIndex}
						rowItems={currentDeviceRows[rowId]}
					/>
				);
			})}
		</DragDropContext>
	);
};

export default Builder;
