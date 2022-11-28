/* global neveDash */
import { changeOption } from '../utils/rest';
import LicenseCard from './LicenseCard';
import { __ } from '@wordpress/i18n';
import { ToggleControl, ExternalLink } from '@wordpress/components';
import { createInterpolateElement, useState } from '@wordpress/element';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const Sidebar = ({ currentTab, setToast, loggerValue, setLogger }) => {
	const [tracking, setTracking] = useState('yes' === loggerValue);

	return (
		<div className="sidebar-wrap">
			{neveDash.pro && <LicenseCard isVisible={'pro' === currentTab} />}
			{!neveDash.whiteLabel && (
				<aside className="sidebar card">
					<div className="sidebar-section">
						<h4>{__('Neve Community', 'neve')}</h4>
						<p>
							{typeof createInterpolateElement !== 'undefined' &&
								createInterpolateElement(
									__(
										'Share opinions, ask questions and help each other on our Neve community! Keep up with what we’re working on and vote to help us prioritize on our <external_link>public roadmap</external_link>.',
										'neve'
									),
									{
										external_link: (
											<ExternalLink href="https://github.com/Codeinwp/neve/discussions">
												#dumptext
											</ExternalLink>
										),
									}
								)}
						</p>
						<ExternalLink href="https://www.facebook.com/groups/648646435537266/">
							{__('Join our Facebook Group', 'neve')}
						</ExternalLink>
					</div>
					<hr />
					<div className="sidebar-section">
						<h4>{__('Leave us a review', 'neve')}</h4>
						<p>
							{__(
								'Are you are enjoying Neve? We would love to hear your feedback.',
								'neve'
							)}
						</p>
						<ExternalLink href="https://wordpress.org/support/theme/neve/reviews/#new-post">
							{__('Submit a review', 'neve')}
						</ExternalLink>
					</div>
					<hr />
					<div className="sidebar-section">
						<h4>{__('Contributing', 'neve')}</h4>
						<p>
							{__(
								'Become a contributor by opting in to our anonymous data tracking. We guarantee no sensitive data is collected.',
								'neve'
							)}
							&nbsp;
							<ExternalLink href="https://docs.themeisle.com/article/1122-neve-usage-tracking">
								{__('What do we track?', 'neve')}
							</ExternalLink>
						</p>
						<ToggleControl
							checked={tracking}
							label={__('Allow Anonymous Tracking', 'neve')}
							onChange={(value) => {
								setTracking(value);
								changeOption(
									'neve_logger_flag',
									value ? 'yes' : 'no',
									false,
									false
								).then((r) => {
									if (!r.success) {
										setToast(
											__(
												'Could not update option. Please try again.',
												'neve'
											)
										);
										setTracking(!value);
										return false;
									}
									setLogger(value ? 'yes' : 'no');
									setToast(__('Option Updated', 'neve'));
								});
							}}
						/>
					</div>
				</aside>
			)}
		</div>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const { setToast, setLogger } = dispatch('neve-dashboard');
		return {
			setToast: (message) => setToast(message),
			setLogger: (value) => setLogger(value),
		};
	}),
	withSelect((select) => {
		const { getOption } = select('neve-dashboard');
		return {
			loggerValue: getOption('neve_logger_flag'),
		};
	})
)(Sidebar);
