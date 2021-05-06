import { StringObjectKeys } from './utils';
type WPCustomizeControlSetting = {
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	set: (value: any) => void;
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	get: () => any;
	// eslint-disable-next-line no-undef
	bind: (value: unknown) => void;
};

export type WPCustomizeControl = {
	active: () => boolean;
	id: string;
	setting: WPCustomizeControlSetting;
	params: StringObjectKeys;
};
