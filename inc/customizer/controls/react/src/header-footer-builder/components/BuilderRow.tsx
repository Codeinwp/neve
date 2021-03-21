import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { cog } from '@wordpress/icons';
import classnames from 'classnames';
import React from 'react';
import RowSlot from './RowSlot';
import { BuilderItemInterface, RowTypes } from '../../@types/utils';
import { useContext } from '@wordpress/element';

import { BuilderContext } from '../BuilderContext';

interface Props {
	rowId: RowTypes;
	rowItems: { [key: string]: BuilderItemInterface[] };
}

const BuilderRow: React.FC<Props> = ({ rowId, rowItems }) => {
	const { currentDevice } = useContext(BuilderContext);

	if (currentDevice !== 'mobile' && rowId === 'sidebar') {
		return null;
	}

	const focusRowSettings = () => {
		//@todo: implement this.
	};

	const slots = ['left', 'centerLeft', 'center', 'centerRight', 'right'];

	const rowClasses = classnames('row', `row-${rowId}`);

	const hasCenterItems = () => {
		if (!rowItems) {
			return false;
		}

		if (!rowItems.center) {
			return false;
		}

		return rowItems.center.length >= 1;
	};

	const Slots: React.FC = () => {
		if (rowId === 'sidebar') {
			return (
				<div className="row-content">
					<RowSlot
						rowId={rowId}
						id={'sidebar'}
						key={'sidebar'}
						slotItems={(rowItems && rowItems.sidebar) || []}
						isSidebar={true}
					/>
				</div>
			);
		}

		return (
			<div className="row-content">
				{slots.map((slotId, slotIndex) => {
					const isCenterSideSlot = [
						'centerLeft',
						'centerRight',
					].includes(slotId);

					if (isCenterSideSlot && !hasCenterItems()) {
						return null;
					}
					return (
						<RowSlot
							rowId={rowId}
							id={slotId}
							key={slotId}
							slotItems={(rowItems && rowItems[slotId]) || []}
						/>
					);
				})}
			</div>
		);
	};

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
				<Slots />
			</div>
		</div>
	);
};

export default BuilderRow;
