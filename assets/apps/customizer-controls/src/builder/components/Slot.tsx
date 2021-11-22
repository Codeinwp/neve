import React from 'react';
import classnames from 'classnames';
import { ReactSortable } from 'react-sortablejs';

import { plus } from '@wordpress/icons';
import { Button } from '@wordpress/components';
import { useContext, useState } from '@wordpress/element';

import BuilderItem from './BuilderItem';
import BuilderContext from '../BuilderContext';
import ComponentsPopover from './ComponentsPopover';
import { BuilderItemType, RowTypes, SlotTypes } from '../../@types/utils';

type Props = {
	rowId: RowTypes;
	slotId: SlotTypes;
	items: BuilderItemType[];
	className?: string;
};

const Slot: React.FC<Props> = ({ items, slotId, rowId, className }) => {
	const { currentSection, builder, actions, dragging } =
		useContext(BuilderContext);
	const { updateLayout, onDragStart } = actions;

	const [popupOpen, setPopupOpen] = useState<boolean>(false);
	const slotClasses = classnames('droppable-wrap', slotId, className, {
		'has-popover': popupOpen,
		overflowed: items.length >= 3 && rowId !== 'sidebar',
	});

	const openPopup = () => setPopupOpen(true);
	const closePopup = () => setPopupOpen(false);

	return (
		<div className={slotClasses}>
			<ReactSortable
				animation={60}
				className={'droppable'}
				onStart={onDragStart}
				group={builder}
				list={items}
				setList={(newState) => {
					const nextState = newState.map((item) => {
						return { id: item.id };
					});
					updateLayout(rowId, slotId, nextState);
				}}
			>
				{items &&
					items.length > 0 &&
					items.map((item, index) => {
						return (
							<BuilderItem
								key={index}
								row={rowId}
								slot={slotId}
								index={index}
								componentId={item.id}
								currentSection={currentSection}
							/>
						);
					})}
			</ReactSortable>
			{!dragging && (
				<Button
					className="open-popover"
					onClick={openPopup}
					icon={plus}
					isPrimary
				/>
			)}
			{popupOpen && (
				<ComponentsPopover
					items={items}
					rowId={rowId}
					slotId={slotId}
					closePopup={closePopup}
				/>
			)}
		</div>
	);
};

export default Slot;
