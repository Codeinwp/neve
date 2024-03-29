import { test, expect, Page } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/footer-mobile-setup.json';

test.describe('Different Footer for Mobile vs Desktop', function () {
	test.beforeAll(async ({ browser, request, baseURL }) => {
		await browser.newPage();
		await setCustomizeSettings('hfgFooterMobile', data, {
			request,
			baseURL,
		});
	});

	test('Check Desktop Footer', async ({ page }) => {
		await page.goto('/?test_name=hfgFooterMobile');

		await expect(
			page.locator('.hfg_footer .footer--row[data-show-on="desktop"]')
		).toHaveText('Neve | Powered by WordPress');

		await expect(
			page.locator(
				'.hfg_footer .footer--row[data-show-on="desktop"] .nav-menu-footer'
			)
		).toHaveCount(0);

		await expect(page.locator('.hfg_footer .nav-menu-footer')).toBeHidden();
	});

	test('Check Mobile Footer', async ({ page, browser }) => {
		const context = await browser.newContext({
			viewport: { width: 600, height: 900 },
		});
		page = await context.newPage();
		await page.goto('/?test_name=hfgFooterMobile');

		await expect(
			page.locator(
				'.hfg_footer .footer--row[data-show-on="mobile"] .nav-menu-footer'
			)
		).toHaveCount(1);

		await expect(
			page.locator('.hfg_footer .nav-menu-footer')
		).toBeVisible();
	});

	test('Check IDs are unique', async ({ page }) => {
		await page.goto('/?test_name=hfgFooterMobile');

		await expect(page.locator('#cb-row--footer-bottom')).toHaveCount(0);
		await expect(
			page.locator('#cb-row--footer-desktop-bottom')
		).toHaveCount(1);
		await expect(page.locator('#cb-row--footer-mobile-bottom')).toHaveCount(
			1
		);
	});
});
