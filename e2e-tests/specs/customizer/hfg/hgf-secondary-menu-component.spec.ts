import { test, expect } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import secondaryMenuSetup from '../../../fixtures/customizer/hfg/hfg-secondary-menu-component.json';

test.describe('Secondary Nav', async () => {
	test('Only Secondary Nav', async ({ page, request, baseURL }) => {
		await setCustomizeSettings('hfgSearchFormIcon', secondaryMenuSetup, {
			request,
			baseURL,
		});
		await page.goto('/?test_name=hfgSecondaryNav');

		await page.setViewportSize({ width: 375, height: 812 }); // Mobile Mode.

		await page.getByRole('button', { name: 'Navigation Menu' }).click();

		await expect(
			page.getByRole('link', { name: 'Sample Page' })
		).toBeVisible(); // Secondary_Nav_Walker enqueues the necessary JS to make the menu work.
	});
});
