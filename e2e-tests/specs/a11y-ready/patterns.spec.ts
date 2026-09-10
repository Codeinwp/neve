import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { getPermalink } from './a11y-utils';

/**
 * Block pattern criteria — a11y.md §6.
 *
 * Two layers:
 * 1. Source lint over inc/compatibility/block-patterns/*.php — fails the
 *    build before broken markup even reaches a site.
 * 2. Rendered checks on the a11y-pattern-test fixture page (all patterns).
 *
 * Review: 9 href-less <a> across 6 patterns, all 24 images alt="", two
 * patterns shipping <h1>, "LEARN MORE" x3 with identical names.
 */

const PATTERNS_DIR = join(
	__dirname,
	'..',
	'..',
	'..',
	'inc',
	'compatibility',
	'block-patterns'
);

const patternFiles = readdirSync(PATTERNS_DIR).filter((f) =>
	f.endsWith('.php')
);

test.describe('pattern source lint', () => {
	for (const file of patternFiles) {
		test(`${file} has no href-less links, empty alts or H1s`, async () => {
			const src = readFileSync(join(PATTERNS_DIR, file), 'utf8');

			const anchors = src.match(/<a\s[^>]*>|<a>/g) || [];
			const hrefless = anchors.filter((a) => !/\shref=/.test(a));
			expect(
				hrefless,
				`links without href are not keyboard focusable: ${hrefless.join(' | ')}`
			).toHaveLength(0);

			const emptyAlts = src.match(/alt=""/g) || [];
			expect(
				emptyAlts,
				`meaningful pattern images must have alt text (${emptyAlts.length} empty alts)`
			).toHaveLength(0);

			expect(
				/<h1[\s>]/.test(src),
				'patterns must not ship <h1> — page content starts at <h2>'
			).toBe(false);
		});
	}

	test('patterns.php has no duplicate registrations', async () => {
		const src = readFileSync(
			join(PATTERNS_DIR, '..', 'patterns.php'),
			'utf8'
		);
		const slugs = [...src.matchAll(/'([a-z0-9-]+)',/g)].map((m) => m[1]);
		const duplicates = slugs.filter((s, i) => slugs.indexOf(s) !== i);
		expect(
			duplicates,
			`duplicate pattern registrations: ${duplicates.join(', ')}`
		).toHaveLength(0);
	});
});

test.describe('rendered fixture page (all patterns)', () => {
	let url: string;

	test.beforeEach(async ({ page, request }) => {
		url = await getPermalink(request, 'pages', 'a11y-pattern-test');
		await page.goto(url);
	});

	test('no href-less links in rendered pattern content', async ({ page }) => {
		const hrefless = await page.$$eval('.entry-content a:not([href])', (els) =>
			els.map((el) => (el.textContent || '').trim().substring(0, 40))
		);
		expect(hrefless, `unreachable links: ${hrefless.join(' | ')}`).toHaveLength(0);
	});

	test('no meaningful image rendered with empty alt', async ({ page }) => {
		const emptyAlts = await page.$$eval(
			'.entry-content img[alt=""]',
			(els) => els.map((el) => (el.getAttribute('src') || '').split('/').pop())
		);
		expect(
			emptyAlts,
			`images marked decorative that carry content: ${emptyAlts.join(', ')}`
		).toHaveLength(0);
	});

	test('page has exactly one H1 with all patterns inserted', async ({
		page,
	}) => {
		const h1s = await page.$$eval('h1', (els) =>
			els.map((el) => (el.textContent || '').trim().substring(0, 50))
		);
		expect(h1s, `pattern content injected extra H1s: ${JSON.stringify(h1s)}`).toHaveLength(1);
	});

	test('repeated link texts have unique accessible names or identical destinations', async ({
		page,
	}) => {
		// Review: three "LEARN MORE" links with identical names pointing to
		// different places.
		const groups = await page.$$eval('.entry-content a[href]', (els) => {
			const byName: Record<string, Set<string>> = {};
			els.forEach((el) => {
				const label = el.getAttribute('aria-label');
				const name = (label || el.textContent || '').trim().toLowerCase();
				if (!name) return;
				byName[name] = byName[name] || new Set();
				byName[name].add(el.getAttribute('href') || '');
			});
			return Object.entries(byName)
				.filter(([, hrefs]) => hrefs.size > 1)
				.map(([name, hrefs]) => `"${name}" -> ${[...hrefs].join(', ')}`);
		});
		expect(
			groups,
			`identical link names pointing to different URLs: ${groups.join(' | ')}`
		).toHaveLength(0);
	});
});
