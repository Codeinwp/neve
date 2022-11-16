import { test, expect } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../utils';

test.describe('Header Row Background Control', function () {
	test.beforeAll(async ({ request, baseURL }) => {
		await loadData('./customizer/hfg/data/row-background-setup.json').then(
			async (data) => {
				await setCustomizeSettings(data, { request, baseURL });
			}
		);
	});

	test('Background image control on front end.', async ({ page }) => {
		await page.goto('/');
		const row = await page.locator(
			'.header-main[data-show-on="desktop"] .header--row-inner'
		);
		await expect(row).toBeVisible();
		await expect(row).toHaveCSS('background-attachment', 'fixed');
		const background = await row.evaluate((el) => {
			return window
				.getComputedStyle(el)
				.getPropertyValue('background-image');
		});
		await expect(background.includes('placeholder.com')).toBe(true);
	});
});
