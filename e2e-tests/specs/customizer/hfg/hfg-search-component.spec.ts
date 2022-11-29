import { test, expect } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

test.describe('Search Icon Component', async () => {
	/**
	 * Declare local variables.
	 */
	let customizerData;

	const runActions = async (closeBtn, classToHave, page) => {
		const searchField = await page.locator('.nv-nav-search');
		const searchIcon = await page.locator(
			'.builder-item--header_search_responsive .menu-item-nav-search'
		);

		await expect(searchField).toBeHidden();
		await expect(searchIcon).toHaveClass(new RegExp(`${classToHave}`));
		await searchIcon.click();
		await expect(searchIcon).toHaveClass(/active/);
		await expect(searchField).toBeVisible();
		await closeBtn.click();
		await expect(searchField).toBeHidden();
	};

	/**
	 * Define constants used across all tests.
	 */
	test.beforeAll(async () => {
		customizerData = await loadData(
			'./fixtures/customizer/hfg/search-component-setup.json'
		);
	});

	test('Canvas Search Works on Front End.', async ({
		page,
		request,
		baseURL,
	}) => {
		const targetClose = page.locator('.close-responsive-search');
		const canvasData = JSON.parse(customizerData);
		canvasData.header_search_responsive_open_type = 'canvas';

		await setCustomizeSettings(
			'hfgSearchCanvas',
			JSON.stringify(canvasData),
			{
				request,
				baseURL,
			}
		);
		await page.goto('/?test_name=hfgSearchCanvas');
		await runActions(targetClose, 'canvas', page);
	});

	test('Minimal Search Works on Front End.', async ({
		page,
		request,
		baseURL,
	}) => {
		const targetClose = page.locator('.nav-clickaway-overlay');
		const minimalData = JSON.parse(customizerData);
		minimalData.header_search_responsive_open_type = 'minimal';

		await setCustomizeSettings(
			'hfgSearchMinimal',
			JSON.stringify(minimalData),
			{
				request,
				baseURL,
			}
		);
		await page.goto('/?test_name=hfgSearchMinimal');
		await runActions(targetClose, 'minimal', page);
	});

	test('Floating Search Works on Front End', async ({
		page,
		request,
		baseURL,
	}) => {
		const targetClose = page.locator('.close-responsive-search');
		const floatingData = JSON.parse(customizerData);
		floatingData.header_search_responsive_open_type = 'floating';

		await setCustomizeSettings(
			'hfgSearchFloating',
			JSON.stringify(floatingData),
			{
				request,
				baseURL,
			}
		);
		await page.goto('/?test_name=hfgSearchFloating');
		await runActions(targetClose, 'floating', page);
	});
});
