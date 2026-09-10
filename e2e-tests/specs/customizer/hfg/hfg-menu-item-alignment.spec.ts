import { test, expect } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/menu-item-alignment-setup.json';

test.describe('Menu item alignment', function () {
	test.use({ viewport: { width: 600, height: 900 } });

	test.beforeAll(async ({ request, baseURL }) => {
		await setCustomizeSettings('hfgMenuItemAlignment', data, {
			request,
			baseURL,
		});
	});

	test('Checks up item alignment', async ({ page }) => {
		await page.goto('/?test_data=hfgMenuItemAlignment');
		await page.locator('.mobile-left .navbar-toggle').click();
		await expect(
			page.locator(
				'#nv-primary-navigation-mobile-sidebar .menu-item-title-wrap:has-text("About The Tests")'
			)
		).toHaveCSS('text-align', 'left');

		// Located by label: menu item IDs are DB auto-increments and differ
		// between a fresh CI import and a long-lived local database.
		await page
			.locator(
				'#nv-primary-navigation-mobile-sidebar > li.menu-item-has-children'
			)
			.filter({ hasText: 'Level 1' })
			.locator('.caret-wrap')
			.first()
			.click();
		await expect(
			page.locator(
				'#nv-primary-navigation-mobile-sidebar .menu-item-title-wrap:has-text("Level 2")'
			)
		).toHaveCSS('text-align', 'left');
	});
});
