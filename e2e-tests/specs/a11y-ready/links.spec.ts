import { test, expect } from '@playwright/test';
import { collectAccessibleNames, getPermalink } from './a11y-utils';

/**
 * Criterion 7: Underlined Links in Text — a11y.md §5.6.
 * Criterion 8: No Ambiguous Link Text — a11y.md §5.7.
 *
 * Review failures: no distinct hover state anywhere (nv-secondary-accent
 * defaults to the same color as nv-primary-accent), pagination links not
 * underlined and with ambiguous "2" names, featured-image links carrying a
 * title attribute that duplicates the announcement.
 */

test('inline links in post content are underlined', async ({
	page,
	request,
}) => {
	const url = await getPermalink(request, 'posts', 'a11y-comment-test');
	await page.goto(url);
	const link = page.locator('.entry-content p a').first();
	await expect(
		link,
		'fixture post must contain an inline link'
	).toBeVisible();
	const decoration = await link.evaluate(
		(el) => getComputedStyle(el).textDecorationLine
	);
	expect(decoration, 'content links must be underlined').toContain(
		'underline'
	);
});

test('footer copyright links are underlined (WCAG 1.4.1)', async ({ page }) => {
	await page.goto('/');
	// Free theme renders the credit as .builder-item.cr; Pro replaces it
	// with the footer_copyright component.
	const links = page.locator(
		'.builder-item--footer_copyright a, .builder-item.cr a'
	);
	expect(
		await links.count(),
		'footer copyright must contain a link (Neve / WordPress credits)'
	).toBeGreaterThan(0);
	const link = links.first();
	const decoration = await link.evaluate(
		(el) => getComputedStyle(el).textDecorationLine
	);
	expect(
		decoration,
		'copyright links sit inside a sentence and must not rely on color alone'
	).toContain('underline');
});

test('content links change on hover with a non-color-only distinction', async ({
	page,
	request,
}) => {
	// Requirement: "Underlines should disappear on hover or there should be
	// some other visual change on hover that does not rely on color alone."
	const url = await getPermalink(request, 'posts', 'a11y-comment-test');
	await page.goto(url);
	const link = page.locator('.entry-content p a').first();

	const grab = () =>
		link.evaluate((el) => {
			const cs = getComputedStyle(el);
			return {
				textDecorationLine: cs.textDecorationLine,
				backgroundColor: cs.backgroundColor,
				borderBottomStyle: cs.borderBottomStyle,
				outlineStyle: cs.outlineStyle,
			};
		});

	const before = await grab();
	await link.hover();
	const after = await grab();

	const nonColorChange =
		before.textDecorationLine !== after.textDecorationLine ||
		before.backgroundColor !== after.backgroundColor ||
		before.borderBottomStyle !== after.borderBottomStyle ||
		before.outlineStyle !== after.outlineStyle;
	expect(
		nonColorChange,
		`hover must produce a visible non-color-only change; computed style did not change ` +
			`(before/after: ${JSON.stringify(before)})`
	).toBe(true);
});

test('pagination links have unambiguous accessible names and a hover/focus style', async ({
	page,
}) => {
	// Fixture sets posts_per_page=3 so the blog paginates.
	await page.goto('/');
	const pagination = page.locator('.page-numbers');
	test.skip(
		(await pagination.count()) === 0,
		'no pagination rendered — check posts_per_page fixture'
	);

	const names = await collectAccessibleNames(
		page,
		'a.page-numbers:not(.next):not(.prev)'
	);
	for (const name of names) {
		expect(
			/page/i.test(name),
			`pagination link name must convey "page" context, got "${name}" ` +
				'(review: two links named "2" go to different URLs)'
		).toBe(true);
	}

	const link = page.locator('a.page-numbers').first();
	const before = await link.evaluate((el) => {
		const cs = getComputedStyle(el);
		return (
			cs.textDecorationLine + '|' + cs.backgroundColor + '|' + cs.color
		);
	});
	await link.hover();
	const after = await link.evaluate((el) => {
		const cs = getComputedStyle(el);
		return (
			cs.textDecorationLine + '|' + cs.backgroundColor + '|' + cs.color
		);
	});
	expect(
		after !== before,
		'pagination links must have a visible hover state'
	).toBe(true);
});

test('featured-image links do not duplicate their announcement via title attributes', async ({
	page,
}) => {
	// Review: image link has title text causing NVDA to read the post title
	// twice. Source: inc/views/template_parts.php:322-326.
	await page.goto('/');
	const titled = await page.$$eval(
		'.nv-post-thumbnail-wrap a[title], a[rel=bookmark][title]',
		(els) => els.map((el) => el.getAttribute('title') || '')
	);
	expect(
		titled,
		`thumbnail links must not carry a title attribute: ${JSON.stringify(
			titled
		)}`
	).toHaveLength(0);
});

test('post thumbnail links have an accessible name matching their destination', async ({
	page,
}) => {
	await page.goto('/');
	const articles = page.locator('article');
	const count = await articles.count();
	test.skip(count === 0, 'no posts rendered on the blog page');

	for (let i = 0; i < Math.min(count, 3); i++) {
		const article = articles.nth(i);
		const thumbLink = article.locator('.nv-post-thumbnail-wrap a').first();
		if ((await thumbLink.count()) === 0) continue;
		const title = (
			await article.locator('.entry-title, h2').first().textContent()
		)?.trim();
		const accName = await thumbLink.evaluate((el) => {
			const label = el.getAttribute('aria-label');
			if (label) return label.trim();
			const img = el.querySelector('img');
			return (img?.getAttribute('alt') || el.textContent || '').trim();
		});
		expect(
			accName,
			`image link name must be the destination (post title "${title}"), got "${accName}"`
		).toBe(title);
	}
});
