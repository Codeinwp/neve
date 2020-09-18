/**
 * Internal dependencies
 */
import { registerPlugin } from '@wordpress/plugins';
import { Icon } from '@wordpress/components';

import './editor.scss';
import Sidebar from './components/Sidebar';
import { neveIcon } from './helpers/icons.js';

registerPlugin( 'meta-sidebar', {
	icon: <Icon icon={ neveIcon } />,
	render: Sidebar,
} );
