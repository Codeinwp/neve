import React from 'react';
import { useContext } from '@wordpress/element';

import { BuilderContext } from '../BuilderContext';
import BuilderRow from './BuilderRow';
import BuilderRowSidebar from './BuilderRowSidebar';

const Builder: React.FC = () => {
	const { draggableItems, currentDevice, currentBuilder } = useContext(
		BuilderContext
	);

	const currentBuilderProps = window.HFG_Layout_Builder[currentBuilder];

	const { rows } = currentBuilderProps;
	const currentDeviceItems = draggableItems[currentDevice];

	return (
		<div className="rows-wrapper">
			{rows.sidebar && (
				<div className="vertical-rows">
					<BuilderRowSidebar
						rowId="sidebar"
						key="sidebar"
						rowItems={currentDeviceItems.sidebar}
					/>
				</div>
			)}
			<div className="horizontal-rows">
				{Object.keys(rows).map((rowId, rowIndex) => {
					if (rowId === 'sidebar') {
						return null;
					}
					return (
						<BuilderRow
							rowId={rowId}
							key={rowIndex}
							rowItems={currentDeviceItems[rowId]}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Builder;
