import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { closeSmall, cog, handle } from '@wordpress/icons';

import { Draggable } from 'react-beautiful-dnd';

const BuilderItem = ({ id, title, index }) => {
	const openComponentPanel = () => {
		console.log(`Focus Panel:`, id);
	};

	const removeComponent = () => {
		console.log(`Remove:`, id);
	};

	return (
		<Draggable key={id} draggableId={id} index={index}>
			{(draggableProvided, snapshot) => (
				<div
					id={id}
					className="draggable builder-item"
					ref={draggableProvided.innerRef}
					{...draggableProvided.draggableProps}
				>
					<div className="builder-item-inner">
						<Button
							icon={handle}
							iconSize={16}
							className="drag-handle"
							label={__('Drag to move component', 'neve')}
							{...draggableProvided.dragHandleProps}
						/>
						<span>{title}</span>
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
