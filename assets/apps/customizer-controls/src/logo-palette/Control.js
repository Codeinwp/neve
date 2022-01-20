/* jshint esversion: 6 */

import { render } from '@wordpress/element';
import LogoPaletteComponent from './LogoPaletteComponent.js';

export const LogoPaletteControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<LogoPaletteComponent control={this} />, this.container[0]);
	},
});
