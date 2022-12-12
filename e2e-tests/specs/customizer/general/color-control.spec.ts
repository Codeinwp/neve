import { test, expect } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

test.describe('Color Control', () => {
	test.beforeAll(async ({ request, baseURL }) => {
		await loadData(
			'./fixtures/customizer/general/color-control-setup.json'
		).then(async (data) => {
			await setCustomizeSettings('colorControl', data, {
				request,
				baseURL,
			});
		});
	});

	test('Test Color Control - Front End', async ({ page }) => {
		page.goto('/?test_name=colorControl');
		await expect(
			page.locator('.hide-on-mobile .header-main-inner')
		).toHaveCSS('color', 'rgb(253, 143, 106)');
	});
});
