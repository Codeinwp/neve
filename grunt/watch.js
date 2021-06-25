/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	sass: {
		files: [ 'assets/scss/**/*.scss', 'header-footer-grid/assets/scss/**/*.scss' ],
		tasks: [ 'sass:style', 'sass:phpStyle', 'fileWrap', 'cssmin' ]
	},
	customizerSass: {
		files: [
			'inc/customizer/controls/css/*.css',
			'inc/addons/customizer/controls/css/*.css',
		],
		tasks: [ 'concat:customizerStyle', 'cssmin:customizerStyle']
	},
};
