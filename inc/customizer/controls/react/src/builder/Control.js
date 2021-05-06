/* jshint esversion: 6 */
import HFGBuilderComponent from './HFGBuilderComponent.tsx';
import { render } from '@wordpress/element';
import React from 'react';

export const BuilderControl = wp.customize.Control.extend({
	renderContent() {
		const customizePreview = document.getElementById('customize-preview');
		const where = document.querySelector(
			`#accordion-section-${this.params.section}`
		);

		const builderPortalMount = document.createElement('div');
		builderPortalMount.classList.add(
			'neve-builder-portal-wrap',
			'neve-hfg-builder'
		);
		customizePreview.appendChild(builderPortalMount);

		render(
			<HFGBuilderComponent
				control={this}
				portalMount={builderPortalMount}
			/>,
			where
		);
	},
});
