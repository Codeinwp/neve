import React, { PropsWithChildren } from 'react';
import { useContext, memo } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import { BuilderContext } from '../BuilderContext';
import { Droppable } from 'react-beautiful-dnd';
import { BuilderContentInterface } from '../../@types/utils';
import BuilderItem from './BuilderItem';

interface Props {
	items: BuilderContentInterface;
	usedItems: string[];
}

const Sidebar: React.FC<Props> = ({ items, usedItems }) => {
	const { currentBuilder, currentDevice } = useContext(BuilderContext);

	const builderItems = Object.keys(
		window.HFG_Layout_Builder[currentBuilder].items
	).filter((item) => !usedItems.includes(item));

	return (
		<div className="hfg-components">
			<p className="customize-control-description">
				{__('Available Components', 'neve')}
			</p>
			<Droppable
				droppableId={`components-sidebar`}
				direction="vertical"
				isDropDisabled={true}
			>
				{(provided, snapshot) => {
					return (
						<div className="components" ref={provided.innerRef}>
							{builderItems.map((itemID, index) => (
								<BuilderItem
									key={index}
									index={index}
									id={itemID}
									inSidebar={true}
									rowId={'components-sidebar'}
									slotId={'components-sidebar'}
								/>
							))}
							{provided.placeholder}
						</div>
					);
				}}
			</Droppable>
		</div>
	);
};

const shouldRerender = (
	prev: Readonly<PropsWithChildren<Props>>,
	next: Readonly<PropsWithChildren<Props>>
) => {
	const nextItems = next.usedItems.sort();
	const prevItems = prev.usedItems.sort();

	// Component re-renders if the items are different.
	nextItems.forEach((item, index) => {
		if (item !== prevItems[index]) {
			return true;
		}
	});

	// Component doesn't re-render if the items are equal.
	return false;
};
export default memo(Sidebar, shouldRerender);
