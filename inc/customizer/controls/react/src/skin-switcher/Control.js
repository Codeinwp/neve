import SkinSwitcher from './SkinSwitcher.tsx';
import { render } from '@wordpress/element';

export const SkinSwitcherControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<SkinSwitcher control={this} />, this.container[0]);
	},
});
