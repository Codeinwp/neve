/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import ButtonAppearanceComponent from './ButtonAppearanceComponent.js';

export const ButtonAppearanceControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<ButtonAppearanceComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
