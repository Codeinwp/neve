/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import ResponsiveRadioButtonsComponent from './ResponsiveRadioButtonsComponent.js';

export const ResponsiveRadioButtonsControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<ResponsiveRadioButtonsComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
