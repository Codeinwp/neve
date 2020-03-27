import './style.scss';
import App from './Components/App';
const {registerStore} = wp.data;
const {render} = wp.element;

import actions from './store/actions';
import reducer from './store/reducer';
import selectors from './store/selectors';

registerStore('neve-dashboard', {
	reducer,
	actions,
	selectors
});

const Root = () => <App/>;
render(
	<Root/>,
	document.getElementById('neve-dashboard')
);

