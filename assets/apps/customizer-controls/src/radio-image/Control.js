/* jshint esversion: 6 */

import RadioImageComponent from './RadioImageComponent.js';
import { render } from '@wordpress/element';

export const RadioImageControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<RadioImageComponent control={this} />, this.container[0]);
	},
});
