import { Droppable } from 'react-beautiful-dnd';
import classnames from 'classnames';
import BuilderItem from './BuilderItem';
import React from 'react';

import { BuilderItemInterface, RowTypes, SlotTypes } from '../../@types/utils';

interface Props {
	id: SlotTypes;
	rowId: RowTypes;
	slotItems: BuilderItemInterface[];
	isSidebar: boolean;
}

const RowSlot: React.FC<Partial<Props>> = ({
	rowId,
	id,
	slotItems,
	isSidebar,
}) => {
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
		<Droppable
			droppableId={`${rowId}|${id}`}
			direction={isSidebar ? 'vertical' : 'horizontal'}
		>
			{(provided, snapshot) => {
				const { isDraggingOver } = snapshot;
				const innerRowClasses = classnames('droppable', id, {
					over: isDraggingOver,
				});
				return (
					<div className={innerRowClasses} ref={provided.innerRef}>
						{provided.placeholder}
						{/*{provided.placeholder && (
							<span className="item-placeholder">
							</span>
						)}*/}
						{renderItems()}
					</div>
				);
			}}
		</Droppable>
	);
};

RowSlot.defaultProps = {
	isSidebar: false,
};

export default RowSlot;
