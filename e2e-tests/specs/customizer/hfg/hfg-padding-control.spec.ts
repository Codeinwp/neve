import { test, expect } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/padding-control.json';

test.beforeAll(async ({ request, baseURL }) => {
	await setCustomizeSettings('hfgLogoPadding', data, {
		request,
		baseURL,
	});
});

test.describe('Header Builder Padding Control', function () {
	test('Sets up Padding for the Logo Component', async ({ page }) => {
		await page.goto('/?test_name=hfgLogoPadding');
		const logoDesktop = await page.locator(
			'.desktop-left > .builder-item--logo'
		);
		await expect(logoDesktop).toBeVisible();
		await expect(logoDesktop).toHaveCSS('padding-top', '11px');
		await expect(logoDesktop).toHaveCSS('padding-bottom', '9px');
	});
});
