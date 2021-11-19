/* jshint esversion: 6 */

import RangeComponent from './RangeComponent.js';
import { render } from '@wordpress/element';

export const RangeControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<RangeComponent control={this} />, this.container[0]);
	},
});
