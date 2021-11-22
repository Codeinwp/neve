/* global metaSidebar */
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { __, sprintf } from '@wordpress/i18n';

import { useShortcut } from '@wordpress/keyboard-shortcuts';
import { useCallback } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect, select, dispatch } from '@wordpress/data';

import MetaFieldsManager from './MetaFieldsManager';
const Sidebar = compose(
	withDispatch((dispatchHandler) => {
		dispatchHandler('core/keyboard-shortcuts').registerShortcut({
			name: 'neve/open-meta-sidebar',
			category: 'block',
			description: __('Open Neve meta sidebar', 'neve'),
			keyCombination: {
				modifier: 'access',
				character: 's',
			},
		});
	}),
	withSelect((selectHandler) => {
		return {
			template:
				selectHandler('core/editor').getEditedPostAttribute('template'),
		};
	})
)(function (templateData) {
	useShortcut(
		'neve/open-meta-sidebar',
		useCallback(() => {
			const currentActiveSidebar =
				select('core/edit-post').getActiveGeneralSidebarName();
			if (currentActiveSidebar) {
				dispatch('core/edit-post').closeGeneralSidebar(
					currentActiveSidebar
				);
				if ('meta-sidebar/neve-meta-sidebar' !== currentActiveSidebar) {
					dispatch('core/edit-post').openGeneralSidebar(
						'meta-sidebar/neve-meta-sidebar'
					);
				}
			} else {
				dispatch('core/edit-post').openGeneralSidebar(
					'meta-sidebar/neve-meta-sidebar'
				);
			}
		}, [])
	);

	if ('elementor_canvas' === templateData.template) {
		document.getElementById('neve-page-settings-notice').style.display =
			'none';
		return false;
	}
	document.getElementById('neve-page-settings-notice').style.display =
		'block';
	//translators: %s - Theme name
	let sidebarLabel = sprintf(__('%s Options', 'neve'), __('Neve', 'neve'));
	if (metaSidebar.whiteLabeled) {
		sidebarLabel = metaSidebar.whiteLabelThemeName
			? metaSidebar.whiteLabelThemeName + ' ' + __('Options', 'neve')
			: __('Options', 'neve');
	}

	return (
		<>
			<PluginSidebarMoreMenuItem target="neve-meta-sidebar">
				{sidebarLabel}
			</PluginSidebarMoreMenuItem>
			<PluginSidebar name="neve-meta-sidebar" title={sidebarLabel}>
				<MetaFieldsManager />
			</PluginSidebar>
		</>
	);
});
export default Sidebar;
