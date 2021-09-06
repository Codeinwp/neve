/* jshint esversion: 6 */
import React from 'react';
import { useEffect, useState } from '@wordpress/element';
import { WPCustomizeControl } from '../@types/customizer-control';
import BuilderColumns from './BuilderColumns';

type Props = {
	control: WPCustomizeControl;
};

const BuilderColumnsComponent: React.FC<Props> = ({ control }) => {
	const { setting, params } = control;
	const { label, choices, columnsControl } = params;
	const [value, setValue] = useState<string>(setting.get());
	const [columnsNo, setColumnsNo] = useState<number>(1);

	const onChange = (nextValue: string) => {
		setValue(nextValue);
		control.setting.set(nextValue);
	};

	useEffect(() => {
		window.wp.customize.bind('ready', () => {
			const colNumber = window.wp.customize
				.control(columnsControl)
				.setting.get();
			setColumnsNo(parseInt(colNumber));
		});

		window.wp.customize.control(
			columnsControl,
			(customizeControl: WPCustomizeControl) => {
				customizeControl.setting.bind((nextColNumber: string) => {
					const colNumberInt = parseInt(nextColNumber);
					const currentValue = setting.get();
					if (
						!Object.keys(choices[colNumberInt]).includes(
							currentValue
						)
					) {
						const firstValue = Object.keys(
							choices[colNumberInt]
						)[0];
						onChange(firstValue);
					}
					setColumnsNo(colNumberInt);
				});
			}
		);
	});

	return (
		<BuilderColumns
			value={value}
			columns={columnsNo}
			onChange={onChange}
			label={label}
			choices={choices}
		/>
	);
};

export default BuilderColumnsComponent;
