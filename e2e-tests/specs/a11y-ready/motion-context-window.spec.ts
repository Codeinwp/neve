import { test, expect } from '@playwright/test';
import { getPermalink } from './a11y-utils';

/**
 * Criterion 1 (regression guard): Skip to Content Link.
 * Criterion 11: Accessible animations — prefers-reduced-motion (a11y.md §8).
 * Criterion 14: Links don't open new windows without warning (a11y.md §8).
 */

test('skip link is first, visible on focus, and moves focus into main', async ({
	page,
}) => {
	await page.goto('/');
	await page.keyboard.press('Tab');

	const skipLink = page.locator('.neve-skip-link');
	await expect(skipLink, 'first Tab must land on the skip link').toBeFocused();
	await expect(
		skipLink,
		'skip link must be visible while focused'
	).toBeVisible();

	await page.keyboard.press('Enter');
	const focusInMain = await page.evaluate(() => {
		const main = document.getElementById('content');
		const active = document.activeElement;
		return Boolean(
			main && active && (active === main || main.contains(active))
		);
	});
	expect(
		focusInMain,
		'activating the skip link must move focus into #content ' +
			'(needs tabindex="-1" on the target, a11y.md §5.2)'
	).toBe(true);
});

test('scroll-to-top jumps instantly under prefers-reduced-motion', async ({
	page,
	request,
}) => {
	// a11y.md §8: the theme has no prefers-reduced-motion handling and
	// scroll-to-top always animates (assets/js/src/scroll-to-top.js:27).
	await page.emulateMedia({ reducedMotion: 'reduce' });
	const url = await getPermalink(request, 'posts', 'a11y-comment-test');
	await page.goto(url);

	const stt = page.locator('#scroll-to-top');
	test.skip(
		(await stt.count()) === 0,
		'scroll-to-top is disabled on this environment'
	);

	await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
	await page.waitForTimeout(300);
	await stt.click();
	// An instant (non-animated) jump is done within a frame or two; a smooth
	// scroll is still mid-flight after 150 ms.
	await page.waitForTimeout(150);
	const scrollY = await page.evaluate(() => window.scrollY);
	expect(
		scrollY,
		'with reduced motion, the scroll must be instant (no smooth animation)'
	).toBe(0);
});

test('scroll-to-top actually returns to the top and focuses content', async ({
	page,
}) => {
	// Regression guard: #content becoming focusable (skip-link target) once
	// made the button's focus() cancel its own smooth scroll mid-flight.
	await page.goto('/');
	const stt = page.locator('#scroll-to-top');
	test.skip(
		(await stt.count()) === 0,
		'scroll-to-top is disabled on this environment'
	);
	await page.evaluate(() => window.scrollTo(0, 1500));
	await page.waitForTimeout(300);
	await stt.click();
	await page.waitForFunction(() => window.scrollY < 80, null, {
		timeout: 3000,
	});
	const focusedId = await page.evaluate(() => document.activeElement?.id);
	expect(focusedId, 'focus must move to the content region').toBe('content');
});

test('links opening new tabs carry a warning and rel=noopener', async ({
	page,
	request,
}) => {
	// Scans the fixture pages; passes trivially when no target=_blank link
	// is rendered, and guards every one that is.
	const urls = [
		'/',
		await getPermalink(request, 'posts', 'a11y-comment-test'),
		await getPermalink(request, 'pages', 'a11y-pattern-test'),
	];
	for (const url of urls) {
		await page.goto(url);
		const offenders = await page.$$eval('a[target="_blank"]', (els) =>
			els
				.filter((el) => {
					const rel = (el.getAttribute('rel') || '').toLowerCase();
					const name = (
						(el.getAttribute('aria-label') || '') +
						' ' +
						(el.textContent || '')
					).toLowerCase();
					const warned = /new (tab|window)|opens in/.test(name);
					return !rel.includes('noopener') || !warned;
				})
				.map((el) => (el.outerHTML || '').substring(0, 120))
		);
		expect(
			offenders,
			`${url}: target=_blank links must warn screen reader users and set rel=noopener:\n${offenders.join(
				'\n'
			)}`
		).toHaveLength(0);
	}
});
