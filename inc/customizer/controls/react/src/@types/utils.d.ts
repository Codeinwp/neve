import { ItemInterface } from 'react-sortablejs';

interface StringObjectKeys {
	[key: string]: any;
}

export type RowTypes = 'top' | 'main' | 'bottom' | 'sidebar' | string;
export type SlotTypes = string &
	('left' | 'c-left' | 'center' | 'c-right' | 'right');

export type DeviceTypes = 'desktop' | 'mobile';

export interface BuilderItemInterface extends StringObjectKeys {
	height?: number;
	id: string;
	width?: number;
	x?: number;
	y?: number;
}

export interface BuilderRowInterface extends StringObjectKeys {
	left: BuilderItemInterface[];
	'c-left': BuilderItemInterface[];
	center: BuilderItemInterface[];
	'c-right': BuilderItemInterface[];
	right: BuilderItemInterface[];
}

export interface BuilderRowsInterface extends StringObjectKeys {
	top: BuilderRowInterface;
	main: BuilderRowInterface;
	bottom: BuilderRowInterface;
	sidebar?: BuilderItemInterface[];
}

export interface BuilderContentInterface extends StringObjectKeys {
	desktop?: BuilderRowsInterface;
	mobile?: BuilderRowsInterface;
}

interface HFGLayoutBuilderComponentProps extends StringObjectKeys {
	componentSlug: string;
	description: string | null;
	elementOrder: number;
	icon: string;
	id: string;
	name: string;
	previewImage: string | null;
	section: string;
	width: number;
}

interface HFGLayoutBuilderRowProps extends StringObjectKeys {
	description: string;
	title: string;
}

interface HFGLayoutBuilderProps extends StringObjectKeys {
	// eslint-disable-next-line camelcase
	control_id: string;
	devices: { desktop: 'Desktop'; mobile?: 'Mobile' };
	id: string;
	items: {
		[componentId: string]: HFGLayoutBuilderComponentProps;
	};
	panel: string;
	rows: {
		[rowId: string]: HFGLayoutBuilderRowProps;
	};
	section: string;
	title: string;
}

interface HFGLayoutBuilder extends StringObjectKeys {
	[key: string]: HFGLayoutBuilderProps;
}

type LayoutUpdate = (
	rowId: string,
	slotId: string,
	nextItems: BuilderItemInterface[]
) => void;

type RemoveItem = (rowId: string, slotId: string, itemIndex: number) => void;

interface BuilderActions {
	updateLayout: LayoutUpdate;
	onDragStart: () => void;
	onDragEnd: () => void;
	removeItem: RemoveItem;
	setDevice: (value: string) => void;
	setSidebarItems: (value: ItemInterface[]) => void;
}

declare global {
	interface Window {
		// eslint-disable-next-line camelcase
		NeveReactCustomize: {
			HFG: HFGLayoutBuilder;
		};
		wp: StringObjectKeys;
	}
}
