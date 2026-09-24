import { test, expect } from '@playwright/test';
import { collectAccessibleNames, getPermalink } from './a11y-utils';

test.describe('Comment area reflow at 320px', () => {
	test.use({ viewport: { width: 320, height: 800 } });

	test('every Reply link stays inside the viewport', async ({
		page,
		request,
	}) => {
		const url = await getPermalink(request, 'posts', 'a11y-comment-test');
		await page.goto(url);
		const replies = page.locator('.comment-reply-link');
		const count = await replies.count();
		expect(count, 'fixture must render reply links').toBeGreaterThan(0);
		for (let i = 0; i < count; i++) {
			const box = await replies.nth(i).boundingBox();
			expect(
				box && box.x + box.width,
				`reply link ${i} must not extend past the 320px viewport`
			).toBeLessThanOrEqual(321);
		}
	});

	test('nothing in a comment is clipped by the hidden page overflow', async ({
		page,
		request,
	}) => {
		const url = await getPermalink(request, 'posts', 'a11y-comment-test');
		await page.goto(url);
		const offenders = await page.$$eval('.nv-comment-article *', (els) =>
			els
				.filter((el) => {
					const r = el.getBoundingClientRect();
					if (r.right <= window.innerWidth + 1) return false;
					// Content inside a scroll container is reachable — only
					// elements clipped by the PAGE's hidden overflow fail.
					let node = el.parentElement;
					while (
						node &&
						!node.classList.contains('nv-comment-article')
					) {
						const o = getComputedStyle(node).overflowX;
						if (o === 'auto' || o === 'scroll') return false;
						node = node.parentElement;
					}
					return true;
				})
				.map(
					(el) =>
						`${el.tagName.toLowerCase()}.${String(
							el.className
						).slice(0, 40)}`
				)
		);
		expect(
			offenders,
			'comment content must reflow or scroll, never clip:\n' +
				offenders.join('\n')
		).toHaveLength(0);
	});

	test('a table inside a comment scrolls instead of clipping', async ({
		page,
		request,
	}) => {
		const url = await getPermalink(request, 'posts', 'a11y-comment-test');
		await page.goto(url);
		const table = page.locator('.nv-comment-content table').first();
		test.skip(
			(await table.count()) === 0,
			'no table fixture in the comments on this environment'
		);
		const scrollable = await table.evaluate((el) => {
			let node = el.parentElement as HTMLElement | null;
			while (node) {
				const o = getComputedStyle(node).overflowX;
				if (o === 'auto' || o === 'scroll') return true;
				node = node.parentElement;
			}
			return false;
		});
		expect(
			scrollable,
			'wide comment content needs a horizontal scroll container'
		).toBe(true);
	});
});

test('comment links carry unique accessible names', async ({
	page,
	request,
}) => {
	const url = await getPermalink(request, 'posts', 'a11y-comment-test');
	await page.goto(url);

	const names = [
		...(await collectAccessibleNames(page, '.comment-reply-link')),
		...(await collectAccessibleNames(
			page,
			'.nv-comment-header a[href*="#comment"]'
		)),
		...(await collectAccessibleNames(
			page,
			'.meta.category a, .nv-tags-list a'
		)),
	];
	expect(names.length).toBeGreaterThan(0);
	const dupes = names.filter((n, i) => names.indexOf(n) !== i);
	expect(
		[...new Set(dupes)],
		'links with identical names must not point at different destinations'
	).toHaveLength(0);
});
