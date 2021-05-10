// import Customizer from './Customizer';
import { render } from '@wordpress/element';
import Item from './Item';

export const CustomizerControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<Item control={this} />, this.container[0]);
	},
});
