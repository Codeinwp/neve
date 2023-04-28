import { test, expect } from '@playwright/test';
import { setCustomizeSettings, testForViewport } from '../../../utils';
import data from '../../../fixtures/customizer/layout/container-setting-setup.json';

test.describe('Container Settings', () => {
	test('Container settings', async ({ page, request, baseURL }) => {
		await test.step('Container width', async () => {
			await setCustomizeSettings('containerWidth', data.width, {
				request,
				baseURL,
			});

			await page.goto('/sample-page/?test_name=containerWidth');

			await testForViewport(
				page,
				'.single-page-container',
				{ width: 1536, height: 960 },
				{
					cssProperties: [{ property: 'max-width', value: '1200px' }],
				}
			);

			await testForViewport(
				page,
				'.single-page-container',
				{ width: 768, height: 1024 },
				{
					cssProperties: [{ property: 'max-width', value: '960px' }],
				}
			);

			await testForViewport(
				page,
				'.single-page-container',
				{ width: 375, height: 812 },
				{
					cssProperties: [{ property: 'max-width', value: '680px' }],
				}
			);
		});

		await test.step('Container style', async () => {
			await setCustomizeSettings('containerStyle', data.style, {
				request,
				baseURL,
			});

			await page.goto('/sample-page/?test_name=containerStyle');
			const pageContainer = await page.locator('.single-page-container');
			await expect(pageContainer).toHaveClass(/container-fluid/);

			await page.goto('/hello-world/?test_name=containerStyle');
			const postContainer = await page.locator('.single-post-container');
			await expect(postContainer).toHaveClass(/container-fluid/);
		});
	});
});
