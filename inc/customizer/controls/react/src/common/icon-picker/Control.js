import IconField from './IconField';
import { render } from '@wordpress/element';

export const IconFieldControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<IconField control={this} />, this.container[0]);
	},
});
