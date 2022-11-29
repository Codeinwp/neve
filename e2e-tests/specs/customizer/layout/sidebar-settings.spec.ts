import { test, expect } from '@playwright/test';
import { setCustomizeSettings, loadData } from '../../../utils';

test.describe('Sidebar/Content Settings', () => {
	let customizerData;

	test.beforeAll(async () => {
		customizerData = await loadData(
			'./fixtures/customizer/layout/sidebar-settings.json'
		);
	});

	test('Sidebar site wide on front end.', async ({
		page,
		request,
		baseURL,
	}) => {
		const data = JSON.stringify(JSON.parse(customizerData).site_wide);
		await setCustomizeSettings('sidebarSitewide', data, {
			request,
			baseURL,
		});

		await test.step('Page', async () => {
			await page.goto('/sample-page/?test_name=sidebarSitewide');
			const sidebarWrap = await page.locator('.nv-sidebar-wrap');
			await expect(sidebarWrap).toHaveCSS('max-width', '50%');
			await expect(sidebarWrap).toHaveClass(/nv-left/);
			await expect(await page.locator('.nv-single-page-wrap')).toHaveCSS(
				'max-width',
				'50%'
			);
		});

		await test.step('Author archive', async () => {
			await page.goto('/?author=1&test_name=sidebarSitewide');
			const sidebarWrap = await page.locator('.nv-sidebar-wrap');
			await expect(sidebarWrap).toHaveCSS('max-width', '50%');
			await expect(sidebarWrap).toHaveClass(/nv-left/);
			await expect(await page.locator('.nv-index-posts')).toHaveCSS(
				'max-width',
				'50%'
			);
		});

		await test.step('Single Post', async () => {
			await page.goto('/hello-world/?test_name=sidebarSitewide');
			const sidebarWrap = await page.locator('.nv-sidebar-wrap');
			await expect(sidebarWrap).toHaveCSS('max-width', '50%');
			await expect(sidebarWrap).toHaveClass(/nv-left/);
			await expect(await page.locator('.nv-single-post-wrap')).toHaveCSS(
				'max-width',
				'50%'
			);
		});

		await test.step('Index', async () => {
			await page.goto('/?test_name=sidebarSitewide');
			const sidebarWrap = await page.locator('.nv-sidebar-wrap');
			await expect(sidebarWrap).toHaveCSS('max-width', '50%');
			await expect(sidebarWrap).toHaveClass(/nv-left/);
			await expect(await page.locator('.nv-index-posts')).toHaveCSS(
				'max-width',
				'50%'
			);
		});
	});

	test('Sidebar advanced on front end.', async ({
		page,
		request,
		baseURL,
	}) => {
		const data = JSON.stringify(JSON.parse(customizerData).advanced);
		await setCustomizeSettings('sidebarAdvanced', data, {
			request,
			baseURL,
		});

		await test.step('Page', async () => {
			await page.goto('/sample-page/?test_name=sidebarAdvanced');
			const sidebarWrap = await page.locator('.nv-sidebar-wrap');
			await expect(sidebarWrap).toHaveCSS('max-width', '30%');
			await expect(sidebarWrap).toHaveClass(/nv-left/);
			await expect(await page.locator('.nv-single-page-wrap')).toHaveCSS(
				'max-width',
				'70%'
			);
		});

		await test.step('Author archive', async () => {
			await page.goto('/?author=1&test_name=sidebarAdvanced');
			const sidebarWrap = await page.locator('.nv-sidebar-wrap');
			await expect(sidebarWrap).toHaveCSS('max-width', '80%');
			await expect(sidebarWrap).toHaveClass(/nv-left/);
			await expect(await page.locator('.nv-index-posts')).toHaveCSS(
				'max-width',
				'20%'
			);
		});

		await test.step('Single Post', async () => {
			await page.goto('/hello-world/?test_name=sidebarAdvanced');
			const sidebarWrap = await page.locator('.nv-sidebar-wrap');
			await expect(sidebarWrap).toHaveCSS('max-width', '30%');
			await expect(sidebarWrap).toHaveClass(/nv-right/);
			await expect(await page.locator('.nv-single-post-wrap')).toHaveCSS(
				'max-width',
				'70%'
			);
		});

		await test.step('Index', async () => {
			await page.goto('/?test_name=sidebarAdvanced');
			const sidebarWrap = await page.locator('.nv-sidebar-wrap');
			await expect(sidebarWrap).toHaveCSS('max-width', '80%');
			await expect(sidebarWrap).toHaveClass(/nv-left/);
			await expect(await page.locator('.nv-index-posts')).toHaveCSS(
				'max-width',
				'20%'
			);
		});
	});
});
