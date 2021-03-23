import { BuilderContentInterface } from '../../@types/utils';

export const slotKeys = ['left', 'c-left', 'center', 'c-right', 'right'];

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

export const arraysAreIdentical = (
	array1: Array<unknown>,
	array2: Array<unknown>
): boolean => {
	if (array1 === array2) {
		return true;
	}
	if (!Array.isArray(array1) || !Array.isArray(array2)) {
		return false;
	}
	if (array1 === null || array2 === null) {
		return false;
	}
	if (array1.length !== array2.length) {
		return false;
	}

	return JSON.stringify(array1) === JSON.stringify(array2);
};

export const fillSlots = (
	fullValue: BuilderContentInterface
): BuilderContentInterface => {
	Object.keys(fullValue).forEach((device) => {
		Object.keys(fullValue[device]).forEach((row) => {
			if (row === 'sidebar') {
				if (!Array.isArray(fullValue[device][row])) {
					fullValue[device][row] = [];
				}

				return false;
			}
			slotKeys.forEach((slot) => {
				if (!Array.isArray(fullValue[device][row][slot])) {
					fullValue[device][row][slot] = [];
				}
			});
		});
	});

	return fullValue;
};

export const maybeParseJson: (
	value: string | Record<string, unknown> | []
) => Record<string, unknown> = (input) => {
	if (typeof input !== 'string') {
		return input;
	}
	try {
		JSON.parse(input);
	} catch (error) {
		return input;
	}
	return JSON.parse(input);
};
