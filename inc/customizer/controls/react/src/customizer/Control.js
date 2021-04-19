import Customizer from './Customizer';
import { render } from '@wordpress/element';

export const CustomizerControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<Customizer control={this} />, this.container[0]);
	},
});
