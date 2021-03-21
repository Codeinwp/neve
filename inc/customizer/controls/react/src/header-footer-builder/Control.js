/* jshint esversion: 6 */

import HFGBuilder from './HFGBuilder';
import { render } from '@wordpress/element';
import React from 'react';

export const HFGBuilderControl = wp.customize.Control.extend({
	renderContent() {
		render(<HFGBuilder control={this} />, this.container[0]);
	},
});
