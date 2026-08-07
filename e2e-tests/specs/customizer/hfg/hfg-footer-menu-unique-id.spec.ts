import { test, expect } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/footer-menu-both-devices-setup.json';

test.describe(
	'Footer Menu component in both desktop and mobile layouts',
	function () {
		test.beforeAll(async ({ request, baseURL }) => {
			await setCustomizeSettings('hfgFooterMenuBothDevices', data, {
				request,
				baseURL,
			});
		});

		test('Both layout variants are rendered', async ({ page }) => {
			await page.goto('/?test_name=hfgFooterMenuBothDevices');

			await expect(
				page.locator(
					'.hfg_footer .footer--row[data-show-on="desktop"] .nav-menu-footer'
				)
			).toHaveCount(1);

			await expect(
				page.locator(
					'.hfg_footer .footer--row[data-show-on="mobile"] .nav-menu-footer'
				)
			).toHaveCount(1);
		});

		test('Menu IDs are unique across the whole document', async ({
			page,
		}) => {
			await page.goto('/?test_name=hfgFooterMenuBothDevices');

			await expect(page.locator('ul#footer-menu')).toHaveCount(0);
			await expect(
				page.locator('ul#footer-menu-desktop-bottom')
			).toHaveCount(1);
			await expect(page.locator('ul#footer-menu-mobile-top')).toHaveCount(
				1
			);

			const duplicated = await page.evaluate(() => {
				const ids = Array.from(
					document.querySelectorAll('.hfg_footer [id]')
				).map((el) => el.id);

				return ids.filter((id, index) => ids.indexOf(id) !== index);
			});

			expect(duplicated).toEqual([]);
		});

		test('The footer-menu class is kept for styling', async ({ page }) => {
			await page.goto('/?test_name=hfgFooterMenuBothDevices');

			await expect(
				page.locator('.hfg_footer ul.footer-menu')
			).toHaveCount(2);
		});
	}
);
