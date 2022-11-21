import { test, expect, Page } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

export const checkSearchComponent = () => {
	test.describe('Search Icon Component', async () => {
		/**
		 * Declare local variables.
		 */
		let page: Page;
		let searchField, searchIcon;
		let customizerData;

		const runActions = async (closeBtn, classToHave) => {
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
		test.beforeAll(async ({ browser }) => {
			page = await browser.newPage();
			await page.goto('/');
			searchField = await page.locator('.nv-nav-search');
			searchIcon = await page.locator(
				'.builder-item--header_search_responsive .menu-item-nav-search'
			);
			customizerData = await loadData(
				'./fixtures/customizer/hfg-setup-main.json'
			);
		});

		test('Canvas Search Works on Front End.', async ({
			request,
			baseURL,
		}) => {
			const targetClose = page.locator('.close-responsive-search');
			await page.reload();
			await runActions(targetClose, 'canvas');
		});

		test('Minimal Search Works on Front End.', async ({
			request,
			baseURL,
		}) => {
			const targetClose = page.locator('.nav-clickaway-overlay');
			const minimalData = JSON.parse(customizerData);

			minimalData.header_search_responsive_open_type = 'minimal';
			await setCustomizeSettings(JSON.stringify(minimalData), {
				request,
				baseURL,
			});
			await page.reload();

			await runActions(targetClose, 'minimal');
		});

		test('Floating Search Works on Front End', async ({
			request,
			baseURL,
		}) => {
			const targetClose = page.locator('.close-responsive-search');
			const floatingData = JSON.parse(customizerData);

			floatingData.header_search_responsive_open_type = 'floating';
			await setCustomizeSettings(JSON.stringify(floatingData), {
				request,
				baseURL,
			});
			await page.reload();

			await runActions(targetClose, 'floating');
		});
	});
};
