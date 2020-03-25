/* global neveDash */
import StarterSites from '../Components/Content/StarterSites';
import Start from '../Components/Content/Start';
import Pro from '../Components/Content/Pro';
import Plugins from '../Components/Content/Plugins';
import Help from '../Components/Content/Help';
import Changelog from '../Components/Content/Changelog';
import FreePro from '../Components/Content/FreePro';

const getUrlParam = (param) => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	return urlParams.get(param);
};

const addUrlHash = (hash) => {
	window.location.hash = hash;
};

const getTabHash = () => {
	let hash = window.location.hash;

	if ('string' !== typeof window.location.hash) {
		return null;
	}

	hash = hash.substring(1);

	if (! Object.keys(tabs).includes(hash)) {
		return null;
	}

	return hash;
};

const tabs = {
	'start': {label: 'Getting Started', render: (setTab) => <Start setTab={setTab}/>},
	'plugins': {label: 'Useful Plugins', render: () => <Plugins/>},
	'help': {label: 'Help & docs', render: (setTab) => <Help setTab={setTab}/>},
	'changelog': {label: 'Changelog', render: () => <Changelog/>},
	'starter-sites': {label: 'Starter Sites', render: () => <StarterSites/>},
	'free-pro': {label: 'Free vs Pro', render: () => <FreePro/>}
};

if (neveDash.pro) {
	tabs.pro = {label: 'Neve Pro', render: () => <Pro/>};
	delete (tabs['free-pro']);
}


export {
	getUrlParam,
	addUrlHash,
	getTabHash,
	tabs
};
