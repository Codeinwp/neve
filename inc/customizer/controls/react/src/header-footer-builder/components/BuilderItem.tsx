import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { closeSmall, cog, handle } from '@wordpress/icons';
import { Draggable } from 'react-beautiful-dnd';
import { BuilderContext } from '../BuilderContext';
import React from 'react';

interface Props {
	id: string;
	index: number;
}

const BuilderItem: React.FC<Props> = ({ id, index }) => {
	const { currentBuilder } = useContext(BuilderContext);
	const componentData = window.HFG_Layout_Builder[currentBuilder].items[id];
	const { name } = componentData;

	const openComponentPanel = () => {
		console.log(`Focus Panel:`, id);
	};

	const removeComponent = () => {
		console.log(`Remove:`, id);
	};

	return (
		<Draggable key={id} draggableId={id} index={index}>
			{(provided, snapshot) => (
				<div
					id={id}
					className="draggable builder-item"
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<div className="builder-item-inner">
						<Button
							icon={handle}
							iconSize={16}
							className="drag-handle"
							label={__('Drag to move component', 'neve')}
							{...provided.dragHandleProps}
						/>
						<span>{name}</span>
						<div className="actions">
							<Button
								icon={cog}
								iconSize={16}
								onClick={openComponentPanel}
								label={__('Component Settings', 'neve')}
							/>
							<Button
								icon={closeSmall}
								iconSize={16}
								onClick={removeComponent}
								label={__('Remove Component', 'neve')}
							/>
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default BuilderItem;
