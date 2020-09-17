/* global neveDash */
import StarterSites from '../Components/Content/StarterSites';
import StarterSitesUnavailable from '../Components/Content/StarterSitesUnavailable';
import Start from '../Components/Content/Start';
import Pro from '../Components/Content/Pro';
import Plugins from '../Components/Content/Plugins';
import Help from '../Components/Content/Help';
import Changelog from '../Components/Content/Changelog';
import FreePro from '../Components/Content/FreePro';

const addUrlHash = ( hash ) => {
	window.location.hash = hash;
};

const getTabHash = () => {
	let hash = window.location.hash;

	if ( 'string' !== typeof window.location.hash ) {
		return null;
	}

	hash = hash.substring( 1 );

	if ( ! Object.keys( tabs ).includes( hash ) ) {
		return null;
	}

	return hash;
};

const { sites } = neveDash.onboarding;

const tabs = {
	start: {
		label: 'Getting Started',
		render: ( setTab ) => <Start setTab={ setTab } />,
	},
	plugins: { label: 'Useful Plugins', render: ( setTab ) => <Plugins /> },
	help: {
		label: 'Help & docs',
		render: ( setTab ) => <Help setTab={ setTab } />,
	},
	changelog: { label: 'Changelog', render: ( setTab ) => <Changelog /> },
	'free-pro': { label: 'Free vs Pro', render: ( setTab ) => <FreePro /> },
	'starter-sites': {
		label: 'Starter Sites',
		render: ( setTab ) =>
			sites &&
			sites.sites &&
			sites.sites.hasOwnProperty( 'elementor' ) ? (
				<StarterSites />
			) : (
				<StarterSitesUnavailable />
			),
	},
};

if ( neveDash.pro || neveDash.hasOldPro ) {
	tabs.pro = {
		label: neveDash.strings.proTabTitle,
		render: ( setTab ) => <Pro />,
	};
	delete tabs[ 'free-pro' ];
}

if ( neveDash.whiteLabel ) {
	delete tabs.changelog;
	delete tabs.plugins;
	if ( neveDash.whiteLabel.hideStarterSites ) {
		delete tabs[ 'starter-sites' ];
	}
}

if ( neveDash.hidePluginsTab ) {
	delete tabs.plugins;
}

const untrailingSlashIt = ( str ) => str.replace( /\/$/, '' );
const trailingSlashIt = ( str ) => untrailingSlashIt( str ) + '/';

export { addUrlHash, getTabHash, trailingSlashIt, tabs };
