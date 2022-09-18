/* jshint esversion: 6 */

import FormTokenFieldComponent from './FormTokenFieldComponent.js';
import { render } from '@wordpress/element';

export const FormTokenFieldControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<FormTokenFieldComponent control={this} />, this.container[0]);
	},
});
