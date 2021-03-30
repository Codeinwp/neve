/* global neveDash */
import { send, fetchOptions } from '../utils/rest';
import Toast from './Toast';
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { Button, Dashicon } from '@wordpress/components';
import { Fragment, useState } from '@wordpress/element';
import { withDispatch, withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const LicenseCard = ({ isVisible, setSettings, changeLicense, license }) => {
	const { proApi } = neveDash;
	const [key, setKey] = useState(
		license && 'valid' === license.valid ? license.key || '' : ''
	);
	const [status, setStatus] = useState(false);

	// const [ expiration, setExpiration ] = useState(license.expiration || '');
	const [toast, setToast] = useState('');
	const [toastType, setToastType] = useState('success');

	const { valid, expiration } = license;
	const { whiteLabel, strings } = neveDash;
	const { licenseCardHeading, licenseCardDescription } = strings;

	if (!isVisible) {
		return null;
	}
	const toggleLicense = () => {
		const toDo = 'valid' === valid ? 'deactivate' : 'activate';
		setStatus('activate' === toDo ? 'activating' : 'deactivating');
		send(proApi + '/toggle_license', { key, action: toDo }).then(
			(response) => {
				setToastType(response.success ? 'success' : 'error');
				setKey('activate' === toDo ? key : '');
				setToast(response.message);
				setStatus(false);
				if (response.license) {
					changeLicense(response.license);
					fetchOptions().then((r) => {
						setSettings(r);
					});
				}
			}
		);
	};

	if (whiteLabel && whiteLabel.hideLicense) {
		return null;
	}
	let statusLabel = '';
	if (!status) {
		if ('valid' === valid) {
			statusLabel = __('Deactivate', 'neve');
		} else {
			statusLabel = __('Activate', 'neve');
		}
	}
	if ('activating' === status) {
		statusLabel = __('Activating', 'neve');
		statusLabel = __('Deactivating', 'neve');
	}

	return (
		<aside className="sidebar card license">
			<div className="sidebar-section">
				{licenseCardHeading && <h4>{licenseCardHeading}</h4>}
				{!whiteLabel && licenseCardDescription && (
					<p
						dangerouslySetInnerHTML={{
							__html: licenseCardDescription,
						}}
					/>
				)}
				<form
					className="license-form"
					onSubmit={(e) => {
						e.preventDefault();
						toggleLicense();
					}}
				>
					<input
						type="text"
						id="license-field"
						name="license-field"
						disabled={'valid' === valid}
						onChange={(e) => {
							const keyToSet = e.target.value.replace(/\s+/g, '');
							setKey(keyToSet);
						}}
						value={
							'valid' === valid
								? '******************************' +
								  key.slice(-5)
								: key
						}
						placeholder={__('Enter License Key', 'neve')}
					/>
					<Button
						isPrimary={'valid' !== valid}
						isSecondary={'valid' === valid}
						disabled={status || !key}
						type="submit"
					>
						{statusLabel}
					</Button>
				</form>
				{toast && (
					<Toast
						type={toastType}
						dismiss={setToast}
						message={toast}
					/>
				)}
				{'expired' === valid ||
					('valid' === valid && (
						<div className="license-footer">
							<Fragment>
								<span
									className={classnames([
										'status-icon',
										'valid' === valid ? 'success' : 'error',
									])}
								>
									<Dashicon
										size={14}
										icon={'valid' === valid ? 'yes' : 'no'}
									/>
								</span>
								<span className="validity">
									{'valid' === valid
										? __('Valid', 'neve')
										: __('Expired', 'neve')}
								</span>
								{expiration && (
									<Fragment>
										<span className="separator">-</span>
										<span className="expires">
											{('valid' === valid
												? __('Expires', 'neve')
												: __('Expired', 'neve')) +
												' ' +
												expiration}
										</span>
									</Fragment>
								)}
							</Fragment>
						</div>
					))}
			</div>
		</aside>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const { changeLicense, setSettings } = dispatch('neve-dashboard');
		return {
			setSettings: (object) => setSettings(object),
			changeLicense: (data) => {
				changeLicense(data);
			},
		};
	}),
	withSelect((select) => {
		const { getLicense } = select('neve-dashboard');
		return {
			license: getLicense(),
		};
	})
)(LicenseCard);
