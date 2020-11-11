import GlobalColors from './GlobalColors';
import { render } from '@wordpress/element';

export const GlobalColorsControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		render( <GlobalColors control={ this } />, this.container[ 0 ] );
	},
} );
