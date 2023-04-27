import { test, expect, Page } from '@playwright/test';
import { setCustomizeSettings, testForViewport } from '../../../utils';
import data from '../../../fixtures/customizer/layout/single-post-settings.json';

const testGlobalSettings = async (page: Page) => {
	await testForViewport(
		page,
		'.neve-main',
		{ width: 1536, height: 960 },
		{
			cssProperties: [
				{ property: 'margin-top', value: '100px' },
				{ property: 'margin-bottom', value: '100px' },
			],
		}
	);

	await testForViewport(
		page,
		'.neve-main',
		{ width: 768, height: 1024 },
		{
			cssProperties: [
				{ property: 'margin-top', value: '60px' },
				{ property: 'margin-bottom', value: '60px' },
			],
		}
	);

	await testForViewport(
		page,
		'.neve-main',
		{ width: 375, height: 812 },
		{
			cssProperties: [
				{ property: 'margin-top', value: '-30px' },
				{ property: 'margin-bottom', value: '30px' },
			],
		}
	);
};

const testPostSettings = async (page: Page) => {
	await testForViewport(
		page,
		'.neve-main',
		{ width: 1536, height: 960 },
		{
			cssProperties: [
				{ property: 'margin-top', value: '30px' },
				{ property: 'margin-bottom', value: '40px' },
			],
		}
	);

	await testForViewport(
		page,
		'.neve-main',
		{ width: 768, height: 1024 },
		{
			cssProperties: [
				{ property: 'margin-top', value: '90px' },
				{ property: 'margin-bottom', value: '100px' },
			],
		}
	);

	await testForViewport(
		page,
		'.neve-main',
		{ width: 375, height: 812 },
		{
			cssProperties: [
				{ property: 'margin-top', value: '80px' },
				{ property: 'margin-bottom', value: '90px' },
			],
		}
	);
};

test.describe('Single Post Check', function () {
	test('All page elements are hidden.', async ({
		page,
		request,
		baseURL,
	}) => {
		await setCustomizeSettings('layoutHiddenElements', data.hidden, {
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
		page,
		request,
		baseURL,
	}) => {
		await setCustomizeSettings('layoutElementsReordered', data.enabled, {
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

	test('Header Cover', async ({ page, request, baseURL }) => {
		await setCustomizeSettings('layoutHeaderCover', data.cover, {
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

	test('Content Vertical Spacing', async ({ page, request, baseURL }) => {
		await test.step('Global Content Vertical Spacing', async () => {
			await setCustomizeSettings(
				'global-vspacing',
				data.vspacing_global,
				{
					request,
					baseURL,
				}
			);
			const locations = [
				'/hello-world/?test_name=global-vspacing',
				'/page-a/?test_name=global-vspacing',
			];
			for (const url of locations) {
				await page.goto(url);
				await testGlobalSettings(page);
			}
		});

		await test.step('Post Content Vertical Spacing', async () => {
			await setCustomizeSettings('post-vspacing', data.vspacing_post, {
				request,
				baseURL,
			});
			await page.goto('/hello-world/?test_name=post-vspacing');

			await testPostSettings(page);

			await page.goto('/page-a/?test_name=post-vspacing');
			await testGlobalSettings(page);
		});

		await test.step('Page Content Vertical Spacing', async () => {
			await setCustomizeSettings('page-vspacing', data.vspacing_page, {
				request,
				baseURL,
			});
			await page.goto('/page-a/?test_name=page-vspacing');

			await testForViewport(
				page,
				'.neve-main',
				{ width: 1536, height: 960 },
				{
					cssProperties: [
						{ property: 'margin-top', value: '-15px' },
						{ property: 'margin-bottom', value: '-20px' },
					],
				}
			);

			await testForViewport(
				page,
				'.neve-main',
				{ width: 768, height: 1024 },
				{
					cssProperties: [
						{ property: 'margin-top', value: '-20px' },
						{ property: 'margin-bottom', value: '-25px' },
					],
				}
			);

			await testForViewport(
				page,
				'.neve-main',
				{ width: 375, height: 812 },
				{
					cssProperties: [
						{ property: 'margin-top', value: '-5px' },
						{ property: 'margin-bottom', value: '-10px' },
					],
				}
			);

			await page.goto('/hello-world/?test_name=post-vspacing');

			await testPostSettings(page);
		});
	});
});
