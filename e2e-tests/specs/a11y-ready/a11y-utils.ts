import { expect, Locator, Page, APIRequestContext } from '@playwright/test';

/**
 * Shared helpers for the accessibility-ready acceptance suite.
 * Criteria references point to neve-pro-addon/a11y.md.
 */

/**
 * Resolve a fixture permalink through the public REST API so the specs do
 * not depend on the environment's permalink structure.
 */
export async function getPermalink(
	request: APIRequestContext,
	type: 'posts' | 'pages',
	slug: string
): Promise<string> {
	const base = process.env.baseURL || 'http://localhost:8080';
	const res = await request.get(
		`${base}/wp-json/wp/v2/${type}?slug=${slug}&_fields=link`
	);
	const items = res.ok() ? await res.json() : [];
	if (!Array.isArray(items) || items.length === 0) {
		throw new Error(
			`Fixture "${slug}" (${type}) not found. Run: bash bin/envs/a11y-ready/fixtures.sh <wp-path>`
		);
	}
	return items[0].link;
}

/** Resolve a category archive link by slug. */
export async function getCategoryLink(
	request: APIRequestContext,
	slug: string
): Promise<string> {
	const base = process.env.baseURL || 'http://localhost:8080';
	const res = await request.get(
		`${base}/wp-json/wp/v2/categories?slug=${slug}&_fields=link`
	);
	const items = res.ok() ? await res.json() : [];
	if (!Array.isArray(items) || items.length === 0) {
		throw new Error(
			`Fixture category "${slug}" not found. Run: bash bin/envs/a11y-ready/fixtures.sh <wp-path>`
		);
	}
	return items[0].link;
}

/**
 * Approximate accessible name for every element matching `selector`.
 * Good enough for uniqueness and "starts with visible text" checks on
 * this theme's markup (aria-label > aria-labelledby > text > img alt > title).
 */
export async function collectAccessibleNames(
	page: Page,
	selector: string
): Promise<string[]> {
	return page.$$eval(selector, (els) =>
		els.map((el) => {
			const label = el.getAttribute('aria-label');
			if (label) return label.trim();
			const labelledBy = el.getAttribute('aria-labelledby');
			if (labelledBy) {
				return labelledBy
					.split(/\s+/)
					.map((id) => document.getElementById(id)?.textContent || '')
					.join(' ')
					.trim();
			}
			const text = (el.textContent || '').trim();
			if (text) return text;
			const imgAlt = el.querySelector('img[alt]');
			if (imgAlt) return (imgAlt.getAttribute('alt') || '').trim();
			return (el.getAttribute('title') || '').trim();
		})
	);
}

/**
 * §5.8 / review row "Visible focus outline is browser default or 2px solid
 * with 3:1 contrast". Focuses the element and asserts a real focus
 * indicator: a browser-default ring ('auto'), an outline of >= 2px, or a
 * box-shadow that appears on focus.
 */
export async function expectVisibleFocusIndicator(
	page: Page,
	target: Locator,
	label: string
) {
	const before = await target.evaluate((el) => {
		const cs = getComputedStyle(el);
		return { boxShadow: cs.boxShadow, outlineStyle: cs.outlineStyle };
	});
	await target.focus();
	await expect(target, `${label}: element must be focusable`).toBeFocused();
	const after = await target.evaluate((el) => {
		const cs = getComputedStyle(el);
		return {
			outlineStyle: cs.outlineStyle,
			outlineWidth: parseFloat(cs.outlineWidth || '0'),
			boxShadow: cs.boxShadow,
		};
	});
	const hasOutline =
		after.outlineStyle === 'auto' ||
		(after.outlineStyle !== 'none' && after.outlineWidth >= 2);
	const hasShadow =
		after.boxShadow !== 'none' && after.boxShadow !== before.boxShadow;
	expect(
		hasOutline || hasShadow,
		`${label}: focused element must show a visible focus indicator ` +
			`(browser default or >=2px outline, or a focus box-shadow). ` +
			`Got outline: ${after.outlineStyle} ${after.outlineWidth}px, ` +
			`box-shadow: ${after.boxShadow}`
	).toBeTruthy();
}

/** Collect duplicate id attributes on the page. */
export async function findDuplicateIds(page: Page): Promise<string[]> {
	return page.evaluate(() => {
		const seen = new Map<string, number>();
		document.querySelectorAll('[id]').forEach((el) => {
			const id = el.id;
			if (!id) return;
			seen.set(id, (seen.get(id) || 0) + 1);
		});
		return [...seen.entries()]
			.filter(([, count]) => count > 1)
			.map(([id, count]) => `#${id} x${count}`);
	});
}

/** First visible submenu toggle in the desktop primary navigation. */
export function desktopSubmenuToggles(page: Page): Locator {
	return page.locator('.header--row .caret-wrap:visible');
}

/** The dropdown list a toggle controls (nearest ancestor li's sub-menu). */
export function submenuFor(toggle: Locator): Locator {
	return toggle
		.locator('xpath=ancestor::li[1]//ul[contains(@class, "sub-menu")]')
		.first();
}
