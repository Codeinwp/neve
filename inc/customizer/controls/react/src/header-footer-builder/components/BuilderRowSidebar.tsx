import { Button } from '@wordpress/components';
import { cog } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import React from 'react';
import RowSlot from './RowSlot';
import { BuilderItemInterface, RowTypes } from '../../@types/utils';

interface Props {
	rowId: RowTypes;
	rowItems: BuilderItemInterface[];
}

const BuilderRow: React.FC<Props> = ({ rowId, rowItems }) => {
	const focusRowSettings = () => {
		//@todo: implement this.
	};

	const rowClasses = classnames('row', `row-${rowId}`, {});

	return (
		<div className={rowClasses}>
			<Button
				icon={cog}
				iconSize={20}
				className="row-settings"
				onClick={focusRowSettings}
				label={__('Row Settings', 'neve')}
			/>
			<div className="row-inner">
				<div className="row-content">
					<RowSlot
						rowId={rowId}
						id={'sidebar'}
						key={'sidebar'}
						slotItems={rowItems}
						isSidebar={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default BuilderRow;
