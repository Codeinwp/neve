import React from 'react';

import { useContext, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { BuilderContext } from '../BuilderContext';
import SidebarBuilderItem from './SidebarBuilderItem';
import { Droppable } from 'react-beautiful-dnd';
import { BuilderContentInterface } from '../../@types/utils';

interface Props {
	items: BuilderContentInterface;
	usedItems: string[];
}

const Sidebar: React.FC<Props> = ({ items, usedItems }) => {
	const { currentBuilder, currentDevice } = useContext(BuilderContext);

	console.log(usedItems);

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
								<SidebarBuilderItem
									key={index}
									index={index}
									id={itemID}
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

export default Sidebar;
