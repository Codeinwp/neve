import { changeOption } from '../../../utils/rest';
import SupportCard from './SupportCard';
import LicenseCard from './LicenseCard';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	NEVE_HAS_PRO,
	NEVE_HIDE_PLUGINS,
	NEVE_IS_WHITELABEL,
	NEVE_STORE,
} from '../../../utils/constants';
import Card from '../../../Layout/Card';
import Link from '../../Common/Link';
import Toggle from '../../Common/Toggle';
import PluginsCard from './PluginsCard';
import { LucideLoaderCircle } from 'lucide-react';

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

const Sidebar = () => {
	return (
		<div className="grid gap-6">
			{NEVE_HAS_PRO && <LicenseCard />}

			{!NEVE_IS_WHITELABEL && NEVE_HAS_PRO && <SupportCard />}

			{!NEVE_IS_WHITELABEL && (
				<>
					<ReviewCard />
					<ContributingCard />
				</>
			)}

			{!NEVE_HIDE_PLUGINS && <PluginsCard />}
		</div>
	);
};

export default Sidebar;
