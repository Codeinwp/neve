import { defineConfig, devices } from '@playwright/test';

/**
 * Config for the accessibility-ready acceptance suite (specs/a11y-ready).
 *
 * Separate from playwright.config.ts on purpose:
 * - No auth setup dependency — every test runs logged OUT, because the admin
 *   bar changes the DOM (extra landmarks, IDs and tab stops) and the
 *   WordPress.org review is performed logged out.
 * - Runs against any environment via the baseURL env var.
 *
 * These specs encode the accessibility-ready acceptance criteria from
 * neve-pro-addon/a11y.md. Most of them FAIL until remediation lands —
 * that is by design; fix until green.
 */
export default defineConfig({
	testDir: './specs/a11y-ready',
	reporter: process.env.CI ? 'github' : 'list',
	forbidOnly: !!process.env.CI,
	workers: process.env.CI ? 6 : undefined,
	retries: 0,
	timeout: parseInt(process.env.TIMEOUT || '', 10) || 60_000,
	fullyParallel: true,
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
			},
		},
	],
	use: {
		baseURL: process.env.baseURL || 'http://localhost:8080',
		headless: true,
		ignoreHTTPSErrors: true,
		trace: 'retain-on-failure',
	},
});
