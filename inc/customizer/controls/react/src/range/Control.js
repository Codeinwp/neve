/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import RangeComponent from './RangeComponent.js';

export const RangeControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<RangeComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
