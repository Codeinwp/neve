/* global metaSidebar */
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { __ } = wp.i18n;

import { MetaFieldsManager } from './MetaFieldsManager';

const Sidebar = () => {
	return (
		<>
			<PluginSidebarMoreMenuItem
				target="neve-meta-sidebar"
			>
				{__('Neve Options', 'neve')}
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				name="neve-meta-sidebar"
				title={__('Neve options', 'neve')}
			>
				<MetaFieldsManager/>
			</PluginSidebar>
		</>
	);
};
export default Sidebar;
