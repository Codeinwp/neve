/* global metaSidebar */
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { __ } = wp.i18n;

import MetaFieldsManager from './MetaFieldsManager';
const { useShortcut } = wp.keyboardShortcuts;
const { useCallback } = wp.element;
const {compose} = wp.compose;
const {withDispatch, withSelect} = wp.data;

const Sidebar = compose(
	withDispatch((dispatch) => {
		dispatch( 'core/keyboard-shortcuts' ).registerShortcut( {
			name: 'neve/open-meta-sidebar',
			category: 'block',
			description: __( 'Open Neve meta sidebar', 'neve' ),
			keyCombination: {
				modifier: 'access',
				character: 'n'
			}
		} );
	} ),
	withSelect((select) => {
		return {
			template: select('core/editor').getEditedPostAttribute('template')
		};
	} ) )( function( templateData ) {

	useShortcut(
		'neve/open-meta-sidebar',
		useCallback(
			() => {
				const sidebarStatus = wp.data.select( 'core/edit-post' ).isPluginSidebarOpened( 'meta-sidebar/neve-meta-sidebar' );
				if ( true === sidebarStatus ) {
					wp.data.dispatch( 'core/edit-post' ).closeGeneralSidebar( 'meta-sidebar/neve-meta-sidebar' );
				} else {
					wp.data.dispatch( 'core/edit-post' ).openGeneralSidebar( 'meta-sidebar/neve-meta-sidebar' );
				}
			},
			[]
		)
	);

	if ( 'elementor_canvas' === templateData.template ) {
		document.getElementById('neve-page-settings-notice').style.display = 'none';
		return false;
	}
	document.getElementById('neve-page-settings-notice').style.display = 'block';

	return (
		<>
			<PluginSidebarMoreMenuItem
				target="neve-meta-sidebar"
			>
				{__('Neve Options', 'neve')}
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="neve-meta-sidebar"
				title={__('Neve Options', 'neve')}
			>
				<MetaFieldsManager/>
			</PluginSidebar>
		</>
	);
});
export default Sidebar;
