import { useState, useContext, createContext } from '@wordpress/element';
import arrayMove from 'array-move';
import { DragDropContext } from 'react-beautiful-dnd';
import { BuilderContext } from './BuilderContext';
import BuilderRow from './components/BuilderRow';

const items = {
	top: [
		{ id: 'item_1', title: 'Item 1' },
		{ id: 'item_2', title: 'Item 2' },
		{ id: 'item_3', title: 'Item 3' },
		{ id: 'item_4', title: 'Item 4' },
		{ id: 'item_5', title: 'Item 5' },
	],
	middle: [],
	bottom: [],
};

const Custom = () => {
	const [draggableItems, setDraggableItems] = useState(items);

	const onDragEnd = (result) => {
		//result: {
		//     "draggableId": "item_2",
		//     "source": {
		//         "index": 1,
		//         "droppableId": "top"
		//     },
		//     "destination": {
		//         "droppableId": "top",
		//         "index": 0
		//     },
		// }
		const { source, destination, draggableId } = result;

		if (!destination) {
			return false;
		}

		const nextItems = { ...draggableItems };

		//Same container.
		if (source.droppableId === destination.droppableId) {
			nextItems[destination.droppableId] = arrayMove(
				nextItems[source.droppableId],
				source.index,
				destination.index
			);

			setDraggableItems(nextItems);

			return false;
		}

		const tempItem = nextItems[source.droppableId][source.index];
		//Other Container.
		nextItems[source.droppableId].splice(source.index, 1);
		nextItems[destination.droppableId].splice(
			destination.index,
			0,
			tempItem
		);
	};

	return (
		<BuilderContext.Provider value={{ draggableItems, setDraggableItems }}>
			<DragDropContext onDragEnd={onDragEnd}>
				{Object.keys(draggableItems).map((rowId, rowIndex) => {
					return (
						<BuilderRow
							key={rowIndex}
							index={rowIndex}
							rowId={rowId}
						/>
					);
				})}
			</DragDropContext>
		</BuilderContext.Provider>
	);
};

export default Custom;
