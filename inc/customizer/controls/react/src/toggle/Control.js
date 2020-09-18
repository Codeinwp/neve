/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import ToggleComponent from './ToggleComponent.js';

export const ToggleControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<ToggleComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
