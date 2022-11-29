import { test, expect } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

test.describe('Menu item alignment', function () {
	test.use({ viewport: { width: 600, height: 900 } });

	test.beforeAll(async ({ request, baseURL }) => {
		await loadData(
			'./fixtures/customizer/hfg/menu-item-alignment-setup.json'
		).then(async (data) => {
			await setCustomizeSettings('hfgMenuItemAlignment', data, {
				request,
				baseURL,
			});
		});
	});

	test('Checks up item alignment', async ({ page }) => {
		await page.goto('/?test_data=hfgMenuItemAlignment');
		await page.locator('.mobile-left .navbar-toggle').click();
		await expect(
			page.locator(
				'#nv-primary-navigation-sidebar .menu-item-title-wrap:has-text("About The Tests")'
			)
		).toHaveCSS('text-align', 'left');

		await page
			.locator(
				'#nv-primary-navigation-sidebar > .menu-item-1643 > .wrap > .caret-wrap'
			)
			.click();
		await expect(
			page.locator(
				'#nv-primary-navigation-sidebar .menu-item-title-wrap:has-text("Level 2")'
			)
		).toHaveCSS('text-align', 'left');
	});
});
