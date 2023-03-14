# Development Guide

This document describes the high level workflow used when working on a WordPress Plugin or Theme.

You're free to use your preferred IDE and Git client. We recommend PHPStorm or Visual Studio Code, and GitHub CLI.

## Prerequisites

If you haven't yet set up your local development environment with a WordPress Plugin repository installed, refer to the [Setup Guide](SETUP.md).

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

These packages are included when the Plugin is deployed to wordpress.org

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

If it's a particularly large commit, be sure to include more information in the commit's description.

## Next Steps

Once you've finished your feature or issue, you must write/amend tests for it.  Refer to the [Testing Guide](TESTING.md) for a detailed walkthrough
on how to write a test.
