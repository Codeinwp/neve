import { test, expect } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

test.describe('Form fields', function () {
	test.beforeAll(async ({ request, baseURL }) => {
		await loadData(
			'./fixtures/customizer/form-fields/form-fields-setup.json'
		).then(async (data) => {
			await setCustomizeSettings('formFieldsSearch', data, {
				request,
				baseURL,
			});
		});
	});

	test('Checks up the search field', async ({ page }) => {
		await page.goto('/hello-world/?test_name=formFieldsSearch');
		const searchBox = await page.locator('.wp-block-search__input');
		await expect(searchBox).toHaveCSS('padding', '14px');
		await expect(searchBox).toHaveCSS('color', 'rgb(47, 90, 174)');
		await expect(searchBox).toHaveCSS(
			'background-color',
			'rgb(244, 245, 247)'
		);
		await expect(searchBox).toHaveCSS('border-width', '3px');
		await expect(searchBox).toHaveCSS('border-color', 'rgb(18, 18, 18)');
		await expect(searchBox).toHaveCSS('border-radius', '4px');
		await expect(searchBox).toHaveCSS('text-transform', 'lowercase');
		await expect(searchBox).toHaveCSS('font-size', '15px');
		await expect(searchBox).toHaveCSS('line-height', '24px');
		await expect(searchBox).toHaveCSS('letter-spacing', '1.5px');
		await expect(searchBox).toHaveCSS('font-weight', '600');
	});

	test('Checks up the comment label', async ({ page }) => {
		await page.goto('/hello-world/?test_name=formFieldsSearch');
		const commentFormLabel = await page.locator(
			'.comment-form-comment label'
		);

		await expect(commentFormLabel).toHaveCSS('font-size', '15px');
		await expect(commentFormLabel).toHaveCSS('line-height', '24px');
		await expect(commentFormLabel).toHaveCSS('letter-spacing', 'normal');
		await expect(commentFormLabel).toHaveCSS('font-weight', '100');
		await expect(commentFormLabel).toHaveCSS(
			'text-transform',
			'capitalize'
		);
	});

	test('Checks up the form submit button', async ({ page }) => {
		await page.goto('/hello-world/?test_name=formFieldsSearch');

		const postSubmitButton = await page.locator('#submit');

		await expect(postSubmitButton).toHaveCSS(
			'background-color',
			'rgb(47, 90, 174)'
		);
		await expect(postSubmitButton).toHaveCSS('color', 'rgb(255, 255, 255)');
		await expect(postSubmitButton).toHaveCSS('border-radius', '3px');
		await expect(postSubmitButton).toHaveCSS('padding', '13px 15px');
	});
});
