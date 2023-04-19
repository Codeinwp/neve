import { test, expect, devices } from '@playwright/test';

const runMenuARIATest = () => {
	test('Test ARIA Menu Expanded', async ({page}) => {
		await page.goto('/');

		// Check ARIA attribute for expanded state is false when menu is closed.
		await expect(
			page.getByRole('button', {name: 'Navigation Menu'})
		).toHaveAttribute('aria-expanded', 'false');
		await page.getByRole('button', {name: 'Navigation Menu'}).click();

		// Check ARIA attribute for expanded state is true when menu is open.
		await expect(
			page.getByRole('button', {name: 'Navigation Menu'})
		).toHaveAttribute('aria-expanded', 'true');

		// Close the menu from the overlay. Check ARIA attribute for expanded state is false when menu is closed.
		await page.locator('.header-menu-sidebar-overlay').click({force: true});
		await expect(
			page.getByRole('button', {name: 'Navigation Menu'})
		).toHaveAttribute('aria-expanded', 'false');

		// Open the menu from the button. Check ARIA attribute for expanded state is true when menu is open.
		await page.getByRole('button', {name: 'Navigation Menu'}).click();
		await expect(
			page.getByRole('button', {name: 'Navigation Menu'})
		).toHaveAttribute('aria-expanded', 'true');

		// Close the menu from the button. Check ARIA attribute for expanded state is false when menu is closed.
		await page.getByRole('button', {name: 'Navigation Menu'}).click();
		await expect(
			page.getByRole('button', {name: 'Navigation Menu'})
		).toHaveAttribute('aria-expanded', 'false');
	});
};

test.use({
	...devices['iPhone 13'],
});

test.describe('Menu ARIA iPhone 13', () => {
	runMenuARIATest();
});

test.use({
	...devices['Pixel 5'],
});

test.describe('Menu ARIA Pixel 5', () => {
	runMenuARIATest();
});
