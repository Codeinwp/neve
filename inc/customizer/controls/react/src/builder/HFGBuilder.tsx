import React from 'react';
import { createPortal, useEffect, useState } from '@wordpress/element';
import {
	BuilderActions,
	BuilderContentInterface,
	BuilderItemInterface,
	DeviceTypes,
	LayoutUpdate,
	RemoveItem,
	StringObjectKeys,
} from '../@types/utils';

import { arraysAreIdentical, getUsedItemsFromItems } from './common/utils';
import SidebarContent from './components/SidebarContent';
import Builder from './components/Builder';
import { ItemInterface } from 'react-sortablejs';

interface Props {
	hasColumns: boolean;
	onChange: (nextValue: BuilderContentInterface) => void;
	value: BuilderContentInterface;
	currentBuilder: string;
	portalMount: HTMLElement;
	hidden: boolean;
}

const HFGBuilder: React.FC<Props> = ({
	hasColumns,
	hidden,
	currentBuilder,
	onChange,
	value,
	portalMount,
}) => {
	const [device, setDevice] = useState<DeviceTypes>('desktop');
	const [dragging, setDragging] = useState<boolean>(false);
	const [currentSection, setCurrentSection] = useState<string>('');

	const getSidebarItems = () => {
		const usedItems = getUsedItemsFromItems(value[device]);
		const allItems = window.NeveReactCustomize.HFG[currentBuilder].items;
		return Object.keys(allItems)
			.filter((key) => !usedItems.includes(key))
			.map((itemId) => {
				return { id: itemId };
			})
			.sort((a, b) => {
				return a.id < b.id ? -1 : 1;
			});
	};

	const [sidebarItems, setSidebarItems] = useState<ItemInterface[]>(
		getSidebarItems()
	);

	const onDragStart = () => {
		setDragging(true);
	};
	const onDragEnd = () => {
		setDragging(false);
	};

	const updateLayout: LayoutUpdate = (row, slot, items) => {
		onDragEnd();

		if (row === 'sidebar') {
			updateSidebar(items);

			return false;
		}

		if (arraysAreIdentical(items, value[device][row][slot])) {
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

		if (slot === 'center' && items.length === 0 && !hasColumns) {
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
					if (nextSlot === 'left') {
						nextItems[row][nextSlot].push(itemToMove);
					} else {
						nextItems[row][nextSlot].unshift(itemToMove);
					}
				});
				nextItems[row][sideSlot] = [];
			});
		}

		update[slot] = updateItems;
		nextItems[row][slot] = updateItems;

		const finalValue = { ...value, [device]: nextItems };

		onChange(finalValue);
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

		onChange(finalValue);
	};

	const removeItem: RemoveItem = (row, slot, indexToRemove) => {
		const nextItems = { ...value[device] };
		if (row === 'sidebar') {
			nextItems[row].splice(indexToRemove, 1);
			const finalValue = { ...value, [device]: nextItems };
			onChange(finalValue);
			return false;
		}

		nextItems[row][slot].splice(indexToRemove, 1);

		if (slot === 'center' && nextItems[row][slot].length === 0) {
			const sideSlots = ['c-left', 'c-right'];
			sideSlots.forEach((sideSlot) => {
				if (!Array.isArray(nextItems[row][sideSlot])) {
					return false;
				}
				if (nextItems[row][sideSlot].length < 1) {
					return false;
				}

				const nextSlot = sideSlot === 'c-left' ? 'left' : 'right';

				nextItems[row][sideSlot].forEach(
					(itemToMove: StringObjectKeys) => {
						if (nextSlot === 'left') {
							nextItems[row][nextSlot].push(itemToMove);
						} else {
							nextItems[row][nextSlot].unshift(itemToMove);
						}
					}
				);
				nextItems[row][sideSlot] = [];
			});
		}
		const finalValue = { ...value, [device]: nextItems };
		onChange(finalValue);
	};

	const actions: BuilderActions = {
		updateLayout,
		onDragStart,
		onDragEnd,
		removeItem,
		setDevice,
		setSidebarItems,
	};

	/*
	 * Bind the device switchers to the device state.
	 */
	useEffect(() => {
		bindDeviceSwitching();
	}, []);

	/*
	 * Make sure we update the sidebar.
	 */
	useEffect(() => {
		setSidebarItems(getSidebarItems());
	}, [device, value[device]]);

	const bindDeviceSwitching = () => {
		window.wp.customize.bind('ready', () => {
			window.wp.customize.previewedDevice.bind(
				(newDevice: DeviceTypes) => {
					// No tablet context existent on builders.
					if (newDevice === 'tablet') {
						newDevice = 'mobile';
					}

					// If we don't have a value, don't switch context.
					if (!value[newDevice]) {
						return false;
					}

					setDevice(newDevice);
				}
			);

			window.wp.customize
				.state('expandedSection')
				.bind((expandedSection: StringObjectKeys) => {
					if (!expandedSection || expandedSection.id) {
						setCurrentSection('');
						return;
					}

					if (expandedSection.id) {
						setCurrentSection(expandedSection.id);
					}
				});
		});
	};

	return (
		<div>
			<div className={`neve-hfg-builder`}>
				<SidebarContent
					items={sidebarItems}
					builder={currentBuilder}
					actions={actions}
					dragging={dragging}
				/>
			</div>
			{createPortal(
				<Builder
					hasColumns={hasColumns}
					hidden={hidden}
					value={value}
					device={device}
					builder={currentBuilder}
					dragging={dragging}
					actions={actions}
					sidebarItems={sidebarItems}
					currentSection={currentSection}
				/>,
				portalMount
			)}
		</div>
	);
};

export default HFGBuilder;
