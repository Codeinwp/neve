import Container from '../Layout/Container';
import { fetchOptions } from '../utils/rest';
import Sidebar from './Content/Sidebar/Sidebar';
import Header from './Header';
import Notifications from './Notifications';
import SkeletonLoader from './SkeletonLoader';
import Snackbar from './Snackbar';
import TransitionWrapper from './Common/TransitionWrapper';

import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { tabs } from '../utils/common';
import { NEVE_STORE } from '../utils/constants';

const App = () => {
	const [loading, setLoading] = useState(true);

	const { setSettings, setTab } = useDispatch(NEVE_STORE);

	const { currentTab } = useSelect((select) => {
		const { getTab } = select(NEVE_STORE);
		return {
			currentTab: getTab(),
		};
	});

	useEffect(() => {
		fetchOptions().then((r) => {
			setSettings(r);
			setLoading(false);
			window.tsdk_reposition_notice();
		});
	}, []);

	if (loading) {
		return <SkeletonLoader />;
	}
	return (
		<div className="antialiased grow flex flex-col gap-6 h-full">
			<Header />

			{'starter-sites' !== currentTab && <Notifications />}

			<div id="tsdk_banner"></div>
			<Container className="flex flex-col lg:flex-row gap-6 h-full grow">
				<div className="grow">{tabs[currentTab].render(setTab)}</div>

				{!['starter-sites', 'settings', 'launch-progress'].includes(
					currentTab
				) && (
					<TransitionWrapper className="shrink-0 lg:w-[435px]">
						<Sidebar />
					</TransitionWrapper>
				)}
			</Container>

			<Snackbar />
		</div>
	);
};

export default App;
