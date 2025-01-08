/* global neveDash */
import { __ } from '@wordpress/i18n';
import { LucideSettings } from 'lucide-react';
import Card from '../../Layout/Card';
import {
	NEVE_HAS_VALID_PRO,
	NEVE_MODULE_ICON_MAP,
} from '../../utils/constants';
import Tooltip from '../Common/Tooltip';
import Pill from '../Common/Pill';
import Link from '../Common/Link';

const ModuleCardPlaceholder = ({ slug, title, description }) => {
	const CardIcon = NEVE_MODULE_ICON_MAP[slug] || LucideSettings;

	const ProBadge = (
		<Tooltip text={__('These features are available in Neve Pro.', 'neve')}>
			<Pill type="secondary">{__('Pro', 'neve')}</Pill>
		</Tooltip>
	);

	return (
		<Card
			icon={<CardIcon size={18} />}
			title={title}
			className="bg-white p-6 rounded-lg shadow-sm"
			afterTitle={ProBadge}
		>
			<p className="text-gray-600 text-sm leading-relaxed">
				{description}
			</p>
		</Card>
	);
};

export default () => {
	return (
		<div className="grid xl:grid-cols-2 gap-6">
			<div className="xl:col-span-2 flex items-center justify-between">
				<h2 className="text-lg font-semibold">
					{__('Neve Pro Modules', 'neve')}
				</h2>
				<Link
					className="text-sm font-medium"
					text={__('Get Neve Pro', 'neve')}
					url={neveDash.upgradeURLModules}
					isExternal
				/>
			</div>
			{Object.entries(neveDash.modules).map(
				([slug, { nicename, description }]) => (
					<ModuleCardPlaceholder
						key={slug}
						slug={slug}
						title={nicename}
						description={description}
					/>
				)
			)}
		</div>
	);
};
