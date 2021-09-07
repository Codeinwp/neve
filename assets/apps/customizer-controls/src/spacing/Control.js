/* jshint esversion: 6 */

import SpacingComponent from './SpacingComponent.js';
import { render } from '@wordpress/element';

export const SpacingControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<SpacingComponent control={this} />, this.container[0]);
	},
});
