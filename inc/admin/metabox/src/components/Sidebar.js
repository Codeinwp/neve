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
				character: 's'
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
				const currentActiveSidebar = wp.data.select( 'core/edit-post' ).getActiveGeneralSidebarName();
				if ( currentActiveSidebar ) {
					wp.data.dispatch( 'core/edit-post' ).closeGeneralSidebar( currentActiveSidebar );
					if ( 'meta-sidebar/neve-meta-sidebar' !== currentActiveSidebar ) {
						wp.data.dispatch( 'core/edit-post' ).openGeneralSidebar( 'meta-sidebar/neve-meta-sidebar' );
					}
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

	let sidebarLabel = __( 'Neve Options', 'neve' );
	if ( metaSidebar.whiteLabeled ) {
		sidebarLabel = metaSidebar.whiteLabelThemeName ? metaSidebar.whiteLabelThemeName + ' ' + __( 'Options', 'neve' ) : __( 'Options', 'neve' );
	}

	return (
		<>
			<PluginSidebarMoreMenuItem
				target="neve-meta-sidebar"
			>
				{ sidebarLabel }
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="neve-meta-sidebar"
				title={ sidebarLabel }
			>
				<MetaFieldsManager/>
			</PluginSidebar>
		</>
	);
});
export default Sidebar;
