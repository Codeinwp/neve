import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { useShortcut } from '@wordpress/keyboard-shortcuts';
import { withDispatch, withSelect } from '@wordpress/data';
import { useCallback, useEffect } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import MetaFieldsManager from './MetaFieldsManager';

const Sidebar = ( { template, isSidebarOpen, closeSidebar, openSidebar } ) => {
	const toggleSidebar = () => {
		if ( isSidebarOpen() ) {
			closeSidebar();
		} else {
			openSidebar();
		}
	};
	const toggleNotice = () => {
		const notice = document.getElementById( 'neve-page-settings-notice' );
		if ( ! notice ) {
			return false;
		}
		notice.style.display =
			'elementor_canvas' === template() ? 'none' : 'block';
	};

	useShortcut( 'neve/open-meta-sidebar', useCallback( toggleSidebar, [] ) );
	useEffect( toggleNotice, [ template ] );

	if ( template() === 'elementor_canvas' ) {
		return null;
	}

	return (
		<>
			<PluginSidebarMoreMenuItem target="neve-meta-sidebar">
				{ __( 'Neve Options', 'neve' ) }
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="neve-meta-sidebar"
				title={ __( 'Neve Options', 'neve' ) }
			>
				<MetaFieldsManager />
			</PluginSidebar>
		</>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { registerShortcut } = dispatch( 'core/keyboard-shortcuts' );
		const { closeGeneralSidebar, openGeneralSidebar } = dispatch(
			'core/edit-post'
		);

		registerShortcut( {
			name: 'neve/open-meta-sidebar',
			category: 'block',
			description: __( 'Open Neve meta sidebar', 'neve' ),
			keyCombination: {
				modifier: 'access',
				character: 'n',
			},
		} );

		return {
			closeSidebar: () => {
				closeGeneralSidebar( 'meta-sidebar/neve-meta-sidebar' );
			},
			openSidebar: () => {
				openGeneralSidebar( 'meta-sidebar/neve-meta-sidebar' );
			},
		};
	} ),
	withSelect( ( select ) => {
		const { getEditedPostAttribute } = select( 'core/editor' );
		const { isPluginSidebarOpened } = select( 'core/edit-post' );

		const template = () => getEditedPostAttribute( 'template' );
		const isSidebarOpen = () =>
			isPluginSidebarOpened( 'meta-sidebar/neve-meta-sidebar' );

		return {
			template,
			isSidebarOpen,
		};
	} )
)( Sidebar );
