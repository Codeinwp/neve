export interface WPCustomizeControl {
	active: () => boolean;
	activeArgumentsQueue: Array<unknown>;
	container: HTMLDivElement;
	id: string;
	params: Record<string, unknown>;
	setting: () => string | Record<string, unknown> | [];
}
