import { test, expect } from '@playwright/test';

type Box = { top: number; bottom: number; width: number };
type CouponBoxes = { coupon: Box; input: Box; button: Box; notice: Box };

// Guest session, so the cart does not persist into other specs.
test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Classic cart coupon error notice', function () {
	let productId: number;
	let pageId: number;
	let cartPath: string;

	test.beforeAll(async ({ request }) => {
		const product = await request.post('/wp-json/wc/v3/products', {
			data: {
				name: 'Coupon notice product',
				regular_price: '10',
				status: 'publish',
			},
		});
		expect(product.ok()).toBe(true);
		productId = (await product.json()).id;

		const page = await request.post('/wp-json/wp/v2/pages', {
			data: {
				title: 'Classic cart',
				content: '[woocommerce_cart]',
				status: 'publish',
			},
		});
		expect(page.ok()).toBe(true);
		const pageData: { id: number; link: string } = await page.json();
		pageId = pageData.id;
		cartPath = new URL(pageData.link).pathname;
	});

	test.afterAll(async ({ request }) => {
		await request.delete(`/wp-json/wc/v3/products/${productId}?force=true`);
		await request.delete(`/wp-json/wp/v2/pages/${pageId}?force=true`);
	});

	test('Invalid coupon notice gets its own full-width row', async ({
		page,
	}) => {
		await page.goto(`/?add-to-cart=${productId}`);
		await page.goto(cartPath);

		const coupon = page.locator('table.cart td.actions .coupon');

		await coupon.locator('#coupon_code').fill('neve-not-a-coupon');
		await coupon.locator('button[name="apply_coupon"]').click();
		// The alert role is only set once the cart form has been re-rendered.
		await expect(
			coupon.locator('.coupon-error-notice[role="alert"]')
		).toBeVisible();

		for (const width of [1280, 375]) {
			await page.setViewportSize({ width, height: 900 });

			// One pass: WooCommerce scrolls to the notice between reads.
			const boxes: CouponBoxes = await coupon.evaluate((el) => {
				const measure = (selector: string | null): Box => {
					const node = selector ? el.querySelector(selector) : el;
					if (!node) {
						throw new Error(`Missing ${selector} in .coupon`);
					}
					const rect = node.getBoundingClientRect();
					return {
						top: rect.top,
						bottom: rect.bottom,
						width: rect.width,
					};
				};
				return {
					coupon: measure(null),
					input: measure('#coupon_code'),
					button: measure('button[name="apply_coupon"]'),
					notice: measure('.coupon-error-notice'),
				};
			});

			expect(boxes.notice.top).toBeGreaterThanOrEqual(
				boxes.button.bottom
			);
			expect(
				Math.abs(boxes.notice.width - boxes.coupon.width)
			).toBeLessThan(2);
			expect(boxes.button.top).toBeLessThan(boxes.input.bottom);
		}
	});
});
