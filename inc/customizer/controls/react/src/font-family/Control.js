/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import FontFamilyComponent from './FontFamilyComponent.js';

export const FontFamilyControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<FontFamilyComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
