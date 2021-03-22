import { BuilderContentInterface } from '../../@types/utils';

export const getUsedItemsFromItems = (
	items: BuilderContentInterface,
	currentDevice: string
): string[] => {
	const nextItems: string[] = [];
	// Get the items currently inside the builder and save them in an array.
	Object.values(items[currentDevice]).forEach((value) => {
		if (Array.isArray(value) && value.length) {
			value.forEach((item) => {
				if (!item.id) {
					return false;
				}
				nextItems.push(item.id);
			});
			return false;
		}
		if (typeof value === 'object' && value !== null) {
			Object.values(value).forEach((rowSlotItems) => {
				if (Array.isArray(rowSlotItems)) {
					rowSlotItems.forEach((item) => nextItems.push(item.id));
				}
			});
		}
	});
	return nextItems;
};
