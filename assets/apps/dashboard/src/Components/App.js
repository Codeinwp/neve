import Header from './Header';
import Notifications from './Notifications';
import TabsContent from './TabsContent';
import Sidebar from './Sidebar';
import Loading from './Loading';
import Snackbar from './Snackbar';
import { fetchOptions } from '../utils/rest';

import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { useState, useEffect } from '@wordpress/element';
import Deal from './Deal';
import Container from '../Layout/Container';

const App = ({ setSettings, toast, currentTab, setTab }) => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetchOptions().then((r) => {
			setSettings(r);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="antialiased grow flex flex-col gap-6 h-full">
			<Header />

			{/*<Deal />*/}
			{'starter-sites' !== currentTab && <Notifications />}

			<Container className="flex flex-col md:flex-row gap-6 h-full grow">
				<div className="grow">
					<TabsContent currentTab={currentTab} setTab={setTab} />
				</div>

				{'starter-sites' !== currentTab && (
					<div className="shrink-0 md:w-[350px]">
						<Sidebar />
					</div>
				)}
			</Container>

			{toast && <Snackbar />}
		</div>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const { setSettings, setTab } = dispatch('neve-dashboard');
		return {
			setSettings: (object) => setSettings(object),
			setTab: (tab) => setTab(tab),
		};
	}),
	withSelect((select) => {
		const { getToast, getTab } = select('neve-dashboard');
		return {
			toast: getToast(),
			currentTab: getTab(),
		};
	})
)(App);
