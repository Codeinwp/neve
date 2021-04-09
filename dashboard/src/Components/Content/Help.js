/* global neveDash */
import Card from '../Card';

import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { Button, Icon } from '@wordpress/components';
import { externalLinkIcon } from '../../../../inc/admin/metabox/src/helpers/icons.js';

const Help = (props) => {
	const { setTab } = props;

	let { docsURL, supportURL, whiteLabel, assets } = neveDash;
	const { supportCardDescription, docsCardDescription } = neveDash.strings;

	if (whiteLabel && whiteLabel.agencyURL) {
		supportURL = whiteLabel.agencyURL;
		docsURL = whiteLabel.agencyURL;
	}

	return (
		<Fragment>
			{!whiteLabel && (
				<Card
					icon={assets + 'arrows.svg'}
					title={__(
						'Build a landing page with a drag-and-drop content builder',
						'neve'
					)}
					description={__(
						'In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.',
						'neve'
					)}
				>
					<Button
						isLink
						href="http://docs.themeisle.com/article/219-how-to-build-a-landing-page-with-a-drag-and-drop-content-builder"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="screen-reader-text">
							{__('(opens in a new tab)', 'neve')}
						</span>
						<Icon icon={externalLinkIcon} />
						{__('Learn More', 'neve')}
					</Button>
				</Card>
			)}
			<Card
				icon={assets + 'page.svg'}
				title={__('Documentation', 'neve')}
				description={docsCardDescription}
			>
				<Button
					isLink
					href={docsURL}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="screen-reader-text">
						{__('(opens in a new tab)', 'neve')}
					</span>
					<Icon icon={externalLinkIcon} />
					{__('Go to docs', 'neve')}
				</Button>
				{!whiteLabel && (
					<Button
						isLink
						className="facebook-badge"
						href="https://www.facebook.com/groups/648646435537266/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="screen-reader-text">
							{__('(opens in a new tab)', 'neve')}
						</span>
						<Icon icon="facebook-alt" />
						<span>{__('Join our Facebook Group', 'neve')}</span>
					</Button>
				)}
			</Card>

			{!whiteLabel && (
				<Card
					icon={assets + 'clone.svg'}
					title={__('Create a child theme', 'neve')}
					description={__(
						"If you want to make changes to the theme's files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.",
						'neve'
					)}
				>
					<Button
						isLink
						href="http://docs.themeisle.com/article/14-how-to-create-a-child-theme"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="screen-reader-text">
							{__('(opens in a new tab)', 'neve')}
						</span>
						<Icon icon={externalLinkIcon} />
						{__('Learn More', 'neve')}
					</Button>
				</Card>
			)}

			<Card
				icon={neveDash.assets + 'buoy.svg'}
				title={__('Contact Support', 'neve')}
				description={supportCardDescription}
			>
				<Button
					isPrimary
					href={supportURL}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="screen-reader-text">
						{__('(opens in a new tab)', 'neve')}
					</span>
					{__('Contact Support', 'neve')}
				</Button>
			</Card>

			{!whiteLabel && (
				<Card
					icon={assets + 'tachometer.svg'}
					title={__('Speed up your site', 'neve')}
					description={__(
						'If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.',
						'neve'
					)}
				>
					<Button
						isLink
						href="http://docs.themeisle.com/article/63-speed-up-your-wordpress-site"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="screen-reader-text">
							{__('(opens in a new tab)', 'neve')}
						</span>
						<Icon icon={externalLinkIcon} />
						{__('Learn More', 'neve')}
					</Button>
				</Card>
			)}
			{!whiteLabel && (
				<Card
					icon={assets + 'list.svg'}
					title={__('Changelog', 'neve')}
					description={__(
						'Want to get the gist on the latest theme changes? Just consult our changelog below to get a taste of the recent fixes and features implemented.',
						'neve'
					)}
				>
					<Button isLink onClick={() => setTab('changelog')}>
						{__('View Changelog', 'neve')}
					</Button>
				</Card>
			)}
		</Fragment>
	);
};

export default Help;
