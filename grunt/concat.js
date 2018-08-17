/* jshint node:true */
// https://github.com/gruntjs/grunt-contrib-concat
module.exports = {
	customizerStyle: {
		options: {
			separator: ''
		},
		src: [
			'./inc/customizer/controls/**/style.css',
			'./inc/addons/customizer/controls/**/style.css',
		],
		dest: './assets/css/customizer-style.css'
	},
};
