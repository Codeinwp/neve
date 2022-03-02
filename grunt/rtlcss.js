/* jshint node:true */
// https://github.com/MohammadYounes/grunt-rtlcss
const ext = '-rtl.css';
const options = {
	autoRename: false,
	autoRenameStrict: false,
	blacklist: {},
	clean: true,
	greedy: false,
	processUrls: false,
	stringMap: [
		{
			name: 'left-right',
			priority: 100,
			search: ['left', 'Left', 'LEFT'],
			replace: ['right', 'Right', 'RIGHT'],
			options: {
				scope: '*',
				ignoreCase: false,
			},
		},
		{
			name: 'ltr-rtl',
			priority: 100,
			search: ['ltr', 'Ltr', 'LTR'],
			replace: ['rtl', 'Rtl', 'RTL'],
			options: {
				scope: '*',
				ignoreCase: false,
			},
		},
	],
};

module.exports = {
	style: {
		options,
		expand: true,
		cwd: './',
		dest: './',
		ext,
		src: ['style-main-new.css'],
	},
	styleLegacy: {
		options,
		expand: true,
		cwd: './assets/css',
		dest: './assets/css',
		ext,
		src: ['style-legacy.css'],
	},
	woocommerce: {
		options,
		expand: true,
		cwd: './assets/css/',
		dest: './assets/css/',
		ext,
		src: ['woocommerce.css'],
	},
	woocommerceLegacy: {
		options,
		expand: true,
		cwd: './assets/css/',
		dest: './assets/css/',
		ext,
		src: ['woocommerce-legacy.css'],
	},
	customizerStyle: {
		options,
		expand: true,
		cwd: './assets/css/',
		dest: './assets/css/',
		ext,
		src: ['customizer-style.css'],
	},
	reactControls: {
		options,
		expand: true,
		cwd: './assets/apps/customizer-controls/build',
		dest: './assets/apps/customizer-controls/build',
		ext,
		src: ['style-controls.css'],
	},
	megaMenu: {
		options,
		expand: true,
		cwd: './assets/css/',
		dest: './assets/css/',
		ext,
		src: ['mega-menu.css'],
	},
	megaMenuLegacy: {
		options,
		expand: true,
		cwd: './assets/css/',
		dest: './assets/css/',
		ext,
		src: ['mega-menu-legacy.css'],
	},
	hfg: {
		options,
		expand: true,
		cwd: './header-footer-grid/assets/css/',
		dest: './header-footer-grid/assets/css/',
		ext,
		src: ['style.css'],
	},
	dashboard: {
		options,
		expand: true,
		cwd: './assets/apps/dashboard/build/',
		dest: './assets/apps/dashboard/build/',
		ext,
		src: ['style-dashboard.css'],
	},
	easy_digital_downloads: {
		options,
		expand: true,
		cwd: './assets/css/',
		dest: './assets/css/',
		ext,
		src: ['easy-digital-downloads.css'],
	},
};
