import { test, expect, Page } from '@playwright/test';
import { setCustomizeSettings, testForViewport, checkElementsOrder } from '../../../utils';
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
			'nv-thumb-wrap',
		];
		await page.goto(
			'/template-comments/?test_name=layoutElementsReordered'
		);
		await checkElementsOrder(page, '.nv-single-post-wrap', ORDER);
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

	test('Comments', async ({ page, request, baseURL }) => {
		await test.step('Comments section', async () => {
			await setCustomizeSettings(
				'commentsSection',
				data.comments_section,
				{
					request,
					baseURL,
				}
			);
			// Test the default settings.
			await page.goto('/template-comments');
			const commentsTitleDefault = await page.locator('.comments-title');
			const commentsWrapDefault = await page.locator('.nv-comments-wrap');
			await expect(commentsTitleDefault).toHaveText(
				'19 thoughts on “Template: Comments”'
			);
			await expect(commentsWrapDefault).not.toHaveClass('nv-is-boxed');
			await testForViewport(
				page,
				'#comments .nv-comments-wrap',
				{ width: 1536, height: 960 },
				{
					cssProperties: [
						{ property: 'padding', value: '0px' },
						{ property: 'color', value: 'rgb(39, 38, 38)' },
						{
							property: 'background-color',
							value: 'rgba(0, 0, 0, 0)',
						},
					],
				}
			);

			// Test the custom settings.
			await page.goto('/template-comments/?test_name=commentsSection');
			const commentsTitle = await page.locator('.comments-title');
			const commentsWrap = await page.locator('.nv-comments-wrap');
			await expect(commentsTitle).toHaveText(
				'For Template: Comments you have 19 comment(s)'
			);
			await expect(commentsWrap).toHaveClass(/nv-is-boxed/);
			await testForViewport(
				page,
				'.nv-comments-wrap.nv-is-boxed',
				{ width: 1536, height: 960 },
				{
					cssProperties: [
						{ property: 'padding', value: '60px 15px' },
						{ property: 'color', value: 'rgb(255, 255, 255)' },
						{
							property: 'background-color',
							value: 'rgb(39, 130, 171)',
						},
					],
				}
			);
			await testForViewport(
				page,
				'.nv-comments-wrap.nv-is-boxed',
				{ width: 768, height: 1024 },
				{
					cssProperties: [
						{ property: 'padding', value: '60px 10px' },
						{ property: 'color', value: 'rgb(255, 255, 255)' },
						{
							property: 'background-color',
							value: 'rgb(39, 130, 171)',
						},
					],
				}
			);
			await testForViewport(
				page,
				'.nv-comments-wrap.nv-is-boxed',
				{ width: 375, height: 812 },
				{
					cssProperties: [
						{ property: 'padding', value: '40px 15px' },
						{ property: 'color', value: 'rgb(255, 255, 255)' },
						{
							property: 'background-color',
							value: 'rgb(39, 130, 171)',
						},
					],
				}
			);
		});

		await test.step('Comments form', async () => {
			await setCustomizeSettings('formSection', data.comments_form, {
				request,
				baseURL,
			});

			// Test the default settings.
			await page.goto('/template-comments');
			const formTitleDefault = await page.locator('#reply-title');
			const respondFormDefault = await page.locator('#respond');
			const submitButtonDefault = await page.locator('#submit');
			await expect(formTitleDefault).toHaveText(/Leave a Reply/);
			await expect(respondFormDefault).toHaveClass(/nv-is-boxed/);
			await expect(submitButtonDefault).toHaveClass(/button-primary/);
			await expect(submitButtonDefault).toHaveText(/Post Comment/);
			await testForViewport(
				page,
				'#respond',
				{ width: 1536, height: 960 },
				{
					cssProperties: [
						{ property: 'padding', value: '40px' },
						{ property: 'color', value: 'rgb(39, 38, 38)' },
						{
							property: 'background-color',
							value: 'rgb(244, 245, 247)',
						},
					],
				}
			);
			await testForViewport(
				page,
				'#respond',
				{ width: 768, height: 1024 },
				{
					cssProperties: [
						{ property: 'padding', value: '30px' },
						{ property: 'color', value: 'rgb(39, 38, 38)' },
						{
							property: 'background-color',
							value: 'rgb(244, 245, 247)',
						},
					],
				}
			);
			await testForViewport(
				page,
				'#respond',
				{ width: 375, height: 812 },
				{
					cssProperties: [
						{ property: 'padding', value: '20px' },
						{ property: 'color', value: 'rgb(39, 38, 38)' },
						{
							property: 'background-color',
							value: 'rgb(244, 245, 247)',
						},
					],
				}
			);

			await page.goto('/template-comments/?test_name=formSection');
			const formTitle = await page.locator('#reply-title');
			const respondForm = await page.locator('#respond');
			const submitButton = await page.locator('#submit');
			await expect(formTitle).toHaveText(
				/Leave a comment in the box below/
			);
			await expect(respondForm).not.toHaveClass('nv-is-boxed');
			await expect(submitButton).toHaveClass(/button-secondary/);
			await expect(submitButton).toHaveText(/Submit your comment/);
		});
	});

	test('Post Meta', async ({ page, request, baseURL }) => {
		await setCustomizeSettings('metaOrder', data.post_meta, {
			request,
			baseURL,
		});

		await page.goto('/template-comments/?test_name=metaOrder');
		await page.screenshot({ path: 'metaOrder.png' });
		const metaOrder = ['category', 'date', 'comments', 'author'];
		await checkElementsOrder(page, '.nv-meta-list', metaOrder);

		const metaList = await page.locator('.nv-meta-list > *');
		for (let i = 0; i < (await metaList.count()) - 1; i++) {
			const content = await metaList
				.nth(i)
				.evaluate((li) =>
					getComputedStyle(li, ':after').getPropertyValue('content')
				);
			await expect(content).toBe('"***"');
		}

		const authorAvatar = await page.locator('.nv-meta-list .author img');
		await expect(await authorAvatar.count()).toBeGreaterThan(0);
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
