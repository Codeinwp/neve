/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import Instructions from './Instructions.tsx';

export const InstructionsControl = wp.customize.Control.extend({
	renderContent() {
		render(<Instructions control={this} />, this.container[0]);
	},
});
