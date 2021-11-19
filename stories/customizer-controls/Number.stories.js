import { NumberControl } from '../../assets/apps/components/src/components';
import {
	WhiteBackgroundDecorator,
	CustomizerDecorator,
} from '../components/decorators';
import { useState } from '@wordpress/element';

export default {
	title: 'Customizer/Controls/Number',
	component: NumberControl,
	args: {
		units: ['px', 'em', '%'],
		label: 'Accordion Label',
		min: 0,
		max: 100,
		defaultValue: {
			desktop: 30,
			tablet: 20,
			mobile: 10,
			desktopUnit: 'px',
			tabletUnit: 'px',
			mobileUnit: 'px',
		},
		hasResponsive: true,
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [currentValue, setCurrentValue] = useState({ ...args.defaultValue });
	const [device, setDevice] = useState('desktop');
	const reset = () => {
		setCurrentValue(args.defaultValue);
	};

	const updateValue = (value) => {
		const nextValue = { ...currentValue };
		nextValue[device] = value;
		setCurrentValue(nextValue);
	};

	const updateUnit = (unit) => {
		const nextValue = { ...currentValue };
		nextValue[`${device}Unit`] = unit;
		setCurrentValue(nextValue);
	};

	return (
		<>
			<NumberControl
				className="font-size"
				label={'Control Label'}
				step={1}
				{...args}
				onReset={reset}
				onUnitChange={updateUnit}
				onChangedDevice={setDevice}
				onChange={updateValue}
				value={currentValue[device]}
				default={args.defaultValue[device]}
				activeUnit={currentValue[`${device}Unit`]}
			/>

			<div className="value-previewer">
				<strong>Device:</strong>
				<pre>{device}</pre>
				<strong>Value:</strong>
				<pre>{JSON.stringify(currentValue, null, ' ')}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});
export const SingleUnit = Template.bind({});
SingleUnit.args = {
	units: ['px'],
};
