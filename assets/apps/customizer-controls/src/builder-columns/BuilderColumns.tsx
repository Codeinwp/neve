/* jshint esversion: 6 */
import React from 'react';
import { RadioImage } from '@neve-wp/components';

type Props = {
	label: string;
	value: string;
	onChange: (val: string) => void;
	columns: number;
	choices: Record<number, Record<string, string>>;
};

const BuilderColumns: React.FC<Props> = (props) => {
	const { label, value, onChange, columns, choices } = props;

	const visibleChoices = choices[columns];

	return (
		<div className="neve-white-background-control">
			{label && <span className="customize-control-title">{label}</span>}
			<RadioImage
				choices={visibleChoices}
				value={value}
				onClick={onChange}
			/>
		</div>
	);
};

export default BuilderColumns;
