import React from 'react';
import { WPCustomizeControl } from '../@types/customizer-control';
import FontPairSelector, { FontPair } from './FontPairSelector';

type Props = {
	control: WPCustomizeControl;
};

const FontPairComponent: React.FC<Props> = ({ control }) => {
	const { pairs } = control.params;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
	const handleClick = (preset: FontPair) => {};

	return <FontPairSelector onSelect={handleClick} pairs={pairs} />;
};

export default FontPairComponent;
