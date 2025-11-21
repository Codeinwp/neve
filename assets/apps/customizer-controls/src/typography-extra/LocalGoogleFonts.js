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

	const localFontsToggle =
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

	const preloadFontsToggle =
		new wp.customize.controlConstructor.neve_toggle_control(
			NeveReactCustomize.preloadFonts.key,
			{
				section: section.id,
				label: __('Preload fonts', 'neve'),
				setting: NeveReactCustomize.preloadFonts.key,
				priority: 6,
			}
		);

	render(
		<>
			<ToggleComponent control={preloadFontsToggle} />
			<ToggleComponent control={localFontsToggle} />
		</>,
		section.container[0]
	);
};

export { initLocalGoogleFonts };
