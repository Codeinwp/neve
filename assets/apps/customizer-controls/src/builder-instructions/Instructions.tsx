import React from 'react';
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { WPCustomizeControl } from '../@types/customizer-control';

type Props = {
	control: WPCustomizeControl;
};

const Instructions: React.FC<Props> = ({ control }) => {
	const { params, id } = control;
	const { options } = params;
	const { description, quickLinks } = options;

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
							const {
								label,
								icon,
								url,
								upsellDescription,
								badge,
							} = quickLinks[settingSlug];

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
										{url && badge && (
											<span className="quick-links-badge">
												{badge}
											</span>
										)}
									</Button>
									{url && upsellDescription && (
										<div className="quick-links-upsell">
											<p className="quick-links-description">
												<div
													dangerouslySetInnerHTML={{
														// eslint-disable-next-line @wordpress/valid-sprintf
														__html: sprintf(
															upsellDescription,
															`<a href="${url}" target="_blank" rel="noopener noreferrer">`,
															'</a>'
														),
													}}
												/>
											</p>
										</div>
									)}
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
