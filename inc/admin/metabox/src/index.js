/**
 * Internal dependencies
 */
const { registerPlugin } = wp.plugins;
const { Icon } = wp.components;

import Sidebar from './components/Sidebar';
import { neveIcon } from './helpers/icons.js';

const icon = <Icon icon={ neveIcon } />;
registerPlugin( 'meta-sidebar', {
	icon,
	render: Sidebar
} );
