/* jshint esversion: 6 */

import ResponsiveRadioButtonsComponent from './ResponsiveRadioButtonsComponent.js';
import { render } from '@wordpress/element';

export const ResponsiveRadioButtonsControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<ResponsiveRadioButtonsComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
