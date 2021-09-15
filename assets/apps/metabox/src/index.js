/* global metaSidebar */

import './editor.scss';
/**
 * Internal dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { Icon } from '@wordpress/components';

import Sidebar from './components/Sidebar';
import { neveIcon } from './helpers/icons.js';

const icon = metaSidebar.whiteLabeled ? 'hammer' : neveIcon;

registerPlugin('meta-sidebar', {
	icon: <Icon icon={icon} />,
	render: Sidebar,
});
