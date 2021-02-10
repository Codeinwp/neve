/* jshint esversion: 6 */

import ResponsiveRangeComponent from './ResponsiveRangeComponent.js';
import { render } from '@wordpress/element';

export const ResponsiveRangeControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<ResponsiveRangeComponent control={this} />, this.container[0]);
	},
});
