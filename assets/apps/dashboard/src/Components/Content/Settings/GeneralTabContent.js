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
import ControlWrap from '../../Controls/ControlWrap';
import Toggle from '../../Common/Toggle';
import Select from '../../Common/Select';

const DUMMY_SETTINGS_ARGS = {
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

const AccessRestrictionDummySettings = () => {
	const { icon, label, description } =
		DUMMY_SETTINGS_ARGS.neve_access_restriction;

	const contentTypes = [
		__('Posts', 'neve'),
		__('Pages', 'neve'),
		__('Categories', 'neve'),
	];

	return (
		<ControlWrap label={label} icon={icon} description={description} locked>
			<div className="grid gap-4 grid-cols-2 xl:grid-cols-3">
				{contentTypes.map((type) => (
					<Toggle key={type} disabled label={type} />
				))}
			</div>

			<div className="grid gap-4 grid-cols-2 xl:grid-cols-3 mt-4 pt-4 border-t border-gray-200">
				<Select
					disabled
					label={`${__('For logged out users', 'neve')}:`}
					value={'default'}
					choices={{
						default: __(
							'Show default Wordpress login page',
							'neve'
						),
					}}
				/>
			</div>
		</ControlWrap>
	);
};

const DummySettings = () => {
	return (
		<>
			{Object.entries(DUMMY_SETTINGS_ARGS).map(([id, setting]) => {
				if (id === 'neve_access_restriction') {
					return <AccessRestrictionDummySettings key={id} />;
				}

				if (!setting.type) {
					return <ToggleControl key={id} locked {...setting} />;
				}
				if (setting.type === 'text') {
					return <TextControl key={id} locked {...setting} />;
				}

				return <div key={id}>{setting.label}</div>;
			})}
		</>
	);
};

// Modules that should not be displayed in the general tab.
const EXCLUDED_MODULES = ['performance_features'];

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

			<div>
				{(isLicenseValid && <ProModuleSettings />) || <DummySettings />}
			</div>
		</>
	);
};
