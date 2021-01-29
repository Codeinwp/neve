/* jshint esversion: 6 */

import ToggleComponent from './ToggleComponent.js';
import { render } from '@wordpress/element';

export const ToggleControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<ToggleComponent control={this} />, this.container[0]);
	},
});
