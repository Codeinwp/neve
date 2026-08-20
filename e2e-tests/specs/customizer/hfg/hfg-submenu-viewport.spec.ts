import { test, expect, APIRequestContext, Page } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/submenu-viewport-setup.json';

const VIEWPORT = { width: 1280, height: 900 };
const TEST_NAME = 'hfgSubmenuViewport';
const MENU_NAME = 'Submenu Viewport Test';

// Only the last item has a submenu, so the dropdown opens at the right edge of
// the viewport.
const ITEMS = ['Home', 'Blog', 'About', 'Team', 'Services'];
const CHILDREN = ['Consulting', 'Support'];
const GRANDCHILD = 'Strategy';

/**
 * Neve Pro publishes the submenu alignment control as `right: var(--alignment)`,
 * with `auto` for the Left option. Replicated here, since the control lives in
 * the Pro plugin.
 */
const LEFT_ALIGNED_DROPDOWNS = '.nav-ul > li > .sub-menu { right: auto; }';
const LAST_ITEM = '.header--row .nv-nav-wrap .nav-ul > li:last-child';

type Menu = { id: number; locations: string[] };

const restURL = (baseURL: string | undefined, path: string) =>
	`${baseURL ?? ''}/wp-json/wp/v2/${path}`;

const post = async (
	request: APIRequestContext,
	baseURL: string | undefined,
	path: string,
	body: Record<string, unknown>
) => {
	const response = await request.post(restURL(baseURL, path), { data: body });
	expect(response.ok()).toBeTruthy();
	return await response.json();
};

// The inline styles the reposition logic writes on a submenu.
const getInlineStyles = async (page: Page, selector: string) => {
	return await page.evaluate((subMenu: string) => {
		const element = document.querySelector(subMenu);
		if (!(element instanceof HTMLElement)) {
			throw new Error(`Missing element: ${subMenu}`);
		}
		const { right, left, transform } = element.style;
		return { right, left, transform };
	}, selector);
};

const getBox = async (page: Page, selector: string) => {
	return await page.evaluate((element: string) => {
		const node = document.querySelector(element);
		if (!node) {
			throw new Error(`Missing element: ${element}`);
		}
		const { left, right, top, bottom, width, height } =
			node.getBoundingClientRect();
		return { left, right, top, bottom, width, height };
	}, selector);
};

