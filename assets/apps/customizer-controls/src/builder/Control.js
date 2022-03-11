/* jshint esversion: 6 */
import HFGBuilderComponent from './HFGBuilderComponent.tsx';
import { render } from '@wordpress/element';
import React from 'react';
import { isNull } from 'lodash';

export const BuilderControl = wp.customize.Control.extend({
	renderContent() {
		const customizePreview = document.getElementById('customize-controls');
		let where = document.querySelector(
			`#accordion-section-${this.params.section}`
		);
		if (this.params.builderType === 'page_header') {
			const pageHeaderComponents = document.querySelector(
				`#customize-control-neve_pro_page_header_layout_components`
			);
			if (
				!isNull(pageHeaderComponents) &&
				pageHeaderComponents !== 'undefined'
			) {
				where = pageHeaderComponents;
			}
		}

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
