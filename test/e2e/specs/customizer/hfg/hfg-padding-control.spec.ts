import { test, expect } from '@playwright/test';

export const checkLogoPadding = () => {
	test.describe('Header Builder Padding Control', function () {
		test('Sets up Padding for the Logo Component', async ({ page }) => {
			await page.goto('/');
			await page.reload();
			const logoDesktop = await page.locator(
				'.desktop-left > .builder-item--logo'
			);
			await expect(logoDesktop).toBeVisible();
			await expect(logoDesktop).toHaveCSS('padding-top', '11px');
			await expect(logoDesktop).toHaveCSS('padding-bottom', '9px');
		});
	});
};
