import { test, expect, devices } from '@playwright/test';

const runMenuARIATest = (deviceType = 'mobile') => {
	test('Test ARIA Menu Expanded', async ({ page }) => {
		await page.goto('/?device=' + deviceType);

		// Check ARIA attribute for expanded state is false when menu is closed.
		await expect(
			page.getByRole('button', { name: 'Navigation Menu' })
		).toHaveAttribute('aria-expanded', 'false');
		await page.getByRole('button', { name: 'Navigation Menu' }).click();

		// Check ARIA attribute for expanded state is true when menu is open.
		await expect(
			page.getByRole('button', { name: 'Navigation Menu' })
		).toHaveAttribute('aria-expanded', 'true');

		// Close the menu from the overlay. Check ARIA attribute for expanded state is false when menu is closed.
		// The overlay spans the viewport and the open sidebar covers its centre, so
		// a real click there lands on a menu link and navigates away. Dispatching
		// hits the same handler without depending on which side the sidebar is on.
		await page
			.locator('.header-menu-sidebar-overlay')
			.dispatchEvent('click');
		await expect(
			page.getByRole('button', { name: 'Navigation Menu' })
		).toHaveAttribute('aria-expanded', 'false');

		// Open the menu from the button. Check ARIA attribute for expanded state is true when menu is open.
		await page.getByRole('button', { name: 'Navigation Menu' }).click();
		await expect(
			page.getByRole('button', { name: 'Navigation Menu' })
		).toHaveAttribute('aria-expanded', 'true');

		// Close the menu from the button. Check ARIA attribute for expanded state is false when menu is closed.
		await page.getByRole('button', { name: 'Navigation Menu' }).click();
		await expect(
			page.getByRole('button', { name: 'Navigation Menu' })
		).toHaveAttribute('aria-expanded', 'false');

		// Open the menu from the button. Check ARIA attribute for expanded state is true when menu is open.
		await page.getByRole('button', { name: 'Navigation Menu' }).click();
		await expect(
			page.getByRole('button', { name: 'Navigation Menu' })
		).toHaveAttribute('aria-expanded', 'true');

		// Close the menu from the escape key. Check ARIA attribute for expanded state is false when menu is closed.
		await page.keyboard.press('Escape');
		await expect(
			page.getByRole('button', { name: 'Navigation Menu' })
		).toHaveAttribute('aria-expanded', 'false');
	});
};

test.use({
	...devices['iPhone 13'],
});

test.describe('Menu ARIA iPhone 13', () => {
	runMenuARIATest('iPhone13');
});

test.use({
	...devices['Pixel 5'],
});

test.describe('Menu ARIA Pixel 5', () => {
	runMenuARIATest('pixel5');
});
