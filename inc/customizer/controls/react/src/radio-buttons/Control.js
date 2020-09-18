/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import RadioButtonsComponent from './RadioButtonsComponent.js';

export const RadioButtonsControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<RadioButtonsComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
