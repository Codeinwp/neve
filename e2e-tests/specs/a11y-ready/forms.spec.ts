import { test, expect } from '@playwright/test';
import { getPermalink } from './a11y-utils';

/**
 * Criterion 5: Labelled Form Fields — a11y.md §5.4.
 *
 * Review failures: search form on the search-results page and on the 404
 * page has no visible, persistent label (hidden as screen-reader-text).
 * Also: the <label> in searchform.php closes before the input and has no
 * `for` attribute — it labels nothing.
 */

async function expectVisibleSearchLabel(page, context: string) {
	const input = page.locator('.search-form input[type=search]').first();
	await expect(input, `${context}: search input must exist`).toBeVisible();

	const inputId = await input.getAttribute('id');
	expect(
		inputId,
		`${context}: search input needs an id so a label can reference it`
	).toBeTruthy();

	const label = page.locator(`label[for="${inputId}"]`).first();
	await expect(
		label,
		`${context}: search input must have an associated <label for>`
	).toHaveCount(1);

	// The criterion requires the label to be VISIBLE and persistent — not
	// hidden via screen-reader-text, and not a placeholder standing in.
	await expect(
		label,
		`${context}: the label must be visible (not screen-reader-text)`
	).toBeVisible();
	const isSrOnly = await label.evaluate((el) => {
		const target =
			el.querySelector('.screen-reader-text') !== null &&
			(el.textContent || '').trim() ===
				(el.querySelector('.screen-reader-text')?.textContent || '').trim();
		return el.classList.contains('screen-reader-text') || target;
	});
	expect(
		isSrOnly,
		`${context}: label text must not be wrapped in screen-reader-text`
	).toBe(false);
}

test('search form on the search results page has a visible label', async ({
	page,
}) => {
	await page.goto('/?s=a11y-fixture-query-with-no-results');
	await expectVisibleSearchLabel(page, 'search results page');
});

test('search form on the 404 page has a visible label', async ({ page }) => {
	await page.goto('/a11y-this-page-does-not-exist/');
	await expectVisibleSearchLabel(page, '404 page');
});

test('comment form fields have visible associated labels', async ({
	page,
	request,
}) => {
	// Passed in the review — regression guard.
	const url = await getPermalink(request, 'posts', 'a11y-comment-test');
	await page.goto(url);
	for (const id of ['comment', 'author', 'email']) {
		const label = page.locator(`#commentform label[for="${id}"]`);
		await expect(label, `label for #${id}`).toBeVisible();
	}
});

test('decorative SVGs inside labelled search controls are aria-hidden', async ({
	page,
}) => {
	// Review: "The SVG magnifying glass icon within should have
	// aria-hidden='true' because it is decorative."
	await page.goto('/a11y-this-page-does-not-exist/');
	const unhidden = await page.$$eval(
		'.search-form [type=submit] svg, .search-form button svg, a.nv-search svg',
		(els) =>
			els
				.filter((el) => el.getAttribute('aria-hidden') !== 'true')
				.map((el) => el.outerHTML.substring(0, 80))
	);
	expect(
		unhidden,
		`decorative icons must carry aria-hidden="true": ${unhidden.join(' | ')}`
	).toHaveLength(0);
});
