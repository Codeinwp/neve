/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-concat
module.exports = {
	customizerStyle: {
		options: {
			separator: ''
		},
		src: [
			'./inc/customizer/controls/css/*.css',
			'./inc/addons/customizer/controls/css/*.css',
		],
		dest: './assets/css/customizer-style.css'
	},
};
