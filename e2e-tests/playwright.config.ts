import { defineConfig, devices } from '@playwright/test';

// Plain `|| fallback` would discard an explicit 0.
const envInt = (name: string, fallback: number) => {
	const parsed = parseInt(process.env[name] || '', 10);
	return Number.isNaN(parsed) ? fallback : parsed;
};

export default defineConfig({
	reporter: process.env.CI ? 'github' : 'list',
	forbidOnly: !!process.env.CI,
	// Same values locally and in CI, so a race reproduces in both.
	workers: envInt('PW_WORKERS', 2),
	retries: envInt('PW_RETRIES', 2),
	timeout: envInt('TIMEOUT', 150_000), // Defaults to 100 seconds.
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
		actionTimeout: 20_000,
		navigationTimeout: 45_000,
	},
});
