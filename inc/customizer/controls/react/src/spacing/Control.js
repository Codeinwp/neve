/* jshint esversion: 6 */

import SpacingComponent from './SpacingComponent.js';
import { render } from '@wordpress/element';

export const SpacingControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<SpacingComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
