/* global neveDash */
import { __ } from '@wordpress/i18n';
import {
	LucideImage,
	LucideLock,
	LucideMenu,
	LucideMonitorDown,
	LucideTags,
	LucideType,
} from 'lucide-react';
import useLicenseData from '../../../Hooks/useLicenseData';
import { NEVE_HAS_VALID_PRO } from '../../../utils/constants';
import TextControl from '../../Controls/TextControl';
import ToggleControl from '../../Controls/ToggleControl';
import OptionGroup from './OptionGroup';

const DUMMY_SETTINGS_ARGS = {
	typekit_id: {
		icon: LucideType,
		label: __('Embed Typekit', 'neve'),
		type: 'text',
		placeholder: __('Paste your Typekit code here', 'neve'),
		description: __(
			'Add your Typekit embed code here to use custom fonts.',
			'neve'
		),
	},
	enable_featured_image_taxonomy: {
		icon: LucideImage,
		label: __('Featured image for taxonomy', 'neve'),
		description: __(
			'Enable featured images for categories and tags.',
			'neve'
		),
	},
	enable_mega_menu: {
		icon: LucideMenu,
		label: __('Enable Mega Menu', 'neve'),
		description: __(
			'Enable Mega menu fuctionality in the menu dashboard page.',
			'neve'
		),
	},
	neve_access_restriction: {
		icon: LucideLock,
		label: __('Enable Content Restriction', 'neve'),
		description: __(
			'Restrict content access on Posts, Pages, and set a default login page.',
			'neve'
		),
	},
};

if (NEVE_HAS_VALID_PRO) {
	DUMMY_SETTINGS_ARGS.typekit_loading_method = {
		icon: LucideMonitorDown,
		label: __('Typekit loading method', 'neve'),
		description: __(
			'Choose if Typekit fonts should be loaded with JavaScript or CSS. JavaScript is usually faster.',
			'neve'
		),
	};

	DUMMY_SETTINGS_ARGS.featured_image_taxonomies = {
		icon: LucideTags,
		description: __(
			'Enable featured images for the following taxonomies.',
			'neve'
		),
	};

	DUMMY_SETTINGS_ARGS.neve_access_restriction = {
		...DUMMY_SETTINGS_ARGS.neve_access_restriction,
		description: __(
			'Adds a metabox to control content restriction on the post/taxonomy edit page.',
			'neve'
		),
	};
}

const EXCLUDED_MODULES = ['performance_features'];

const DummySettings = () => {
	return (
		<>
			{Object.values(DUMMY_SETTINGS_ARGS).map((setting, idx) => {
				if (!setting.type) {
					return <ToggleControl key={idx} locked {...setting} />;
				}
				if (setting.type === 'text') {
					return <TextControl key={idx} locked {...setting} />;
				}

				return <div key={idx}>{setting.label}</div>;
			})}
		</>
	);
};

const ProModuleSettings = () => {
	const { modules } = neveDash;

	const displayedModules = Object.entries(modules)
		.filter(
			([key, moduleArgs]) =>
				!EXCLUDED_MODULES.includes(key) &&
				moduleArgs.options &&
				moduleArgs.options.length > 0
		)
		.map(([key, moduleArgs]) => {
			return [key, moduleArgs.options];
		});

	return (
		<>
			{displayedModules.map(([key, optionGroups]) => {
				if (!optionGroups || optionGroups.length < 1) {
					return null;
				}

				return optionGroups.map(({ options }, idx) => {
					if (!options || Object.keys(options).length < 1) {
						return null;
					}

					return (
						<OptionGroup
							module={key}
							key={key + idx}
							options={options}
							overrides={DUMMY_SETTINGS_ARGS}
						/>
					);
				});
			})}
		</>
	);
};

export default () => {
	const { isLicenseValid } = useLicenseData();

	return (
		<>
			<h1 className="text-lg font-semibold mb-6">
				{__('General Settings', 'neve')}
			</h1>

			<div className="">
				{(isLicenseValid && <ProModuleSettings />) || <DummySettings />}
			</div>
		</>
	);
};
