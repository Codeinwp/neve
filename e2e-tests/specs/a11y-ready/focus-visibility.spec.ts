import { test, expect } from '@playwright/test';
import { expectVisibleFocusIndicator, getPermalink } from './a11y-utils';

/**
 * Criterion 3: Keyboard Navigation Support — a11y.md §5.2 / §5.8.
 *
 * Review rows failed on 7 of 8 pages: "All interactive elements have a
 * visible focus outline" and "Visible focus outline is browser default or
 * 2px solid with 3:1 contrast". The Post Comment button had a computed
 * outline of none (verified live 2026-08-18).
 */

test('Post Comment submit button has a visible focus indicator', async ({
	page,
	request,
}) => {
	const url = await getPermalink(request, 'posts', 'a11y-comment-test');
	await page.goto(url);
	const submit = page
		.locator('#commentform [type=submit], #commentform #submit')
		.first();
	await submit.scrollIntoViewIfNeeded();
	await expectVisibleFocusIndicator(page, submit, 'Post Comment button');
});

test('comment form fields have a visible focus indicator', async ({
	page,
	request,
}) => {
	const url = await getPermalink(request, 'posts', 'a11y-comment-test');
	await page.goto(url);
	for (const selector of ['#comment', '#author', '#email']) {
		const field = page.locator(selector);
		await field.scrollIntoViewIfNeeded();
		await expectVisibleFocusIndicator(page, field, `comment field ${selector}`);
	}
});

test('search form controls have a visible focus indicator (404 page)', async ({
	page,
}) => {
	await page.goto('/a11y-this-page-does-not-exist/');
	const input = page.locator('.search-form input[type=search]').first();
	const button = page
		.locator('.search-form [type=submit], .search-form button')
		.first();
	await expectVisibleFocusIndicator(page, input, 'search input');
	await expectVisibleFocusIndicator(page, button, 'search submit button');
});

test('header navigation links have a visible focus indicator', async ({
	page,
}) => {
	await page.goto('/');
	const navLink = page.locator('.header--row .nav-ul a:visible').first();
	await expectVisibleFocusIndicator(page, navLink, 'primary nav link');
});

test('no non-interactive element is focusable (stray tabindex)', async ({
	page,
}) => {
	// Review: '<div class="excerpt-wrap entry-summary" tabindex="0">' on
	// every archive item. Source: inc/views/partials/excerpt.php:51.
	await page.goto('/');
	const strays = await page.$$eval(
		'[tabindex]:not(a):not(button):not(input):not(select):not(textarea):not(iframe):not([role=button]):not([role=link]):not([role=menuitem]):not([contenteditable=true])',
		(els) =>
			els
				.filter((el) => parseInt(el.getAttribute('tabindex') || '-1', 10) >= 0)
				.map(
					(el) =>
						`<${el.tagName.toLowerCase()} class="${
							el.className
						}" tabindex="${el.getAttribute('tabindex')}">`
				)
	);
	expect(
		strays,
		`non-interactive elements must not be in the tab order: ${strays.join(
			', '
		)}`
	).toHaveLength(0);
});

test('scroll-to-top button comes after the footer in the tab order', async ({
	page,
}) => {
	// Review row "Tab order matches visual order" failed on 7 of 8 pages
	// because the floating scroll-to-top is placed before the footer in
	// the source (footer.php:27 vs :51).
	await page.goto('/');
	const stt = page.locator('#scroll-to-top');
	test.skip(
		(await stt.count()) === 0,
		'scroll-to-top is disabled on this environment'
	);
	const footerPrecedes = await page.evaluate(() => {
		const button = document.getElementById('scroll-to-top');
		const footer = document.getElementById('site-footer');
		if (!button || !footer) return null;
		return Boolean(
			// eslint-disable-next-line no-bitwise
			footer.compareDocumentPosition(button) & Node.DOCUMENT_POSITION_FOLLOWING
		);
	});
	expect(
		footerPrecedes,
		'#scroll-to-top must follow #site-footer in source order so footer links are tabbed first'
	).toBe(true);
});

test('every interactive element reached by Tab shows a focus indicator', async ({
	page,
	request,
}) => {
	// Sweep: instead of spot-checking elements we thought of, Tab through
	// the whole page and hold every interactive element to the reviewer's
	// bar (browser default ring or >= 2px outline). Non-interactive
	// focusable elements are the stray-tabindex test's job, not this one's.
	const pages = [
		'/',
		await getPermalink(request, 'posts', 'a11y-comment-test'),
		'/a11y-this-page-does-not-exist/',
	];
	const failures: string[] = [];
	for (const path of pages) {
		await page.goto(path);
		for (let i = 0; i < 200; i++) {
			await page.keyboard.press('Tab');
			const info = await page.evaluate(() => {
				const el = document.activeElement as HTMLElement | null;
				if (!el || el === document.body) return null;
				const cs = getComputedStyle(el);
				const rect = el.getBoundingClientRect();
				const text = (el.textContent || '').trim().slice(0, 40);
				return {
					desc: `<${el.tagName.toLowerCase()} class="${
						el.className
					}"> "${text}"`,
					interactive: el.matches(
						'a, button, input, select, textarea, summary, [role=button], [role=link], [role=menuitem]'
					),
					visible:
						rect.width > 0 &&
						rect.height > 0 &&
						cs.visibility !== 'hidden' &&
						parseFloat(cs.opacity) > 0,
					ok:
						cs.outlineStyle === 'auto' ||
						(cs.outlineStyle !== 'none' &&
							parseFloat(cs.outlineWidth || '0') >= 2),
				};
			});
			// Focus wrapped back to the document: this page is done.
			if (!info) break;
			if (info.interactive && info.visible && !info.ok) {
				failures.push(`${path} → ${info.desc}`);
			}
		}
	}
	expect(
		failures,
		`elements without a visible focus indicator:\n${failures.join('\n')}`
	).toHaveLength(0);
});
