import GlobalColors from './GlobalColors';
import { render } from '@wordpress/element';
import { registerStore } from '@wordpress/data';

import actions from './store/actions';
import reducer from './store/reducer';
import selectors from './store/selectors';

registerStore( 'neve-global-colors', {
	reducer,
	actions,
	selectors,
} );

export const GlobalColorsControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		render( <GlobalColors control={ this } />, this.container[ 0 ] );
	},
} );
