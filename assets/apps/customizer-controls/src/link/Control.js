import Link from './Link.tsx';
import { render } from '@wordpress/element';
export const LinkControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<Link control={this} />, this.container[0]);
	},
});
