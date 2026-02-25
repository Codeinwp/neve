# Agent workflow

## Project Overview

Neve is an open-source WordPress theme. It uses a hybrid PHP/React architecture: traditional WordPress PHP theme code with React-based admin interfaces (dashboard, customizer controls, metabox editor).

## Build Commands

```bash
# Install dependencies
yarn install --frozen-lockfile
COMPOSER=composer-dev.json composer install   # or: yarn run composer:install

# Full production build (all apps + rollup + grunt + translations)
yarn run build

# Build individual apps
yarn run build:dash            # Dashboard React app
yarn run build:customizer      # Customizer controls React app
yarn run build:metabox         # Metabox editor React app
yarn run build:ui-components   # Shared React component library (@neve-wp/components)
yarn run build:rollup          # Frontend vanilla JS (Rollup → modern + legacy bundles)
yarn run build:grunt           # SCSS → CSS compilation

# Watch mode (all apps)
yarn run dev
```

## Linting & Formatting

```bash
# PHP
composer run-script phpcs       # WordPress Coding Standards check
composer run-script format      # Auto-fix PHP style
composer run-script phpstan     # Static analysis (level 6)

# JavaScript/TypeScript (per-app linting)
yarn run lint:global            # Frontend JS (assets/js/src/)
yarn run lint:dash              # Dashboard app
yarn run lint:customizer        # Customizer app
yarn run format:global          # Auto-fix frontend JS
yarn run format:dash            # Auto-fix dashboard JS

# SCSS
yarn run lint:scss
yarn run format:scss
```

## Testing

```bash
# PHP unit tests
./vendor/bin/phpunit
./vendor/bin/phpunit tests/test-neve.php                 # Single test file

# E2E tests (Playwright, requires WordPress environment)
yarn run test:playwright
npx playwright test e2e-tests/specs/some-spec.spec.ts    # Single spec

# Bundle size check
yarn run size
```

## Architecture

### PHP (Backend)

Two PSR-4 autoloaded namespaces:
- **`Neve\*`** → `inc/` — Core theme: customizer, views, compatibility layers, admin
- **`HFG\*`** → `header-footer-grid/` — Header/footer drag-and-drop builder module

Key entry points:
- `functions.php` — Bootstrap, constants (`NEVE_VERSION`, `NEVE_INC_DIR`, etc.)
- `inc/core/core_loader.php` — Main feature factory, loads all theme features
- `header-footer-grid/Main.php` — HFG module entry point

`inc/compatibility/` contains integrations for 20+ plugins (WooCommerce, Elementor, Beaver Builder, WPML, etc.).

### JavaScript/React (Frontend & Admin)

Three separate build systems:
- **Rollup** → `assets/js/src/` → `assets/js/build/{modern,all}/` (frontend vanilla JS with modern/legacy bundles)
- **Webpack** (`@wordpress/scripts`) → `assets/apps/*/src/` → `assets/apps/*/build/` (React admin apps)
- **Grunt** → `assets/scss/` → compiled CSS + RTL variants

React apps in `assets/apps/`:
- `components/` — Shared component library published as `@neve-wp/components` (local file dependency)
- `dashboard/` — Theme settings dashboard
- `customizer-controls/` — WordPress Customizer React UI
- `metabox/` — Post/page metabox editor
- `starter-sites/` — Demo content installer notice

### CSS

SCSS source in `assets/scss/`, compiled via Grunt. Tailwind CSS is used in some apps. RTL stylesheets are auto-generated.

## Sub-Folder Lookup Map

Use this as a fast entry point before deeper grep/search.

| Path | What lives here | Start here when... |
|---|---|---|
| `inc/` | Core theme PHP (`Neve\*`): feature bootstrapping, customizer options, admin, plugin compat, render helpers | You need to change theme behavior in PHP |
| `inc/core/` | Main runtime wiring (feature loading, settings, styles, shared traits) | You are tracing initialization or global feature toggles |
| `inc/customizer/` | Customizer option definitions, defaults, control types, traits | You are adding/changing Customizer settings |
| `inc/views/` | PHP view layer (layouts, partials, inline output, pluggable pieces) | You are editing rendered markup/output structure |
| `inc/compatibility/` | Integrations with plugins (WooCommerce, Elementor, WPML, etc.) | A bug appears only when a plugin is active |
| `header-footer-grid/` | Header/Footer builder module (`HFG\*`): builder components, customizer integration, templates, assets | Work is specific to header/footer builder behavior |
| `header-footer-grid/Core/Components/` | Individual HFG components and utilities | You are modifying one header/footer element |
| `assets/apps/components/` | Shared React UI package (`@neve-wp/components`) consumed by other apps | Multiple apps need the same UI/control update |
| `assets/apps/dashboard/` | Dashboard React app | Theme dashboard/admin UX changes |
| `assets/apps/customizer-controls/` | React controls rendered in WordPress Customizer | Customizer-side React UI/control logic changes |
| `assets/apps/metabox/` | Post/page metabox React app | Metabox UI or save behavior changes |
| `assets/apps/starter-sites/` | Starter-sites notice/installer app | Demo/starter-site flows need updates |
| `assets/js/src/` | Frontend vanilla JS sources (Rollup modern + legacy bundles) | Runtime frontend interactions outside React apps |
| `assets/scss/` | Global/theme SCSS source split by components/elements/compat | Styling changes in frontend theme CSS |
| `assets/customizer/` | Legacy/customizer-specific static CSS/JS | Issue is in older non-React customizer assets |
| `template-parts/` | Reusable template chunks used by core theme templates | You need to adjust a reusable template fragment |
| `views/` | Additional PHP view templates used by theme rendering | You are tracking frontend HTML generation |
| `page-templates/` | Assignable WordPress page templates | You are changing template-level page layouts |
| `woocommerce/` | WooCommerce template overrides | WooCommerce-only frontend markup/styles need changes |
| `tests/` | PHPUnit tests and PHP test helpers | You are adding or updating PHP unit test coverage |
| `tests/php/` | PHP static-analysis stubs (e.g. for Psalm/PHPStan) | You need or are adjusting PHP static-analysis support |
| `e2e-tests/specs/` | Playwright end-to-end specs | Validating editor/admin/frontend behavior end-to-end |
| `stories/` | Storybook stories and local UI playground assets | You need isolated component UI verification |
| `docs/` | Project docs and contributor references | You need implementation conventions or team guidance |
| `grunt/` + `Gruntfile.js` | CSS/asset build pipeline tasks | SCSS output/build-step behavior is wrong |
| `rollup.config.js` | Frontend JS bundling config for `assets/js/src/` | Entry points/output/chunk behavior must change |
| `webpack.config.js` | React app bundling config (`assets/apps/*`) | Build behavior for dashboard/customizer/metabox apps |
