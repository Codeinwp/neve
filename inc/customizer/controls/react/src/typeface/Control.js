/* jshint esversion: 6 */

import TypefaceComponent from './TypefaceComponent.js';

import { render } from '@wordpress/element';

export const TypefaceControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<TypefaceComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
