import React from 'react';
import { BuilderActions, BuilderContentInterface } from '../../@types/utils';

import Row from './Row';
import ResponsiveSwitches from './ResponsiveSwitches';
import classnames from 'classnames';

interface Props {
	value: BuilderContentInterface;
	device: string;
	builder: string;
	dragging: boolean;
	actions: BuilderActions;
	hidden: boolean;
	hasColumns: boolean;
}

const Builder: React.FC<Props> = (props) => {
	const {
		value,
		device,
		builder,
		dragging,
		actions,
		hidden,
		hasColumns,
	} = props;
	const { rows } = window.NeveReactCustomize.HFG[builder];
	const items = { ...value[device] };

	const builderClasses = classnames('neve-builder', {
		hide: hidden,
		'columns-builder': hasColumns,
	});

	return (
		<div className={builderClasses}>
			<ResponsiveSwitches
				builder={builder}
				device={device}
				actions={actions}
			/>
			<div className="rows-wrapper">
				{rows.sidebar && device !== 'desktop' && (
					<div className="vertical-rows">
						<Row
							hasColumns={false}
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
								hasColumns={hasColumns}
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
	);
};

export default Builder;
