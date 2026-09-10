import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { getCategoryLink, getPermalink } from './a11y-utils';

/**
 * Automated axe-core sweep — a11y.md §12.1 gate 1.
 *
 * Runs the WCAG A/AA rule set on the same page types the WordPress.org
 * reviewer tested. Catches contrast, missing labels, duplicate IDs,
 * landmark and alt-text violations mechanically.
 *
 * Baseline target after remediation: zero violations.
 */

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];

function formatViolations(violations: any[]): string {
	return violations
		.map(
			(v) =>
				`[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} nodes)\n` +
				v.nodes
					.slice(0, 3)
					.map((n: any) => `    ${n.html.substring(0, 120)}`)
					.join('\n')
		)
		.join('\n');
}

async function runAxe(page) {
	const results = await new AxeBuilder({ page }).withTags(TAGS).analyze();
	expect(
		results.violations,
		`axe violations:\n${formatViolations(results.violations)}`
	).toHaveLength(0);
}

test('axe: front page', async ({ page }) => {
	await page.goto('/');
	await runAxe(page);
});

test('axe: fixture post with comments', async ({ page, request }) => {
	await page.goto(await getPermalink(request, 'posts', 'a11y-comment-test'));
	await runAxe(page);
});

test('axe: category archive', async ({ page, request }) => {
	await page.goto(await getCategoryLink(request, 'a11y-cat'));
	await runAxe(page);
});

test('axe: block patterns page', async ({ page, request }) => {
	await page.goto(await getPermalink(request, 'pages', 'a11y-pattern-test'));
	await runAxe(page);
});

test('axe: search results page', async ({ page }) => {
	await page.goto('/?s=fixture');
	await runAxe(page);
});

test('axe: 404 page', async ({ page }) => {
	await page.goto('/a11y-this-page-does-not-exist/');
	await runAxe(page);
});

test('axe: front page at mobile viewport', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');
	await runAxe(page);
});
