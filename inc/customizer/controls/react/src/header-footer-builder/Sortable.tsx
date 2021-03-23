import React from 'react';
import { BuilderContentInterface, LayoutUpdate } from '../@types/utils';

import Row from './components/Row';
import ResponsiveSwitches from './components/ResponsiveSwitches';

interface Props {
	value: BuilderContentInterface;
	onUpdate: LayoutUpdate;
	setDevice: (val: string) => void;
	onDragStart: () => void;
	device: string;
	builder: string;
	dragging: boolean;
}

const Sortable: React.FC<Props> = (props) => {
	const {
		value,
		onUpdate,
		device,
		builder,
		setDevice,
		dragging,
		onDragStart,
	} = props;
	const { rows } = window.NeveReactCustomize.HFG[builder];
	const items = value[device];

	return (
		<div>
			<div className="neve-builder">
				<ResponsiveSwitches
					builder={builder}
					device={device}
					setDevice={setDevice}
				/>
				<div className="rows-wrapper">
					{rows.sidebar && device !== 'desktop' && (
						<div className="vertical-rows">
							<Row
								rowId="sidebar"
								device={device}
								builder={builder}
								items={items.sidebar}
								updateLayout={onUpdate}
								onDragStart={onDragStart}
								dragging={dragging}
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
									updateLayout={onUpdate}
									onDragStart={onDragStart}
									dragging={dragging}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sortable;
