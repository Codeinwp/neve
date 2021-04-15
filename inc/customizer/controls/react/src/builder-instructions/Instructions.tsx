import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { WPCustomizeControl } from '../@types/customizer-control';

type Props = {
	control: WPCustomizeControl;
};

const Instructions: React.FC<Props> = ({ control }) => {
	const { params } = control;
	const { options } = params;
	const { description, quickLinks } = options;

	const linkKeys = Object.keys(quickLinks);

	const focusControl = (slug: string): void => {
		if (slug === 'toggle_sidebar') {
			window.wp.customize.previewer.send('header_sidebar_open');
			return;
		}
		window.wp.customize.control(slug).focus();
	};

	return (
		<div className="quick-links-inner">
			{description && <p>{description}</p>}
			<hr />
			{linkKeys.length && (
				<div className="quick-links-wrap">
					<span className="customize-control-title">
						{__('Quick Links', 'neve')}
					</span>
					<ul className="quick-links">
						{linkKeys.map((settingSlug, index) => {
							const { label, icon } = quickLinks[settingSlug];
							return (
								<li key={index}>
									<Button
										isLink
										onClick={() =>
											focusControl(settingSlug)
										}
									>
										<span className={`dashicons ${icon}`} />
										{label}
									</Button>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Instructions;
