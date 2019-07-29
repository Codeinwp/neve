/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	customizerJs: {
		files: [
			'inc/customizer/controls/js/*.js',
			'inc/customizer/options/js/*.js',
		],
		tasks: [ 'uglify:customizerControls', 'uglify:unMinified' ]
	},
	sass: {
		files: [ 'assets/scss/**/*.scss', 'header-footer-grid/assets/scss/**/*.scss' ],
		tasks: [ 'sass:style', 'cssmin' ]
	},
	customizerSass: {
		files: [
			'inc/customizer/controls/css/*.css',
			'inc/addons/customizer/controls/css/*.css',
		],
		tasks: [ 'concat:customizerStyle', 'cssmin:customizerStyle']
	},
};
