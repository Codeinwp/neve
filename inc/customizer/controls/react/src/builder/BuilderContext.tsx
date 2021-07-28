import { createContext } from '@wordpress/element';
import { BuilderActions, DeviceTypes } from '../@types/utils';
import { ItemInterface } from 'react-sortablejs';

type BuilderContext = {
	actions: BuilderActions;
	sidebarItems: ItemInterface[];
	builder: string;
	currentSection: string;
	dragging: boolean;
	hasColumns: boolean;
	device: DeviceTypes;
	previewSidebar: boolean;
};

const BuilderContext = createContext<BuilderContext>({} as BuilderContext);

export default BuilderContext;
