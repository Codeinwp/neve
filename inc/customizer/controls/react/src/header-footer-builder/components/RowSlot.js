import { Droppable } from 'react-beautiful-dnd';
import classnames from 'classnames';
import BuilderItem from './BuilderItem';

const RowSlot = ({ id, slotItems, rowId }) => {
	const renderItems = () => {
		if (!slotItems) {
			return null;
		}

		return slotItems.map((itemData, itemIndex) => {
			return (
				<BuilderItem index={itemIndex} key={itemIndex} {...itemData} />
			);
		});
	};

	return (
		<Droppable droppableId={id} direction="horizontal">
			{(provided, snapshot) => {
				const { isDraggingOver } = snapshot;
				const innerRowClasses = classnames('droppable', id, {
					over: isDraggingOver,
				});
				return (
					<div className={innerRowClasses} ref={provided.innerRef}>
						{renderItems()}
						{provided.placeholder && (
							<span className="item-placeholder">
								{provided.placeholder}
							</span>
						)}
					</div>
				);
			}}
		</Droppable>
	);
};

export default RowSlot;
