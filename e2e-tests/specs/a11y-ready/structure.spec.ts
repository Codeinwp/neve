import { test, expect } from '@playwright/test';
import {
	collectAccessibleNames,
	findDuplicateIds,
	getCategoryLink,
	getPermalink,
} from './a11y-utils';

/**
 * Criterion 2: Meaningful Landmark Roles and Names — a11y.md §5.1.
 * Criterion 6: Headings with Meaningful Structure — a11y.md §5.5.
 *
 * Review failures: missing H1 on blog/category/404, duplicated landmarks
 * without unique accessible names (all 8 pages), duplicate id="footer-menu"
 * (neve#4557), unlabelled <nav> row wrapping a role="navigation" div.
 */

type PageDef = { name: string; path: () => Promise<string> | string };

const staticPages: PageDef[] = [
	{ name: 'front page', path: () => '/' },
	{ name: 'search results', path: () => '/?s=fixture' },
	{ name: '404 page', path: () => '/a11y-this-page-does-not-exist/' },
];

for (const def of staticPages) {
	test(`exactly one H1 on the ${def.name}`, async ({ page }) => {
		await page.goto(await def.path());
		const h1s = await page.$$eval('h1', (els) =>
			els.map((el) => (el.textContent || '').trim().substring(0, 60))
		);
		expect(
			h1s,
			`every page needs exactly one H1, got: ${JSON.stringify(h1s)}`
		).toHaveLength(1);
	});
}

test('exactly one H1 on the fixture post', async ({ page, request }) => {
	await page.goto(await getPermalink(request, 'posts', 'a11y-comment-test'));
	const h1Count = await page.locator('h1').count();
	expect(h1Count).toBe(1);
});

test('exactly one H1 on the category archive', async ({ page, request }) => {
	await page.goto(await getCategoryLink(request, 'a11y-cat'));
	const h1s = await page.$$eval('h1', (els) =>
		els.map((el) => (el.textContent || '').trim().substring(0, 60))
	);
	expect(
		h1s,
		'review: "Missing H1" on archives (neve_archive_hide_title defaults to true)'
	).toHaveLength(1);
});

const duplicateIdPages: PageDef[] = [
	{ name: 'front page', path: () => '/' },
	{ name: '404 page', path: () => '/a11y-this-page-does-not-exist/' },
];

for (const def of duplicateIdPages) {
	test(`no duplicate element IDs on the ${def.name}`, async ({ page }) => {
		// Includes the footer-menu duplicate across desktop/mobile footer
		// rows (neve#4557) and duplicate sidebar id="secondary".
		await page.goto(await def.path());
		const duplicates = await findDuplicateIds(page);
		expect(
			duplicates,
			`IDs must be unique in the full DOM (hidden device rows included): ${duplicates.join(', ')}`
		).toHaveLength(0);
	});
}

test('navigation landmarks have unique, non-empty accessible names', async ({
	page,
}) => {
	await page.goto('/');
	const names = await collectAccessibleNames(
		page,
		'nav, [role=navigation]'
	);
	for (const name of names) {
		expect(
			name,
			'every nav landmark needs an accessible name (review: the header row <nav> has none)'
		).not.toBe('');
	}
	const visibleNames = names.filter((n) => n !== '');
	expect(
		new Set(visibleNames).size,
		`duplicated landmarks must have unique names, got: ${JSON.stringify(names)}`
	).toBe(visibleNames.length);
});

test('no nav landmark is nested inside another nav landmark', async ({
	page,
}) => {
	// Review: "There is a Navigation landmark within the banner landmark,
	// which contains the Primary Menu (Navigation) landmark."
	await page.goto('/');
	const nested = await page.$$eval(
		'nav nav, nav [role=navigation], [role=navigation] nav, [role=navigation] [role=navigation]',
		(els) => els.map((el) => `<${el.tagName.toLowerCase()} class="${el.className}">`)
	);
	expect(
		nested,
		`nav-in-nav produces double landmark announcements: ${nested.join(', ')}`
	).toHaveLength(0);
});

test('single banner, main and contentinfo landmark', async ({ page }) => {
	await page.goto('/');
	for (const [selector, landmark] of [
		['header.header, [role=banner]', 'banner'],
		['main, [role=main]', 'main'],
		['footer#site-footer, body > * > footer, [role=contentinfo]', 'contentinfo'],
	] as const) {
		const count = await page.locator(selector).count();
		expect(count, `exactly one ${landmark} landmark expected`).toBe(1);
	}
});
