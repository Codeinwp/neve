/* global neveDash */
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import cn from 'classnames';
import {
	CircleFadingArrowUp,
	LucideBriefcase,
	LucideGauge,
	LucidePuzzle,
	LucideSettings,
} from 'lucide-react';

import { useSelect } from '@wordpress/data';
import Card from '../../Layout/Card';
import {
	NEVE_HAS_PRO,
	NEVE_SHOW_WHITELABEL,
	NEVE_STORE,
} from '../../utils/constants';
import Notice from '../Common/Notice';
import TransitionWrapper from '../Common/TransitionWrapper';
import GeneralTabContent from './Settings/GeneralTabContent';
import ManageModulesTabContent from './Settings/ManageModulesTabContent';
import PerformanceTabContent from './Settings/PerformanceTabContent';
import WhiteLabelTabContent from './Settings/WhiteLabelTabContent';

const NAV_ITEMS = [
	{
		id: 'general',
		label: __('General', 'neve'),
		icon: LucideSettings,
	},
	{
		id: 'performance',
		label: __('Performance', 'neve'),
		icon: LucideGauge,
	},
	{
		id: 'white-label',
		label: __('White Label', 'neve'),
		icon: LucideBriefcase,
	},
	{
		id: 'manage-modules',
		label: __('Manage Modules', 'neve'),
		icon: LucidePuzzle,
	},
];

const Menu = ({ tab, setTab }) => {
	const { whiteLabelStatus } = useSelect((select) => {
		const { getModuleStatus } = select(NEVE_STORE);

		return {
			whiteLabelStatus: getModuleStatus('white_label') || false,
		};
	});

	const menuItems = NAV_ITEMS.filter(({ id }) => {
		if (id === 'manage-modules') return NEVE_HAS_PRO;

		if (id === 'white-label') {
			return whiteLabelStatus && NEVE_SHOW_WHITELABEL;
		}

		return true;
	});

	return (
		<Card className="!p-0 overflow-hidden">
			<TransitionWrapper>
				{menuItems.map(({ id, label, icon }) => {
					const Icon = icon;
					const classes = cn(
						'w-full flex items-center px-4 py-3 text-left',
						{
							'text-gray-600 hover:bg-gray-50': tab !== id,
							'bg-blue-50 text-blue-600': tab === id,
						}
					);

					return (
						<button
							key={id}
							className={classes}
							onClick={() => setTab(id)}
						>
							<Icon className="w-5 h-5 mr-3" />
							<span className="font-medium">{label}</span>
						</button>
					);
				})}
			</TransitionWrapper>
		</Card>
	);
};

const Settings = () => {
	const { hasOldPro, strings } = neveDash;

	const [tab, setTab] = useState(NAV_ITEMS[0].id);

	if (hasOldPro) {
		return (
			<Notice icon={CircleFadingArrowUp}>{strings.updateOldPro}</Notice>
		);
	}

	return (
		<div className="flex flex-col lg:flex-row gap-6">
			<div className="shrink-0 w-full lg:w-[300px]">
				<Menu tab={tab} setTab={setTab} />
			</div>
			<Card className="grow">
				{tab === 'general' && (
					<TransitionWrapper>
						<GeneralTabContent />
					</TransitionWrapper>
				)}
				{tab === 'performance' && (
					<TransitionWrapper>
						<PerformanceTabContent />
					</TransitionWrapper>
				)}
				{tab === 'white-label' && (
					<TransitionWrapper>
						<WhiteLabelTabContent />
					</TransitionWrapper>
				)}
				{tab === 'manage-modules' && (
					<TransitionWrapper>
						<ManageModulesTabContent />
					</TransitionWrapper>
				)}
			</Card>
		</div>
	);
};

export default Settings;
