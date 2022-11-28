/* global NeveReactCustomize */
import React from 'react';
import ToggleComponent from '../toggle/ToggleComponent';
import { __ } from '@wordpress/i18n';
import { render } from '@wordpress/element';

const initLocalGoogleFonts = () => {
	const node = document.querySelector(
		'.control-section-typography_extra_section'
	);

	if (!node) {
		return;
	}

	const slug = node.getAttribute('data-slug');
	const section = wp.customize.section(slug);

	if (!section) {
		return;
	}

	const toggleControl =
		new wp.customize.controlConstructor.neve_toggle_control(
			NeveReactCustomize.localGoogleFonts.key,
			{
				section: section.id,
				label: __('Local fonts hosting', 'neve'),
				setting: NeveReactCustomize.localGoogleFonts.key,
				description: NeveReactCustomize.localGoogleFonts.learnMore,
				priority: 5,
			}
		);

	render(<ToggleComponent control={toggleControl} />, section.container[0]);
};

export { initLocalGoogleFonts };
