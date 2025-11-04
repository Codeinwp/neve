/* globals neveDash */

import {
	LucideArrowUp,
	LucideBotMessageSquare,
	LucideBriefcase,
	LucideCreditCard,
	LucideGalleryVertical,
	LucideGauge,
	LucideGraduationCap,
	LucideImage,
	LucideLayoutTemplate,
	LucideLock,
	LucideNewspaper,
	LucidePalette,
	LucidePanelRightDashed,
	LucidePanelsTopLeft,
	LucidePanelTopDashed,
	LucidePin,
	LucideRss,
	LucideScanBarcode,
	LucideScroll,
	LucideShield,
	LucideShoppingCart,
	LucideTimer,
	LucideToyBrick,
	LucideType,
	LucideTypeOutline,
} from 'lucide-react';

export const NEVE_STORE = 'neve-dashboard';
export const NEVE_HAS_VALID_PRO =
	(neveDash.pro || neveDash.hasOldPro) &&
	neveDash.license &&
	neveDash.license.valid === 'valid';

export const NEVE_HAS_PRO = neveDash.pro;

export const NEVE_IS_WHITELABEL = !!neveDash.whiteLabel;

export const NEVE_SHOW_WHITELABEL = !!neveDash.modules.white_label;

export const NEVE_HIDE_PLUGINS = neveDash.hidePluginsTab || NEVE_IS_WHITELABEL;

export const NEVE_MODULE_ICON_MAP = {
	hfg_module: LucidePanelTopDashed,
	woocommerce_booster: LucideShoppingCart,
	easy_digital_downloads: LucideScanBarcode,
	blog_pro: LucideNewspaper,
	post_type_enhancements: LucidePin,
	scroll_to_top: LucideArrowUp,
	performance_features: LucideGauge,
	block_editor_booster: LucideScroll,
	white_label: LucideBriefcase,
	custom_layouts: LucideGalleryVertical,
	elementor_booster: LucidePalette,
	lifterlms_booster: LucideGraduationCap,
	typekit_fonts: LucideTypeOutline,
	custom_sidebars: LucidePanelRightDashed,
	access_restriction: LucideShield,
};

export const NEVE_PLUGIN_ICON_MAP = {
	'otter-blocks': LucideToyBrick,
	'templates-patterns-collection': LucideLayoutTemplate,
	'wp-full-stripe-free': LucideCreditCard,
	'optimole-wp': LucideImage,
	'wp-cloudflare-page-cache': LucideTimer,
	'feedzy-rss-feeds': LucideRss,
	'hyve-lite': LucideBotMessageSquare,
	// 'sparks'
};

export const NEVE_AVAIABLE_MODULES_ICON_MAP = {
	'login-customizer': LucideLock,
	'custom-fonts': LucideType,
	'policy-notice': LucideShield,
	'post-duplicator': LucidePanelsTopLeft,
};
