/* global metaSidebar */
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { __ } = wp.i18n;

import { MetaFieldsManager } from './MetaFieldsManager';
import { neveIcon } from '../helpers/icons.js';

const Sidebar = () => {
	return (
		<>
			<PluginSidebarMoreMenuItem
				icon={neveIcon}
				target="neve-meta-sidebar"
			>
				{__('Neve Options', 'neve')}
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				icon={neveIcon}
				name="neve-meta-sidebar"
				title={__('Neve options', 'neve')}
			>
				<MetaFieldsManager/>
			</PluginSidebar>
		</>
	);
};
export default Sidebar;
