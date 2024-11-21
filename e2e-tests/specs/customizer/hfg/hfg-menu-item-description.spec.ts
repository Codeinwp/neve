import { test, expect } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/menu-item-alignment-setup.json';

test.describe('Menu item description', function () {
	test.beforeAll(async ({ browser, request, baseURL }) => {
		await setCustomizeSettings('hfgMenuItemAlignment', data, {
			request,
			baseURL,
		});

		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto('/wp-admin/edit-tags.php?taxonomy=category');
		await page.getByRole('textbox', { name: 'Name' }).click();
		await page
			.getByRole('textbox', { name: 'Name' })
			.fill('ADescriptionCat');
		await page.getByRole('textbox', { name: 'Slug' }).click();
		await page
			.getByRole('textbox', { name: 'Slug' })
			.fill('adescriptioncat');
		await page.getByRole('textbox', { name: 'Description' }).click();
		await page
			.getByRole('textbox', { name: 'Description' })
			.fill('Some Description for the category');
		await page.getByRole('button', { name: 'Add New Category' }).click();
		await page.goto('wp-admin/nav-menus.php');

		await page.waitForSelector('.menu-name');
		await page.locator('.menu-name').fill('My New Menu');
		await page.getByLabel('Primary Menu').check();
		await page.locator('#save_menu_footer ').click();

		await page.locator('#add-category h3').click();
		await page
			.locator('#taxonomy-category-tabs')
			.getByRole('link', { name: 'View All' })
			.click();
		await page.getByLabel('ADescriptionCat').check();

		await Promise.all([
			page.waitForResponse(
				(res) =>
					res.url().includes('wp-admin/admin-ajax.php') &&
					res.status() === 200
			),
			page.getByRole('button', { name: 'Add to Menu' }).click(),
		]);

		await page.keyboard.press('End');
		await page.waitForTimeout(500);

		await page.locator('#add-post-type-page h3').click();
		await page
			.locator('#posttype-page-tabs')
			.getByRole('link', { name: 'View All' })
			.click();
		await page.getByLabel('Sample Page').last().check();

		await Promise.all([
			page.waitForResponse(
				(res) =>
					res.url().includes('wp-admin/admin-ajax.php') &&
					res.status() === 200
			),
			page.getByRole('button', { name: 'Add to Menu' }).click(),
		]);

		await page.keyboard.press('End');
		await page.waitForTimeout(500);

		await expect(
			page.locator('#menu-to-edit li.menu-item:last-child a.item-edit')
		).toBeVisible();
		await page
			.locator('#menu-to-edit li.menu-item:last-child a.item-edit')
			.click({ force: true });
		await page.waitForTimeout(500);
		await page
			.locator(
				'#menu-to-edit li.menu-item:last-child .menu-item-settings button.menus-move-right'
			)
			.click({ force: true });
		await page.getByRole('button', { name: 'Save Menu' }).click();
	});

	test.afterAll(async ({ browser, request, baseURL }) => {
		const context = await browser.newContext();
		const page = await context.newPage();

		await page.goto('/wp-admin/edit-tags.php?taxonomy=category');

		await page.getByLabel('Select ADescriptionCat').check();
		await page.locator('#bulk-action-selector-top').selectOption('delete');
		await page.locator('#doaction').click();
	});

	test('Checks up item alignment', async ({ page }) => {
		await page.goto('/?test_data=hfgMenuItemAlignment');

		await page
			.locator(
				'.primary-menu-ul.nav-ul.menu-desktop li.menu-item.menu-item-has-children:last-child'
			)
			.hover();
		await expect(page.locator('.neve-mm-description')).toHaveCount(0);
	});
});
