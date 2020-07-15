/* global metaSidebar */
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { __ } = wp.i18n;

import { MetaFieldsManager } from './MetaFieldsManager';

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
