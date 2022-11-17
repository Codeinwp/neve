import { render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import SSTryButton from './ss-try-button/SSTryButton.tsx';

const initStarterSiteTryButton = () => {
	const target = document.getElementById('neve-ss-install');
	if (target) {
		render(<SSTryButton />, target);
	}
};

domReady(initStarterSiteTryButton);
