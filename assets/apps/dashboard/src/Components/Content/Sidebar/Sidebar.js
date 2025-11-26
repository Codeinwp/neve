/* global neveDash */
import { changeOption } from '../../../utils/rest';
import SupportCard from './SupportCard';
import LicenseCard from './LicenseCard';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	NEVE_HAS_PRO,
	NEVE_IS_WHITELABEL,
	NEVE_STORE,
} from '../../../utils/constants';
import Card from '../../../Layout/Card';
import Link from '../../Common/Link';
import Toggle from '../../Common/Toggle';
import Button from '../../Common/Button';
import PluginsCard from './PluginsCard';
import { LucideLoaderCircle, ArrowRight, BookOpen } from 'lucide-react';

const ReviewCard = () => (
	<Card title={__('Leave us a review', 'neve')}>
		<p className="text-gray-600 mb-4 text-sm">
			{__(
				'Are you are enjoying Neve? We would love to hear your feedback.',
				'neve'
			)}
		</p>

		<Link
			isExternal
			text={__('Submit a review', 'neve')}
			url={'https://wordpress.org/support/theme/neve/reviews/#new-post'}
		/>
	</Card>
);

const ContributingCard = () => {
	const loggerEnabled = useSelect((select) => {
		const { getOption } = select(NEVE_STORE);

		return getOption('neve_logger_flag');
	});

	const [tracking, setTracking] = useState('yes' === loggerEnabled);
	const [loading, setLoading] = useState(false);

	const { setToast, setLogger } = useDispatch(NEVE_STORE);

	const handleTrackingChange = (value) => {
		setLoading(true);
		setTracking(value);
		changeOption('neve_logger_flag', value ? 'yes' : 'no', false, false)
			.then((r) => {
				if (!r.success) {
					setToast(
						__('Could not update option. Please try again.', 'neve')
					);
					setTracking(!value);
					return;
				}
				setLogger(value ? 'yes' : 'no');
				setToast(__('Option Updated', 'neve'));
			})
			.catch(() => {
				setToast(
					__('Could not update option. Please try again.', 'neve')
				);
				setTracking(!value);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<Card title={__('Contributing', 'neve')}>
			<p className="text-gray-600 mb-4 text-sm">
				{__(
					'Become a contributor by opting in to our anonymous data tracking. We guarantee no sensitive data is collected.',
					'neve'
				)}
			</p>

			<Link
				isExternal
				text={__('What do we track?', 'neve')}
				url={
					'https://docs.themeisle.com/article/1122-neve-usage-tracking'
				}
			/>

			<Toggle
				className="mt-4"
				onToggle={handleTrackingChange}
				checked={tracking}
				label={
					<div className="flex items-center gap-3">
						{__('Allow Anonymous Tracking', 'neve')}
						{loading && (
							<LucideLoaderCircle
								size={18}
								className="animate-spin"
							/>
						)}
					</div>
				}
			/>
		</Card>
	);
};

const UpsellCard = () => {
	return (
		<Card>
			<div className="max-w-2xl mx-auto">
				<h3 className="text-lg font-semibold mb-4">
					{__('Need help deciding?', 'neve')}
				</h3>
				<div className="space-y-4 mb-6 text-gray-600">
					<p>
						{__(
							'Our support team is happy to answer your questions about specific Pro features and help you determine if they match your needs.',
							'neve'
						)}
					</p>
					<div className="flex items-start space-x-2">
						<div className="bg-gray-100 px-3 py-1.5 rounded">
							{__(
								'Average response time: ~8 hours during business days',
								'neve'
							)}
						</div>
					</div>
				</div>
				<div className="flex gap-4">
					<Button
						isPrimary
						href={neveDash.upgradeURL}
						target="_blank"
						className="gap-"
					>
						{__('View Pro Plans', 'neve')}
						<ArrowRight className="ml-2" size={16} />
					</Button>
					<Button
						isLink
						href="https://themeisle.com/contact"
						target="_blank"
						className="!border-gray-300"
					>
						{__('Contact Support', 'neve')}
						<BookOpen className="ml-2" size={16} />
					</Button>
				</div>
			</div>
		</Card>
	);
};

const CommunityCard = () => {
	return (
		<Card title={__('Join the Community', 'neve')}>
			<p className="text-gray-600 mb-4 text-sm">
				{__(
					'Share opinions, ask questions and help each other on our Neve community!',
					'neve'
				)}
			</p>

			<Link
				isExternal
				text={__('Join our Facebook Group', 'neve')}
				url={'https://www.facebook.com/groups/648646435537266/'}
			/>
		</Card>
	);
};

const Sidebar = () => {
	const { currentTab } = useSelect((select) => {
		const { getTab } = select(NEVE_STORE);
		return {
			currentTab: getTab(),
		};
	});

	return (
		<div className="grid gap-6">
			{NEVE_HAS_PRO && <LicenseCard />}

			{NEVE_HAS_PRO && <SupportCard />}

			{currentTab === 'free-pro' && <UpsellCard />}

			{!NEVE_IS_WHITELABEL && <ReviewCard />}

			{!NEVE_HAS_PRO && <PluginsCard />}

			{!NEVE_IS_WHITELABEL && (
				<>
					<ContributingCard />
					<CommunityCard />
				</>
			)}
		</div>
	);
};

export default Sidebar;
