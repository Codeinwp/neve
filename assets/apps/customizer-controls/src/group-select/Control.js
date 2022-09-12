/* jshint esversion: 6 */

import GroupSelectComponent from './GroupSelectComponent.js';
import { render } from '@wordpress/element';

export const GroupSelectControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<GroupSelectComponent control={this} />, this.container[0]);
	},
});
