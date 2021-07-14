export const Header = {
	desktop: {
		top: [],
		main: [
			{ x: 0, y: 1, width: 4, height: 1, id: 'logo' },
			{ x: 4, y: 1, width: 8, height: 1, id: 'primary-menu' },
		],
		bottom: [],
	},
	mobile: {
		top: [
			{ x: 0, y: 1, width: 2, height: 1, id: 'button_base' },
			{ x: 8, y: 1, width: 1, height: 1, id: 'header_search_responsive' },
			{ x: 9, y: 1, width: 3, height: 1, id: 'custom_html' },
		],
		main: [
			{ x: 0, y: 1, width: 8, height: 1, id: 'logo' },
			{ x: 8, y: 1, width: 4, height: 1, id: 'nav-icon' },
		],
		bottom: [],
		sidebar: [{ x: 0, y: 1, width: 8, height: 1, id: 'primary-menu' }],
	},
};

export const NewHeader = {
	desktop: {
		top: {},
		main: {
			left: [{ x: 0, y: 1, width: 4, height: 1, id: 'logo' }],
			'c-left': [],
			center: [{ x: 4, y: 1, width: 8, height: 1, id: 'primary-menu' }],
			'c-right': [],
			right: [],
		},
		bottom: {},
	},
	mobile: {
		top: {
			left: [
				{ x: 0, y: 1, width: 2, height: 1, id: 'button_base' },
				{
					x: 8,
					y: 1,
					width: 1,
					height: 1,
					id: 'header_search_responsive',
				},
				{ x: 9, y: 1, width: 3, height: 1, id: 'custom_html' },
			],
		},
		main: {
			center: [
				{ x: 0, y: 1, width: 8, height: 1, id: 'logo' },
				{ x: 8, y: 1, width: 4, height: 1, id: 'nav-icon' },
			],
		},
		bottom: {},
		sidebar: [{ x: 0, y: 1, width: 8, height: 1, id: 'primary-menu' }],
	},
};
