import { useState } from '@wordpress/element';
import { BuilderContext } from './BuilderContext';
import { BuilderContentInterface } from '../@types/utils';
import { NewHeader } from './oldData';
import Builder from './components/Builder';
import BuilderResponsiveSwitcher from './components/BuilderResponsiveSwitcher';
import React from 'react';

const Custom: React.FC = () => {
	const [currentBuilder, setCurrentBuilder] = useState('header');
	const [currentDevice, setCurrentDevice] = useState('mobile');
	const [
		draggableItems,
		setDraggableItems,
	] = useState<BuilderContentInterface>(NewHeader);

	return (
		<BuilderContext.Provider
			value={{
				draggableItems,
				setDraggableItems,
				currentDevice,
				setCurrentDevice,
				setCurrentBuilder,
				currentBuilder,
			}}
		>
			<BuilderResponsiveSwitcher>
				<Builder />
			</BuilderResponsiveSwitcher>
		</BuilderContext.Provider>
	);
};

export default Custom;
