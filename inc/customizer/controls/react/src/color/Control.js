/* jshint esversion: 6 */

import ColorComponent from './ColorComponent';
import { render } from '@wordpress/element';

export const ColorControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<ColorComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
