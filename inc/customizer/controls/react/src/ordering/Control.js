/* jshint esversion: 6 */

import OrderingComponent from './OrderingComponent.js';
import { render } from '@wordpress/element';

export const OrderingControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<OrderingComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
