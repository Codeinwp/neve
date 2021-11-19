/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-watch
module.exports = {
	sass: {
		files: [ 'assets/scss/**/*.scss', 'header-footer-grid/assets/scss/**/*.scss' ],
		tasks: [ 'sass:style', 'cssmin' ]
	},
	customizerSass: {
		files: [
			'assets/customizer/css/*.css'
		],
		tasks: [ 'concat:customizerStyle', 'cssmin:customizerStyle']
	},
};
