import React from 'react';
import RepeaterComponent from './RepeaterComponent.js';
import { render } from '@wordpress/element';

export const OrderingControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<RepeaterComponent control={this} />, this.container[0]);
	},
});
