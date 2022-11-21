import { test, expect } from '@playwright/test';

export const checkCopyright = () => {
	test('Checks the copyright in front-end', async ({ page }) => {
		await page.reload();
		await expect(
			page.locator('.builder-item--footer_copyright')
		).toHaveText('Neve | Powered by WordPress');
	});
};
