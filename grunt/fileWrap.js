// jshint ignore: start
// https://github.com/vitaly-t/grunt-file-wrap

module.exports = {
	requires: ['sass'],
	wrapPHP: {
		header: '<?php return <<<CSS \n', // if fileMode = true, it is a file name
		footer: '\nCSS;', // if fileMode = true, it is a file name
		src: [
			'header-footer-grid/assets/components/**/*.css.min.php',
		],
		options: {
			fileMode: false,
			unique: true,
		},
	},
};
