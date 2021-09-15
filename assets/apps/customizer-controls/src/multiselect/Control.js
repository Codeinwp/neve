import MultiSelectComponent from './MultiSelectComponent';
import { render } from '@wordpress/element';

export const MultiSelectControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<MultiSelectComponent control={this} />, this.container[0]);
	},
});
