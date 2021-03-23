import React from 'react';
import { BuilderItemInterface, LayoutUpdate } from '../../@types/utils';
import { ReactSortable } from 'react-sortablejs';
import BuilderItem from './BuilderItem';

interface Props {
	slotId: string;
	rowId: string;
	builder: string;
	items: BuilderItemInterface[];
	updateLayout: LayoutUpdate;
	onDragStart: () => void;
	dragging: boolean;
}

const Slot: React.FC<Props> = (props) => {
	const { items, slotId, rowId, builder, updateLayout, onDragStart } = props;

	return (
		<ReactSortable
			animation={60}
			className={`droppable ${slotId}`}
			onStart={onDragStart}
			group={builder}
			list={items}
			setList={(newState) => {
				const nextState = newState.map((item) => {
					const { x, y, id, width, height } = item;
					return { x, y, width, height, id };
				});
				updateLayout(rowId, slotId, nextState);
			}}
		>
			{items.length > 0 &&
				items.map((item, index) => {
					return (
						<BuilderItem
							key={index}
							builder={builder}
							componentId={item.id}
						/>
					);
				})}
		</ReactSortable>
	);
};

export default Slot;
