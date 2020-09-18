/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import ResponsiveToggleComponent from './ResponsiveToggleComponent.js';

export const ResponsiveToggleControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<ResponsiveToggleComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
