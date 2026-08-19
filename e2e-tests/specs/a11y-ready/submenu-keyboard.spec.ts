import { test, expect } from '@playwright/test';
import {
	collectAccessibleNames,
	desktopSubmenuToggles,
	submenuFor,
} from './a11y-utils';

/**
 * Criterion 4: Controls with Accessible Names, Roles, and States — a11y.md §5.3.
 *
 * Covers the review's four all-page failures: unique accessible names,
 * spacebar activation of role=button, state (aria-expanded) communication,
 * and the NVDA failure (activation via synthesized click, which is how
 * screen readers trigger controls).
 *
 * Fixture: "A11y Test" menu with "Products" and "Company" dropdown parents
 * (bin/envs/a11y-ready/fixtures.sh).
 */

test.describe('Desktop primary nav submenu toggles', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('toggles expose the disclosure pattern (aria-expanded, no aria-pressed)', async ({
		page,
	}) => {
		const toggles = desktopSubmenuToggles(page);
		const count = await toggles.count();
		expect(count, 'fixture menu must render dropdown toggles').toBeGreaterThanOrEqual(2);

		for (let i = 0; i < count; i++) {
			const toggle = toggles.nth(i);
			await expect(
				toggle,
				'toggle must communicate collapsed state via aria-expanded'
			).toHaveAttribute('aria-expanded', 'false');
			await expect(
				toggle,
				'aria-pressed is the wrong pattern for a disclosure'
			).not.toHaveAttribute('aria-pressed', /.*/);
		}
	});

	test('toggles have unique accessible names', async ({ page }) => {
		const names = await collectAccessibleNames(
			page,
			'.header--row .caret-wrap'
		);
		expect(names.length).toBeGreaterThanOrEqual(2);
		for (const name of names) {
			expect(name, 'toggle must have a non-empty accessible name').not.toBe('');
		}
		expect(
			new Set(names).size,
			`toggle names must be unique, got: ${JSON.stringify(names)}`
		).toBe(names.length);
	});

	test('Enter opens and closes the submenu, and updates aria-expanded', async ({
		page,
	}) => {
		const toggle = desktopSubmenuToggles(page).first();
		const submenu = submenuFor(toggle);

		await toggle.focus();
		await page.keyboard.press('Enter');
		await expect(submenu).toBeVisible();
		await expect(toggle).toHaveAttribute('aria-expanded', 'true');

		await page.keyboard.press('Enter');
		await expect(submenu).toBeHidden();
		await expect(toggle).toHaveAttribute('aria-expanded', 'false');
	});

	test('Space opens and closes the submenu', async ({ page }) => {
		const toggle = desktopSubmenuToggles(page).first();
		const submenu = submenuFor(toggle);

		await toggle.focus();
		await page.keyboard.press('Space');
		await expect(
			submenu,
			'review: "they cannot be triggered with the space bar"'
		).toBeVisible();

		await page.keyboard.press('Space');
		await expect(submenu).toBeHidden();
	});

	test('Escape closes an open submenu and keeps focus on the toggle', async ({
		page,
	}) => {
		const toggle = desktopSubmenuToggles(page).first();
		const submenu = submenuFor(toggle);

		await toggle.focus();
		await page.keyboard.press('Enter');
		await expect(submenu).toBeVisible();

		await page.keyboard.press('Escape');
		await expect(submenu).toBeHidden();
		await expect(toggle).toBeFocused();
	});

	test('synthesized click opens the submenu visibly (screen reader activation path)', async ({
		page,
	}) => {
		// NVDA/TalkBack activate controls by dispatching a click without
		// moving keyboard focus. Review: "when NVDA is used, the submenu
		// buttons cannot be triggered with the Enter key".
		const toggle = desktopSubmenuToggles(page).first();
		const submenu = submenuFor(toggle);

		await toggle.evaluate((el: HTMLElement) => el.click());
		await expect(
			submenu,
			'submenu must become visible when the toggle is activated without keyboard focus'
		).toBeVisible();
		await expect(toggle).toHaveAttribute('aria-expanded', 'true');
	});

	test('keyboard and mouse activation drive one shared open state', async ({
		page,
	}) => {
		// Root cause of the NVDA bug: two unsynchronized state classes
		// (`active` vs `dropdown-open`). Open with the keyboard, close with
		// a click — if state is shared, this must fully close the submenu.
		const toggle = desktopSubmenuToggles(page).first();
		const submenu = submenuFor(toggle);

		await toggle.focus();
		await page.keyboard.press('Enter');
		await expect(submenu).toBeVisible();

		// Click where the toggle sits, like a real mouse user would — the
		// click-away overlay may be on top, and either target must close
		// the submenu and sync aria-expanded (single shared state).
		const box = await toggle.boundingBox();
		await page.mouse.click(
			box!.x + box!.width / 2,
			box!.y + box!.height / 2
		);
		// Move the pointer away so the CSS :hover state does not keep the
		// submenu visually open after the state has been closed.
		await page.mouse.move(0, 400);
		await expect(
			submenu,
			'click after keyboard-open must close the submenu (single state)'
		).toBeHidden();
		await expect(toggle).toHaveAttribute('aria-expanded', 'false');
	});
});

test.describe('Mobile menu', () => {
	test.use({ viewport: { width: 390, height: 844 } });

	test.beforeEach(async ({ page }) => {
		await page.goto('/');
	});

	test('hamburger communicates expanded state', async ({ page }) => {
		const hamburger = page
			.locator('button.navbar-toggle:not(.caret-wrap)')
			.first();
		await expect(hamburger).toBeVisible();
		await expect(hamburger).toHaveAttribute('aria-expanded', 'false');

		await hamburger.click();
		await expect(hamburger).toHaveAttribute('aria-expanded', 'true');
	});

	test('mobile submenu toggle announces its expanded state', async ({
		page,
	}) => {
		// Review: "The mobile menu does work with NVDA, but when a button is
		// pressed and a submenu opens it's not announced." Root cause:
		// MenuIcon.php toggleAriaClick() explicitly skips .caret-wrap.
		const hamburger = page
			.locator('button.navbar-toggle:not(.caret-wrap)')
			.first();
		await hamburger.click();

		const sidebarToggle = page
			.locator('#header-menu-sidebar .caret-wrap:visible')
			.first();
		await expect(sidebarToggle).toBeVisible();
		await expect(
			sidebarToggle,
			'mobile submenu toggle must expose aria-expanded'
		).toHaveAttribute('aria-expanded', 'false');

		await sidebarToggle.click();
		await expect(sidebarToggle).toHaveAttribute('aria-expanded', 'true');
	});
});
