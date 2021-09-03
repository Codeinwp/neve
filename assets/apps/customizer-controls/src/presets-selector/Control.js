/* jshint esversion: 6 */

import PresetsSelectorComponent from './PresetsSelectorComponent.tsx';
import { render } from '@wordpress/element';
export const PresetsSelectorControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<PresetsSelectorComponent control={this} />, this.container[0]);
	},
});
