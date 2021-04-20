/* jshint esversion: 6 */
import UiComponent from './UiComponent';
import { render } from '@wordpress/element';

export const UiControl = wp.customize.Control.extend({
	renderContent() {
		render(<UiComponent control={this} />, this.container[0]);
	},
});
