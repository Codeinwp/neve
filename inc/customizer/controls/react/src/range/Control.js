/* jshint esversion: 6 */

import RangeComponent from './RangeComponent.js';
import { render } from '@wordpress/element';

export const RangeControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<RangeComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
