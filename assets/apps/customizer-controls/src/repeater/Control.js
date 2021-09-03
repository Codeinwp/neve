import RepeaterComponent from './RepeaterComponent.js';
import { render } from '@wordpress/element';

export const RepeaterControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<RepeaterComponent control={this} />, this.container[0]);
	},
});
