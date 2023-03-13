# Testing Guide

This document describes how to:
- create and run tests for your development work,
- ensure code meets PHP and WordPress Coding Standards, for best practices and security,
- ensure code passes static analysis, to catch potential errors that tests might miss

If you're new to creating and running tests, this guide will walk you through how to do this.

For those more experienced with creating and running tests, our tests are written in PHP using [Playwright](https://playwright.dev/)
and [PHPUnit](https://phpunit.de/).

A PHPUnit guide for WordPress can be found [here](https://make.wordpress.org/core/handbook/testing/automated-testing/phpunit/).

## Prerequisites

If you haven't yet set up your local development environment with this Plugin repository installed, refer to the [Setup Guide](SETUP.md).

If you haven't yet created a branch and made any code changes to the Plugin or Theme, refer to the [Development Guide](DEVELOPMENT.md)

## Write (or modify) a test

If your work creates new functionality, write a test.

If your work fixes existing functionality, check if a test exists. Either update that test, or create a new test if one doesn't exist.

Tests are written in PHP using [Playwright](https://playwright.dev/) and [PHPUnit](https://phpunit.de/).

## Types of Test

There are different types of tests that can be written:
- Acceptance Tests: Test as a non-technical user in the web browser.
- Functional Tests: Test the framework (WordPress).
- Integration Tests: Test code modules in the context of a WordPress web site.
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
These differ slightly from WordPress' Coding Standards, to ensure that writing tests isn't a laborious task, whilst maintaing consistency
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
- Typehinting variables and return types declared in DocBlocks are correctly cast
- Any unused functions are detected
- Unnecessary checks / code is highlighted for possible removal
- Conditions that do not evaluate can be fixed/removed as necessary

In the Plugin's or Theme's directory, run the following command to run PHPStan:

```bash
composer run phpstan
```

Any errors should be corrected by making applicable code changes.

False positives [can be excluded by configuring](https://phpstan.org/user-guide/ignoring-errors) the `phpstan.neon` file.

**Rules can be ignored with caution**, but it's essential that rules relating to coding style and inline code commenting / docblocks remain.

## Next Steps

Once your test(s) are written and successfully run locally, submit your branch via a new [Pull Request](https://github.com/n7studios/media-library-organizer/compare).

It's best to create a Pull Request in draft mode, as this will trigger all tests to run as a GitHub Action, allowing you to
double check all tests pass.

If the PR tests fail, you can make code changes as necessary, pushing to the same branch.  This will trigger the tests to run again.

If the PR tests pass, you can publish the PR, assigning some reviewers.
