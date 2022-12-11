/* global neveDash */
import { __ } from '@wordpress/i18n';
import InstallActivate from '../Plugin/InstallActivate';
import { withSelect } from '@wordpress/data';

const StarterSitesUnavailable = ({templatesPluginData}) => {
	const { assets } = neveDash;

	const { tpcPath, tpcAdminURL, isOnboarding, pluginsURL } = neveDash;
	const activateRedirect = tpcAdminURL + (isOnboarding ? '&onboarding=yes' : '')

	return (
		<div className="unavailable-starter-sites">
			<div
				className="ss-background"
				style={{ backgroundImage: `url(${assets}/starter.jpg)` }}
			/>
			<div className="content-wrap">
				<InstallActivate slug={'templates-patterns-collection'} pluginBasename={tpcPath} activateRedirect={activateRedirect} pluginState={templatesPluginData?.cta || 'install'} activateURL={templatesPluginData?.activate || ''} />
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