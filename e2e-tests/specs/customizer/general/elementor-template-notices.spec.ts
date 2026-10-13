import { test, expect, Page } from '@playwright/test';

type ElementorFlags = {
	hasElementorShopTemplate: boolean;
	hasElementorProductTemplate: boolean;
};

type CustomizeSection = {
	notifications: { has: (code: string) => boolean };
};

type CustomizeWindow = Window & {
	NeveReactCustomize: { elementor: ElementorFlags };
	wp: {
		customize: {
			section: {
				(id: string): CustomizeSection | undefined;
				has: (id: string) => boolean;
				add: (section: CustomizeSection) => CustomizeSection;
			};
			Section: new (
				id: string,
				options: { params: { title: string } }
			) => CustomizeSection;
		};
	};
};

const PRODUCT_SECTION = 'neve_single_product_layout';
const SHOP_SECTION = 'woocommerce_product_catalog';

/**
 * Report both Elementor WooCommerce templates as present, as a site with
 * leftover Elementor Pro templates would.
 *
 * @param {Page} page Playwright page.
 */
const forceElementorTemplates = async (page: Page): Promise<void> => {
	await page.addInitScript(() => {
		let localized: Record<string, unknown> | undefined;
		Object.defineProperty(window, 'NeveReactCustomize', {
			configurable: true,
			get: () => localized,
			set: (value: Record<string, unknown>) => {
				localized = {
					...value,
					elementor: {
						hasElementorShopTemplate: true,
						hasElementorProductTemplate: true,
					},
				};
			},
		});
	});
};

const openCustomizer = async (page: Page): Promise<void> => {
	await page.goto('/wp-admin/customize.php');
	await page.waitForSelector('.wp-full-overlay-sidebar', {
		state: 'visible',
	});
};

test.describe('Elementor WooCommerce template notices', () => {
	test.beforeEach(async ({ page }) => {
		await forceElementorTemplates(page);
	});

	test('customizer finishes loading when the WooCommerce sections are missing', async ({
		page,
	}) => {
		const notificationErrors: string[] = [];
		page.on('pageerror', (error) => {
			if (error.message.includes('notifications')) {
				notificationErrors.push(error.message);
			}
		});

		await openCustomizer(page);

		// Registered after the Elementor check, so it only appears if init got past it.
		await expect(page.locator('#neve-style-book')).toBeVisible({
			timeout: 60_000,
		});

		const state = await page.evaluate(
			([shop, product]) => {
				const { wp, NeveReactCustomize } =
					window as unknown as CustomizeWindow;
				return {
					flags: NeveReactCustomize.elementor,
					hasShopSection: wp.customize.section.has(shop),
					hasProductSection: wp.customize.section.has(product),
				};
			},
			[SHOP_SECTION, PRODUCT_SECTION]
		);

		expect(state.flags).toEqual({
			hasElementorShopTemplate: true,
			hasElementorProductTemplate: true,
		});
		expect(state.hasShopSection).toBe(false);
		expect(state.hasProductSection).toBe(false);
		expect(notificationErrors).toEqual([]);
	});

	test('shows the Elementor template warning once the section is registered', async ({
		page,
	}) => {
		await openCustomizer(page);
		await expect(page.locator('#neve-style-book')).toBeVisible({
			timeout: 60_000,
		});

		await page.evaluate((product) => {
			const { wp } = window as unknown as CustomizeWindow;
			wp.customize.section.add(
				new wp.customize.Section(product, {
					params: { title: 'Single Product' },
				})
			);
		}, PRODUCT_SECTION);

		// The section callback resolves through a jQuery Deferred, which is async.
		await expect
			.poll(() =>
				page.evaluate(
					(product) =>
						(window as unknown as CustomizeWindow).wp.customize
							.section(product)
							?.notifications.has(
								'neve-custom-elementor-product-template'
							) ?? false,
					PRODUCT_SECTION
				)
			)
			.toBe(true);
	});
});
