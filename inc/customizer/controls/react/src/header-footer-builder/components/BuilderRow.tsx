import { useContext } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { cog } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import React from 'react';
import RowSlot from './RowSlot';
import { BuilderRowInterface, RowTypes } from '../../@types/utils';

interface Props {
	rowId: RowTypes;
	rowItems: BuilderRowInterface;
}

const BuilderRow: React.FC<Props> = ({ rowId, rowItems }) => {
	const hasCenterItems = () => {
		if (!rowItems) {
			return false;
		}

		if (!rowItems.center) {
			return false;
		}

		return rowItems.center.length >= 1;
	};

	const focusRowSettings = () => {
		//@todo: implement this.
	};

	const slots = ['left', 'centerLeft', 'center', 'centerRight', 'right'];

	const Slots: React.FC = () => (
		<div className="row-content">
			{slots.map((slotId, slotIndex) => {
				const isCenterSideSlot = ['centerLeft', 'centerRight'].includes(
					slotId
				);

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

	const rowClasses = classnames('row', `row-${rowId}`, {
		'with-center-items': hasCenterItems(),
		'no-center-items': !hasCenterItems(),
	});

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
