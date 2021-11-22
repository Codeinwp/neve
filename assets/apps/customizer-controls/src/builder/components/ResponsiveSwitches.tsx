import React from 'react';
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import { DeviceTypes } from '../../@types/utils';
import BuilderContext from '../BuilderContext';
import BuilderHeaderNotification from './BuilderHeaderNotification';

type ButtonProps = {
	title: string;
	icon: string;
	slug: DeviceTypes;
};

type Props = {
	device: DeviceTypes;
};

const ResponsiveSwitches: React.FC<Props> = ({ device }) => {
	const { actions, builder } = useContext(BuilderContext);
	const { setDevice } = actions;
	const buttons: ButtonProps[] = [
		{ title: __('Desktop', 'neve'), icon: 'desktop', slug: 'desktop' },
		{ title: __('Mobile', 'neve'), icon: 'smartphone', slug: 'mobile' },
	];
	const { devices, title: builderName } =
		window.NeveReactCustomize.HFG[builder];

	const shownButtons = buttons.filter(({ slug }) =>
		Object.keys(devices).includes(slug)
	);

	const switchDevice = (nextDevice: DeviceTypes) => {
		if (device === nextDevice) {
			return false;
		}
		window.wp.customize.previewedDevice(nextDevice);
		setDevice(nextDevice);
	};

	return (
		<div className="builder-header">
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
			<BuilderHeaderNotification
				builder={builder}
				builderName={builderName}
			/>
		</div>
	);
};

export default ResponsiveSwitches;
