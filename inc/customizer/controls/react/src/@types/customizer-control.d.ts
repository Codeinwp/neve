import { StringObjectKeys } from './utils';
interface WPCustomizeControlSetting {
	set: (value: any) => void;
	get: () => any;
	// eslint-disable-next-line no-undef
	bind: (value: unknown) => void;
}

export interface WPCustomizeControl {
	active: () => boolean;
	id: string;
	setting: WPCustomizeControlSetting;
	params: StringObjectKeys;
}
