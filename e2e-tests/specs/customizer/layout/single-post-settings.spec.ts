import { test, expect, Page } from '@playwright/test';
import { setCustomizeSettings, loadData } from '../../../utils';

test.describe('Single Post Check', function () {
	/**
	 * Declare local variables.
	 */
	let customizerData;
	let page: Page;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		customizerData = await loadData(
			'./fixtures/customizer/layout/single-post-settings.json'
		);
	});

	test('All page elements are hidden.', async ({ request, baseURL }) => {
		const data = JSON.stringify(JSON.parse(customizerData).hidden);
		await setCustomizeSettings('layoutHiddenElements', data, {
			request,
			baseURL,
		});
		const HIDDEN = [
			'.entry-header',
			'.nv-thumb-wrap',
			'.entry-content',
			'.nv-tags-list',
			'.comments-area',
			'.nv-post-navigation',
		];
		await page.goto('/template-comments/?test_name=layoutHiddenElements');
		for (const className of HIDDEN) {
			await expect(
				page.locator('.nv-single-post-wrap', {
					has: page.locator(className),
				})
			).toHaveCount(0);
		}
	});

	test('All elements enabled and reordered.', async ({
		request,
		baseURL,
	}) => {
		const data = JSON.stringify(JSON.parse(customizerData).enabled);
		await setCustomizeSettings('layoutElementsReordered', data, {
			request,
			baseURL,
		});
		const ORDER = [
			'nv-post-navigation',
			'nv-tags-list',
			'nv-content-wrap',
			'comments-area',
			'entry-header',
			'nv-thumb-wrap',
		];
		await page.goto(
			'/template-comments/?test_name=layoutElementsReordered'
		);
		const postElements = await page.locator('.nv-single-post-wrap > *');
		for (let i = 0; i < (await postElements.count()); i++) {
			await expect(postElements.nth(i)).toHaveClass(
				new RegExp(`${ORDER[i]}`)
			);
		}
	});

	test('Header Cover', async ({ request, baseURL }) => {
		const data = JSON.stringify(JSON.parse(customizerData).cover);
		await setCustomizeSettings('layoutHeaderCover', data, {
			request,
			baseURL,
		});
		const urls = ['/hello-world', '/markup-text-alignment', '/scheduled'];
		for (const url of urls) {
			await page.goto(url + '/?test_name=layoutHeaderCover');
			const overlay = await page.locator('.nv-overlay');
			await expect(overlay).toHaveCSS('height', '505px');
			await expect(overlay).toHaveCSS(
				'background-color',
				'rgb(198, 53, 53)'
			);
			await expect(page.locator('.nv-title-meta-wrap')).toHaveCSS(
				'color',
				'rgb(255, 255, 255)'
			);
		}
	});
});
