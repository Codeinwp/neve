import Header from './Header';
import Notifications from './Notifications';
import TabsContent from './TabsContent';
import Sidebar from './Sidebar';
import Loading from './Loading';
import Snackbar from './Snackbar';
import { fetchOptions } from '../utils/rest';

import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { useState, Fragment, useEffect } from '@wordpress/element';

const App = ({ tier, setSettings, toast, currentTab, setTab }) => {
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
		<Fragment>
			<Header currentTab={currentTab} setTab={setTab} />
			<div className="content-wrap">
				<div className="container content">
					<div className="main">
						{'starter-sites' !== currentTab && <Notifications />}
						{tier === 3 && (
							<div className="notification template-cloud">
								<p>
									{__(
										'Great news! Now you can export your own custom designs to the cloud and then reuse them on other sites.',
										'neve'
									)}
								</p>
								<Button
									isSecondary
									href="themes.php?page=tiob-starter-sites"
								>
									{__('Open Templates Cloud', 'neve')}
								</Button>
							</div>
						)}
						<TabsContent currentTab={currentTab} setTab={setTab} />
					</div>
					{'starter-sites' !== currentTab && (
						<Sidebar currentTab={currentTab} />
					)}
				</div>
			</div>
			{toast && <Snackbar />}
		</Fragment>
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
		const { getToast, getTab, getLicenseTier } = select('neve-dashboard');
		return {
			toast: getToast(),
			currentTab: getTab(),
			tier: getLicenseTier(),
		};
	})
)(App);
