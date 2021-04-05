import { HFGLayoutBuilder, StringObjectKeys } from './utils';
interface WPCustomizeControlSetting {
	set: (value: HFGLayoutBuilder | StringObjectKeys | string | []) => void;
	get: () => HFGLayoutBuilder & StringObjectKeys & string & number & [];
	// eslint-disable-next-line no-undef
	bind: (value: unknown) => void;
}

export interface WPCustomizeControl {
	active: () => boolean;
	id: string;
	setting: WPCustomizeControlSetting;
	params: StringObjectKeys;
}
