import React from 'react';
import {
	BuilderItemInterface,
	BuilderRowInterface,
	LayoutUpdate,
	RowTypes,
} from '../../@types/utils';
import { Button } from '@wordpress/components';
import { cog } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import Slot from './Slot';
import classnames from 'classnames';

interface Props {
	items: BuilderRowInterface & BuilderItemInterface[];
	updateLayout: LayoutUpdate;
	rowId: RowTypes;
	builder: string;
	device: string;
	onDragStart: () => void;
	dragging: boolean;
}

const Row: React.FC<Props> = (props) => {
	const { items, rowId, dragging } = props;

	const focusRowSection = (id: string) => {
		// @todo implement this.
		window.wp.customize.section.focus(id);
	};

	if (rowId === 'sidebar') {
		return (
			<div className={`row ${rowId}`}>
				<Button
					icon={cog}
					iconSize={18}
					className="row-settings"
					labe={__('Row Setting', 'neve')}
					onClick={() => focusRowSection(rowId)}
				/>
				<div className="row-inner">
					<Slot slotId={rowId} {...props} />
				</div>
			</div>
		);
	}

	const hasCenterItems = items.center && items.center.length > 0;
	const centerItemsClass = hasCenterItems ? 'has-center' : 'no-center';
	const centerWrapClass = classnames('slots-wrap', 'slots-center-wrap', {
		expanded: dragging,
	});
	return (
		<div className={`row ${rowId} ${centerItemsClass}`}>
			<Button
				icon={cog}
				iconSize={18}
				className="row-settings"
				onClick={() => focusRowSection(rowId)}
			/>
			<div className="inner-row">
				<div className="slots-wrap slots-left-wrap">
					{['left', 'c-left'].map((slotId, index) => {
						return (
							<Slot
								{...props}
								key={index}
								slotId={slotId}
								items={items[slotId]}
							/>
						);
					})}
				</div>
				<div className={centerWrapClass}>
					<Slot {...props} slotId={'center'} items={items.center} />
				</div>
				<div className="slots-wrap slots-right-wrap">
					{['c-right', 'right'].map((slotId, index) => {
						return (
							<Slot
								{...props}
								key={index}
								slotId={slotId}
								items={items[slotId]}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Row;
