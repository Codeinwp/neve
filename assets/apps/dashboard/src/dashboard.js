import { registerStore } from '@wordpress/data';
import { render, StrictMode } from '@wordpress/element';

import './style.css';
import App from './Components/App';

import maybeAddPolyFills from './wp-element-polyfill';

import actions from './store/actions';
import reducer from './store/reducer';
import selectors from './store/selectors';
import { NEVE_STORE } from './utils/constants';

import './utils/module-observer';

maybeAddPolyFills();

registerStore(NEVE_STORE, {
	reducer,
	actions,
	selectors,
});

const Root = () => (
	<StrictMode>
		<App />
	</StrictMode>
);
render(<Root />, document.getElementById('neve-dashboard'));
