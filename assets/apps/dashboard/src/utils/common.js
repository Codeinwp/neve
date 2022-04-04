/* global neveDash */
import compareVersions from 'compare-versions';

import StarterSitesUnavailable from '../Components/Content/StarterSitesUnavailable';
import Start from '../Components/Content/Start';
import Pro from '../Components/Content/Pro';
import Plugins from '../Components/Content/Plugins';
import Help from '../Components/Content/Help';
import Changelog from '../Components/Content/Changelog';
import FreePro from '../Components/Content/FreePro';
import { __ } from '@wordpress/i18n';

const addUrlHash = (hash) => {
	window.location.hash = hash;
};

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
		render: (setTab) => <Start setTab={setTab} />,
	},
	'starter-sites': {
		label: __('Starter Sites', 'neve'),
		render: () => <StarterSitesUnavailable />,
	},
	'free-pro': {
		label: __('Free vs Pro', 'neve'),
		render: () => <FreePro />,
	},
	plugins: {
		label: __('Plugins', 'neve'),
		render: () => <Plugins />,
	},
	help: {
		label: __('Help', 'neve'),
		render: (setTab) => <Help setTab={setTab} />,
	},
	changelog: {
		label: __('Changelog', 'neve'),
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
	delete tabs['starter-sites'];
}

if (neveDash.pro || neveDash.hasOldPro) {
	tabs.pro = {
		label: neveDash.strings.proTabTitle,
		render: () => <Pro />,
	};
	delete tabs['free-pro'];
}

if (neveDash.whiteLabel) {
	delete tabs.changelog;
	delete tabs.plugins;
	if (neveDash.whiteLabel.hideStarterSites) {
		delete tabs['starter-sites'];
	}
}

if (neveDash.hidePluginsTab) {
	delete tabs.plugins;
}

const untrailingSlashIt = (str) => str.replace(/\/$/, '');
const trailingSlashIt = (str) => untrailingSlashIt(str) + '/';

export { addUrlHash, getTabHash, trailingSlashIt, untrailingSlashIt, tabs };
