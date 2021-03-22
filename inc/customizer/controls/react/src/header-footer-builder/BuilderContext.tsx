import { createContext } from '@wordpress/element';
import { BuilderContentInterface } from '../@types/utils';

export interface BuilderContextInterface {
	draggableItems: BuilderContentInterface;
	currentBuilder: string;
	currentDevice: keyof BuilderContentInterface;
	setDraggableItems: (items: BuilderContentInterface) => void;
	setCurrentBuilder: (device: string) => void;
	setCurrentDevice: (device: string) => void;
}

// @ts-ignore
export const BuilderContext = createContext<BuilderContextInterface>(null);
