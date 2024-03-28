import { test, expect } from '@playwright/test';

test.describe('Survey', () => {
	test('NPS survey loading in dashboard', async ({ page }) => {
		const requestPromise = page.waitForRequest(/survey_deps/);
		await page.goto('wp-admin/admin.php?page=neve-welcome');

		const request = await requestPromise;
		expect(request).not.toBeNull();
		expect((await request.response())?.status()).toBe(200);
	});
});
