// jshint node:true

module.exports = function ( grunt ) {
	'use strict';

	var loader = require( 'load-project-config' ),
		config = require( 'grunt-theme-fleet' );
	config = config();

  config.files.php.push( '!**/node_modules/**/*' );
	config.files.js.push( '!inc/admin/onboarding/assets/js/bundle.js' );
	config.files.js.push( '!inc/admin/onboarding/webpack.config.js' );
	config.files.js.push( '!inc/admin/onboarding/node_modules/**/*' );
	config.files.js.push( '!**/node_modules/**/*' );

	config.files.js.push( '!**/vendor/**/*' );
	config.files.php.push( '!**/vendor/**/*' );
	config.files.css.push( '!**/vendor/**/*' );

	//Task mapping.
	config.taskMap.sass = 'grunt-contrib-sass';
	config.taskMap.watch = 'grunt-contrib-watch';
	config.taskMap.rtlcss = 'grunt-rtlcss';
	config.taskMap.uglify = 'grunt-contrib-uglify';
	config.taskMap.concat = 'grunt-contrib-concat';
	config.taskMap.cssmin = 'grunt-contrib-cssmin';

	loader( grunt, config ).init();
};
