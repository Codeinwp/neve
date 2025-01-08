import Header from './Header';
import Notifications from './Notifications';
import TabsContent from './TabsContent';
import Sidebar from './Sidebar';
import Loading from './Loading';
import Snackbar from './Snackbar';
import Container from '../Layout/Container';
import { fetchOptions } from '../utils/rest';

import { useDispatch, useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import Deal from './Deal';

const App = () => {
	const [loading, setLoading] = useState(true);

	const { setSettings, setTab } = useDispatch('neve-dashboard');

	const { toast, currentTab } = useSelect((select) => {
		const { getToast, getTab } = select('neve-dashboard');
		return {
			toast: getToast(),
			currentTab: getTab(),
		};
	});

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

			<Container className="flex flex-col lg:flex-row gap-6 h-full grow">
				<div className="grow">
					<TabsContent currentTab={currentTab} setTab={setTab} />
				</div>

				{'starter-sites' !== currentTab && (
					<div className="shrink-0 lg:w-[435px]">
						<Sidebar />
					</div>
				)}
			</Container>

			{toast && <Snackbar />}
		</div>
	);
};

export default App;
