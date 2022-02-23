import React from 'react';
import {
	createPortal,
	lazy,
	Suspense,
	useEffect,
	useState,
} from '@wordpress/element';
import { Spinner } from '@wordpress/components';

import {
	BuilderActions,
	BuilderChangeEvent,
	BuilderContentInterface,
	DeviceTypes,
	LayoutUpdate,
	RemoveItem,
	StringObjectKeys,
} from '../@types/utils';

import {
	arraysAreIdentical,
	getUsedItemsFromItems,
	maybeParseJson,
	ROW_SCHEMA,
} from './common/utils';
import { ItemInterface } from 'react-sortablejs';
import BuilderContext from './BuilderContext';

const Builder = lazy(() => import('./components/Builder'));
const SidebarContent = lazy(() => import('./components/SidebarContent'));

type Props = {
	hasColumns: boolean;
	onChange: (nextValue: BuilderContentInterface) => void;
	value: BuilderContentInterface;
	builder: string;
	portalMount: HTMLElement;
	hidden: boolean;
	mounted: boolean;
};

const HFGBuilder: React.FC<Props> = ({
	hasColumns,
	builder,
	onChange,
	value,
	hidden,
	portalMount,
	mounted,
}) => {
	const [device, setDevice] = useState<DeviceTypes>('desktop');
	const [dragging, setDragging] = useState<boolean>(false);
	const [previewSidebar, togglePreviewSidebar] = useState<boolean>(false);
	const [currentSection, setCurrentSection] = useState<string>('');

	const getSidebarItems = (
		explicitValue: BuilderContentInterface | null = null
	) => {
		const usedValue = explicitValue || value;
		const allItems = window.NeveReactCustomize.HFG[builder].items;
		const usedItems =
			usedValue && usedValue[device]
				? getUsedItemsFromItems(usedValue[device])
				: Object.keys(allItems);
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

	const updateSidebarItems = () => {
		setSidebarItems([...getSidebarItems()]);
	};

	const explicitlyUpdateSidebarItemsWithThisValue = (
		explicitVal: BuilderContentInterface
	) => {
		setSidebarItems([...getSidebarItems(explicitVal)]);
	};

	const onDragStart = () => {
		setDragging(true);
	};
	const onDragEnd = () => {
		setDragging(false);
	};

	const updateLayout: LayoutUpdate = (row, slot, items) => {
		onDragEnd();

		const nextItems = { ...value[device] };
		const updateItems: Array<StringObjectKeys> = [...items];

		if (row === 'sidebar') {
			if (arraysAreIdentical(items, nextItems[row])) {
				return false;
			}

			nextItems[row] = updateItems;

			const finalValue = { ...value, [device]: nextItems };
			onChange(finalValue);
		} else {
			// Make sure row exists and has slots.
			if (!nextItems[row]) {
				nextItems[row] = ROW_SCHEMA;
			}

			if (arraysAreIdentical(items, nextItems[row][slot])) {
				return false;
			}

			const update = nextItems[row];

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
		}
	};

	const itemRemovedCleanup = (id: string) => {
		if (id === '') {
			return;
		}
		if (id === 'header_palette_switch') {
			localStorage.removeItem('neve_user_theme');
			window.wp.customize.previewer.refresh();
		}
	};

	const removeItem: RemoveItem = (row, slot, indexToRemove) => {
		const nextItems = { ...value[device] };
		if (row === 'sidebar') {
			itemRemovedCleanup(nextItems[row][indexToRemove].id);
			nextItems[row].splice(indexToRemove, 1);
			const finalValue = { ...value, [device]: nextItems };
			onChange(finalValue);
			return false;
		}

		itemRemovedCleanup(nextItems[row][slot][indexToRemove].id);

		nextItems[row][slot].splice(indexToRemove, 1);

		if (
			slot === 'center' &&
			nextItems[row][slot].length === 0 &&
			!hasColumns
		) {
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

	/*
	 * Bind the device switchers to the device state.
	 */
	useEffect(() => {
		bindDeviceSwitching();
		bindValueChanges();
	}, []);

	/*
	 * Make sure we update the sidebar.
	 */
	useEffect(() => {
		updateSidebarItems();
	}, [device]);

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
					if (!expandedSection) {
						setCurrentSection('');
						return;
					}

					if (!expandedSection.id) {
						setCurrentSection('');
						return;
					}

					setCurrentSection(expandedSection.id);
				});
		});
	};

	const bindValueChanges = () => {
		document.addEventListener(
			'neve-changed-builder-value',
			(e: BuilderChangeEvent) => {
				const { detail } = e;
				if (!detail) return false;
				const { id, value: builderValue } = detail;
				let actualValue = builderValue;

				if (!actualValue) {
					actualValue = { ...value };
				}

				if (!id || id !== builder) return false;

				const parsed = maybeParseJson(actualValue);

				onChange(parsed as BuilderContentInterface);
				explicitlyUpdateSidebarItemsWithThisValue(
					parsed as BuilderContentInterface
				);

				return false;
			}
		);
	};

	const actions: BuilderActions = {
		updateLayout,
		onDragStart,
		onDragEnd,
		removeItem,
		setDevice,
		setSidebarItems,
		togglePreviewSidebar,
		updateSidebarItems,
	};

	return (
		<BuilderContext.Provider
			value={{
				actions,
				sidebarItems,
				dragging,
				currentSection,
				builder,
				hasColumns,
				device,
				previewSidebar,
			}}
		>
			<div>
				<Suspense fallback={<Spinner />}>
					{mounted && (
						<>
							<div className={`neve-hfg-builder`}>
								<SidebarContent items={sidebarItems} />
							</div>
							{createPortal(
								<Builder
									hidden={hidden}
									value={value}
									portalMount={portalMount}
								/>,
								portalMount
							)}
						</>
					)}
				</Suspense>
			</div>
		</BuilderContext.Provider>
	);
};

export default HFGBuilder;
