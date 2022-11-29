import { test, expect } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

let customizerData;

test.beforeAll(async () => {
	customizerData = await loadData(
		'./fixtures/customizer/layout/blog-archive-setting-setup.json'
	);
});

test.describe('Blog/Archive 1 / Default Layout', () => {
	test.beforeAll(async ({ request, baseURL }) => {
		const data = JSON.parse(customizerData);
		await setCustomizeSettings(
			'defaultLayout',
			JSON.stringify(data.archive1),
			{
				request,
				baseURL,
			}
		);
	});

	test('Tests Default Layout (List)', async ({ page }) => {
		await page.goto('/?test_name=defaultLayout');
		const posts = await page.locator('article.post');

		const elementsCount = await posts.count();
		for (let index = 0; index < elementsCount; index++) {
			const element = await posts.nth(index);
			const postsContent = await element.locator('.content');
			await expect(element).toHaveClass(/layout-default/);
			await expect(postsContent).toHaveCSS('flex-direction', 'column');
		}
	});

	test('Post Content Order', async ({ page }) => {
		await page.goto('/?test_name=defaultLayout');
		const posts = await page.locator('article.post');

		const elementsCount = await posts.count();
		for (let index = 0; index < elementsCount; index++) {
			const excerpt = await posts
				.nth(index)
				.locator('.excerpt-wrap:first-child');
			const metaList = await posts
				.nth(index)
				.locator('.nv-meta-list:last-child');
			await expect(excerpt).toBeVisible();
			await expect(metaList).toBeVisible();
		}
	});

	test('Meta Order', async ({ page }) => {
		await page.goto('/?test_name=defaultLayout');

		const postsNumber = await page.locator('article.post').count();

		await expect(
			await page
				.locator('article.post .nv-meta-list > .date:first-child')
				.count()
		).toEqual(postsNumber);
		await expect(
			await page
				.locator('article.post .nv-meta-list > .author:nth-child(2)')
				.count()
		).toEqual(postsNumber);
		await expect(
			await page
				.locator('article.post .nv-meta-list > .category:last-child')
				.count()
		).toEqual(postsNumber);
	});

	test('No Author Avatar', async ({ page }) => {
		await page.goto('/?test_name=defaultLayout');

		await expect(
			await page.locator('article.post .author .photo').count()
		).toEqual(0);
	});

	test('Excerpt length', async ({ page }) => {
		await page.goto('/?test_name=defaultLayout');
		const excerpts = await page.locator('article.post .excerpt-wrap');
		const elementsCount = await excerpts.count();
		for (let index = 0; index < elementsCount; index++) {
			const postText = (await excerpts.nth(index).innerText()).valueOf();
			const letterNb = postText
				.split(' ')
				.filter((word) => word !== '').length;
			await expect(letterNb).toBeLessThanOrEqual(21);
		}
	});

	test('Thumbnail Shadow', async ({ page }) => {
		await page.goto('/?test_name=defaultLayout');

		const postThumbnails = await page.locator(
			'.nv-post-thumbnail-wrap img'
		);
		const elementsCount = await postThumbnails.count();
		for (let index = 0; index < elementsCount; index++) {
			const element = await postThumbnails.nth(index);
			await expect(element).toHaveCSS(
				'box-shadow',
				'rgba(0, 0, 0, 0.12) 0px 14px 28px 0px, rgba(0, 0, 0, 0.12) 0px 10px 10px 0px'
			);
		}
	});

	test('Pagination Number', async ({ page }) => {
		await page.goto('/?test_name=defaultLayout');
		await expect(await page.locator('.page-numbers').count()).not.toEqual(
			0
		);
	});

	test('Alternative layout', async ({ page, request, baseURL }) => {
		const data = JSON.parse(customizerData);
		data.archive1.neve_blog_list_alternative_layout = true;
		await setCustomizeSettings(
			'alternativeLayout',
			JSON.stringify(data.archive1),
			{
				request,
				baseURL,
			}
		);

		await page.goto('/?test_name=alternativeLayout');
		const posts = await page.locator('article.post');
		const elementsCount = await posts.count();

		for (let index = 0; index < elementsCount; index++) {
			const element = await posts.nth(index);
			const className = await element.evaluate((node) => node.className);
			if (className.includes('has-post-thumbnail')) {
				const thumbnail = await element.locator(
					'.nv-post-thumbnail-wrap'
				);
				if (index % 2 === 0) {
					await expect(thumbnail).toHaveCSS(
						'grid-column',
						'1 / auto'
					);
				} else {
					await expect(thumbnail).toHaveCSS(
						'grid-column',
						'2 / auto'
					);
				}
			}
			await expect(await posts.nth(index)).toHaveClass(
				/layout-alternative/
			);
		}
	});
});

