/* global neveDash */
import { __ } from '@wordpress/i18n';
import InstallActivate from '../Plugin/InstallActivate';
import { withSelect } from '@wordpress/data';

const StarterSitesUnavailable = ({ templatesPluginData }) => {
	const { assets } = neveDash;

	const { tpcPath, tpcAdminURL, isOnboarding } = neveDash;
	const activateRedirect =
		tpcAdminURL + (isOnboarding ? '&onboarding=yes' : '');
	const currentState = templatesPluginData?.cta || 'install';

	return (
		<div className="unavailable-starter-sites">
			<div
				className="ss-background"
				style={{ backgroundImage: `url(${assets}/starter.jpg)` }}
			/>
			<div className="content-wrap">
				<InstallActivate
					slug={'templates-patterns-collection'}
					pluginBasename={tpcPath}
					successCallback={()=>{
						window.location.href = activateRedirect;
					}}
					pluginState={currentState}
					activateURL={templatesPluginData?.activate || ''}
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
