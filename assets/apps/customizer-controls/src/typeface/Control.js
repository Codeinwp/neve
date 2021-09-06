/* jshint esversion: 6 */
import TypefaceComponent from './TypefaceComponent.js';
import { render } from '@wordpress/element';
export const TypefaceControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<TypefaceComponent control={this} />, this.container[0]);
	},
});
