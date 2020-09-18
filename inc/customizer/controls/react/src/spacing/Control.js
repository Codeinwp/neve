/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import SpacingComponent from './SpacingComponent.js';

export const SpacingControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<SpacingComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
