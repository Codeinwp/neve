/* global neveDash */
import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { LoaderCircle, LucideCheck, LucideSettings } from 'lucide-react';

import useLicenseData from '../../Hooks/useLicenseData';
import Card from '../../Layout/Card';
import {
	NEVE_HAS_PRO,
	NEVE_MODULE_ICON_MAP,
	NEVE_STORE,
	NEVE_IS_WHITELABEL,
} from '../../utils/constants';
import Link from '../Common/Link';
import Pill from '../Common/Pill';
import Toggle from '../Common/Toggle';
import Tooltip from '../Common/Tooltip';
import { changeOption } from '../../utils/rest';
import Button from '../Common/Button';

const ModuleToggle = ({ slug, moduleData }) => {
	const [loading, setLoading] = useState(false);

	const { licenseTier, isLicenseValid } = useLicenseData();
	const { changeModuleStatus, setToast } = useDispatch(NEVE_STORE);
	const { moduleStatus } = useSelect((select) => {
		const { getModuleStatus } = select(NEVE_STORE);

		return {
			moduleStatus: getModuleStatus(slug) || false,
		};
	});

	if (!NEVE_HAS_PRO) {
		return (
			<Tooltip
				text={__('These features are available in Neve Pro.', 'neve')}
			>
				<Pill className="ml-2 !px-2 !py-1 text-xs bg-blue-100 text-blue-800 rounded">
					{__('Pro', 'neve')}
				</Pill>
			</Tooltip>
		);
	}

	const { nicename, availabilityLevel } = moduleData;
	const { upgradeLinks } = neveDash;

	if (!isLicenseValid || licenseTier < availabilityLevel) {
		return (
			<Button isPrimary href={upgradeLinks[availabilityLevel]}>
				{__('Upgrade', 'neve')}
			</Button>
		);
	}

	const handleToggle = (value) => {
		setLoading(true);
		changeModuleStatus(slug, value);

		changeOption(slug, value, true).then((r) => {
			if (r.success) {
				setLoading(false);
				setToast(
					(value
						? __('Module Activated', 'neve')
						: __('Module Deactivated.', 'neve')) + ` (${nicename})`
				);
				return;
			}
			changeModuleStatus(slug, !value);
			setLoading(false);
			setToast(
				__('Could not activate module. Please try again.', 'neve')
			);
		});
	};

	return (
		<div className="flex gap-2 items-center">
			{loading && <LoaderCircle size={18} className="animate-spin" />}
			<Toggle
				checked={moduleStatus}
				onToggle={handleToggle}
				disabled={loading}
			/>
		</div>
	);
};

const ModuleCard = ({ moduleData, slug }) => {
	const { nicename, description, documentation, hide, byline } = moduleData;
	const CardIcon = NEVE_MODULE_ICON_MAP[slug] || LucideSettings;

	if (hide) {
		return null;
	}

	return (
		<Card
			icon={<CardIcon size={18} />}
			title={nicename}
			className="bg-white p-6 rounded-lg shadow-sm"
			afterTitle={<ModuleToggle slug={slug} moduleData={moduleData} />}
			id={`module-${slug}`}
		>
			<p className="text-gray-600 text-sm leading-relaxed">
				{description}{' '}
				{documentation && documentation.url && (
					<Link
						isExternal
						url={documentation.url}
						text={__('Learn more', 'neve')}
					/>
				)}
			</p>

			{byline && (
				<p className="text-gray-600 text-xs mt-2 flex items-center">
					<LucideCheck size={14} className="mr-1 text-lime-500" />
					<span>{byline}</span>
				</p>
			)}
		</Card>
	);
};

const ModulesHeader = () => {
	const { isLicenseValid } = useLicenseData();

	return (
		<div className="flex items-center justify-between">
			<h2 className="text-lg font-semibold">
				{NEVE_IS_WHITELABEL
					? __('Manage Modules', 'neve')
					: __('Neve Pro Modules', 'neve')}
			</h2>
			{!isLicenseValid && (
				<Link
					className="text-sm font-medium"
					text={__('Get Neve Pro', 'neve')}
					url={neveDash.upgradeURLModules}
					isExternal
				/>
			)}
		</div>
	);
};

export default () => {
	const unorderedModuels = Object.entries(neveDash.modules);

	const orderedModules = unorderedModuels.sort((a, b) => {
		if (a[1].order && b[1].order) {
			return a[1].order - b[1].order;
		}
		return 0;
	});

	return (
		<>
			<ModulesHeader />
			<div className="grid xl:grid-cols-2 gap-6">
				{orderedModules.map(([slug, moduleData]) => (
					<ModuleCard
						key={slug}
						moduleData={moduleData}
						slug={slug}
					/>
				))}
			</div>
		</>
	);
};
