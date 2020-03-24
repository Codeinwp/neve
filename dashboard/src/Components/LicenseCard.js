/* global neveDash */
import {send} from '../utils/rest';

const {__} = wp.i18n;
const {Button, Dashicon} = wp.components;
const {Fragment, useState} = wp.element;

const LicenseCard = ({isVisible}) => {
	const {pro, license} = neveDash;
	const [ key, setKey ] = useState(license ? license.key || '' : '' );
	const [ status, setStatus ] = useState(false);
	const valid = license.valid || 'invalid';
	const shownKey = license.key && 'valid' === valid ? '******************************' + key.slice(-5) : '';
	if (! isVisible) {
		return null;
	}

	return (
		<aside className="sidebar card license">
			<div className="sidebar-section">
				<h4>{__('Neve Pro Addon license', 'neve')}</h4>
				<p>Enter your license from <a href="https://store.themeisle.com">ThemeIsle</a> purchase history in order to get
					plugin updates</p>
				<form className="license-form" onSubmit={(e) => {
					e.preventDefault();
					if ('valid' === valid) {
						toggleLicense(key, 'deactivate');
						return false;
					}
					toggleLicense(key, 'activate');
				}}>
					<input
						type="text"
						id="license-field"
						name="license-field"
						disabled={'valid' === valid}
						onChange={(e) => setKey(e.target.value)}
						value={shownKey || null}
						placeholder={__('Enter License Key', 'neve')}
					/>
					<Button
						isPrimary={'valid' !== valid}
						isLarge
						disabled={status || ! key}
						type="submit">
						{! status ?
							('valid' === valid ? __('Deactivate', 'neve') : __('Activate', 'neve')) :
							('activating' === status ? __('Activating', 'neve') : __('Deactivating', 'neve'))
						}
					</Button>
				</form>
				{! [ 'not_active', 'invalid' ].includes(valid) &&
				<div className="license-footer">
					<Fragment>
						<span className="status-icon">
							<Dashicon size={14} icon={'valid' === valid ? 'yes' : 'no'}/>
						</span>
						{/* eslint-disable-next-line max-len */}
						<span className="validity">
							{'valid' === valid ? __('Valid', 'neve') : __('Expired', 'neve')}
						</span>
						-
						<span className="expires">
						{('valid' === valid ?
							__('Expires', 'neve') :
							__('Expired', 'neve')) + ' ' + license.expiration}
						</span>
					</Fragment>
				</div>
				}
			</div>
		</aside>
	);
};

const toggleLicense = (key, action) => {
	const {proApi} = neveDash;
	send(proApi + '/toggle_license', {key, action}).then((r) => {
		console.log(r);
	});
};

export default LicenseCard;
