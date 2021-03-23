/* jshint esversion: 6 */
import React from 'react';
import Sortable from './Sortable';
import { useState } from '@wordpress/element';
import { WPCustomizeControl } from '../@types/customizer-control';
import {
	BuilderItemInterface,
	LayoutUpdate,
	StringObjectKeys,
} from '../@types/utils';
import { arraysAreIdentical, fillSlots, maybeParseJson } from './common/utils';

interface Props {
	control: WPCustomizeControl;
}

const HFGBuilder: React.FC<Props> = ({ control }) => {
	const { setting, params } = control;
	const [device, setDevice] = useState<string>('desktop');
	const [dragging, setDragging] = useState<boolean>(false);

	const builder = params.builderType;

	// Make sure we have all slots filled.
	const dbValue = fillSlots(maybeParseJson(setting.get()));
	const [value, setValue] = useState(dbValue);

	console.log(value);

	const updateLayout: LayoutUpdate = (row, zone, items) => {
		setDragging(false);

		if (row === 'sidebar') {
			updateSidebar(items);

			return false;
		}

		if (arraysAreIdentical(items, value[device][row][zone])) {
			return false;
		}

		const nextItems = { ...value[device] };
		const update = nextItems[row];
		const updateItems: Array<StringObjectKeys> = [];

		if (items.length > 0) {
			items.forEach((item) => {
				updateItems.push(item);
			});
		}

		if (zone === 'center') {
			const sideSlots = ['c-left', 'c-right'];
			sideSlots.forEach((sideSlot) => {
				if (!Array.isArray(update[sideSlot])) {
					return false;
				}
				if (update[sideSlot].length < 1) {
					return false;
				}

				const nextSlot = sideSlot === 'c-left' ? 'left' : 'right';

				update[sideSlot].forEach((itemToMove: StringObjectKeys) => {
					nextItems[row][nextSlot].push(itemToMove);
				});
				nextItems[row][sideSlot] = [];
			});
		}

		update[zone] = updateItems;
		nextItems[row][zone] = updateItems;

		const finalValue = { ...value, [device]: nextItems };

		// console.log('Updating State Because of:', { row, zone });

		setValue(finalValue);
		setting.set(finalValue);
	};

	const updateSidebar = (items: BuilderItemInterface[]) => {
		if (arraysAreIdentical(items, value[device].sidebar)) {
			return false;
		}

		const nextItems = { ...value[device] };
		const updateItems: Array<StringObjectKeys> = [];

		if (items.length > 0) {
			items.forEach((item) => {
				updateItems.push(item);
			});
		}

		nextItems.sidebar = updateItems;
		const finalValue = { ...value, [device]: nextItems };

		// console.log('Updating State Because of: ', 'sidebar');

		setValue(finalValue);
		setting.set(finalValue);
	};

	const onDragStart = () => {
		setDragging(true);
	};

	return (
		<Sortable
			value={value}
			device={device}
			builder={builder}
			onUpdate={updateLayout}
			setDevice={setDevice}
			onDragStart={onDragStart}
			dragging={dragging}
		/>
	);
};

export default HFGBuilder;
