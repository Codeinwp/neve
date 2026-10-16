import { test, expect, Locator, Page } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import data from '../../../fixtures/customizer/typography/letter-spacing-reset.json';

type Device = 'desktop' | 'tablet' | 'mobile';

type CustomizeWindow = Window & {
	wp: {
		customize: {
			(id: string): {
				get: () => { letterSpacing: Record<Device, string | number> };
			};
			previewedDevice: (device: Device) => void;
		};
	};
};

/**
 * Open the Customizer on a section and wait for a control to render.
 *
 * @param {Page}   page    Playwright page.
 * @param {string} section Section id to autofocus.
 * @param {string} control Control id to wait for.
 */
const openControl = async (
	page: Page,
	section: string,
	control: string
): Promise<Locator> => {
	await page.goto(
		`/wp-admin/customize.php?test_name=letterSpacingReset&autofocus[section]=${section}`
	);
	const wrap = page.locator(`#customize-control-${control}`);
	await expect(wrap.locator('.letter-spacing input')).toBeVisible();

	return wrap;
};

/**
 * Switch the Customizer preview device.
 *
 * @param {Page}   page   Playwright page.
 * @param {Device} device Device to preview.
 */
const previewDevice = (page: Page, device: Device): Promise<void> =>
	page.evaluate((d) => {
		(window as unknown as CustomizeWindow).wp.customize.previewedDevice(d);
	}, device);

/**
 * Read the body typeface desktop letter spacing from the Customizer setting.
 *
 * @param {Page} page Playwright page.
 */
const storedDesktopLetterSpacing = (page: Page): Promise<string | number> =>
	page.evaluate(
		() =>
			(window as unknown as CustomizeWindow).wp
				.customize('neve_typeface_general')
				.get().letterSpacing.desktop
	);

test.describe('Typeface number controls reset state', function () {
	test.beforeAll(async ({ request, baseURL }) => {
		await setCustomizeSettings('letterSpacingReset', data, {
			request,
			baseURL,
		});
	});

	test('Zero letter spacing shows as default', async ({ page }) => {
		const control = await openControl(
			page,
			'neve_typography_general',
			'neve_typeface_general'
		);
		const input = control.locator('.letter-spacing input');
		const reset = control.locator('.letter-spacing .reset');

		await expect(input).toHaveValue('0');
		await expect(reset).toHaveCount(0);

		// Stored as a string, as typed values are.
		await previewDevice(page, 'tablet');
		await expect(input).toHaveValue('0');
		await expect(reset).toHaveCount(0);

		await previewDevice(page, 'desktop');
		await input.fill('1');
		await expect(reset).toHaveCount(1);

		await reset.click();
		await expect(input).toHaveValue('0');
		await expect(reset).toHaveCount(0);
	});

	test('Negative letter spacing can be typed from zero', async ({ page }) => {
		const control = await openControl(
			page,
			'neve_typography_general',
			'neve_typeface_general'
		);
		const input = control.locator('.letter-spacing input');

		await expect(input).toHaveValue('0');
		await input.selectText();
		await page.keyboard.type('-1');

		await expect(input).toHaveValue('-1');
		expect(await storedDesktopLetterSpacing(page)).toBe('-1');
	});

	test('Cleared letter spacing saves 0 and shows it on blur', async ({
		page,
	}) => {
		const control = await openControl(
			page,
			'neve_typography_general',
			'neve_typeface_general'
		);
		const input = control.locator('.letter-spacing input');

		await input.fill('1');
		await input.selectText();
		await page.keyboard.press('Backspace');

		await expect(input).toHaveValue('');
		expect(await storedDesktopLetterSpacing(page)).toBe(0);

		await input.blur();
		await expect(input).toHaveValue('0');
	});

	test('Untouched empty defaults have no reset', async ({ page }) => {
		const control = await openControl(
			page,
			'neve_buttons_section',
			'neve_button_typeface'
		);

		for (const field of ['font-size', 'line-height', 'letter-spacing']) {
			await expect(control.locator(`.${field} input`)).toHaveValue('');
			await expect(control.locator(`.${field} .reset`)).toHaveCount(0);
		}

		const input = control.locator('.letter-spacing input');
		await input.fill('0');
		await expect(input).toHaveValue('0');
		await expect(control.locator('.letter-spacing .reset')).toHaveCount(1);
	});
});
