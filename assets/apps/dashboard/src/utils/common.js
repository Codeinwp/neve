/* global neveDash */
import compareVersions from 'compare-versions';

import StarterSitesUnavailable from '../Components/Content/StarterSitesUnavailable';
import Welcome from '../Components/Content/Welcome';
import FreePro from '../Components/Content/FreePro';
import Settings from '../Components/Content/Settings';
import Changelog from '../Components/Content/Changelog';

import { __ } from '@wordpress/i18n';

const getTabHash = () => {
	let hash = window.location.hash;

	if ('string' !== typeof window.location.hash) {
		return null;
	}

	hash = hash.substring(1);

	if (!Object.keys(tabs).includes(hash)) {
		return null;
	}

	return hash;
};

const tabs = {
	start: {
		label: __('Welcome', 'neve'),
		render: () => <Welcome />,
	},
	'starter-sites': {
		label: __('Starter Sites', 'neve'),
		render: () => <StarterSitesUnavailable />,
	},
	'free-pro': {
		label: __('Free vs Pro', 'neve'),
		render: () => <FreePro />,
	},
	settings: {
		label: __('Settings', 'neve'),
		render: () => <Settings />,
	},
	changelog: {
		render: () => <Changelog />,
	},
};

const { plugins } = neveDash;
const activeTPC =
	plugins['templates-patterns-collection'] &&
	plugins['templates-patterns-collection'].cta === 'deactivate';
const properTPC =
	plugins['templates-patterns-collection'] &&
	compareVersions(
		plugins['templates-patterns-collection'].version,
		'1.0.10'
	) === 1;

if (activeTPC && properTPC) {
	delete tabs['starter-sites'].render;

	tabs['starter-sites'].url = neveDash.tpcAdminURL;
}

if (neveDash.pro || neveDash.hasOldPro) {
	delete tabs['free-pro'];
}

if (neveDash.whiteLabel) {
	delete tabs.changelog;
	if (neveDash.whiteLabel.hideStarterSites) {
		delete tabs['starter-sites'];
	}
}

export { getTabHash, tabs };
