/* global neveSidebarData */

/**
 * Internal dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { Icon } from '@wordpress/components';

import './editor.scss';
import Sidebar from './components/Sidebar';
import { neveIcon } from './helpers/icons.js';

const icon = neveSidebarData.whiteLabeled ? 'hammer' : neveIcon;

registerPlugin( 'meta-sidebar', {
	icon: <Icon icon={ icon } />,
	render: Sidebar,
} );
