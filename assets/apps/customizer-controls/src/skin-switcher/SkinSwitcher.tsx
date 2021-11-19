import React from 'react';
import { WPCustomizeControl } from '../@types/customizer-control';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

// @ts-ignore
import { InlineSelect } from '@neve-wp/components';
import { Button } from '@wordpress/components';

type Props = {
	control: WPCustomizeControl;
};

const SkinSwitcher: React.FC<Props> = ({ control }) => {
	const [value, setValue] = useState(control.setting.get());
	const [changed, setChanged] = useState(false);
	const [switching, setSwitching] = useState(false);
	const [customizerSaved, setCustomizerSaved] = useState(true);

	useEffect(() => {
		window.wp.customize.bind('ready', () => {
			setCustomizerSaved(window.wp.customize.state('saved').get());

			window.wp.customize.state('saved').bind((status: boolean) => {
				setCustomizerSaved(status);
			});
		});
	}, []);

	const options = [
		{
			value: 'old',
			label: __('Legacy Skin', 'neve'),
		},
		{
			value: 'new',
			label: __('Neve 3.0', 'neve'),
		},
	];

	const handleChange = (newVal: string) => {
		setValue(newVal);
		setChanged(true);
	};

	const handleSwitch = () => {
		setSwitching(true);

		setVal(control, value).then(() => {
			window.wp.customize.previewer.save().then(() => {
				window.wp.customize.notifications.add(
					new window.wp.customize.OverlayNotification(
						'neve_switching_skin',
						{
							message: __('Switching skin', 'neve') + '...',
							type: 'success',
							loading: true,
						}
					)
				);
				window.location.reload();
			});
		});
	};

	return (
		<div className="neve-white-background-control">
			<InlineSelect
				disabled={!customizerSaved}
				label={__('Style', 'neve')}
				onChange={handleChange}
				options={options}
				value={value}
			/>
			<Button
				isPrimary
				onClick={handleSwitch}
				disabled={
					!changed ||
					!customizerSaved ||
					control.setting.get() === value
				}
			>
				{__('Switch Skin', 'neve')}
			</Button>
			{!customizerSaved && !switching && (
				<p className="description">
					{__(
						'Please save the current customizer settings before switching skins.'
					)}
				</p>
			)}
		</div>
	);
};

const setVal = async (control: WPCustomizeControl, newVal: string) => {
	await control.setting.set(newVal);
};

export default SkinSwitcher;
