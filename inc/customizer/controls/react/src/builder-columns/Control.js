/* jshint esversion: 6 */
import BuilderColumnsComponent from './BuilderColumnsComponent.tsx';
import { render } from '@wordpress/element';
import React from 'react';

export const BuilderColumns = wp.customize.Control.extend({
	renderContent() {
		render(<BuilderColumnsComponent control={this} />, this.container[0]);
	},
});
