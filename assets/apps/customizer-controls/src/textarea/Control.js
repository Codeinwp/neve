/* jshint esversion: 6 */

import TextareaComponent from './TextareaComponent.js';
import { render } from '@wordpress/element';

export const TextareaControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<TextareaComponent control={this} />, this.container[0]);
	},
});
