import { useEffect, useState } from '@wordpress/element';
import InlineSelect from '../common/InlineSelect';

const InlineSelectComponent = ({ control }) => {
	const { label, options, changesOn } = control.params;
	const [value, setValue] = useState(control.setting());
	const defaultSettings = Object.keys(options).map((key) => {
		return { value: key, label: options[key] };
	});
	const [settings, setSettings] = useState(defaultSettings);

	useEffect(() => {
		if (
			typeof changesOn !== 'string' ||
			changesOn !== 'neve_global_colors'
		) {
			return;
		}

		window.wp.customize.bind('ready', () => {
			// Update select settings with current global colors
			const currentGlobalColors = window.wp.customize
				.control(changesOn)
				.setting.get().palettes;
			setSettings(
				Object.keys(currentGlobalColors).map((key) => {
					return {
						value: key,
						label: currentGlobalColors[key].name,
					};
				})
			);
		});

		// Listen on value change and update select settings with current global colors
		window.wp.customize.control(changesOn, (customizeControl) => {
			customizeControl.setting.bind((nextValue) => {
				const currentGlobalColors = nextValue.palettes;
				setSettings(
					Object.keys(currentGlobalColors).map((key) => {
						return {
							value: key,
							label: currentGlobalColors[key].name,
						};
					})
				);
			});
		});
	}, [settings]);

	const updateValue = (newValue) => {
		setValue(newValue);
		control.setting.set(newValue);
	};

	return (
		<div className="neve-white-background-control">
			<InlineSelect
				value={value}
				onChange={updateValue}
				options={settings}
				label={label}
			/>
		</div>
	);
};

export default InlineSelectComponent;
