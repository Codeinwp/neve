import { StringObjectKeys } from './utils';
type WPCustomizeControlSetting = {
	set: (value: any) => void;
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
