/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import Instructions from './Instructions';

export const InstructionsSection = wp.customize.Section.extend({
	// No events for this type of section.
	attachEvents: () => null,
	// Always make the section active.
	isContextuallyActive: () => true,
});
