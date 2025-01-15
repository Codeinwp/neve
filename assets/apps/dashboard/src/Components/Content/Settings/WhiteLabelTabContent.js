/* global neveDash */
import { __ } from '@wordpress/i18n';
import useLicenseData from '../../../Hooks/useLicenseData';
import {
	CircleFadingArrowUp,
	LucideBuilding,
	LucideMessageCircleQuestion,
	LucidePlug,
	LucideSettings,
	LucideToggleRight,
	LucideWallpaper,
} from 'lucide-react';
import TextInput from '../../Common/TextInput';
import { useReducer, useState } from '@wordpress/element';
import Button from '../../Common/Button';
import ControlWrap from '../../Controls/ControlWrap';
import Toggle from '../../Common/Toggle';
import Notice from '../../Common/Notice';
import { changeOption } from '../../../utils/rest';
import { useDispatch } from '@wordpress/data';
import { NEVE_STORE } from '../../../utils/constants';

const DUMMY_SECTIONS = {
	agency: {
		title: __('Agency Branding', 'neve'),
		icon: LucideBuilding,
		fields: {
			author_name: {
				type: 'text',
				label: __('Agency Author', 'neve'),
			},
			author_url: {
				type: 'text',
				label: __('Agency Author URL', 'neve'),
			},
			starter_sites: {
				type: 'toggle',
				label: __('Hide Sites Library', 'neve'),
			},
			my_library: {
				type: 'toggle',
				label: __('Hide My Library', 'neve'),
			},
		},
	},
	theme: {
		title: __('Theme Branding', 'neve'),
		icon: LucideWallpaper,
		fields: {
			theme_name: {
				type: 'text',
				label: __('Theme Name', 'neve'),
			},
			theme_description: {
				type: 'textarea',
				label: __('Theme Description', 'neve'),
			},
			screenshot_url: {
				type: 'text',
				label: __('Screenshot URL', 'neve'),
			},
		},
	},
	plugin: {
		title: __('Plugin Branding', 'neve'),
		icon: LucidePlug,
		fields: {
			plugin_name: {
				type: 'text',
				label: __('Plugin Name', 'neve'),
			},
			plugin_description: {
				type: 'textarea',
				label: __('Plugin Description', 'neve'),
			},
		},
	},
	sidebar: {
		title: __('Enable White Label', 'neve'),
		icon: LucideToggleRight,
		fields: {
			white_label: {
				type: 'toggle',
				label: __('Hide Options from Dashboard', 'neve'),
			},
			license: {
				type: 'toggle',
				label: __('Enable License Hiding', 'neve'),
			},
		},
	},
};

const PlaceholderComponent = () => {
	return (
		<div>
			{Object.entries(DUMMY_SECTIONS).map(([id, section]) => {
				const ICON = section.icon;

				return (
					<ControlWrap
						key={id}
						label={section.title}
						icon={ICON}
						locked={true}
					>
						<div className="grid gap-4">
							{Object.entries(section.fields).map(
								([sid, setting]) => {
									return (
										<div key={sid} className="opacity-75">
											{setting.type === 'toggle' ? (
												<Toggle
													disabled
													locked
													checked={false}
													label={setting.label}
												/>
											) : (
												<TextInput
													label={setting.label}
													disabled={true}
													name={sid}
												/>
											)}
										</div>
									);
								}
							)}
						</div>
					</ControlWrap>
				);
			})}

			<div className="flex justify-end mt-6">
				<Button isPrimary disabled>
					{__('Save', 'neve')}
				</Button>
			</div>
		</div>
	);
};

const WhiteLabelSettings = () => {
	const { strings } = neveDash;

	const { fields, optionKey, options } = neveDash.whiteLabelData;

	const allFields = Object.values(fields)
		.map((all) => all.fields)
		.reduce((acc, val) => ({ ...acc, ...val }), {});

	// remap values from options if the field type is toggle parse for '0' and '1'.
	const formDefaults = Object.keys(allFields).reduce((acc, key) => {
		if (allFields[key].type === 'toggle') {
			acc[key] = options[key] === '1';
		} else {
			acc[key] = options[key];
		}
		return acc;
	}, {});

	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useReducer((state, action) => {
		return {
			...state,
			[action.name]: action.value,
		};
	}, formDefaults);

	const { setToast } = useDispatch(NEVE_STORE);

	if (!neveDash.whiteLabelData) {
		return (
			<Notice icon={CircleFadingArrowUp}>{strings.updateOldPro}</Notice>
		);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		changeOption(optionKey, JSON.stringify(formData), false, false)
			.then((r) => {
				if (r.success) {
					setToast(__('White Label settings saved.', 'neve'));
					neveDash.whiteLabelData.options = formData;
					return;
				}

				setToast(r.message ? r.message : false);
			})
			.catch((err) => {
				setToast(err.message ? err.message : false);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			{Object.entries(fields).map(([id, section]) => {
				// We replace the icon as there's no way to retro-fit it from PRO.
				section.icon = DUMMY_SECTIONS[id]?.icon || LucideSettings;

				return (
					<ControlWrap
						key={id}
						label={section.title}
						icon={section.icon}
					>
						<div className="grid gap-4">
							{Object.entries(section.fields).map(
								([sid, setting]) => {
									return (
										<div key={sid}>
											{[
												'text',
												'url',
												'textarea',
											].includes(setting.type) && (
												<TextInput
													label={setting.label}
													type={setting.type}
													onChange={(e) =>
														setFormData({
															name: sid,
															value: e.target
																.value,
														})
													}
													value={formData[sid]}
												/>
											)}
											{setting.type === 'toggle' && (
												<Toggle
													checked={
														formData[sid] === '1' ||
														formData[sid] === true
													}
													description={
														setting.description
													}
													label={setting.label}
													onToggle={(value) =>
														setFormData({
															name: sid,
															value,
														})
													}
												/>
											)}
										</div>
									);
								}
							)}
						</div>
					</ControlWrap>
				);
			})}
			<div className="flex justify-end mt-6">
				<Button
					isSubmit
					isPrimary
					onClick={handleSubmit}
					loading={loading}
					disabled={loading}
				>
					{loading
						? __('Saving', 'neve') + '...'
						: __('Save', 'neve')}
				</Button>
			</div>
		</form>
	);
};

export default () => {
	const { isLicenseValid, licenseTier } = useLicenseData();

	const showPlaceholder = !isLicenseValid || licenseTier < 3;

	const [showTierInfo, setShowTierInfo] = useState(false);

	return (
		<>
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-lg font-semibold">
					{__("White Label Settings", "neve")}
				</h1>

				{showPlaceholder && (
					<Button
						className="!p-0"
						isLink
						onClick={() => setShowTierInfo(!showTierInfo)}
					>
						<LucideMessageCircleQuestion size={18} />
						{__("Available in Agency Plan", "neve")}
					</Button>
				)}
			</div>

			{showPlaceholder && <PlaceholderComponent />}
			{!showPlaceholder && !neveDash.whiteLabelData && (
				<Notice icon={CircleFadingArrowUp}>
					{__(
						"Please reload this page in order to view the White Label Settings",
						"neve"
					)}
				</Notice>
			)}
			{!showPlaceholder && !!neveDash.whiteLabelData && <WhiteLabelSettings />}
		</>
	);
};
