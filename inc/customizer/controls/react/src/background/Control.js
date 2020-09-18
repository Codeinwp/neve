/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import BackgroundComponent from './BackgroundComponent.js';

export const BackgroundControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		const control = this;
		render(
			<BackgroundComponent control={ control } />,
			control.container[ 0 ]
		);
	},
} );