test.describe('Submenu viewport repositioning', function () {
	test.describe.configure({ mode: 'serial' });
	test.use({ viewport: VIEWPORT });

	let menuId = 0;
	let previousMenuId: number | undefined;

	test.beforeAll(async ({ request, baseURL }) => {
		const menus: Menu[] = await request
			.get(restURL(baseURL, 'menus?per_page=100'))
			.then((response) => response.json());
		previousMenuId = menus.find((menu) =>
			menu.locations.includes('primary')
		)?.id;

		const menu = await post(request, baseURL, 'menus', {
			name: MENU_NAME,
			locations: ['primary'],
		});
		menuId = menu.id;

		let lastItemId = 0;
		for (const title of ITEMS) {
			const item = await post(request, baseURL, 'menu-items', {
				title,
				url: '#',
				menus: menuId,
				status: 'publish',
			});
			lastItemId = item.id;
		}

		let firstChildId = 0;
		for (const title of CHILDREN) {
			const child = await post(request, baseURL, 'menu-items', {
				title,
				url: '#',
				menus: menuId,
				status: 'publish',
				parent: lastItemId,
			});
			firstChildId = firstChildId || child.id;
		}

		await post(request, baseURL, 'menu-items', {
			title: GRANDCHILD,
			url: '#',
			menus: menuId,
			status: 'publish',
			parent: firstChildId,
		});

		// After the menu is in place: the settings endpoint snapshots the menu
		// locations, and serves that snapshot back for `test_name` requests.
		await setCustomizeSettings(TEST_NAME, data, { request, baseURL });
	});

	test.afterAll(async ({ request, baseURL }) => {
		await request.delete(restURL(baseURL, `menus/${menuId}?force=true`));
		if (previousMenuId) {
			await post(request, baseURL, `menus/${previousMenuId}`, {
				locations: ['primary'],
			});
		}
	});

	test.beforeEach(async ({ page }) => {
		await page.goto('/?test_name=' + TEST_NAME);

		const parent = page.locator(LAST_ITEM);
		await expect(parent).toHaveClass(/menu-item-has-children/);
		await expect(parent).toContainText(ITEMS[ITEMS.length - 1]);

		// With the container at its maximum width and the menu on the right,
		// the last item sits at the right edge of the viewport.
		const parentBox = await getBox(page, LAST_ITEM);
		expect(VIEWPORT.width - parentBox.right).toBeLessThan(60);

		await page.addStyleTag({ content: LEFT_ALIGNED_DROPDOWNS });
		// Left aligned, the dropdown does not fit next to its parent item.
		const dropdownBox = await getBox(page, LAST_ITEM + ' > .sub-menu');
		expect(parentBox.left + dropdownBox.width).toBeGreaterThan(
			VIEWPORT.width
		);

		// The resize handler repositions the dropdowns, debounced by 500ms.
		await page.setViewportSize({
			width: VIEWPORT.width - 1,
			height: VIEWPORT.height,
		});
		await page.setViewportSize(VIEWPORT);
		await page.waitForTimeout(1000);
	});

	test('Keeps the hovered dropdown under its parent item', async ({
		page,
	}) => {
		const parentItem = page.locator(LAST_ITEM);
		const dropdown = page.locator(LAST_ITEM + ' > .sub-menu');

		await parentItem.hover();
		await expect(dropdown).toBeVisible();

		const parentBox = await getBox(page, LAST_ITEM);
		const dropdownBox = await getBox(page, LAST_ITEM + ' > .sub-menu');

		// The pointer rests in the middle of the parent item, and the dropdown
		// starts right below it - no gap to cross on the way down to it.
		const pointer = parentBox.left + parentBox.width / 2;
		expect(pointer).toBeGreaterThan(dropdownBox.left);
		expect(pointer).toBeLessThan(dropdownBox.right);
		expect(Math.abs(dropdownBox.top - parentBox.bottom)).toBeLessThan(2);
		expect(dropdownBox.left).toBeGreaterThanOrEqual(0);
		expect(dropdownBox.right).toBeLessThanOrEqual(VIEWPORT.width);

		// Aligned to the parent item instead of moved next to it.
		expect(await getInlineStyles(page, LAST_ITEM + ' > .sub-menu')).toEqual(
			{
				right: '0px',
				left: 'auto',
				transform: '',
			}
		);
	});

	test('Flips the hovered flyout to the side of its parent item', async ({
		page,
	}) => {
		const flyoutParentSelector =
			LAST_ITEM + ' > .sub-menu > li:first-child';
		const flyoutSelector = flyoutParentSelector + ' > .sub-menu';
		const flyoutParentItem = page.locator(flyoutParentSelector);
		const flyout = page.locator(flyoutSelector);

		await page.locator(LAST_ITEM).hover();
		await flyoutParentItem.hover();
		await expect(flyout).toBeVisible();

		const flyoutParentBox = await getBox(page, flyoutParentSelector);
		const flyoutBox = await getBox(page, flyoutSelector);

		// The pointer rests in the middle of the flyout parent item, and the
		// flyout touches its left edge at the same height - no gap sideways.
		const pointer = flyoutParentBox.top + flyoutParentBox.height / 2;
		expect(pointer).toBeGreaterThan(flyoutBox.top);
		expect(pointer).toBeLessThan(flyoutBox.bottom);
		expect(Math.abs(flyoutParentBox.left - flyoutBox.right)).toBeLessThan(
			2
		);
		expect(flyoutBox.left).toBeGreaterThanOrEqual(0);
		expect(flyoutBox.right).toBeLessThanOrEqual(VIEWPORT.width);

		expect(await getInlineStyles(page, flyoutSelector)).toEqual({
			right: '100%',
			left: 'auto',
			transform: '',
		});
	});
});
