import { test, expect, Frame } from '@playwright/test';
import { loginWithRequest, setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/primary-menu-both-devices-setup.json';

const PREVIEW_FRAME = 'iframe[name="customize-preview-0"]';

/**
 * Collect the ids of every primary menu list in a document.
 *
 * @param {Frame} frame Frame to read from.
 */
const primaryMenuIds = (frame: Frame): Promise<string[]> =>
	frame.evaluate(() =>
		Array.from(
			document.querySelectorAll('.hfg_header ul.primary-menu-ul')
		).map((el) => el.id)
	);

test.describe(
	'Primary Menu component in both desktop and mobile layouts',
	function () {
		test.beforeAll(async ({ request, baseURL }) => {
			await setCustomizeSettings('hfgPrimaryMenuBothDevices', data, {
				request,
				baseURL,
			});
		});

		test('Menu IDs are unique across the whole document', async ({
			page,
		}) => {
			await page.goto('/?test_name=hfgPrimaryMenuBothDevices');

			// The row alone is not enough to tell the placements apart: both layouts
			// use the same row names.
			await expect(
				page.locator('ul#nv-primary-navigation-main')
			).toHaveCount(0);

			await expect(
				page.locator('ul#nv-primary-navigation-desktop-main')
			).toHaveCount(1);
			await expect(
				page.locator('ul#nv-primary-navigation-mobile-main')
			).toHaveCount(1);
			await expect(
				page.locator('ul#nv-primary-navigation-mobile-sidebar')
			).toHaveCount(1);

			const duplicated = await page.evaluate(() => {
				const ids = Array.from(
					document.querySelectorAll('.hfg_header [id]')
				).map((el) => el.id);

				return ids.filter((id, index) => ids.indexOf(id) !== index);
			});

			expect(duplicated).toEqual([]);
		});

		test('Menu IDs survive a selective refresh of the component', async ({
			page,
		}) => {
			const previewUrl = '/?test_name=hfgPrimaryMenuBothDevices';
			await loginWithRequest(
				'/wp-admin/customize.php?url=' + encodeURIComponent(previewUrl),
				page
			);

			await page.waitForSelector('.wp-full-overlay-sidebar', {
				state: 'visible',
			});

			const preview = page.frameLocator(PREVIEW_FRAME);
			await preview
				.locator('.hfg_header ul.primary-menu-ul')
				.first()
				.waitFor();

			const frame = page.frame({ name: 'customize-preview-0' });
			if (!frame) {
				throw new Error('Customizer preview frame not found.');
			}

			const before = await primaryMenuIds(frame);
			expect(before).toEqual([
				'nv-primary-navigation-desktop-main',
				'nv-primary-navigation-mobile-main',
				'nv-primary-navigation-mobile-sidebar',
			]);

			// Every placement has to advertise where it sits, otherwise selective refresh
			// renders the partial once and copies that markup into all of them.
			const contexts = await frame.evaluate(() =>
				Array.from(
					document.querySelectorAll('.builder-item--primary-menu')
				).map((el) =>
					el.getAttribute('data-customize-partial-placement-context')
				)
			);
			expect(contexts).toEqual([
				'{"device":"desktop","row":"main"}',
				'{"device":"mobile","row":"main"}',
				'{"device":"mobile","row":"sidebar"}',
			]);

			// Refresh the partial and check that all placements were refreshed and that the menu ids are still unique.
			const refreshed = await frame.evaluate(async () => {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const sr = (window as any).wp.customize.selectiveRefresh;
				const partial = sr.partial('primary-menu_partial');
				if (!partial) {
					throw new Error('primary-menu_partial is not registered.');
				}
				const placements = await partial.refresh();

				return placements.length;
			});
			expect(refreshed).toBe(3);

			expect(await primaryMenuIds(frame)).toEqual(before);
			await expect(
				preview.locator('ul#nv-primary-navigation-main')
			).toHaveCount(0);
		});
	}
);
