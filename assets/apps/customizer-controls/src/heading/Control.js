/* jshint esversion: 6 */

import HeadingComponent from './HeadingComponent.js';
import { render } from '@wordpress/element';

export const HeadingControl = wp.customize.Control.extend({
	triggerExpandHeader: function triggerExpandHeader() {
		if (this.container[0].classList.contains('expanded')) {
			return;
		}
		this.container[0].classList.toggle('expanded');
	},
	renderContent: function renderContent() {
		render(<HeadingComponent control={this} />, this.container[0]);
	},
});
