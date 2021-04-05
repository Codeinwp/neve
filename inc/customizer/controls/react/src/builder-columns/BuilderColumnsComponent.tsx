/* jshint esversion: 6 */
import React from 'react';
import { useState } from '@wordpress/element';
import { WPCustomizeControl } from '../@types/customizer-control';
import BuilderColumns from './BuilderColumns';

interface Props {
	control: WPCustomizeControl;
}

const BuilderColumnsComponent: React.FC<Props> = ({ control }) => {
	const { setting, params } = control;
	const { label, choices } = params;
	const [value, setValue] = useState<string>(setting.get());

	const onChange = (nextValue: string) => {
		setValue(nextValue);
		control.setting.set(nextValue);
	};

	return (
		<BuilderColumns
			value={value}
			columns={2}
			onChange={onChange}
			label={label}
			choices={choices}
		/>
	);
};

export default BuilderColumnsComponent;
