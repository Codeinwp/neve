import { test, expect, Page } from '@playwright/test';
import { setCustomizeSettings, testForViewport } from '../../../utils';
import data from '../../../fixtures/customizer/layout/single-post-settings.json';

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
});
