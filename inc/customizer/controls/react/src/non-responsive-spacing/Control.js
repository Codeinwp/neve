/* jshint esversion: 6 */

import NRSpacingComponent from './NRSpacingComponent.js';
import { render } from '@wordpress/element';

export const NRSpacingControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		this.focus();
		render( <NRSpacingComponent control={ this } />, this.container[ 0 ] );
	},
} );
