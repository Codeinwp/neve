import { test, expect, Page } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

test.describe('Palette Switch component', function () {
	let page: Page;
	let customizerData;
	let headerElements, count;

	test.beforeAll(async ({ browser, request, baseURL }) => {
		page = await browser.newPage();
		customizerData = await loadData(
			'./fixtures/customizer/hfg/hfg-palette-switch-component.json'
		);
		await setCustomizeSettings('hfgPalletSwitch', customizerData, {
			request,
			baseURL,
		});

		headerElements = await page.locator(
			'.site-title, .menu-item, .palette-icon-wrapper'
		);
		count = await headerElements.count();
	});

	test('Changes the color palette by clicking', async () => {
		await page.goto('/?test_name=hfgPalletSwitch');
		for (let i = 0; i < count; i++) {
			await expect(headerElements.nth(i)).toHaveCSS(
				'color',
				'rgb(39, 38, 38)'
			);
		}

		await page.locator('.icon > svg > path').click();

		for (let i = 0; i < count; i++) {
			await expect(headerElements.nth(i)).toHaveCSS(
				'color',
				'rgb(255, 255, 255)'
			);
		}
	});

	test('Automatically changes the color palette when dark is default', async () => {
		await page.goto('/?test_name=hfgPalletSwitch');
		await page.evaluate(
			`window.localStorage.setItem('neve_user_theme', 'dark')`
		);
		for (let i = 0; i < count; i++) {
			await expect(headerElements.nth(i)).toHaveCSS(
				'color',
				'rgb(255, 255, 255)'
			);
		}
	});

	test('Automatically changes the color palette when light is default', async () => {
		await page.goto('/?test_name=hfgPalletSwitch');
		await page.evaluate(
			`window.localStorage.setItem('neve_user_theme', 'light')`
		);
		await page.reload();
		for (let i = 0; i < count; i++) {
			await expect(headerElements.nth(i)).toHaveCSS(
				'color',
				'rgb(39, 38, 38)'
			);
		}
	});

	test('Removes color palette from website', async ({
		request,
		baseURL,
	}) => {
		const hfgData = JSON.parse(customizerData);
		hfgData.hfg_header_layout_v2 =
			'{"desktop":{"top":{"left":[],"c-left":[],"center":[],"c-right":[],"right":[{"id":"header_search_responsive"}]},"main":{"left":[{"id":"logo"}],"c-left":[],"center":[],"c-right":[],"right":[{"id":"primary-menu"}]},"bottom":{"left":[],"c-left":[],"center":[],"c-right":[],"right":[]}},"mobile":{"top":{"left":[],"c-left":[],"center":[],"c-right":[],"right":[]},"main":{"left":[{"id":"logo"}],"c-left":[],"center":[],"c-right":[],"right":[{"id":"nav-icon"}]},"bottom":{"left":[],"c-left":[],"center":[],"c-right":[],"right":[]},"sidebar":[{"id":"primary-menu"}]}}';
		await setCustomizeSettings(
			'hfgNoPalette',
			JSON.stringify(hfgData),
			{
				request,
				baseURL,
			}
		);
		await page.goto('/test_name=hfgNoPalette');
		await page.reload();
		await expect(
			await page
				.locator('.builder-item--header_palette_switch')
				.count()
		).toEqual(0);
	});
});

