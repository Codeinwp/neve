/* global neveDash */
import { addUrlHash, getTabHash, tabs } from '../utils/common';
import cn from 'classnames';

import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from '@wordpress/element';

import { LucideBookOpen, LucideFileText } from 'lucide-react';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	NEVE_HAS_VALID_PRO,
	NEVE_IS_WHITELABEL,
	NEVE_STORE,
} from '../utils/constants';
import Container from '../Layout/Container';
import Pill from './Common/Pill';
import Button from './Common/Button';

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
			hide: NEVE_IS_WHITELABEL,
		},
	};

	return (
		<div className="border-b border-gray-100">
			<Container>
				<div className="flex items-center justify-between h-14">
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
							{NEVE_HAS_VALID_PRO
								? __('Pro', 'neve')
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
										<Button isLink {...props}>
											{icon}
											<span>{label}</span>
										</Button>

										{index <
											Object.keys(NAV_BUTTONS).length -
												1 && (
											<div className="w-px h-4 bg-gray-200 mx-3" />
										)}
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
				<nav className="flex -mb-px">
					{Object.entries(tabs).map(
						([slug, { label, url, render }]) => {
							if (!label) {
								return null;
							}
							const itemClasses = cn([
								'relative px-4 py-3 text-[13px] font-medium border-b-2',
								{
									'text-blue-600 border-blue-600':
										currentTab === slug,
									'border-transparent text-gray-600 hover:text-gray-900 transition-colors duration-150':
										currentTab !== slug,
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
							}

							return (
								<a
									{...linkProps}
									key={slug}
									className={itemClasses}
								>
									{label}
								</a>
							);
						}
					)}
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
		addUrlHash(slug);
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
