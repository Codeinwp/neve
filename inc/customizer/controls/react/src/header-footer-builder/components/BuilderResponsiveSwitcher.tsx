import React from 'react';
import classnames from 'classnames';
import { Button, ButtonGroup } from '@wordpress/components';
import { desktop, mobile } from '@wordpress/icons';
import { useContext } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { BuilderContext } from '../BuilderContext';

const BuilderResponsiveSwitcher: React.FC = ({ children }) => {
	const { setCurrentDevice, currentDevice, currentBuilder } = useContext(
		BuilderContext
	);

	const currentBuilderProps = window.HFG_Layout_Builder[currentBuilder];

	const { devices } = currentBuilderProps;

	const buttons = [
		{ title: __('Desktop', 'neve'), icon: desktop, slug: 'desktop' },
		{ title: __('Mobile', 'neve'), icon: mobile, slug: 'mobile' },
	].filter((i) => Object.keys(devices).includes(i.slug));

	return (
		<>
			<ButtonGroup>
				{buttons.map((button, index) => {
					const { title, icon, slug } = button;
					const buttonClasses = classnames('device-switcher', {
						active: slug === currentDevice,
					});
					return (
						<Button
							className={buttonClasses}
							key={index}
							icon={icon}
							disabled={slug === currentDevice}
							onClick={() => setCurrentDevice(slug)}
						>
							{title}
						</Button>
					);
				})}
			</ButtonGroup>
			{children}
		</>
	);
};

export default BuilderResponsiveSwitcher;
