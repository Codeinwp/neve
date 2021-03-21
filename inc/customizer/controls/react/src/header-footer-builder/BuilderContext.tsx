import { createContext } from '@wordpress/element';
import { Dispatch, SetStateAction } from 'react';
import { BuilderContentInterface } from '../@types/utils';

export interface BuilderContextInterface {
	draggableItems: BuilderContentInterface;
	currentBuilder: string;
	currentDevice: keyof BuilderContentInterface;
	setDraggableItems: Dispatch<SetStateAction<BuilderContentInterface>>;
	setCurrentDevice: Dispatch<SetStateAction<string>>;
	setCurrentBuilder: Dispatch<SetStateAction<string>>;
}

// @ts-ignore
export const BuilderContext = createContext<BuilderContextInterface>(null);
