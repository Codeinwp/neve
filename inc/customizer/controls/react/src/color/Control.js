/* jshint esversion: 6 */

import ColorComponent from './ColorComponent';
import { render } from '@wordpress/element';

export const ColorControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<ColorComponent control={this} />, this.container[0]);
	},
});
