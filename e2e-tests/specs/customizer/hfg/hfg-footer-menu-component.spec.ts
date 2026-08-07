import { test, expect, Page, Locator, Frame } from '@playwright/test';
import { loginWithRequest, setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/footer-menu-setup.json';
import menuData from '../../../fixtures/customizer/hfg/footer-menu-both-devices-setup.json';

const PREVIEW_FRAME = 'iframe[name="customize-preview-0"]';

/**
 * Collect the ids of every footer menu list in a document.
 *
 * @param {Frame} frame Frame to read from.
 */
const footerMenuIds = (frame: Frame): Promise<string[]> =>
	frame.evaluate(() =>
		Array.from(document.querySelectorAll('.hfg_footer ul.footer-menu')).map(
			(el) => el.id
		)
	);

test.describe('Footer Menu component', function () {
	let page: Page;
	let footerElements: Locator, count: number;

	test.beforeAll(async ({ browser, request, baseURL }) => {
		page = await browser.newPage();
		await setCustomizeSettings('hfgFooterMenu', data, {
			request,
			baseURL,
		});

		footerElements = await page.locator(
			'.site-title, .menu-item, .palette-icon-wrapper'
		);
		count = await footerElements.count();
	});

	test('Check Footer Menu Style and Hover', async () => {
		await page.goto('/?test_name=hfgFooterMenu');

		await expect(page.locator('.footer--row[data-show-on="desktop"] .nav-menu-footer')).toHaveClass(/style\-border\-bottom/);

		const footerMenuItems = await page
			.locator('.footer--row[data-show-on="desktop"] .footer-menu.nav-ul li .wrap a')
			.all();

		for (const item of footerMenuItems) {
			await expect(item).toHaveCSS('color', 'rgb(211, 166, 0)'); // #d3a600
			await item.hover();
			await expect(item).toHaveCSS('color', 'rgb(58, 136, 184)'); // #3a88b8
		}
	});
});

test.describe(
	'Footer Menu component in both desktop and mobile layouts',
	function () {
		test.beforeAll(async ({ request, baseURL }) => {
			await setCustomizeSettings('hfgFooterMenuBothDevices', menuData, {
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

		test('Menu IDs survive a selective refresh of the component', async ({
			page,
		}) => {
			const previewUrl = '/?test_name=hfgFooterMenuBothDevices';
			await loginWithRequest(
				'/wp-admin/customize.php?url=' + encodeURIComponent(previewUrl),
				page
			);

			await page.waitForSelector('.wp-full-overlay-sidebar', {
				state: 'visible',
			});

			const preview = page.frameLocator(PREVIEW_FRAME);
			await preview
				.locator('.hfg_footer ul.footer-menu')
				.first()
				.waitFor();

			const frame = page.frame({ name: 'customize-preview-0' });
			if (!frame) {
				throw new Error('Customizer preview frame not found.');
			}

			// Every placement has to advertise where it sits, otherwise selective refresh
			// renders the partial once and copies that markup into all of them.
			const contexts = await frame.evaluate(() =>
				Array.from(
					document.querySelectorAll('.builder-item--footer-menu')
				).map((el) =>
					el.getAttribute('data-customize-partial-placement-context')
				)
			);
			expect(contexts).toEqual([
				'{"device":"desktop","row":"bottom"}',
				'{"device":"mobile","row":"top"}',
			]);

			const before = await footerMenuIds(frame);
			expect(before).toEqual([
				'footer-menu-desktop-bottom',
				'footer-menu-mobile-top',
			]);

			// Changing a footer-menu setting refreshes the component partial.
			await page.evaluate(() => {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(window as any).wp
					.customize('footer-menu_style')
					.set('style-border-bottom');
			});

			// The style class only lands through a re-render, so this also proves the
			// refresh actually ran before the ids are re-checked.
			await expect(
				preview
					.locator(
						'.footer--row[data-show-on="desktop"] .nav-menu-footer'
					)
					.first()
			).toHaveClass(/style-border-bottom/);
			await expect(
				preview
					.locator(
						'.footer--row[data-show-on="mobile"] .nav-menu-footer'
					)
					.first()
			).toHaveClass(/style-border-bottom/);

			const after = await footerMenuIds(frame);
			expect(after).toEqual(before);
			await expect(preview.locator('ul#footer-menu')).toHaveCount(0);
		});
	}
);