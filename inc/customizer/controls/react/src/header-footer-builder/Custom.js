import { useState } from '@wordpress/element';
import arrayMove from 'array-move';
import { BuilderContext } from './BuilderContext';
import { NewHeader } from './oldData';
import Builder from './components/Builder';
import BuilderResponsiveSwitcher from './components/BuilderResponsiveSwitcher';

const Custom = () => {
	const [currentBuilder, setCurrentBuilder] = useState('header');
	const [currentDevice, setCurrentDevice] = useState('desktop');
	const [draggableItems, setDraggableItems] = useState(NewHeader);

	return (
		<BuilderContext.Provider
			value={{
				draggableItems,
				setDraggableItems,
				currentDevice,
				setCurrentDevice,
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
