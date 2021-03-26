import { BuilderContentInterface } from '../../@types/utils';
import { isArray } from 'util';

export const slotKeys = ['left', 'c-left', 'center', 'c-right', 'right'];

export const getUsedItemsFromItems = (
	items: BuilderContentInterface
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

export const fillSlots = (
	fullValue: BuilderContentInterface
): BuilderContentInterface => {
	const a = { ...fullValue };
	console.clear();
	console.log(a);
	Object.keys(a).forEach((device) => {
		console.group(device);
		Object.keys(a[device]).forEach((row) => {
			console.log(row, a[device][row]);
			if (row === 'sidebar') {
				if (!Array.isArray(a[device][row])) {
					a[device][row] = [];

					console.error('Sidebar is not array.');
				}

				return;
			}

			let temp: Record<string, unknown>[] = [];

			if (typeof a[device][row] === 'object' && a[device][row] !== null) {
				temp = a[device][row];
				a[device][row] = {};
				console.log('Temp is now', temp);
			}

			slotKeys.forEach((slot) => {
				if (!a[device][row][slot]) {
					a[device][row][slot] = [];

					if (slot === 'left') {
						a[device][row][slot] = temp;
					}
				}

				console.log(
					`[${device}]-[${row}]-[${slot}]`,
					a[device][row][slot]
				);
			});
			// console.groupEnd();

			// 		/*
			//
			// 		if (
			// 			JSON.stringify(Object.keys(fullValue[device][row]).sort()) !==
			// 			JSON.stringify(slotKeys.sort())
			// 		) {
			// 			console.log('diff for:', { device, row });
			// 			temp = Object.values(fullValue[device][row]);
			// 			console.log(temp);
			// 			console.log('---------------');
			// 		}
			//
			// 		slotKeys.forEach((slot) => {
			// 			if (!Array.isArray(fullValue[device][row][slot])) {
			// 				fullValue[device][row][slot] = [];
			// 			}
			// 			if (temp.length > 0) {
			// 				fullValue[device][row][slot] = [
			// 					...fullValue[device][row][slot],
			// 					...temp,
			// 				];
			//
			// 				temp = [];
			// 			}
			// 		});*/
		});
		console.groupEnd();
	});

	return a;
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
