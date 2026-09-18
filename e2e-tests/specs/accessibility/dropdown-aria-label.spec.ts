import { test, expect, devices } from "@playwright/test";

test.use({
	...devices["Pixel 5"],
});

/**
 * The sample-data env ships a must-use plugin that widens wp_kses_allowed_html
 * for every context. The mobile dropdown toggle label must still be plain text.
 * Regression test for #4623.
 */
test("mobile dropdown toggle aria-label is plain text", async ({ page }) => {
	await page.goto("/?device=pixel5");
	await page.getByRole("button", { name: "Navigation Menu" }).click();

	const toggles = page.locator(
		"#nv-primary-navigation-mobile-sidebar button.caret-wrap"
	);
	await expect(toggles.first()).toBeVisible();

	for (const label of await toggles.evaluateAll((buttons) =>
		buttons.map((b) => b.getAttribute("aria-label") || "")
	)) {
		expect(label).toMatch(/^Toggle \S/);
		expect(label).not.toContain("<");
	}
});
