/* global require, __dirname */
// jshint node:true
const path = require( 'path' )
const paths = {
  global: {
    config: path.join( __dirname, 'grunt/' ),
    grunt: path.join( __dirname, 'grunt/' )
  },
  config: 'grunt/',
  grunt: 'grunt/',
  languages: 'languages/',
  logs: 'logs/',
  images: 'images/',
  vendor: 'vendor/'
}
const taskMap = {
  sass: 'grunt-contrib-sass',
  watch: 'grunt-contrib-watch',
  rtlcss: 'grunt-rtlcss',
  concat: 'grunt-contrib-concat',
  cssmin: 'grunt-contrib-cssmin',
  addtextdomain: 'grunt-wp-i18n',
  wp_readme_to_markdown: 'grunt-wp-readme-to-markdown'
}
const files = {
  php: [
    '*.php',
    '**/*.php',
    '!.git/**',
    '!vendor/**',
    '!node_modules/**',
    '!logs/**'
  ],
  css: [
    '*.css',
    '**/*.css',
    '**/*.css',
    '!*.min.css',
    '!**/*.min.css',
    '!css/vendor/*.css',
    '!vendor/**',
    '!node_modules/**',
    '!logs/**'
  ],
  js: [
    '*.js',
    '**/*.js',
    '!*.min.js',
    '!**/*.min.js',
    '!.git/**',
    '!vendor/**',
    '!js/vendor/*.js',
    '!node_modules/**',
    '!logs/**'
  ]
}

const gruntConfig = (grunt) => {
  'use strict'
  const config = {}
  const loader = require( 'load-project-config' )

  config.paths = paths
  config.taskMap = taskMap
  config.files = files
  config.files.config = config.paths.config + '**/*.js'

  // Exclude JS Files
  config.files.js = config.files.js.concat( [
    '!**/node_modules/**/*',
    '!assets/js/*.js',
    '!assets/js/frontend.js',
    '!grunt/**/*',
    '!**/vendor/**/*',
    '!header-footer-grid/assets/js/**/*',
    '!**/rollup.config.js',
    '!dist/**/*',
    '!cypress/**/*'
  ] )
  // Exclude PHP Files
  config.files.php = config.files.php.concat( [
    '!**/node_modules/**/*',
    '!**/vendor/**/*',
    '!dist/**/*'
  ] )
  // Exclude CSS Files
  config.files.css = config.files.css.concat( ['!**/vendor/**/*'] )

  loader( grunt, config ).init()
}

module.exports = gruntConfig
