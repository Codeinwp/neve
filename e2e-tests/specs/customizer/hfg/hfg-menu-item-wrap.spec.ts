import { test, expect } from '@playwright/test';

test.describe('Menu item alignment', function () {
	test.use({ viewport: { width: 600, height: 900 } });

	test('Checks mobile menu submenu item wrap', async ({ page }) => {
		await page.goto('/');
		await page.getByRole('button', { name: 'Navigation Menu' }).click();
		await page
			.getByRole('button', { name: 'Toggle About The Tests' })
			.click();

		const firstLevelItem = page
			.locator('#nv-primary-navigation-sidebar')
			.getByRole('link', {
				name: 'Page Markup And Formatting',
			});
		await firstLevelItem.isVisible();
		await expect(firstLevelItem).toHaveCSS('white-space', 'normal');

		await page.getByRole('button', { name: 'Toggle Level 1' }).click();

		await page.getByRole('button', { name: 'Toggle Level 2' }).click();

		const secondLevelItem = page
			.locator('#nv-primary-navigation-sidebar')
			.getByRole('link', {
				name: 'Level 3b',
			});
	});
});
