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

const App = ({setSettings, toast}) => {
	const [ loading, setLoading ] = useState(true);
	const [ currentTab, setTab ] = useState('start');
	useEffect(() => {
		// send('http://localhost:8080/wp-json/wp/v2/settings', {}).then((r)=>console.log(r));
		const hash = getTabHash();
		if (null !== hash) {
			setTab(hash);
		}

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
					<Notifications/>
					<TabsContent currentTab={currentTab} setTab={setTab}/>
				</div>
				<Sidebar currentTab={currentTab}/>
			</div>
			{toast() && <Snackbar/>}
		</Fragment>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const {setSettings} = dispatch('neve-dashboard');
		return {
			setSettings: (object) => setSettings(object)
		};
	}),
	withSelect((select) => {
		const {getToast} = select('neve-dashboard');
		return {
			toast: () => getToast()
		};
	})
)(App);
