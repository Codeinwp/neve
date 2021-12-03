wp.domReady(() => {
	const { __ } = wp.i18n;
	wp.blocks.unregisterBlockStyle('core/button', 'fill');
	wp.blocks.unregisterBlockStyle('core/button', 'outline');

	wp.blocks.registerBlockStyle('core/button', {
		name: 'default',
		label: __('Default'),
		isDefault: true,
	});
	wp.blocks.registerBlockStyle('core/button', {
		name: 'primary',
		label: __('Primary', 'neve'),
	});

	wp.blocks.registerBlockStyle('core/button', {
		name: 'secondary',
		label: __('Secondary'),
		isDefault: false,
	});
});
