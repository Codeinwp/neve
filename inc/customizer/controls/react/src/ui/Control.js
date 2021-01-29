/* jshint esversion: 6 */
import UiComponent from './UiComponent.js';
const { render } = wp.element;

export const UiControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<UiComponent control={this} />, this.container[0]);
	},
});
