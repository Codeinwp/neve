import React from 'react';
import { BuilderActions, BuilderItemInterface } from '../../@types/utils';
import { ReactSortable } from 'react-sortablejs';
import BuilderItem from './BuilderItem';
import classnames from 'classnames';

interface Props {
	slotId: string;
	rowId: string;
	builder: string;
	items: BuilderItemInterface[];
	dragging: boolean;
	actions: BuilderActions;
	className?: string;
}

const Slot: React.FC<Props> = (props) => {
	const { items, slotId, rowId, builder, actions, className } = props;
	const { updateLayout, onDragStart } = actions;
	const slotClasses = classnames('droppable', slotId, className);
	return (
		<ReactSortable
			animation={60}
			className={slotClasses}
			onStart={onDragStart}
			group={builder}
			list={items}
			setList={(newState) => {
				const nextState = newState.map((item) => {
					const { x, y, id, width, height } = item;
					return { id };
				});
				updateLayout(rowId, slotId, nextState);
			}}
		>
			{items &&
				items.length > 0 &&
				items.map((item, index) => {
					return (
						<BuilderItem
							slot={slotId}
							row={rowId}
							key={index}
							index={index}
							builder={builder}
							componentId={item.id}
							actions={actions}
						/>
					);
				})}
		</ReactSortable>
	);
};

export default Slot;
