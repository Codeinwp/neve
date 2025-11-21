import { test, expect } from '@playwright/test';

test.describe('Style Book Modal', () => {
	test.beforeEach(async ({ page }) => {
		// First, try to go to customizer
		await page.goto('/wp-admin/customize.php');

		// Wait for customizer to fully load
		await page.waitForSelector('.wp-full-overlay-sidebar', { state: 'visible' });

		// Wait a bit more for all scripts to initialize
		await page.waitForTimeout(1000);

		// Open Style Book for all tests
		await page.getByRole('button', { name: ' Style Book' }).click();

		// Wait for Style Book to appear in the iframe
		await page
			.frameLocator('iframe[name="customize-preview-0"]')
			.locator('#nv-sb-container')
			.waitFor({ state: 'visible' });
	});

	test('should open Style Book modal when button is clicked', async ({ page }) => {
		// Check that the Style Book modal appears (already opened in beforeEach)
		const styleBookModal = page.frameLocator('iframe[name="customize-preview-0"]').locator('#nv-sb-container');
		await expect(styleBookModal).toBeVisible();

		// Check that the modal has the correct background overlay
		await expect(styleBookModal).toHaveCSS('position', 'fixed');
		await expect(styleBookModal).toHaveCSS('z-index', '999999');
	});

	test('should display all main sections in Style Book', async ({ page }) => {
		// Check for all main sections
		const iframe = page.frameLocator('iframe[name="customize-preview-0"]');
		await expect(iframe.locator('.nv-sb-section-title', { hasText: 'Palette Colors' })).toBeVisible();
		await expect(iframe.locator('.nv-sb-section-title', { hasText: 'Typography' })).toBeVisible();
		await expect(iframe.locator('.nv-sb-section-title', { hasText: 'Buttons' })).toBeVisible();
		await expect(iframe.locator('.nv-sb-section-title', { hasText: 'Form Fields' })).toBeVisible();
	});

	test('should display color swatches with correct structure', async ({ page }) => {
		// Check color grid exists
		const iframe = page.frameLocator('iframe[name="customize-preview-0"]');
		await expect(iframe.locator('.nv-sb-color-grid')).toBeVisible();

		// Check that color swatches are present
		const colorSwatches = iframe.locator('.nv-sb-color-swatch');
		await expect(colorSwatches).toHaveCount(9); // We have 9 color variables defined

		// Check first color swatch structure
		const firstSwatch = colorSwatches.first();
		await expect(firstSwatch.locator('.nv-sb-color-box')).toBeVisible();
		await expect(firstSwatch.locator('.nv-sb-color-name')).toBeVisible();

		// Verify color swatch has clickable class
		await expect(firstSwatch).toHaveClass(/builder-item-focus/);
	});

	test('should display typography elements with headings', async ({ page }) => {
		// Check typography grid exists (Style Book already opened in beforeEach)
		const iframe = page.frameLocator('iframe[name="customize-preview-0"]');
		await expect(iframe.locator('.nv-sb-typography-grid')).toBeVisible();

		// Check all heading levels are present and clickable
		for (let i = 1; i <= 6; i++) {
			const heading = iframe.locator(`.nv-sb-type-sample h${i}.builder-item-focus`);
			await expect(heading).toBeVisible();
			await expect(heading).toContainText(`Heading ${i}`);
		}

		// Check paragraph text is present and clickable
		const paragraphs = iframe.locator('p.builder-item-focus');
		await expect(paragraphs).toHaveCount(2); // We have 2 paragraphs
	});

	test('should display form elements with proper structure', async ({ page }) => {
		// Check form container exists (Style Book already opened in beforeEach)
		const iframe = page.frameLocator('iframe[name="customize-preview-0"]');
		await expect(iframe.locator('.nv-sb-form')).toBeVisible();

		// Check individual form elements
		await expect(iframe.locator('input[type="text"]')).toBeVisible();
		await expect(iframe.locator('textarea')).toBeVisible();
		await expect(iframe.locator('select')).toBeVisible();
		await expect(iframe.locator('.nv-sb-btn-primary')).toBeVisible();
	});

	test('should display buttons with proper styling', async ({ page }) => {
		// Check button group exists (Style Book already opened in beforeEach)
		const iframe = page.frameLocator('iframe[name="customize-preview-0"]');
		await expect(iframe.locator('.nv-sb-button-group')).toBeVisible();

		// Check both button types are present
		const primaryBtn = iframe.locator('.nv-sb-btn-primary.builder-item-focus');
		const secondaryBtn = iframe.locator('.nv-sb-btn-secondary.builder-item-focus');

		await expect(primaryBtn).toBeVisible();
		await expect(secondaryBtn).toBeVisible();

		await expect(primaryBtn).toContainText('Primary Button');
		await expect(secondaryBtn).toContainText('Secondary Button');
	});

	test('should close Style Book when close button is clicked', async ({ page }) => {
		// Click close button (Style Book already opened in beforeEach)
		const iframe = page.frameLocator('iframe[name="customize-preview-0"]');
		await iframe.locator('.nv-sb-close-btn').click();

		// Check that modal is hidden
		await expect(iframe.locator('#nv-sb-container')).toBeHidden();
	});

	test('should navigate to customizer sections when elements are clicked', async ({ page }) => {
		// Click on a color swatch (should navigate to colors section) - Style Book already opened in beforeEach
		const iframe = page.frameLocator('iframe[name="customize-preview-0"]');
		const colorSwatch = iframe.locator('.nv-sb-color-swatch.builder-item-focus').first();
		await colorSwatch.click();

		// Check that we're still in the customizer (Style Book should close and focus section)
		await page.waitForTimeout(500); // Give time for navigation
		await expect( page.getByRole('heading', { name: 'Customizing ▸ Global Colors & Background' }).getByText('Customizing ▸ Global') ).toBeVisible();
	});
});
