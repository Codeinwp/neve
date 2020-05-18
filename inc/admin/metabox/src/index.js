/**
 * Internal dependencies
 */
import { registerPlugin } from "@wordpress/plugins";
import Sidebar from './components/Sidebar';

registerPlugin( 'meta-sidebar', {
	render: Sidebar
} );
