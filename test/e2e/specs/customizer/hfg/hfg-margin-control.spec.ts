import { test, expect } from '@playwright/test';

export const checkPrimaryMenuMargin = () => {
	test.describe('Header Builder Margin Control', function () {
		test('Sets up Margin for the Primary Menu Component', async ({
			page,
		}) => {
			await page.goto('/');
			await page.reload();
			const menu = await page.locator(
				'.header--row[data-show-on="desktop"] .builder-item--primary-menu'
			);
			await expect(menu).toBeVisible();
			await expect(menu).toHaveCSS('margin-top', '3px');
			await expect(menu).toHaveCSS('margin-bottom', '-1px');
		});
	});
};
