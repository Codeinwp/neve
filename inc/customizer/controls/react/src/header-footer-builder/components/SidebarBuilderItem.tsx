import { Draggable } from 'react-beautiful-dnd';
import React from 'react';

import { useContext } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { menu } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import { BuilderContext } from '../BuilderContext';

interface Props {
	id: string;
	index: number;
}

const SidebarBuilderItem: React.FC<Props> = ({ id, index }) => {
	const { currentBuilder } = useContext(BuilderContext);
	const componentData = window.HFG_Layout_Builder[currentBuilder].items[id];
	return (
		<Draggable key={id} draggableId={id} index={index}>
			{(provided, snapshot) => (
				<div
					className="draggable sidebar-builder-item"
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<Button
						icon={menu}
						iconSize={16}
						label={__('Drag to builder', 'neve')}
						{...provided.dragHandleProps}
					/>
					{componentData.name}
				</div>
			)}
		</Draggable>
	);
};

export default SidebarBuilderItem;
