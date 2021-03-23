import React from 'react';
import classnames from 'classnames';

import { Button } from '@wordpress/components';
import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

interface Props {
	builder: string;
	device: string;
	setDevice: (nextDevice: string) => void;
}

const ResponsiveSwitches: React.FC<Props> = ({
	device,
	setDevice,
	builder,
}) => {
	const { devices } = window.NeveReactCustomize.HFG[builder];

	const buttons = [
		{ title: __('Desktop', 'neve'), icon: 'desktop', slug: 'desktop' },
		{ title: __('Mobile', 'neve'), icon: 'smartphone', slug: 'mobile' },
	].filter((i) => Object.keys(devices).includes(i.slug));

	const switchDevice = (nextDevice: string) => {
		if (device === nextDevice) {
			return false;
		}
		setDevice(nextDevice);
	};

	return (
		<div className="responsive-switches">
			{buttons.map((button, index) => {
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
