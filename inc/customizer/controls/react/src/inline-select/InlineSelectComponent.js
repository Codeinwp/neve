import { useEffect, useState } from '@wordpress/element';
//import { WPCustomizeControl } from '';
import InlineSelect from '../common/InlineSelect';

const InlineSelectComponent = ({ control }) => {
	const { label, options } = control.params;
	const [value, setValue] = useState(control.setting());
	const defaultSettings = Object.keys(options).map((key) => {
		return { value: key, label: options[key] };
	});
	const [settings, setSettings] = useState(defaultSettings);

	useEffect(() => {
		window.wp.customize.bind('ready', () => {
			// If `changesOn` param is set to `neve_global_colors` update select settings with current global colors
			if (
				control.params.changesOn &&
				control.params.changesOn === 'neve_global_colors'
			) {
				const currentGlobalColors = window.wp.customize
					.control(control.params.changesOn)
					.setting.get().palettes;
				setSettings(
					Object.keys(currentGlobalColors).map((key) => {
						return {
							value: key,
							label: currentGlobalColors[key].name,
						};
					})
				);
			}
		});

		if (
			control.params.changesOn &&
			control.params.changesOn === 'neve_global_colors'
		) {
			// If `changesOn` param is set to `neve_global_colors` listen on value change and update select settings with current global colors
			window.wp.customize.control(
				control.params.changesOn,
				(customizeControl) => {
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
				}
			);
		}
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
