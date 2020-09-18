import { render } from '@wordpress/element';
import MultiSelect from './MultiSelect';

export const MultiSelectControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		render( <MultiSelect control={ this } />, this.container[ 0 ] );
	},
} );
