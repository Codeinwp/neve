/* jshint esversion: 6 */

import HFGBuilder from './HFGBuilder';
import { render } from '@wordpress/element';

export const HFGBuilderControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<HFGBuilder control={this} />, this.container[0]);
	},
});
