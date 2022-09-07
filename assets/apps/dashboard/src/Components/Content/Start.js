/* global neveDash */
import Card from '../Card';
import { tabs } from '../../utils/common';

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { Button, ExternalLink } from '@wordpress/components';
import { withSelect } from '@wordpress/data';

const Start = (props) => {
	const { setTab, tier } = props;
	const { pro, whiteLabel, customizerShortcuts, tpcAdminURL } = neveDash;
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
					{!neveDash.isValidLicense && (
						<p>{neveDash.strings.starterSitesCardUpsellMessage}</p>
					)}

					<div className="card-button-wrap">
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
						{!neveDash.isValidLicense && (
							<Button
								target="_blank"
								rel="external noreferrer noopener"
								href={neveDash.startSitesgetNeveProURL}
								isSecondary
							>
								{__('Get Neve Pro', 'neve')}
								<span className="components-visually-hidden">
									{__('(opens in a new tab)', 'neve')}
								</span>
							</Button>
						)}
					</div>
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
						lockIcon={!pro}
						description={__(
							'Boost productivity and speed up your workflow by saving all your designs and share them automatically to all your sites in 1-click.',
							'neve'
						)}
					>
						{tier !== 3 && (
							<ExternalLink href="https://docs.themeisle.com/article/1354-neve-template-cloud-library">
								{__('Discover Templates Cloud', 'neve')}
							</ExternalLink>
						)}
						{tier === 3 && (
							<ExternalLink href="https://docs.themeisle.com/article/1354-neve-template-cloud-library">
								{__('Learn how to use Templates Cloud', 'neve')}
							</ExternalLink>
						)}
					</Card>
				</>
			)}
			{!pro && (
				<>
					<Card
						classNames="woo-card"
						icon="cart"
						dashicon={true}
						lockIcon={true}
						title={__('WooCommerce Booster', 'neve')}
						description={__(
							'Empower your online store with awesome new features, specially designed for a smooth WooCommerce integration.',
							'neve'
						)}
					>
						<ExternalLink href="https://docs.themeisle.com/article/1058-woocommerce-booster-documentation">
							{__('Learn more', 'neve')}
						</ExternalLink>
					</Card>
					<Card
						classNames="block-editor-card"
						icon="block-default"
						dashicon={true}
						lockIcon={true}
						title={__('Block Editor Booster', 'neve')}
						description={__(
							'Enhance your Gutenberg experience with new blocks, including Business Hours, Popup, Review Comparison Table and more.',
							'neve'
						)}
					>
						<ExternalLink href="https://docs.themeisle.com/article/1473-neve-block-editor-booster-module">
							{__('Learn more', 'neve')}
						</ExternalLink>
					</Card>
				</>
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
