import { ItemInterface } from 'react-sortablejs';
import { Dispatch, SetStateAction } from 'react';
import Dashicon from '@wordpress/components/dashicon';

interface StringObjectKeys {
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	[key: string]: any;
}

export type RowTypes = 'top' | 'main' | 'bottom' | 'sidebar';
export type SlotTypes =
	| 'left'
	| 'c-left'
	| 'center'
	| 'c-right'
	| 'right'
	| 'sidebar';

export type DeviceTypes = string & (keyof BuilderContentInterface | 'tablet');

export type BuilderItemType = {
	height?: number;
	id: string;
	width?: number;
	x?: number;
	y?: number;
};

export interface BuilderRowInterface extends StringObjectKeys {
	left: BuilderItemType[];
	'c-left': BuilderItemType[];
	center: BuilderItemType[];
	'c-right': BuilderItemType[];
	right: BuilderItemType[];
}

export interface BuilderRowsInterface extends StringObjectKeys {
	top: BuilderRowInterface;
	main: BuilderRowInterface;
	bottom: BuilderRowInterface;
	sidebar?: BuilderItemType[];
}

export interface BuilderContentInterface extends StringObjectKeys {
	desktop: BuilderRowsInterface;
	mobile?: BuilderRowsInterface;
}

type HFGLayoutBuilderComponentProps = {
	componentSlug: string;
	description: string | null;
	elementOrder: number;
	icon: string;
	id: string;
	name: string;
	previewImage: string | null;
	section: string;
	width: number;
	fromTheme: boolean;
};

type HFGLayoutBuilderRowProps = {
	description: string;
	title: string;
};

type HFGLayoutBuilderProps = {
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
	upsells: { icon: Dashicon.Icon; name: string }[];
};

type HFGLayoutBuilder = {
	[key: string]: HFGLayoutBuilderProps;
};

type LayoutUpdate = (
	rowId: string,
	slotId: string,
	nextItems: BuilderItemType[]
) => void;

type RemoveItem = (rowId: string, slotId: string, itemIndex: number) => void;

type BuilderActions = {
	updateLayout: LayoutUpdate;
	onDragStart: () => void;
	onDragEnd: () => void;
	removeItem: RemoveItem;
	setDevice: Dispatch<SetStateAction<DeviceTypes>>;
	setSidebarItems: (value: ItemInterface[]) => void;
	togglePreviewSidebar: (value: boolean) => void;
	updateSidebarItems: () => void;
};

type TrackingData = {
	block?: string;
	env?: string;
	action?: string;
	feature?: string;
	groupID?: string;
	featureComponent?: string;
	featureValue?: string | number | Record<string, unknown>;
	hasOpenAIKey?: boolean;
	usedTheme?: string;
};

type EventResponse = {
	error?: string;
	success?: boolean;
	response?: any;
};

type EventOptions = {
	directSave?: boolean;
	consent?: boolean;
	refreshTimer?: boolean;
	sendNow?: boolean;
	ignoreLimit?: boolean;
};

type EventTrackingAccumulatorWithPlugin = {
	add: (data: TrackingData, options?: EventOptions) => string;
	set: (key: string, data: TrackingData, options?: EventOptions) => void;
	base: EventTrackingAccumulator;
};

interface EventTrackingAccumulator {
	subscribe(callback: (response: EventResponse) => void): () => void;
	hasConsent(): boolean;
	sendBulkTracking(payload: Array<TrackingData>): Promise<Response>;
	trkMetadata(data: TrackingData): TrackingData;
	with(pluginSlug: string): EventTrackingAccumulatorWithPlugin;
	uploadEvents(): Promise<void>;
	sendIfLimitReached(): Promise<void> | undefined;
	start(): void;
	stop(): void;
	refreshTimer(): void;
	clone(): EventTrackingAccumulator;
}

declare global {
	interface Window {
		wp: StringObjectKeys;
		NeveReactCustomize: {
			HFG: HFGLayoutBuilder;
			upsellComponentsLink: string;
			instructionalVid: string;
			nonce: string;
			hideConditionalHeaderSelector: boolean;
			dashUpdatesMessage: string;
			blackFriday?: {
				saleUrl: string;
				bannerSrc: string;
				message: string;
			};
		};
		NeveProReactCustomize: undefined | StringObjectKeys;
		tiTrk?: EventTrackingAccumulator;
	}
}

interface BuilderChangeEvent extends Event {
	detail?: { id: string; value: string | BuilderContentInterface };
}
