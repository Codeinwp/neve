import Header from './Header';
import Notifications from './Notifications';
import TabsContent from './TabsContent';
import Sidebar from './Sidebar';
import Loading from './Loading';
import {getTabHash} from '../utils/common';

const {withDispatch} = wp.data;
const {useState, Fragment, useEffect} = wp.element;

const App = ({setSettings}) => {
	const [ loading, setLoading ] = useState(true);
	const [ currentTab, setTab ] = useState('start');

	useEffect(() => {
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
		</Fragment>
	);
};

export default withDispatch((dispatch) => {
	const {setSettings} = dispatch('neve-dashboard');
	return {setSettings: (object) => setSettings(object)};
})(App);
