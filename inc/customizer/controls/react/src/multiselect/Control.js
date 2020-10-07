import MultiSelect from './MultiSelect';

import { render } from '@wordpress/element';
export const MultiSelectControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		render( <MultiSelect control={ this } />, this.container[ 0 ] );
	},
} );
