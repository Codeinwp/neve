/* global metaSidebar */

import './editor.scss';
/**
 * Internal dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { Icon } from '@wordpress/components';

import Sidebar from './components/Sidebar';
import { neveIcon } from './helpers/icons.js';

registerPlugin('meta-sidebar', {
	icon: () =>
		metaSidebar.whiteLabeled ? (
			<span dangerouslySetInnerHTML={{ __html: metaSidebar.icon }} />
		) : (
			<Icon icon={neveIcon} />
		),
	render: Sidebar,
});
