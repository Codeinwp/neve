/* jshint esversion: 6 */

import RadioButtonsComponent from './RadioButtonsComponent.js';
import { render } from '@wordpress/element';

export const RadioButtonsControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<RadioButtonsComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
