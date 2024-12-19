/* global neveDash */
import InstallActivate from '../Plugin/InstallActivate';
import { withSelect } from '@wordpress/data';
import Card from '../../Layout/Card';

const BackgroundPlaceholder = () => (
	<div
		className="block absolute inset-0 bg-cover opacity-15 mx-auto max-w-[1300px]"
		style={{
			backgroundImage: `url(${neveDash.assets}starter.jpg)`,
			height: 'calc: (100vh -100px)',
			backgroundPosition: 'center -250px',
		}}
	/>
);

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
		<div className="relative h-full">
			<BackgroundPlaceholder />

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
		</div>
	);
};

export default withSelect((select) => {
	const { getPlugins } = select('neve-dashboard');
	return {
		templatesPluginData: getPlugins()['templates-patterns-collection'],
	};
})(StarterSitesUnavailable);
