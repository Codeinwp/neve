import { HFGLayoutBuilder, StringObjectKeys } from './utils';

interface WPCustomizeControlSetting {
	set: (value: HFGLayoutBuilder | StringObjectKeys | string | []) => void;
	get: () => HFGLayoutBuilder;
}

export interface WPCustomizeControl {
	active: () => boolean;
	id: string;
	setting: WPCustomizeControlSetting;
	params: StringObjectKeys;
}
