/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import TypefaceComponent from './TypefaceComponent.js';

export const TypefaceControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<TypefaceComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
