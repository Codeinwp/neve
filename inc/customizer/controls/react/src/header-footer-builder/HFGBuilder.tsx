/* jshint esversion: 6 */
import React from 'react';
import Custom from './Custom';
import { WPCustomizeControl } from '../@types/customizer-control';

interface Props {
	control: WPCustomizeControl;
}

const HFGBuilder: React.FC<Props> = ({ control }) => {
	return <Custom />;
};

export default HFGBuilder;
