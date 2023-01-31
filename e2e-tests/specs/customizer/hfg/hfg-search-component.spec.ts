import { test, expect, Locator, Page } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/search-component-setup.json';

test.describe('Search Icon Component', async () => {
	const runActions = async (
		closeBtn: Locator,
		classToHave: string,
		page: Page
	) => {
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

	test('Canvas Search Works on Front End.', async ({
		page,
		request,
		baseURL,
	}) => {
		const canvasData = Object.assign({}, data);
		// @ts-ignore
		canvasData.header_search_responsive_open_type = 'canvas';

		const targetClose = page.locator('.close-responsive-search');

		await setCustomizeSettings('hfgSearchCanvas', canvasData, {
			request,
			baseURL,
		});
		await page.goto('/?test_name=hfgSearchCanvas');
		await runActions(targetClose, 'canvas', page);
	});

	test('Minimal Search Works on Front End.', async ({
		page,
		request,
		baseURL,
	}) => {
		const targetClose = page.locator('.nav-clickaway-overlay');
		const minimalData = Object.assign({}, data);
		// @ts-ignore
		minimalData.header_search_responsive_open_type = 'minimal';

		await setCustomizeSettings('hfgSearchMinimal', minimalData, {
			request,
			baseURL,
		});
		await page.goto('/?test_name=hfgSearchMinimal');
		await runActions(targetClose, 'minimal', page);
	});

	test('Floating Search Works on Front End', async ({
		page,
		request,
		baseURL,
	}) => {
		const targetClose = page.locator('.close-responsive-search');
		const floatingData = Object.assign({}, data);
		// @ts-ignore
		floatingData.header_search_responsive_open_type = 'floating';

		await setCustomizeSettings('hfgSearchFloating', floatingData, {
			request,
			baseURL,
		});
		await page.goto('/?test_name=hfgSearchFloating');
		await runActions(targetClose, 'floating', page);
	});
});
