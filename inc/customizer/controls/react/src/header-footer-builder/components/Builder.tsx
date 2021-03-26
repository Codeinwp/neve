import React from 'react';
import { BuilderActions, BuilderContentInterface } from '../../@types/utils';

import Row from './Row';
import ResponsiveSwitches from './ResponsiveSwitches';

interface Props {
	value: BuilderContentInterface;
	device: string;
	builder: string;
	dragging: boolean;
	actions: BuilderActions;
	hidden: boolean;
}

const Builder: React.FC<Props> = (props) => {
	const { value, device, builder, dragging, actions, hidden } = props;
	const { rows } = window.NeveReactCustomize.HFG[builder];
	const items = { ...value[device] };

	return (
		<div>
			<div className={`neve-builder${hidden ? ' hide' : ''}`}>
				<ResponsiveSwitches
					builder={builder}
					device={device}
					actions={actions}
				/>
				<div className="rows-wrapper">
					{rows.sidebar && device !== 'desktop' && (
						<div className="vertical-rows">
							<Row
								rowId="sidebar"
								device={device}
								builder={builder}
								items={items.sidebar}
								dragging={dragging}
								actions={actions}
							/>
						</div>
					)}
					<div className="horizontal-rows">
						{Object.keys(rows).map((rowId, rowIndex) => {
							if (rowId === 'sidebar') {
								return null;
							}
							return (
								<Row
									key={rowIndex}
									rowId={rowId}
									device={device}
									builder={builder}
									items={items[rowId] || []}
									dragging={dragging}
									actions={actions}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Builder;
