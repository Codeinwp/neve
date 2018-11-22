/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
	scripts: {
		files: {
			'./assets/js/script.min.js': [ './assets/js/src/*.js' ],
			'./assets/js/gutenberg-preview-manager.min.js': [ './assets/js/gutenberg-preview-manager.js' ],
			'./assets/js/metabox.min.js': [ './assets/js/metabox.js' ],
		},
		options: {
			compress: true,
			mangle: true,
			sourceMap: false
		},
	},

	customizerControls: {
		files: {
			'./assets/js/customizer-controls.min.js': [ './assets/js/admin/src/customizer-controls.js', './inc/customizer/controls/js/*.js', './inc/addons/customizer/controls/js/*.js' ],
			'./assets/js/customizer-preview.min.js': [ './assets/js/admin/src/customizer-preview.js', './inc/customizer/options/js/*.js', './inc/addons/customizer/options/js/*.js' ],
		},
		options: {
			compress: true,
			mangle: true,
			sourceMap: false
		},
	},

	unMinified: {
		files: {
			'./assets/js/script.js': [ './assets/js/src/*.js' ],
			'./assets/js/customizer-controls.js': [ './inc/customizer/controls/js/*.js', './inc/addons/customizer/controls/js/*.js' ],
			'./assets/js/customizer-preview.js': [ './assets/js/admin/src/customizer-controls.js', './inc/customizer/options/js/*.js', './inc/addons/customizer/options/js/*.js' ],
		},
		options: {
			compress: false,
			mangle: false,
			sourceMap: true,
			beautify: true
		},
	}
};
