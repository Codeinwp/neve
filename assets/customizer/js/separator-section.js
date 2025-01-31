wp.customize.sectionConstructor.neve_separator = wp.customize.Section.extend({
	// No events for this type of section.
	attachEvents() {},

	// Always make the section active.
	isContextuallyActive() {
		return true;
	},
});
