import './style.scss';
import App from './Components/App';
import { registerStore } from '@wordpress/data';
import { render } from '@wordpress/element';

import actions from './store/actions';
import reducer from './store/reducer';
import selectors from './store/selectors';
import onboardingReducer from './Components/Onboarding/store/reducer';
import onboardingActions from './Components/Onboarding/store/actions';
import onboardingSelectors from './Components/Onboarding/store/selectors';

registerStore( 'neve-dashboard', {
	reducer,
	actions,
	selectors,
} );

registerStore( 'neve-onboarding', {
	reducer: onboardingReducer,
	actions: onboardingActions,
	selectors: onboardingSelectors,
} );

const Root = () => <App />;
render( <Root />, document.getElementById( 'neve-dashboard' ) );
