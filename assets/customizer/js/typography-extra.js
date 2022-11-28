wp.customize.sectionConstructor['typography_extra_section'] = wp.customize.Section.extend({
	// No events for this type of section.
	attachEvents: () => null,
	// Always make the section active.
	isContextuallyActive: () => true,
});