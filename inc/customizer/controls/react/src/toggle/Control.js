/* jshint esversion: 6 */

import ToggleComponent from './ToggleComponent.js';
import { render } from '@wordpress/element';

export const ToggleControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<ToggleComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
