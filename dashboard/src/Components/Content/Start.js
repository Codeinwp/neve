/* global neveDash */
import Card from '../Card';
import { tabs } from '../../utils/common';

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { Button, ExternalLink } from '@wordpress/components';
import { withSelect } from '@wordpress/data';

const Start = (props) => {
	const { setTab, tier } = props;
	const {
		showFeedbackNotice,
		pro,
		whiteLabel,
		customizerShortcuts,
		tpcAdminURL,
	} = neveDash;
	const starterSitesHidden = whiteLabel && whiteLabel.hideStarterSites;

	const renderCustomizerLinks = () => {
		const split = Math.ceil(customizerShortcuts.length / 2);
		const parts = [
			customizerShortcuts.slice(0, split),
			customizerShortcuts.slice(split),
		];
		return (
			<div className="columns">
				{parts.map((column, index) => {
					return (
						<div className="col" key={index}>
							{column.map((item, indexColumn) => {
								return (
									<Fragment key={indexColumn}>
										<Button isLink href={item.link}>
											{item.text}
										</Button>
										{indexColumn !== column.length - 1 && (
											<hr />
										)}
									</Fragment>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<>
			{!starterSitesHidden && (
				<Card
					icon={neveDash.assets + 'squares.svg'}
					title={__('Starter Sites', 'neve')}
					description={neveDash.strings.starterSitesCardDescription}
				>
					{tabs['starter-sites'] ? (
						<Button
							isPrimary
							onClick={() => {
								setTab('starter-sites');
							}}
						>
							{__('Go to Starter Sites', 'neve')}
						</Button>
					) : (
						<Button href={tpcAdminURL} isPrimary>
							{__('Go to Starter Sites', 'neve')}
						</Button>
					)}
				</Card>
			)}

			<Card
				classNames="customizer-quick-links"
				icon={neveDash.assets + 'compass.svg'}
				title={__('Customizer quick links', 'neve')}
			>
				{renderCustomizerLinks()}
			</Card>

			{!whiteLabel && (
				<>
					<Card
						icon={neveDash.assets + 'page.svg'}
						title={__(
							'Getting Started? Check help and docs',
							'neve'
						)}
						description={__(
							'Need more details? Please check our full documentation for detailed information on how to use Neve.',
							'neve'
						)}
					>
						<Button isLink onClick={() => setTab('help')}>
							{__('Go to docs', 'neve')}
						</Button>
					</Card>
					<Card
						icon={neveDash.assets + 'template-cloud.svg'}
						title="Templates Cloud"
						description={__(
							'Import professional page templates or sections with one click and have a website running in seconds.',
							'neve'
						)}
					>
						{tier !== 3 && (
							<ExternalLink href="https://themeisle.com/themes/neve/#pricing">
								{__('Discover Templates Cloud', 'neve')}
							</ExternalLink>
						)}
						{tier === 3 && (
							<ExternalLink href="https://docs.themeisle.com/article/1091-starter-sites-available-for-import#my-library">
								{__('Learn how to use Templates Cloud', 'neve')}
							</ExternalLink>
						)}
					</Card>
				</>
			)}
			{showFeedbackNotice && !pro && (
				<Card
					classNames="feedback-card"
					icon="awards"
					dashicon={true}
					title={__('Feedback', 'neve')}
					description={__(
						'Share your feedback for Neve and get the chance to win the pro version.',
						'neve'
					)}
				>
					<Button
						isPrimary
						href="https://themeisle.com/review-neve-theme/"
					>
						{__('Leave Feedback', 'neve')}
					</Button>
				</Card>
			)}
		</>
	);
};

export default withSelect((select) => {
	const { getLicenseTier } = select('neve-dashboard');
	return {
		tier: getLicenseTier(),
	};
})(Start);
