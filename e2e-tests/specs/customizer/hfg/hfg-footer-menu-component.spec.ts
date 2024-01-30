import { test, expect, Page, Locator } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/footer-menu-setup.json';

test.describe('Footer Menu component', function () {
	let page: Page;
	let footerElements: Locator, count: number;

	test.beforeAll(async ({ browser, request, baseURL }) => {
		page = await browser.newPage();
		await setCustomizeSettings('hfgFooterMenu', data, {
			request,
			baseURL,
		});

		footerElements = await page.locator(
			'.site-title, .menu-item, .palette-icon-wrapper'
		);
		count = await footerElements.count();
	});

	test('Check Footer Menu Style and Hover', async () => {
		await page.goto('/?test_name=hfgFooterMenu');

		await expect(page.locator('.footer--row[data-show-on="desktop"] .nav-menu-footer')).toHaveClass(/style\-border\-bottom/);

		const footerMenuItems = await page
			.locator('.footer--row[data-show-on="desktop"] .footer-menu.nav-ul li .wrap a')
			.all();

		for (const item of footerMenuItems) {
			await expect(item).toHaveCSS('color', 'rgb(211, 166, 0)'); // #d3a600
			await item.hover();
			await expect(item).toHaveCSS('color', 'rgb(58, 136, 184)'); // #3a88b8
		}
	});
});
