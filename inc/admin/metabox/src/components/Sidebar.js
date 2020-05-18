/* global metaSidebar */
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import { MetaFieldsManager } from "./MetaFieldsManager";

const Sidebar = () => {
	return (
		<>
			<PluginSidebarMoreMenuItem
				icon="admin-settings"
				target="neve-meta-sidebar"
			>
				{__('Individual settings', 'neve')}
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				icon="admin-settings"
				name="neve-meta-sidebar"
				title={__('Individual settings', 'neve')}
			>
				<MetaFieldsManager/>
			</PluginSidebar>
		</>
	);
};
export default Sidebar;
