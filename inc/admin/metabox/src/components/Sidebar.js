const { Fragment } = wp.element;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { __ } = wp.i18n;

const Sidebar = () => {
	return (
		<Fragment>
			<PluginSidebarMoreMenuItem
				icon = "admin-settings"
				target ="neve-meta-sidebar"
			>
				{ __( 'Individual settings', 'neve' ) }
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				icon="admin-settings"
				name="neve-meta-sidebar"
				title={ __( 'Individual settings', 'neve' ) }
			>
				Meta Field
			</PluginSidebar>
		</Fragment>
	);
};
export default Sidebar;
