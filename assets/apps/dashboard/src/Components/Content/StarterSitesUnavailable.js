/* global neveDash */
import InstallActivate from '../Plugin/InstallActivate';
import { withSelect } from '@wordpress/data';

const StarterSitesUnavailable = ({ templatesPluginData }) => {
	const { tpcPath, tpcAdminURL, assets } = neveDash;
	const activateRedirect = tpcAdminURL + '&onboarding=yes';
	const currentState = templatesPluginData?.cta || 'install';

	return (
		<div className="unavailable-starter-sites">
			<div
				className="ss-background"
				style={{ backgroundImage: `url(${assets}/starter.jpg)` }}
			/>
			<div className="content-wrap">
				<InstallActivate
					pluginData={{
						name: 'Cloud Templates & Patterns Collection',
						slug: 'templates-patterns-collection',
						pluginBasename: tpcPath,
						pluginState: currentState,
						activateURL: templatesPluginData?.activate || '',
					}}
					successActivation={() => {
						window.location.href = activateRedirect;
					}}
					successUpdate={() => {
						window.location.href = activateRedirect;
					}}
					description={
						<>
							<h1>
								{'deactivate' === currentState
									? neveDash.strings
											.starterSitesUnavailableUpdate
									: neveDash.strings
											.starterSitesUnavailableActive}
							</h1>
							<br />
						</>
					}
				/>
			</div>
		</div>
	);
};

export default withSelect((select) => {
	const { getPlugins } = select('neve-dashboard');
	return {
		templatesPluginData: getPlugins()['templates-patterns-collection'],
	};
})(StarterSitesUnavailable);
