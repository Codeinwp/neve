/* jshint node:true */
// https://github.com/blazersix/grunt-wp-i18n
module.exports = {
  main: {
    options: {
      textdomain: '<%= package.theme.textdomain %>'
    },
    theme: {
      files: {
        src: [
          '<%= files.php %>'
        ]
      }
    }
  },
  composerDeps: {
    options: {
      textdomain: '<%= package.theme.textdomain %>',
      updateDomains: ['textdomain']
    },
    files: {
      src: [
        'vendor/codeinwp/**/*.php'
      ]
    }
  }
}
