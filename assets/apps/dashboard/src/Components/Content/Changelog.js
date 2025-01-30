/* global neveDash */
import cn from 'classnames';
import { Clock, Crown, Rocket, Bug, Zap, CheckCircle } from 'lucide-react';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

import Card from '../../Layout/Card';
import Button from '../Common/Button';
import Pill from '../Common/Pill';
import TransitionWrapper from '../Common/TransitionWrapper';

const TAB_CHOICES = {
	FREE: 'free',
	PRO: 'pro',
};

const CHANGE_TYPES = {
	features: {
		icon: <Rocket className="size-4 text-green-600 mr-2" />,
		label: __('Features', 'neve'),
	},
	fixes: {
		icon: <Bug className="size-4 text-red-600 mr-2" />,
		label: __('Bug Fixes', 'neve'),
	},
	tweaks: {
		icon: <Zap className="size-4 text-blue-600 mr-2" />,
		label: __('Tweaks', 'neve'),
	},
};

const TabButton = ({ active, onClick, children }) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150`,
				{
					'bg-blue-100 text-blue-700': active,
					'text-gray-600 hover:text-gray-900 hover:bg-gray-100':
						!active,
				}
			)}
		>
			{children}
		</button>
	);
};

const ChangelogEntry = ({ data }) => {
	const { version, tweaks, fixes, features, date } = data;

	const renderChangeList = (type, items) => {
		if (!items?.length) return null;

		const { icon, label } = CHANGE_TYPES[type];

		return (
			<div key={version + type}>
				<div className="flex items-center mb-2">
					{icon}
					<span className="text-sm font-medium text-gray-700">
						{label}
					</span>
				</div>
				<ul className="space-y-2 ml-6">
					{items.map((item, index) => {
						return (
							<li
								key={index}
								className="text-sm text-gray-600 flex items-start"
							>
								<CheckCircle className="w-3.5 h-3.5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
								<span
									dangerouslySetInnerHTML={{ __html: item }}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		);
	};

	return (
		<div className="border-b border-gray-200 last:border-0">
			<div className="p-6">
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center space-x-3">
						<h3 className="text-base font-semibold text-gray-900">
							{__('Version', 'neve')} {version}
						</h3>
						<Pill type="primary" className={'ml-auto'}>
							{date}
						</Pill>
					</div>
				</div>
				<div className="space-y-3">
					{Object.entries({ features, fixes, tweaks }).map(
						([type, items]) => renderChangeList(type, items)
					)}
				</div>
			</div>
		</div>
	);
};
const Changelog = () => {
	const { changelog, changelogPro } = neveDash;

	const [shown, setShown] = useState(4);
	const [activeTab, setActiveTab] = useState(TAB_CHOICES.FREE);
	const changelogData =
		activeTab === TAB_CHOICES.FREE ? changelog : changelogPro;

	return (
		<TransitionWrapper className="grid gap-5">
			{changelogPro && (
				<Card>
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Clock className="size-4 text-gray-400" />
							<span className="text-sm font-medium text-gray-900">
								{__('Recent Updates', 'neve')}
							</span>
						</div>
						<div className="flex space-x-2">
							<TabButton
								active={activeTab === TAB_CHOICES.FREE}
								onClick={() => setActiveTab(TAB_CHOICES.FREE)}
							>
								{__('Free Version', 'neve')}
							</TabButton>
							<TabButton
								active={activeTab === TAB_CHOICES.PRO}
								onClick={() => setActiveTab(TAB_CHOICES.PRO)}
							>
								<div className="flex items-center space-x-1">
									<Crown className="size-4 text-yellow-500" />
									<span>{__('Pro Version', 'neve')}</span>
								</div>
							</TabButton>
						</div>
					</div>
				</Card>
			)}

			<Card className="!p-0">
				{changelogData.slice(0, shown).map((entry) => {
					const { version, tweaks, fixes, features } = entry;

					if ((!tweaks && !fixes && !features) || !version) {
						return null;
					}

					return <ChangelogEntry key={version} data={entry} />;
				})}
			</Card>

			{changelogData.length > shown && (
				<div className="text-center my-8 mx-auto">
					<Button
						className="text-lg"
						onClick={() => setShown(shown + 4)}
					>
						{__('Load More', 'neve')}
					</Button>
				</div>
			)}
		</TransitionWrapper>
	);
};

export default Changelog;
