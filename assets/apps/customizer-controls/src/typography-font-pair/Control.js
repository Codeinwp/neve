import React from 'react';
import { render } from '@wordpress/element';
import FontPairComponent from './FontPairComponent.tsx';

export const FontPairControl = wp.customize.Control.extend({
	renderContent: function renderContent() {
		render(<FontPairComponent control={this} />, this.container[0]);
	},
});

export const FontPairControlInit = () => {
	const node = document.querySelector(
		'.control-section-typography_font_pair_section'
	);

	if (!node) {
		return;
	}

	const slug = node.getAttribute('data-slug');
	const section = wp.customize.section(slug);

	if (!section) {
		return;
	}

	const pairsControl = new FontPairControl('nv_font_pairs', {
		section: section.id,
		// ToDo: bring fonts from php, so design team can have specific fonts based on site used.
		pairs: [
			{
				bodyFont: 'Source Sans Pro',
				headingFont: 'Playfair Display',
			},
			{
				bodyFont: 'PT Sans',
				headingFont: 'Oswald',
			},
			{
				bodyFont: 'Source Serif Pro',
				headingFont: 'Source Serif Pro',
			},
			{
				bodyFont: 'Inter',
				headingFont: 'Inter',
			},
			{
				bodyFont: 'Inter',
				headingFont: 'Bebas Neue',
			},
		],
		priority: 5,
	});

	render(<FontPairComponent control={pairsControl} />, section.container[0]);
};
