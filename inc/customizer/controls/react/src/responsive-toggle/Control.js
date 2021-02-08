/* jshint esversion: 6 */

import ResponsiveToggleComponent from './ResponsiveToggleComponent.js';
import { render } from '@wordpress/element';

export const ResponsiveToggleControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<ResponsiveToggleComponent control={this} />, this.container[0]);
	},
});
