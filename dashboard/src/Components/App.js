/* global neveDash */
import Header from './Header';
import Notifications from './Notifications';
import TabsContent from './TabsContent';
import Sidebar from './Sidebar';
import Loading from './Loading';
import Snackbar from './Snackbar';
import classnames from 'classnames';
import {fetchOptions} from '../utils/rest';

const {withDispatch, withSelect} = wp.data;
const {compose} = wp.compose;
const {useState, Fragment, useEffect} = wp.element;

const App = ({setSettings, toast, currentTab, setTab, isOnboarding}) => {
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		fetchOptions().then(r => {
			setSettings(r);
			setLoading(false);
		});
	}, []);
	if (loading) {
		return <Loading/>;
	}
	const wrapClasses = classnames([ 'content-wrap', {
		'is-onboarding': isOnboarding && 'starter-sites' === currentTab,
		'starter-sites': 'starter-sites' === currentTab
	} ]);
	return (
		<Fragment>
			<Header currentTab={currentTab} setTab={setTab}/>
			<div className={wrapClasses}>
				<div className="container content">
					<div className="main">
						{'starter-sites' !== currentTab && <Notifications/>}
						<TabsContent currentTab={currentTab} setTab={setTab}/>
					</div>
					{'starter-sites' !== currentTab && <Sidebar currentTab={currentTab}/>}
				</div>
			</div>
			{toast && <Snackbar/>}
		</Fragment>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const {setSettings, setTab} = dispatch('neve-dashboard');
		return {
			setSettings: (object) => setSettings(object),
			setTab: (tab) => setTab(tab)
		};
	}),
	withSelect((select) => {
		const {getToast, getTab} = select('neve-dashboard');
		const {getOnboardingStatus} = select('neve-onboarding');
		return {
			toast: getToast(),
			currentTab: getTab(),
			isOnboarding: getOnboardingStatus()
		};
	})
)(App);
