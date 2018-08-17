// jshint node:true

module.exports = function ( grunt ) {
	'use strict';

	var loader = require( 'load-project-config' ),
		config = require( 'grunt-theme-fleet' );
	config     = config();

	//Task mapping.
	config.taskMap.sass = 'grunt-contrib-sass';
	config.taskMap.watch = 'grunt-contrib-watch';
	config.taskMap.rtlcss = 'grunt-rtlcss';
	config.taskMap.uglify = 'grunt-contrib-uglify';
	config.taskMap.concat = 'grunt-contrib-concat';
	config.taskMap.cssmin = 'grunt-contrib-cssmin';

	loader( grunt, config ).init();
};
