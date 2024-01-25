import { test, expect } from '@playwright/test';

test.describe('Starter sites check', () => {
	test('Check frontpage', async ({ page }, testinfo) => {
		testinfo.snapshotSuffix = '';

		const starterSites = {
			'Web Agency': ['https://staging.demosites.io/web-agency-gb/'],
			Blogger: ['https://staging.demosites.io/blogger-gb/'],
			Shop: ['https://staging.demosites.io/shop-gb/'],
			'Neve 3': ['https://staging.demosites.io/neve-3-gb/'],
			Photography: ['https://staging.demosites.io/rokophoto-gb/'],
			Fitness: ['https://staging.demosites.io/fitness-gb/'],
			'Pet Shop': ['https://staging.demosites.io/pet-shop-gb/'],
			Restaurant: ['https://staging.demosites.io/restaurant-gb/'],
			'Vacation Rental': [
				'https://staging.demosites.io/vacation-rental-gb/',
			],
		};

		for (const [name, urls] of Object.entries(starterSites)) {
			await test.step(`Check ${name} starter site.`, async () => {
				for (const url of urls) {
					await page.goto(url + '?optml_off=true&onboarding=true');
					await page.keyboard.press('End');
					await page.evaluate(() => window.scrollTo(0, 0));
					await page.waitForTimeout(500);
					await expect(page).toHaveScreenshot({
						maxDiffPixelRatio: 0.18,
						fullPage: true,
					});
				}
			});
		}
	});
});
