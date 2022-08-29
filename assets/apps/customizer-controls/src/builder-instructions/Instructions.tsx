import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { WPCustomizeControl } from '../@types/customizer-control';
import { HFGMigrationNotice } from './HFGMigrationNotice';

type Props = {
	control: WPCustomizeControl;
};

const Instructions: React.FC<Props> = ({ control }) => {
	const { params, id } = control;
	const { options } = params;
	const { description, quickLinks, builderMigrated, hadOldBuilder } = options;

	const linkKeys = Object.keys(quickLinks);

	const expandEventHeaders = (slug: string): void => {
		const { type } = window.wp.customize.control(slug).params;
		if (type === 'neve_customizer_heading') {
			window.wp.customize.control(slug).triggerExpandHeader();
		}
	};

	const focusControl = (slug: string): void => {
		if (slug === 'toggle_sidebar') {
			window.wp.customize.previewer.send('header_sidebar_open');
			return;
		}
		window.wp.customize.control(slug).focus({
			completeCallback: () => {
				expandEventHeaders(slug);
			},
		});
	};

	return (
		<div className="quick-links-inner">
			{description && (
				<>
					<p>{description}</p>
					<hr />
				</>
			)}
			{linkKeys.length && (
				<div className="quick-links-wrap">
					<span className="customize-control-title">
						{__('Quick Links', 'neve')}
					</span>
					<ul className="quick-links">
						{linkKeys.map((settingSlug, index) => {
							const { label, icon, url } =
								quickLinks[settingSlug];

							return (
								<li key={index}>
									<Button
										isLink
										href={url || undefined}
										target={'_blank'}
										onClick={() => {
											if (url) {
												return;
											}
											focusControl(settingSlug);
										}}
									>
										<span className={`dashicons ${icon}`} />
										{label}
									</Button>
								</li>
							);
						})}
					</ul>
					{id === 'hfg_header_layout_section_quick_links' && (
						<HFGMigrationNotice
							hadOldBuilder={hadOldBuilder}
							alreadyMigrated={builderMigrated}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default Instructions;
