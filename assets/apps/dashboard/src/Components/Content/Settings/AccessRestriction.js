/* global neveAccessRestriction */

import apiFetch from '@wordpress/api-fetch';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { LucideLoaderCircle } from 'lucide-react';
import Notice from '../../Common/Notice';
import Select from '../../Common/Select';
import Toggle from '../../Common/Toggle';
import ControlWrap from '../../Controls/ControlWrap';
import { NEVE_STORE } from '../../../utils/constants';
import { useDispatch } from '@wordpress/data';

export const saveOption = (value) => {
	return new Promise((resolve) => {
		apiFetch({
			path: neveAccessRestriction.settingsRoute,
			method: 'POST',
			data: { settings: value },
		})
			.then((responseRaw) => {
				const response = JSON.parse(responseRaw);
				const status = response.status === 'success';
				resolve({ success: status });
			})
			.catch(() => {
				resolve({ success: false });
			});
	});
};

const AccessRestriction = ({ optionData }) => {
	const [settings, setSettings] = useState(neveAccessRestriction.options);
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState('');

	const { setToast } = useDispatch(NEVE_STORE);

	const updateContentTypeStatus = (slug, status) => {
		const newSettings = { ...settings };

		newSettings.content_types[slug].enabled = status;

		setSettings(newSettings);
		saveAsync(newSettings);
	};

	const updateSetting = (slug, value) => {
		const newSettings = {
			...settings,
			[slug]: value,
		};

		setSettings(newSettings);
		saveAsync(newSettings);
	};

	const saveAsync = (newSettings = null) => {
		const settingsToSave = newSettings || settings;
		setSaving(true);
		setError('');
		saveOption(JSON.stringify(settingsToSave))
			.then((r) => {
				if (!r.success) {
					setError(
						__('An error occurred. Please try again.', 'neve')
					);
					setToast(false);
					return;
				}
				setToast(true);
				neveAccessRestriction.options = newSettings;
			})
			.finally(() => {
				setSaving(false);
			});
	};

	return (
		<ControlWrap
			label={optionData.label}
			icon={optionData.icon}
			description={optionData.description}
			id={'access-restriction'}
			afterTitle={
				saving ? (
					<div className="flex items-center gap-3 text-sm">
						<LucideLoaderCircle
							size={20}
							className="animate-spin"
						/>
						<span>{__('Saving', 'neve')}...</span>
					</div>
				) : null
			}
		>
			<div className="grid gap-4 grid-cols-2 xl:grid-cols-3">
				<Fields
					type="content_types"
					updateSetting={updateContentTypeStatus}
					valueCallback={(callbackSettings, callbackKey) => {
						return callbackSettings[callbackKey].enabled;
					}}
					settings={neveAccessRestriction.options.content_types}
				/>
			</div>

			<div className="grid gap-4 grid-cols-2 xl:grid-cols-3 mt-4 pt-4 border-t border-gray-200">
				<Fields
					type="restriction_behavior"
					updateSetting={updateSetting}
					settings={settings}
				/>
			</div>

			{'' !== error && (
				<Notice className="mt-4" isError>
					{error}
				</Notice>
			)}
		</ControlWrap>
	);
};

const defaultValueCallback = (settings, key) => settings[key];

const Fields = ({
	type,
	updateSetting,
	settings,
	valueCallback = defaultValueCallback,
}) => {
	const { fields } = neveAccessRestriction.fields[type];

	return (
		<>
			{Object.keys(fields).map((key, index) => {
				const { type: fieldType, label, description } = fields[key];

				if (fields[key].parent) {
					const parent = fields[key].parent;

					if (settings[parent.fieldKey] !== parent.fieldValue) {
						return null;
					}
				}

				const value = valueCallback(settings, key);

				return (
					<div key={index}>
						{'toggle' === fieldType && (
							<>
								<Toggle
									checked={value === 'yes' || false}
									label={label}
									onToggle={(newValue) => {
										const status = newValue ? 'yes' : 'no';
										updateSetting(key, status);
									}}
								/>
								{value && description && (
									<p className="description">{description}</p>
								)}
							</>
						)}
						{'select' === fieldType && (
							<>
								<Select
									label={label}
									value={value}
									choices={fields[key].options.reduce(
										(acc, { value: v, label: l }) => ({
											...acc,
											[v]: l,
										}),
										{}
									)}
									onChange={(newValue) => {
										updateSetting(key, newValue);
									}}
								/>

								{value && description && (
									<p className="description">{description}</p>
								)}
							</>
						)}
					</div>
				);
			})}
		</>
	);
};

export default AccessRestriction;
