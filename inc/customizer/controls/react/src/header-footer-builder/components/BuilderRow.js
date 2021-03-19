import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { cog } from '@wordpress/icons';

import classnames from 'classnames';

import RowSlot from './RowSlot';

const BuilderRow = ({ rowId, rowItems }) => {
	const focusRowSettings = () => {
		//@todo: implement this.
		console.log('Row Settings');
	};

	const slots = ['left', 'centerLeft', 'center', 'centerRight', 'right'];
	const rowClasses = classnames('row', `row-${rowId}`);

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
					{slots.map((slotId, slotIndex) => {
						const centerEmpty =
							!rowItems.center || rowItems.center.length < 1;
						const isCenterSideSlot = [
							'centerLeft',
							'centerRight',
						].includes(slotId);

						if (isCenterSideSlot && centerEmpty) {
							return null;
						}

						console.log(rowItems.center);
						return (
							<RowSlot
								id={slotId}
								key={slotId}
								slotItems={rowItems[slotId]}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default BuilderRow;
