/**
 * Internal dependencies
 */
import Sidebar from './components/Sidebar';

/**
 * WordPress dependencies
 */
const { registerPlugin } = wp.plugins;

registerPlugin( 'meta-sidebar', {
	render: Sidebar
} );
