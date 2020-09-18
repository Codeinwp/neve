/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import ColorComponent from './ColorComponent';

export const ColorControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<ColorComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
