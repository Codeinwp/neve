/* jshint esversion: 6 */

import ButtonAppearanceComponent from './ButtonAppearanceComponent.js';
import { render } from '@wordpress/element';

export const ButtonAppearanceControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<ButtonAppearanceComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
