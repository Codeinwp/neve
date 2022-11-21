import { test, expect } from '@playwright/test';

export const checkCopyright = () => {
	test('Checks the copyright in front-end', async ({page}) => {
		await page.goto('/');
		await page.reload();
		await expect(
			page.locator('.hfg_footer')
		).toHaveText('Neve | Powered by WordPress');
	});
};
