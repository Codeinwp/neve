import { test, expect } from '@playwright/test';

test('Checks the copyright in front-end', async ({ page }) => {
	await page.goto('/');
	// Check that the text is present for the Desktop footer
	await expect(
		page.locator('.hfg_footer .footer--row[data-show-on="desktop"]')
	).toHaveText('Neve | Powered by WordPress');
	// Check that the text is also present for the Mobile footer
	await expect(
		page.locator('.hfg_footer .footer--row[data-show-on="mobile"]')
	).toHaveText('Neve | Powered by WordPress');
});
