import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	reporter: process.env.CI ? 'github' : 'list',
	forbidOnly: !!process.env.CI,
	workers: process.env.CI ? 6 : undefined,
	retries: 0,
	timeout: parseInt(process.env.TIMEOUT || '', 10) || 100_000, // Defaults to 100 seconds.
	fullyParallel: true,
	projects: [
		// Setup project
		{ name: 'setup', testMatch: /.*\.setup\.ts/ },

		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome'],
				// Use prepared auth state.
				storageState: 'playwright/.auth/user.json',
			},
			dependencies: ['setup'],
		},
	],
	use: {
		baseURL: process.env.baseURL || 'http://localhost:8080',
		headless: true,
		ignoreHTTPSErrors: true,
		trace: 'retain-on-failure',
	},
});
