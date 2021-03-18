import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { cog } from '@wordpress/icons';
import { Droppable } from 'react-beautiful-dnd';
import classnames from 'classnames';

import BuilderItem from './BuilderItem';

import { BuilderContext } from '../BuilderContext';

const BuilderRow = ({ index, rowId }) => {
	const { draggableItems, setDraggableItems } = useContext(BuilderContext);

	const focusRowSettings = () => {
		console.log('Row Settings');
	};

	return (
		<div key={index} className="row">
			<Button
				icon={cog}
				iconSize={20}
				className="row-settings"
				onClick={focusRowSettings}
				label={__('Row Settings', 'neve')}
			/>
			<div className="row-inner">
				<Droppable droppableId={rowId} direction="horizontal">
					{(provided, snapshot) => {
						const { isDraggingOver } = snapshot;
						const rowClasses = classnames(
							'row-content',
							'droppable',
							{ over: isDraggingOver }
						);
						return (
							<div className={rowClasses} ref={provided.innerRef}>
								{draggableItems[rowId].map(
									(itemData, itemIndex) => (
										<BuilderItem
											index={itemIndex}
											key={itemIndex}
											{...itemData}
										/>
									)
								)}
								{provided.placeholder && (
									<span className="item-placeholder">
										{provided.placeholder}
									</span>
								)}
							</div>
						);
					}}
				</Droppable>
			</div>
		</div>
	);
};

export default BuilderRow;
