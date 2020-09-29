/* global metaSidebar */

/**
 * Internal dependencies
 */
const { registerPlugin } = wp.plugins;
const { Icon } = wp.components;

import Sidebar from './components/Sidebar';
import { neveIcon } from './helpers/icons.js';

const icon = metaSidebar.whiteLabeled ? 'hammer' : neveIcon;

registerPlugin( 'meta-sidebar', {
	icon: <Icon icon={ icon } />,
	render: Sidebar
} );
