/* global NeveReactCustomize */
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
		pairs: NeveReactCustomize.fontPairs,
		priority: 5,
	});

	render(<FontPairComponent control={pairsControl} />, section.container[0]);
};
