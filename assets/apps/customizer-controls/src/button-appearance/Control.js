/* jshint esversion: 6 */

import ButtonAppearanceComponent from './ButtonAppearanceComponent.js';
import { render } from '@wordpress/element';

export const ButtonAppearanceControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<ButtonAppearanceComponent control={this} />, this.container[0]);
	},
});
