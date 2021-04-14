import React from 'react';
import classnames from 'classnames';

import { Button } from '@wordpress/components';
import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { BuilderActions, DeviceTypes } from '../../@types/utils';

interface Props {
	builder: string;
	device: DeviceTypes;
	actions: BuilderActions;
}

type ButtonProps = {
	title: string;
	icon: string;
	slug: DeviceTypes;
};

type Buttons = ButtonProps[];

const ResponsiveSwitches: React.FC<Props> = ({ device, actions, builder }) => {
	const { setDevice } = actions;
	const buttons: ButtonProps[] = [
		{ title: __('Desktop', 'neve'), icon: 'desktop', slug: 'desktop' },
		{ title: __('Mobile', 'neve'), icon: 'smartphone', slug: 'mobile' },
	];
	const { devices } = window.NeveReactCustomize.HFG[builder];
	const shownButtons = buttons.filter((i) =>
		Object.keys(devices).includes(i.slug)
	);

	const switchDevice = (nextDevice: DeviceTypes) => {
		if (device === nextDevice) {
			return false;
		}
		window.wp.customize.previewedDevice(nextDevice);

		setDevice(nextDevice);
	};

	return (
		<div className="responsive-switches">
			{shownButtons.map((button, index) => {
				const { title, icon, slug } = button;
				const buttonClasses = classnames('device-switcher', {
					active: slug === device,
				});
				return (
					<Button
						className={buttonClasses}
						key={index}
						icon={icon}
						onClick={() => switchDevice(slug)}
					>
						{title}
					</Button>
				);
			})}
		</div>
	);
};

export default memo(ResponsiveSwitches);
