import { test, expect } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

test.describe('Header Builder Margin Control', function () {
	test.beforeAll(async ({ request, baseURL }) => {
		await loadData(
			'./fixtures/customizer/hfg/margin-control-setup.json'
		).then(async (data) => {
			await setCustomizeSettings('hfgPrimaryMenuMargin', data, {
				request,
				baseURL,
			});
		});
	});

	test('Sets up Margin for the Primary Menu Component', async ({
		page,
	}) => {
		await page.goto('/?test_name=hfgPrimaryMenuMargin');
		const menu = await page.locator(
			'.header--row[data-show-on="desktop"] .builder-item--primary-menu'
		);
		await expect(menu).toBeVisible();
		await expect(menu).toHaveCSS('margin-top', '3px');
		await expect(menu).toHaveCSS('margin-bottom', '-1px');
	});
});
