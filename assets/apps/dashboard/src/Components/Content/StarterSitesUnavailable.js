/* global neveDash */
import InstallActivate from '../Plugin/InstallActivate';
import { withSelect } from '@wordpress/data';
import Card from '../../Layout/Card';
import Container from '../../Layout/Container';
import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import { TransitionWrapper } from '../Common/TransitionWrapper';

const BackgroundPlaceholder = () => {
	const [show, setShow] = useState(false);

	const handleImageLoaded = () => {
		setShow(true);
	};

	return (
		<div className="block absolute overflow-hidden inset-0 bg-cover opacity-15 mx-auto max-w-[1300px]">
			<TransitionWrapper show={show} from="bottom" className="delay-150">
				<img
					style={{ marginTop: '-200px' }}
					className="transition duration-300"
					onLoad={handleImageLoaded}
					src={`${neveDash.assets}starter.jpg`}
					alt={__('Starter Sites', 'neve')}
				/>
			</TransitionWrapper>
		</div>
	);
};

const StarterSitesUnavailable = ({ templatesPluginData }) => {
	const { tpcPath, tpcAdminURL, canInstallPlugins } = neveDash;
	const currentState = templatesPluginData?.cta || 'install';
	const activateRedirect = `${tpcAdminURL}${
		canInstallPlugins ? '&onboarding=yes' : ''
	}`;
	const description = {
		__html:
			'deactivate' === currentState
				? neveDash.strings.starterSitesUnavailableUpdate
				: neveDash.strings.starterSitesUnavailableActive,
	};

	const redirectToStarterSites = () => {
		window.location.href = activateRedirect;
	};

	return (
		<Container className="relative min-h-full">
			<BackgroundPlaceholder />
			<TransitionWrapper from="top">
				<Card className="z-50 relative flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
					<p
						className="text-gray-800 text-base leading-relaxed mb-6 max-w-2xl mx-auto"
						dangerouslySetInnerHTML={description}
					/>

					<InstallActivate
						successUpdate={redirectToStarterSites}
						successActivation={redirectToStarterSites}
						pluginData={{
							name: 'Starter Sites & Templates',
							slug: 'templates-patterns-collection',
							pluginBasename: tpcPath,
							pluginState: currentState,
							activateURL: templatesPluginData?.activate || '',
						}}
					/>
				</Card>
			</TransitionWrapper>
		</Container>
	);
};

export default withSelect((select) => {
	const { getPlugins } = select('neve-dashboard');
	return {
		templatesPluginData: getPlugins()['templates-patterns-collection'],
	};
})(StarterSitesUnavailable);
