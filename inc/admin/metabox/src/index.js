/**
 * Internal dependencies
 */
const { registerPlugin } = wp.plugins;
import Sidebar from './components/Sidebar';

registerPlugin( 'meta-sidebar', {
	render: Sidebar
} );
