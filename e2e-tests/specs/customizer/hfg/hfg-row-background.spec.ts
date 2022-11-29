import { test, expect } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

test.beforeAll(async ({ request, baseURL }) => {
	await loadData('./fixtures/customizer/hfg/row-background-setup.json').then(
		async (data) => {
			await setCustomizeSettings('hfgHeaderBackground', data, {
				request,
				baseURL,
			});
		}
	);
});

test.describe('Header Row Background Control', function () {
	test('Background image control on front end.', async ({ page }) => {
		await page.goto('/?test_name=hfgHeaderBackground');
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
