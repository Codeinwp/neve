/* global neveDash */
import {send} from '../utils/rest';
import Toast from './Toast';
import classnames from 'classnames';

const {__} = wp.i18n;
const {Button, Dashicon} = wp.components;
const {Fragment, useState} = wp.element;
const {withDispatch} = wp.data;

const LicenseCard = ({isVisible, changeTier}) => {
	const {license, proApi} = neveDash;
	const [ key, setKey ] = useState(license && 'valid' === license.valid ? license.key || '' : '');
	const [ status, setStatus ] = useState(false);
	const [ valid, setValid ] = useState(license.valid || 'invalid');
	const [ expiration, setExpiration ] = useState(license.expiration || '');
	const [ toast, setToast ] = useState('');
	const [ toastType, setToastType ] = useState('success');

	if (! isVisible) {
		return null;
	}

	const toggleLicense = () => {
		const toDo = 'valid' === valid ? 'deactivate' : 'activate';
		setStatus('activate' === toDo ? 'activating' : 'deactivating');
		send(proApi + '/toggle_license', {key, action: toDo}).then((response) => {
			setToastType(response.success ? 'success' : 'error');
			setKey('activate' === toDo ? key : '');
			setToast(response.message);
			setExpiration(response.expiration);
			setValid(response.success && 'activate' === toDo ? 'valid' : 'not_active');
			setStatus(false);
			neveDash.license.expiration = response.expiration;
			changeTier(response.tier || 1);
		});
	};

	if (neveDash.whiteLabel && neveDash.whiteLabel.hideLicense) {
		return null;
	}

	return (
		<aside className="sidebar card license">
			<div className="sidebar-section">
				{neveDash.strings.licenseCardHeading && <h4>{neveDash.strings.licenseCardHeading}</h4>}
				{(! neveDash.whiteLabel && neveDash.strings.licenseCardDescription) &&
				<p dangerouslySetInnerHTML={{__html: neveDash.strings.licenseCardDescription}}/>
				}
				<form className="license-form" onSubmit={(e) => {
					e.preventDefault();
					toggleLicense();
				}}>
					<input
						type="text"
						id="license-field"
						name="license-field"
						disabled={'valid' === valid}
						onChange={(e) => {
							setKey(e.target.value.replace(/\s+/g, ''));
						}}
						value={
							'valid' === valid ?
								'******************************' + key.slice(-5) :
								key
						}
						placeholder={__('Enter License Key', 'neve')}
					/>
					<Button
						isPrimary={'valid' !== valid}
						isSecondary={'valid' === valid}
						isLarge
						disabled={status || ! key}
						type="submit">
						{! status ?
							('valid' === valid ?
									__('Deactivate', 'neve') :
									__('Activate', 'neve')
							) :
							('activating' === status ?
									__('Activating', 'neve') :
									__('Deactivating', 'neve')
							)
						}
					</Button>
				</form>
				{toast && <Toast type={toastType} dismiss={setToast} message={toast}/>}
				{! [ 'not_active', 'invalid' ].includes(valid) &&
				<div className="license-footer">
					<Fragment>
						<span className={
							classnames([ 'status-icon', 'valid' === valid ? 'success' : 'error' ])
						}>
							<Dashicon size={14} icon={'valid' === valid ? 'yes' : 'no'}/>
						</span>
						<span className="validity">
							{'valid' === valid ? __('Valid', 'neve') : __('Expired', 'neve')}
						</span>
						{expiration &&
						<Fragment>
							<span className="separator">-</span>
							<span className="expires">
						{('valid' === valid ?
							__('Expires', 'neve') :
							__('Expired', 'neve')) + ' ' + expiration
						}
						</span>
						</Fragment>
						}
					</Fragment>
				</div>
				}
			</div>
		</aside>
	);
};

export default withDispatch((dispatch) => {
	const {changeLicenseTier} = dispatch('neve-dashboard');
	return {
		changeTier: (newTier) => {
			changeLicenseTier(newTier);
		}
	};
})(LicenseCard);
