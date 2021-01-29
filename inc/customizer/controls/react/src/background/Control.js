/* jshint esversion: 6 */
import BackgroundComponent from './BackgroundComponent.js';
import { render } from '@wordpress/element';

export const BackgroundControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<BackgroundComponent control={this} />, this.container[0]);
	},
});
