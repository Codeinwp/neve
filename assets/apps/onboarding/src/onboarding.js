import { render } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import App from './Components/App';
import './style.scss';

const initOnboarding = () => {
	const target = document.getElementById('neve-onboarding');
	if (target) {
		render(<App />, target);
	}
};

domReady(initOnboarding);
