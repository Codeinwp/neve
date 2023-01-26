import React from 'react';
import { render } from '@wordpress/element';
import FontPairComponent from './FontPairComponent.tsx';

export const FontPairControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<FontPairComponent control={this} />, this.container[0]);
	},
});
