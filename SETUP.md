# Setup Guide

This document describes how to setup your development environment, so that it is ready to run, develop and test this WordPress Plugin or Theme.

Suggestions are provided for the LAMP/LEMP stack and Git client are for those who prefer the UI over a command line and/or are less familiar with
WordPress, PHP, MySQL and Git - but you're free to use your preferred software.

## Setup

### LAMP/LEMP stack

Any Apache/nginx, PHP 7.x+ and MySQL 5.8+ stack running WordPress.  For example, but not limited to:
- Valet (recommended)
- Local by Flywheel
- Docker
- MAMP
- WAMP

### Composer

If [Composer](https://getcomposer.org) is not installed on your local environment, enter the following commands at the command line to install it:

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```

Confirm that installation was successful by entering the `composer --version` command at the command line

### Clone Repository

Using your preferred Git client or command line, clone this repository into the `wp-content/plugins/` folder of your local WordPress installation.

If you prefer to clone the repository elsewhere, and them symlink it to your local WordPress installation, that will work as well.

If you're new to this, use [GitHub Desktop](https://desktop.github.com/) or [Tower](https://www.git-tower.com/mac)

For Plugins the clonde folder should be under `wp-content/plugins/` and for Themes under `wp-content/themes/`.

### Install Dependencies for PHP and JS

In the cloned repository's directory, at the command line, run `COMPOSER=composer-dev.json composer install`. 
This will install the development dependencies. If you want to install just the production dependencies, run `composer install`.

The development dependencies include:
	- PHPStan
	- PHPUnit
	- PHP_CodeSniffer
	- WordPress Coding Standards
	- WordPress PHPUnit Polyfills

For the JS dependencies, run `yarn install --frozen-lockfile`.
To watch for changes in the JS files, run `yarn dev`.

#### PHPStan

To run PHPStan, run `composer phpstan`.


### PHP_CodeSniffer

To run PHP_CodeSniffer, run `composer lint`. This will run the WordPress Coding Standards checks.
To fix automatically fixable issues, run `composer format`.

### PHPUnit

To run PHPUnit, run `phpunit` or `./vendor/bin/phpunit` if it is not configured globally.

### E2E Tests

Setup and Information about the E2E tests can be found in E2E testing [README](./e2e-tests/README.md).

### Next Steps

With your development environment setup, you'll probably want to start development, which is covered in the [Development Guide](DEVELOPMENT.md)
