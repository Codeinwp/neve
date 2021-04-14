import React from 'react';
import { BuilderContentInterface, RowTypes } from '../../@types/utils';
import Row from './Row';
import ResponsiveSwitches from './ResponsiveSwitches';
import classnames from 'classnames';
import { useContext } from '@wordpress/element';
import BuilderContext from '../BuilderContext';

type Props = {
	value: BuilderContentInterface;
	hidden: boolean;
};

const Builder: React.FC<Props> = ({ value, hidden }) => {
	const { device, builder, hasColumns } = useContext(BuilderContext);
	const { rows } = window.NeveReactCustomize.HFG[builder];
	const items = { ...value[device] };

	const builderClasses = classnames('neve-builder', {
		hide: hidden,
		'columns-builder': hasColumns,
	});

	return (
		<div className={builderClasses}>
			<ResponsiveSwitches device={device} />
			<div className="rows-wrapper">
				{rows.sidebar && device !== 'desktop' && (
					<div className="vertical-rows">
						<Row rowId="sidebar" items={items.sidebar} />
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
								rowId={rowId as RowTypes}
								items={items[rowId] || []}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Builder;
