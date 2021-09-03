import { BuilderRowInterface, BuilderRowsInterface } from '../../@types/utils';

export const slotKeys = ['left', 'c-left', 'center', 'c-right', 'right'];

export const getUsedItemsFromItems = (
	items: BuilderRowsInterface
): string[] => {
	const nextItems: string[] = [];
	// Get the items currently inside the builder and save them in an array.
	Object.values(items).forEach((value) => {
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

export const maybeParseJson: (
	value: unknown
) => Record<string, unknown> | [] | string = (input) => {
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

export const ROW_SCHEMA: BuilderRowInterface = {
	left: [],
	'c-left': [],
	center: [],
	'c-right': [],
	right: [],
};
