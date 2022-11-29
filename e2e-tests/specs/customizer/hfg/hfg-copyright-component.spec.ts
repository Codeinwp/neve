import { test, expect } from '@playwright/test';

test('Checks the copyright in front-end', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.hfg_footer')).toHaveText(
		'Neve | Powered by WordPress'
	);
});
