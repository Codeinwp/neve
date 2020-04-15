/* global neveDash */
import {send} from '../utils/rest';
import LicenseCard from './LicenseCard';
import Toast from './Toast';

const {__} = wp.i18n;
const {ToggleControl} = wp.components;
const {useState} = wp.element;

const Sidebar = ({currentTab}) => {
	const [ tracking, setTracking ] = useState(neveDash.options.logger || false);
	const [ toast, setToast ] = useState('');
	const [ toastType, setToastType ] = useState('success');
	return (
		<div className="sidebar-wrap">
			{neveDash.pro && <LicenseCard isVisible={'pro' === currentTab}/>}
			{! neveDash.whiteLabel &&
			<aside className="sidebar card">
				<div className="sidebar-section">
					<h4>{__('Neve Community', 'neve')}</h4>
					<p>{__('Join the community of Neve users. Get connected, share opinions, ask questions and help each other!')}</p>
					<a href="https://www.facebook.com/groups/648646435537266/">
						{__('Join our Facebook Group', 'neve')}
					</a>
				</div>
				<hr/>
				<div className="sidebar-section">
					<h4>{__('Leave us a review', 'neve')}</h4>
					<p>{__('Are you are enjoying Neve? We would love to hear your feedback.', 'neve')}</p>
					<a href="https://www.facebook.com/groups/648646435537266/">
						{__('Join our Facebook Group', 'neve')}
					</a>
				</div>
				<hr/>
				<div className="sidebar-section">
					<h4>{__('Contributing', 'neve')}</h4>
					<p>{__('Become a contributor by opting in to our anonymous data tracking. We guarantee no sensitive data is collected.', 'neve')}
						&nbsp;<a href="https://docs.themeisle.com/article/1122-neve-usage-tracking">
							{__('What do we track?', 'neve')}
						</a>
					</p>
					<ToggleControl
						checked={tracking}
						label={__('Allow Anonymous Tracking', 'neve')}
						onChange={(value) => {
							setTracking(value);
							send(neveDash.api + '/toggle_tracking', {value}).then((response) => {
								if (! response.success) {
									setToastType('error');
									setToast(__('Could not update option. Please try again.', 'neve'));
									setTracking(! value);
									return false;
								}
								setToastType('success');
								setToast(response.message);
							});
						}}
					/>
					{toast &&
					<Toast dismiss={setToast} message={toast} type={toastType}/>
					}
				</div>
			</aside>
			}
		</div>
	);
};

export default Sidebar;
