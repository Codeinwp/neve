/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import ResponsiveRangeComponent from './ResponsiveRangeComponent.js';

export const ResponsiveRangeControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<ResponsiveRangeComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
