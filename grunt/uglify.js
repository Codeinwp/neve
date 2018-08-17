/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-uglify
module.exports = {
	scripts: {
		files: {
			'./assets/js/script.min.js': [ './assets/js/src/*.js' ],
		}
	},
	customizerControls: {
		files: {
			'./assets/js/customizer-controls.min.js': [ './assets/js/admin/src/customizer-controls.js', './inc/customizer/controls/**/script.js', './inc/addons/customizer/controls/**/script.js' ],
		}
	},
	options: {
		compress: true,
		mangle: true,
		sourceMap: false
	},
};
