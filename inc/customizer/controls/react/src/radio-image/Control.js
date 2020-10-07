/* jshint esversion: 6 */

import RadioImageComponent from './RadioImageComponent.js';
import { render } from '@wordpress/element';

export const RadioImageControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<RadioImageComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
