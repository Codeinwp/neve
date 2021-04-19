import TextField from './TextField';
import { render } from '@wordpress/element';

export const TextFieldControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<TextField control={this} />, this.container[0]);
	},
});
