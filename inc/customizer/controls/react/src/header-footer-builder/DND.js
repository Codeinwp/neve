import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const DND = () => {
	const getItems = (count) =>
		Array.from({ length: count }, (v, k) => k).map((k) => ({
			id: `item-${k}`,
			content: `item ${k}`,
		}));

	const rows = ['top', 'middle', 'bottom'];

	const onDragEnd = (r) => {
		console.log(r);
	};

	const items = getItems(10);

	console.log(items);

	return (
		<div className="hfg-builder">
			<DragDropContext onDragEnd={onDragEnd}>
				{rows.map((row,index) => {
				<Droppable id={} ></Droppable>
				})}
			</DragDropContext>
		</div>
	);

	return (
		<div className="hfg-builder">
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="droppable" direction="horizontal">
					{(provided, snapshot) => (
						<div
							ref={provided.innerRef}
							// style={getListStyle(snapshot.isDraggingOver)}
							{...provided.droppableProps}
						>
							{getItems(10).map((item, index) => (
								<Draggable
									key={item.id}
									draggableId={item.id}
									index={index}
								>
									{(provided, snapshot) => (
										<div
											className="item"
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											// style={getItemStyle(
											// 	snapshot.isDragging,
											// 	provided.draggableProps.style
											// )}
										>
											{item.content}
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default DND;
