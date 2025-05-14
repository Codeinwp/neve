/* global neveDash */
import { fetchOptions, send } from '../../../utils/rest';
import Toast from '../../Common/Toast';

import { useDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { LucideCircleCheck, LucideCircleX } from 'lucide-react';
import useLicenseData from '../../../Hooks/useLicenseData';
import Card from '../../../Layout/Card';
import { NEVE_STORE } from '../../../utils/constants';
import Button from '../../Common/Button';
import Pill from '../../Common/Pill';

const LicenseCard = () => {
	const { proApi } = neveDash;

	const { changeLicense, setSettings } = useDispatch(NEVE_STORE);

	const { license } = useLicenseData();

	const [key, setKey] = useState(license.key || '');
	const [status, setStatus] = useState(false);

	const [toast, setToast] = useState('');
	const [toastType, setToastType] = useState('success');

	const { valid, expiration } = license;
	const { whiteLabel, strings } = neveDash;
	const { licenseCardHeading, licenseCardDescription } = strings;

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

	const isOrWasValid = ['valid', 'active_expired', 'expired'].includes(valid);

	const getStatusLabel = () => {
		const statusLabelMap = {
			activating: __('Activating', 'neve'),
			deactivating: __('Deactivating', 'neve'),
			activate: __('Activate', 'neve'),
			deactivate: __('Deactivate', 'neve'),
		};

		if (!status) {
			return isOrWasValid
				? __('Deactivate', 'neve')
				: __('Activate', 'neve');
		}

		return statusLabelMap[status];
	};

	return (
		<Card title={licenseCardHeading}>
			<div className="grid gap-4">
				{!whiteLabel && licenseCardDescription && (
					<p
						className="text-sm"
						dangerouslySetInnerHTML={{
							__html: licenseCardDescription,
						}}
					/>
				)}
				<form
					className="flex gap-3 items-center"
					onSubmit={(e) => {
						e.preventDefault();
						toggleLicense();
					}}
				>
					<input
						type="text"
						id="license-field"
						name="license-field"
						className="flex-grow rounded !border-gray-300 text-sm !py-1 !px-2"
						disabled={isOrWasValid}
						onChange={(e) => {
							const keyToSet = e.target.value.replace(/\s+/g, '');
							setKey(keyToSet);
						}}
						value={
							isOrWasValid
								? '******************************' +
								  key.slice(-5)
								: key
						}
						placeholder={__('Enter License Key', 'neve')}
					/>
					<Button
						isPrimary={'valid' !== valid}
						isSecondary={'valid' === valid}
						disabled={!!status || !key}
						isSubmit
					>
						{getStatusLabel()}
					</Button>
				</form>
				{toast && (
					<Toast
						type={toastType}
						dismiss={setToast}
						message={toast}
					/>
				)}
				{isOrWasValid && (
					<div className="flex items-center gap-1">
						<Pill
							type={valid === 'valid' ? 'success' : 'warning'}
							className="inline-flex items-center gap-1 px-2 py-1"
						>
							{valid === 'valid' ? (
								<>
									<LucideCircleCheck size={14} />
									<span>{__('Valid', 'neve')}</span>
								</>
							) : (
								<>
									<LucideCircleX size={14} />
									<span>{__('Expired', 'neve')}</span>
								</>
							)}
						</Pill>
						{expiration && (
							<>
								<span className="space-x-1 ml-auto">
									<span className="text-xs">
										{'valid' === valid
											? __('Expires', 'neve')
											: __('Expired', 'neve')}
									</span>

									<span className="font-semibold text-xs">
										{expiration}
									</span>
								</span>
							</>
						)}
					</div>
				)}
			</div>
		</Card>
	);
};

export default LicenseCard;