test.describe('Blog/Archive 2 / Grid Layout', () => {
	test.beforeAll(async ({ request, baseURL }) => {
		const data = JSON.parse(customizerData);
		await setCustomizeSettings(
			'gridLayout',
			JSON.stringify(data.archive2),
			{
				request,
				baseURL,
			}
		);
	});

	test('Grid layout', async ({ page }) => {
		await page.goto('/?test_name=gridLayout');
		const posts = await page.locator('article.post');
		const elementsCount = await posts.count();
		for (let index = 0; index < elementsCount; index++) {
			const element = await posts.nth(index);
			await expect(element).toHaveClass(/layout-grid/);
		}
	});

	test('Pagination Infinite', async ({ page }) => {
		await page.goto('/?test_name=gridLayout');
		await expect(await page.locator('ul.page-numbers')).not.toBeVisible();
		await expect(await page.locator('.nv-loader').count()).toEqual(1);
	});

	test('Author Avatar', async ({ page }) => {
		await page.goto('/?test_name=gridLayout');
		const posts = await page.locator('article.post');
		const elementsCount = await posts.count();
		for (let index = 0; index < elementsCount; index++) {
			const element = await posts.nth(index);
			await expect(await element.locator('.photo').count()).toEqual(1);
		}
	});
});

test.describe('Blog/Archive 3 / Covers Layout', () => {
	test.beforeAll(async ({ request, baseURL }) => {
		const data = JSON.parse(customizerData);
		await setCustomizeSettings(
			'coversLayout',
			JSON.stringify(data.archive3),
			{
				request,
				baseURL,
			}
		);
	});

	test('Covers layout', async ({ page }) => {
		await page.goto('/?test_name=coversLayout');
		const posts = await page.locator('article.post');
		const elementsCount = await posts.count();
		for (let index = 0; index < elementsCount; index++) {
			const element = await posts.nth(index);
			await expect(element).toHaveClass(/layout-covers/);

			const thumbnailWrap = await element.locator(
				'.cover-post.nv-post-thumbnail-wrap'
			);
			await expect(thumbnailWrap.count()).not.toEqual(0);
			await expect(thumbnailWrap).toHaveCSS('backgound-image', /.*/);
			await expect(thumbnailWrap).toHaveCSS(
				'box-shadow',
				'rgba(0, 0, 0, 0.12) 0px 14px 28px 0px, rgba(0, 0, 0, 0.12) 0px 10px 10px 0px'
			);
		}
	});

	test('Post Content Order', async ({ page }) => {
		await page.goto('/?test_name=coversLayout');
		const posts = await page.locator('article.post');
		const elementsCount = await posts.count();
		for (let index = 0; index < elementsCount; index++) {
			const element = await posts.nth(index);
			await expect(
				await element.locator('.entry-title:first-child').count()
			).toBeGreaterThan(0);
			await expect(
				await element.locator('.nv-meta-list:last-child').count()
			).toBeGreaterThan(0);
		}
	});

	test('Text Color', async ({ page }) => {
		await page.goto('/?test_name=coversLayout');
		const posts = await page.locator('article.post');
		const elementsCount = await posts.count();
		for (let index = 0; index < elementsCount; index++) {
			const element = await posts.nth(index);
			await expect(await element.locator('.inner')).toHaveCSS(
				'color',
				'rgb(186, 218, 85)'
			);
		}
	});

	test('Masonry', async ({ page, request, baseURL }) => {
		await setCustomizeSettings(
			'masonry',
			JSON.stringify({ neve_enable_masonry: true }),
			{
				request,
				baseURL,
			}
		);

		await page.goto('/?test_name=masonry');
		const posts = await page.locator('article.post');
		const elementsCount = await posts.count();
		for (let index = 0; index < elementsCount; index++) {
			const element = await posts.nth(index);
			await expect(element).toHaveCSS('position', 'absolute');
			await expect(element).toHaveCSS('left', /.*/);
			await expect(element).toHaveCSS('top', /.*/);
		}
	});
});
