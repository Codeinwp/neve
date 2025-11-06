/* global neveDash */
import cn from 'classnames';
import { getTabHash, tabs } from '../utils/common';

import { Fragment, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { useDispatch, useSelect } from '@wordpress/data';
import {
	LucideBookOpen,
	LucideFileText,
	LucideExternalLink,
} from 'lucide-react';
import useLicenseData from '../Hooks/useLicenseData';
import Container from '../Layout/Container';
import { NEVE_IS_WHITELABEL, NEVE_STORE } from '../utils/constants';
import Button from './Common/Button';
import Pill from './Common/Pill';

const HeaderTopBar = ({ currentTab, setTab }) => {
	const NAV_BUTTONS = {
		help: {
			label: __('Documentation', 'neve'),
			icon: <LucideBookOpen className="mr-1.5" size={20} />,
			url: neveDash.docsURL,
		},
		changelog: {
			label: __('Changelog', 'neve'),
			icon: <LucideFileText className="mr-1.5" size={20} />,
		},
	};

	const { isLicenseValid } = useLicenseData();

	if (NEVE_IS_WHITELABEL) {
		const hasWhiteLabelAgencyURL = !!neveDash.whiteLabel?.agencyURL;

		NAV_BUTTONS.changelog.hide = true;

		if (hasWhiteLabelAgencyURL) {
			NAV_BUTTONS.help.url = neveDash.whiteLabel?.agencyURL;
		} else {
			NAV_BUTTONS.help.hide = true;
		}
	}

	return (
		<div className="border-b border-gray-100">
			<Container>
				<div className="flex flex-col gap-5 py-2 sm:flex-row items-center justify-between">
					<div className="flex items-center space-x-3">
						{!NEVE_IS_WHITELABEL && (
							<img
								className="size-7 rounded-sm"
								src={neveDash.assets + 'logo.svg'}
								alt={__('Neve Theme Logo', 'neve')}
							/>
						)}
						<span className="text-sm font-semibold text-gray-900">
							{neveDash.strings.header}
						</span>
						<Pill type="secondary">
							{isLicenseValid
								? __('PRO', 'neve')
								: __('Free', 'neve')}
						</Pill>
						<span className="text-gray-500 font-medium">
							{neveDash.version}
						</span>
					</div>
					<div className="flex items-center">
						{Object.entries(NAV_BUTTONS).map(
							([slug, { label, icon, url, hide }], index) => {
								if (hide) {
									return null;
								}

								const props = {};

								if (!url) {
									props.onClick = (e) => {
										e.preventDefault();
										setTab(slug);
									};
									if (currentTab === slug) {
										props.className = '!text-blue-600';
									}
								} else {
									props.href = url;
									props.target = '_blank';
								}

								return (
									<Fragment key={slug}>
										{index > 0 && (
											<div className="w-px h-4 bg-gray-200 mx-3" />
										)}
										<Button isLink {...props}>
											{icon}
											<span>{label}</span>
										</Button>
									</Fragment>
								);
							}
						)}
					</div>
				</div>
			</Container>
		</div>
	);
};

const Navigation = ({ setTab, currentTab }) => {
	return (
		<div className="border-b border-gray-200">
			<Container>
				<nav className="flex -mb-px justify-center sm:justify-start">
					{Object.entries(tabs).map(([slug, { label, url }]) => {
						if (!label) {
							return null;
						}
						const itemClasses = cn([
							'relative px-4 py-3 font-medium border-b-2',
							{
								'text-blue-600 border-blue-600':
									currentTab === slug &&
									slug !== 'get-neve-pro',
								'border-transparent text-gray-600 hover:text-gray-900 transition-colors duration-150':
									currentTab !== slug &&
									slug !== 'get-neve-pro',
								'border-transparent text-blue-600 transition-colors duration-150':
									currentTab !== slug &&
									slug === 'get-neve-pro',
							},
						]);

						const handleLinkClick = (e) => {
							e.preventDefault();
							setTab(slug);
						};

						const linkProps = {
							href: url ? url : '#' + slug,
						};

						if (!url) {
							linkProps.onClick = handleLinkClick;
						} else {
							linkProps.target = '_blank';
							linkProps.rel = 'noopener noreferrer';
						}

						return (
							<a
								{...linkProps}
								key={slug}
								className={itemClasses}
							>
								<span className="flex items-center gap-1">
									{label}
									{url && (
										<LucideExternalLink
											size={14}
											className="opacity-60"
										/>
									)}
								</span>
							</a>
						);
					})}
				</nav>
			</Container>
		</div>
	);
};

const Header = () => {
	const { currentTab } = useSelect((select) => {
		const { getTab } = select(NEVE_STORE);
		return {
			currentTab: getTab(),
		};
	});

	const { setTab } = useDispatch(NEVE_STORE);

	const setTabToCurrentHash = () => {
		const hash = getTabHash();
		if (null === hash) {
			return;
		}
		setTab(hash);
	};

	useEffect(() => {
		setTabToCurrentHash();
		window.addEventListener('hashchange', setTabToCurrentHash);

		return () => {
			window.removeEventListener('hashchange', setTabToCurrentHash);
		};
	}, []);

	const handleTabSwitch = (slug) => {
		setTab(slug);
		window.location.hash = slug;
	};

	return (
		<header className="bg-white z-50">
			<div>
				<HeaderTopBar
					setTab={handleTabSwitch}
					currentTab={currentTab}
				/>
				<Navigation setTab={handleTabSwitch} currentTab={currentTab} />
			</div>
		</header>
	);
};

export default Header;
