/* global neveDash */
import Card from '../Card';

const {__} = wp.i18n;
const {Fragment} = wp.element;
const {Button} = wp.components;

const Help = (props) => {
	const {setTab} = props;

	let {docsURL, supportURL, whiteLabel, assets} = neveDash;
	let {supportCardDescription, docsCardDescription} = neveDash.strings;

	if (whiteLabel && whiteLabel.agencyURL) {
		supportURL = whiteLabel.agencyURL;
		docsURL = whiteLabel.agencyURL;
	}

	return (
		<Fragment>
			<div className="col">
				<Card
					icon={neveDash.assets + 'buoy.svg'}
					title={__('Contact Support', 'neve')}
					description={supportCardDescription}
				>
					<Button
						isPrimary
						isLarge
						href={supportURL}
					>{__('Contact Support', 'neve')}</Button>
				</Card>
				{! whiteLabel &&
				<Fragment>
					<Card
						icon={assets + 'list.svg'}
						title={__('Changelog', 'neve')}
						description={__('Want to get the gist on the latest theme changes? Just consult our changelog below to get a taste of the recent fixes and features implemented.', 'neve')}
					>
						<Button
							isLink
							onClick={() => setTab('changelog')}
						>{__('View Changelog', 'neve')}
						</Button>
					</Card>
					<Card
						icon={assets + 'tachometer.svg'}
						title={__('Speed up your site', 'neve')}
						description={__('If you find yourself in a situation where everything on your site is running very slowly, you might consider having a look at the documentation below where you will find the most common issues causing this and possible solutions for each of the issues.', 'neve')}
					>
						<Button
							isLink
							href="http://docs.themeisle.com/article/63-speed-up-your-wordpress-site">
							{__('Learn More', 'neve')}
						</Button>
					</Card>
				</Fragment>
				}
			</div>
			<div className="col col-last">
				<Card
					icon={assets + 'page.svg'}
					title={__('Documentation', 'neve')}
					description={docsCardDescription}
				>
					<Button
						isLink
						href={docsURL}
					>
						{__('Go to docs', 'neve')}
					</Button>
				</Card>
				{! whiteLabel &&
				<Fragment>
					<Card
						icon={assets + 'clone.svg'}
						title={__('Create a child theme', 'neve')}
						description={__('If you want to make changes to the theme\'s files, those changes are likely to be overwritten when you next update the theme. In order to prevent that from happening, you need to create a child theme. For this, please follow the documentation below.', 'neve')}
					>
						<Button
							isLink
							href="http://docs.themeisle.com/article/14-how-to-create-a-child-theme"
						>
							{__('Learn More', 'neve')}
						</Button>
					</Card>
					<Card
						icon={assets + 'arrows.svg'}
						title={__('Build a landing page with a drag-and-drop content builder', 'neve')}
						description={__('In the documentation below you will find an easy way to build a great looking landing page using a drag-and-drop content builder plugin.', 'neve')}
					>
						<Button
							isLink
							href="http://docs.themeisle.com/article/219-how-to-build-a-landing-page-with-a-drag-and-drop-content-builder"
						>
							{__('Learn More', 'neve')}
						</Button>
					</Card>
				</Fragment>
				}
			</div>
		</Fragment>
	);
};

export default Help;
