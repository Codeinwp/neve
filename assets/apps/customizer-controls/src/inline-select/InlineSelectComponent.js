import { useEffect, useState } from '@wordpress/element';
import { InlineSelect } from '@neve-wp/components';

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
			const newSettings = Object.keys(currentGlobalColors).map((key) => {
				return {
					value: key,
					label: currentGlobalColors[key].name,
				};
			});
			setSettings(newSettings);
		});

		// Listen on value change and update select settings with current global colors
		wp.customize.bind('change', function (setting) {
			if (setting && setting.id === changesOn) {
				window.wp.customize.previewer.refresh();
			}
		});
		window.wp.customize.control(changesOn, (customizeControl) => {
			customizeControl.setting.bind('changed', (nextValue) => {
				const currentGlobalColors = nextValue.palettes;
				const newSettings = Object.keys(currentGlobalColors).map(
					(key) => {
						return {
							value: key,
							label: currentGlobalColors[key].name,
						};
					}
				);
				if (JSON.stringify(settings) !== JSON.stringify(newSettings)) {
					setSettings(newSettings);

					const currentValue = newSettings.find(
						(item) => item.value === value
					);
					if (currentValue === undefined) {
						updateValue('darkMode');
					}
				}
			});
		});
	}, [settings, value]);

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
