import Header from './Header';
import Notifications from './Notifications';
import TabsContent from './TabsContent';
import Sidebar from './Sidebar';
import Loading from './Loading';
import Snackbar from './Snackbar';
import {getTabHash} from '../utils/common';
import {get, send} from '../utils/rest';

const {withDispatch, withSelect} = wp.data;
const {compose} = wp.compose;
const {useState, Fragment, useEffect} = wp.element;

const App = ({setSettings, toast, currentTab, setTab}) => {
	const [ loading, setLoading ] = useState(true);
	useEffect(() => {
		let settings;
		wp.api.loadPromise.then(() => {
			settings = new wp.api.models.Settings();
			settings.fetch().then(r => {
				setSettings(r);
				setLoading(false);
			});
		});
	}, []);
	if (loading) {
		return <Loading/>;
	}

	return (
		<Fragment>
			<Header currentTab={currentTab} setTab={setTab}/>
			<div className="container content">
				<div className="main">
					{'starter-sites' !== currentTab && <Notifications/>}
					<TabsContent currentTab={currentTab} setTab={setTab}/>
				</div>
				{'starter-sites' !== currentTab && <Sidebar currentTab={currentTab}/>}
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
		return {
			toast: getToast(),
			currentTab: getTab()
		};
	})
)(App);
