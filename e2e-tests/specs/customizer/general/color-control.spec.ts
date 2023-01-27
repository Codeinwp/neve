import { test, expect } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/general/color-control-setup.json';

test.describe('Color Control', () => {
	test.beforeAll(async ({ request, baseURL }) => {
		await setCustomizeSettings('colorControl', data, {
			request,
			baseURL,
		});
	});

	test('Test Color Control - Front End', async ({ page }) => {
		page.goto('/?test_name=colorControl');
		await expect(
			page.locator('.hide-on-mobile .header-main-inner')
		).toHaveCSS('color', 'rgb(253, 143, 106)');
	});
});
