/* global neveDash */
import { __ } from '@wordpress/i18n';
import {
	LucideCode,
	LucideSmile,
	LucideText,
	LucideZap,
	LucideExternalLink,
} from 'lucide-react';
import ToggleControl from '../../Controls/ToggleControl';
import Button from '../../Common/Button';
import useLicenseData from '../../../Hooks/useLicenseData';
import OptionGroup from './OptionGroup';

const LOCAL_HOSTING_OPTION = 'enable_local_fonts';

const DUMMY_SETTINGS_ARGS = {
	enable_emoji_removal: {
		icon: LucideSmile,
		label: __('Emoji Removal', 'neve'),
		description: __(
			'Remove emoji scripts to improve page load time.',
			'neve'
		),
	},
	enable_embedded_removal: {
		icon: LucideCode,
		label: __('Embed Removal', 'neve'),
		description: __('Remove embed scripts for better performance.', 'neve'),
	},
	enable_lazy_content: {
		icon: LucideZap,
		label: __('Lazy Rendering', 'neve'),
		description: __(
			'Enable lazy rendering for better initial page load.',
			'neve'
		),
	},
};

const DummySettings = () => {
	return (
		<>
			{Object.values(DUMMY_SETTINGS_ARGS).map((setting, index) => {
				return (
					<ToggleControl
						key={index}
						icon={setting.icon}
						label={setting.label}
						description={setting.description}
						locked={true}
						checked={false}
					/>
				);
			})}
		</>
	);
};

const ProModuleSettings = () => {
	const optionGroups = neveDash?.modules?.performance_features.options || [];

	if (optionGroups.length < 1) {
		return null;
	}

	return optionGroups.map(({ options }, idx) => {
		if (!options || Object.keys(options).length < 1) {
			return null;
		}

		return (
			<OptionGroup
				module={'performance_features'}
				key={idx}
				options={options}
				overrides={DUMMY_SETTINGS_ARGS}
			/>
		);
	});
};

export default () => {
	const { isLicenseValid } = useLicenseData();

	return (
		<>
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-lg font-semibold">
					{__('Performance Settings', 'neve')}
				</h1>

				{!isLicenseValid && (
					<Button
						isPrimary
						href={neveDash.upgradeURLModules}
						target="_blank"
					>
						{__('Get Neve Pro', 'neve')}
						<LucideExternalLink size={16} className="shrink-0" />
					</Button>
				)}
			</div>

			<div>
				<ToggleControl
					icon={LucideText}
					label={__('Enable Local Fonts Hosting', 'neve')}
					option={LOCAL_HOSTING_OPTION}
					description={__(
						'Host Google Fonts locally for better performance and GDPR compliance.',
						'neve'
					)}
				/>

				{(isLicenseValid && <ProModuleSettings />) || <DummySettings />}
			</div>
		</>
	);
};
