import type { PlaywrightTestConfig } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
	reporter: process.env.CI ? 'github' : 'list',
	forbidOnly: !!process.env.CI,
	workers: process.env.CI ? 6 : undefined,
	retries: process.env.CI ? 2 : 0,
	timeout: parseInt(process.env.TIMEOUT || '', 10) || 100_000, // Defaults to 100 seconds.
	testDir: './specs',
	fullyParallel: true,
	use: {
		baseURL: process.env.baseURL || 'http://localhost:8080',
		headless: true,
		ignoreHTTPSErrors: true,
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
		video: 'on-first-retry',
	},
};

export default config;
