import { registerStore } from '@wordpress/data';
import { render } from '@wordpress/element';

import './style.css';
import App from './Components/App';

import actions from './store/actions';
import reducer from './store/reducer';
import selectors from './store/selectors';
import './utils/module-observer';
import './utils/survey';

registerStore('neve-dashboard', {
	reducer,
	actions,
	selectors,
});

const Root = () => <App />;
render(<Root />, document.getElementById('neve-dashboard'));
