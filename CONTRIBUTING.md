## Releasing

This repository uses conventional [changelog commit](https://github.com/Codeinwp/conventional-changelog-simple-preset) messages to trigger release 

How to release a new version:

- Clone the master branch
- Do your changes
- Send a PR to master and merge it using the following subject message
  - `release: <release short description>` - for patch release
  - `release(minor): <release short description>` - for minor release
  - `release(major): <release short description>` - for major release
The release notes will inherit the body of the commit message which triggered the release. For more details check the [simple-preset](https://github.com/Codeinwp/conventional-changelog-simple-preset) that we use.

## Running Cypress tests with Docker
**Please read our [Cypress Guideline](https://github.com/Codeinwp/cypress-guideline) before writing Cypress tests.**

To run the Docker environment, you need to have Docker installed; you can install it [here](https://www.docker.com/products/docker-desktop)

To set it up for the first time, please run this command into the root folder: `bash bin/envs/init.sh`

It will create the initial Docker setup according to the same docker-compose file that runs on the CI pipeline.

Since we use a different environment setup for each spec group, you will need to run another script after running that will change according to the env you need to run; you can check the envs for specs [here](https://github.com/Codeinwp/neve/blob/master/.github/workflows/build-dev-artifacts.yml#L96-L146).

E.g., you want to run the customizer spec that runs on sample-data env; you should run this command:
```bash
docker-compose -f docker-compose.ci.yml run --rm -u root cli sh "/var/www/html/bin/envs/sample-data/start.sh"
```

After running this script, you can run the Cypress tests, and if they pass, you can submit your PR knowing that the e2e tests will pass on the pipeline. :raised_hands:


# CONTRIBUTING GUIDELINES
+ [Setup Guide](#setup-guide)
+ [Development Guide](#setup-guide)
+ [Testing Guide](#testing-guide)



# Setup Guide

This document describes how to set up your development environment, so that it is ready to run, develop and test this WordPress Plugin or Theme.

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

In the cloned repository's directory, at the command line, run `yarn run composer:install`.
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

With your development environment setup, you'll probably want to start development, which is covered bellow in the **Development Guide**.



# Development Guide

This document describes the high level workflow used when working on a WordPress Plugin or Theme.

You're free to use your preferred IDE and Git client. We recommend PHPStorm or Visual Studio Code, and GitHub CLI.

For specific FAQ about working with this WordPress Theme refer to the [FAQ](./docs/FAQ.md) section.

## Prerequisites

If you haven't yet set up your local development environment with a WordPress Plugin repository installed, refer to the [Setup Guide](#setup-guide).

## Create a Branch

In your Git client / command line, create a new branch:
- If this is for a new feature that does not have a GitHub Issue number, enter a short descriptive name for the branch, relative to what you're working on
- If this is for a feature/bug that has a GitHub Issue number, enter feat/issue_name or fix/issue_name, where issue_name is a descriptive name for the issue

Once done, make sure you've switched to your new branch, and begin making the necessary code additions/changes/deletions.

## Coding Standards

Code must follow [WordPress Coding standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/), which is checked
when running tests (more on this below).

## Security and Sanitization

When [outputting data](https://developer.wordpress.org/plugins/security/securing-output/), escape it using WordPress' escaping functions such as `esc_html()`, `esc_attr__()`, `wp_kses()`, `wp_kses_post()`.

When reading [user input](https://developer.wordpress.org/plugins/security/securing-input/), sanitize it using WordPress' sanitization functions such as `sanitize_text_field()`, `sanitize_textarea_field()`.

When writing to the database, prepare database queries using ``$wpdb->prepare()``

Never trust user input. Sanitize it.

Make use of [WordPress nonces](https://codex.wordpress.org/WordPress_Nonces) for saving form submitted data.

Coding standards will catch any sanitization, escaping or database queries that aren't prepared.

## Composer Packages

We use Composer for package management.  A package can be added to one of two sections of the `composer.json` file: `require` or `require-dev`.

### "require"

Packages listed in the "require" directive are packages that the Plugin needs in order to function for end users.

These packages are included when the Plugin is deployed to WordPress.org

Typically, packages listed in this section would be libraries that the Plugin uses.

### "require-dev"

Packages listed in the "require-dev" directive are packages that the Plugin **does not** need in order to function for end users.

These packages are **not** included when the Plugin is deployed to wordpress.org

Typically, packages listed in this section would be internal development tools for testing, such as:
- Coding Standards
- PHPStan
- PHPUnit

## Committing Work

Remember to commit your changes to your branch relatively frequently, with a meaningful, short summary that explains what the change(s) do.
This helps anyone looking at the commit history in the future to find what they might be looking for.

If it's a particularly large commit, be sure to include more information in the commit description.

## Next Steps

Once you've finished your feature or issue, you must write/amend tests for it.  Refer to the [Testing Guide](#testing-guide) for a detailed walkthrough
on how to write a test.



# Testing Guide

This document describes how to:
- create and run tests for your development work,
- ensure code meets PHP and WordPress Coding Standards, for best practices and security,
- ensure code passes static analysis, to catch potential errors that tests might miss

If you're new to creating and running tests, this guide will walk you through how to do this.

For those more experienced with creating and running tests, our tests are written in TS for [Playwright](https://playwright.dev/) used for End-to-End testing,
and in PHP for [PHPUnit](https://phpunit.de/).

A PHPUnit guide for WordPress can be found [here](https://make.wordpress.org/core/handbook/testing/automated-testing/phpunit/).

## Prerequisites

If you haven't yet set up your local development environment with this Plugin repository installed, refer to the [Setup Guide](#setup-guide).

If you haven't yet created a branch and made any code changes to the Plugin or Theme, refer to the [Development Guide](#development-guide)

## Write (or modify) a test

If your work creates new functionality, write a test.

If your work fixes existing functionality, check if a test exists. Either update that test, or create a new test if one doesn't exist.

Tests are written in TS using [Playwright](https://playwright.dev/) and PHP using [PHPUnit](https://phpunit.de/).

## Types of Test

There are different types of tests that can be written:
- Acceptance Tests: Test as a non-technical user in the web browser.
- Functional Tests: Test the framework (WordPress).
- Integration Tests: Test code modules in the context of a WordPress website.
- Unit Tests: Test single PHP classes or functions in isolation.
- WordPress Unit Tests: Test single PHP classes or functions in isolation, with WordPress functions and classes loaded.

There is no definitive / hard guide, as a test can typically overlap into different types (such as Acceptance and Functional).

The most important thing is that you have a test for *something*.  If in doubt, an Acceptance Test will suffice.

### Writing an Acceptance Test

An acceptance test is a test that simulates a user interacting with the Plugin or Theme in a web browser.
Refer to Writing an End-to-End Test below.

### Writing an End-to-End Test

To write an End-to-End test, create a new file under `e2e-tests/specs` with the name of the spec or functionality you are testing, and add `.spec.test` to the file name.

E.g. for `e2e-tests/specs/checkout.spec.test.js`, the test file should be `checkout.spec.test.js`.

For more information on writing End-to-End tests, refer to the [Playwright documentation](https://playwright.dev/docs/test-intro).

You can check End-to-End [README](./e2e-tests/README.md) for more details.

## Writing a WordPress Unit Test

WordPress Unit tests provide testing of Plugin/Theme specific functions and/or classes, typically to assert that they perform as expected
by a developer.  This is primarily useful for testing our API class, and confirming that any Plugin registered filters return
the correct data.

To create a new WordPress Unit Test, create a new file under `tests/php/unit` with the name of the class you are testing, and the suffix `Test`.
The filename should be in `lower-case-with-dash`, and the class name should be in `CamelCase`.

E.g. for `tests/php/unit/class-api-test.php`, the test class should be `class APITest extends \PHPUnit\Framework\TestCase`.

```php
<?php
class APITest extends \PHPUnit\Framework\TestCase
{
    /**
     * @var \WpunitTester
     */
    protected $tester;
    
    public function setUp(): void
    {
        // Before...
        parent::setUp();
        // Your set up methods here.
    }
    public function tearDown(): void
    {
        // Your tear down methods here.
        // Then...
        parent::tearDown();
    }
    // Tests
    public function test_it_works()
    {
        $post = static::factory()->post->create_and_get();
        
        $this->assertInstanceOf(\WP_Post::class, $post);
    }
}
```

## Run PHPUnit Tests

Once you have written your code and test(s), run the tests to make sure there are no errors.

```bash
./vendor/bin/phpunit tests/php/unit/class-api-test.php
```

Any errors should be corrected by making applicable code or test changes.

## Run PHP CodeSniffer

In the Plugin's or Theme's directory, run the following command to run PHP_CodeSniffer, which will check the code meets Coding Standards
as defined in the `phpcs.tests.xml` configuration:

```bash
composer run lint 
```

`--standard=phpcs.tests.xml` tells PHP CodeSniffer to use the Coding Standards rules / configuration defined in `phpcs.tests.xml`.
These differ slightly from WordPress' Coding Standards, to ensure that writing tests isn't a laborious task, whilst maintain consistency
in test coding style.
`-v` produces verbose output
`-s` specifies the precise rule that failed

Any errors should be corrected by either:
- making applicable code changes
- running `composer run format` to automatically fix coding standards

Need to change the PHP or WordPress coding standard rules applied?  Either:
- ignore a rule in the affected code, by adding `phpcs:ignore {rule}`, where {rule} is the given rule that failed in the above output.
- edit the [phpcs.tests.xml](phpcs.tests.xml) file.

## Run PHPStan

[PHPStan](https://phpstan.org) performs static analysis on the Plugin's PHP code.  This ensures:

- DocBlocks declarations are valid and uniform
- DocBlocks declarations for WordPress `do_action()` and `apply_filters()` calls are valid
- Typehint variables and return types declared in DocBlocks are correctly cast
- Any unused functions are detected
- Unnecessary checks / code is highlighted for possible removal
- Conditions that do not evaluate can be fixed/removed as necessary

In the Plugin's or Theme's directory, run the following command to run PHPStan:

```bash
composer run phpstan
```

Any errors should be corrected by making applicable code changes.

False positives [can be excluded by configuring](https://phpstan.org/user-guide/ignoring-errors) the `phpstan.neon` file.

**Rules can be ignored with caution**, but it's essential that rules relating to coding style and inline code commenting / doc-blocks remain.

## Next Steps

Once your test(s) are written and successfully run locally, submit your branch via a new **Pull Request**.

It's best to create a Pull Request in draft mode, as this will trigger all tests to run as a GitHub Action, allowing you to
double-check all tests pass.

If the PR tests fail, you can make code changes as necessary, pushing to the same branch.  This will trigger the tests to run again.

If the PR tests pass, you can publish the PR, assigning some reviewers.
