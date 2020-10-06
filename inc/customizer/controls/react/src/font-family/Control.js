/* jshint esversion: 6 */

import FontFamilyComponent from './FontFamilyComponent.js';
import { render } from '@wordpress/element';

export const FontFamilyControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<FontFamilyComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
