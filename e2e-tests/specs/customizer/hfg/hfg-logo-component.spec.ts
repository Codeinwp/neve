import { test, expect, APIRequestContext, Page } from '@playwright/test';
import { setCustomizeSettings, testForViewport } from '../../../utils';
import data from '../../../fixtures/customizer/hfg/hfg-logo-component.json';

interface TestOptions {
	page: Page;
	request: APIRequestContext;
	baseURL?: string;
}

interface LogoComponentData {
	center: {
		// Define the shape of 'center' data
	};
	right: {
		// Define the shape of 'right' data
	};
	left: {
		// Define the shape of 'left' data
	};
	style: {
		// Define the shape of 'style' data
	};
	palette: {
		// Define the shape of 'style' data
	};
}

test.describe('Header Builder - Logo Component', function () {
	test('Checks alignment for the Logo', async ({
		page,
		request,
		baseURL,
	}) => {
		await testAlignment('Center', data, { page, request, baseURL });
		await testAlignment('Right', data, { page, request, baseURL });
		await testAlignment('Left', data, { page, request, baseURL });
	});

	test('Checks the style of the Logo', async ({ page, request, baseURL }) => {
		await setCustomizeSettings('logoStyle', data.style, {
			request,
			baseURL,
		});

		await page.goto('/?test_name=logoStyle');

		await testForViewport(
			page,
			'.site-title',
			{ width: 1536, height: 960 },
			{
				cssProperties: [
					{ property: 'font-size', value: '56px' },
					{ property: 'color', value: 'rgb(255, 0, 0)' },
				],
			}
		);

		await testForViewport(
			page,
			'.site-title',
			{ width: 768, height: 1024 },
			{
				cssProperties: [{ property: 'font-size', value: '65.6px' }],
			}
		);

		await testForViewport(
			page,
			'.site-title',
			{ width: 375, height: 812 },
			{
				cssProperties: [{ property: 'font-size', value: '65px' }],
			}
		);
	});
});

test.describe('Logo Component palette', function () {
	let page: Page;
	const logos: { id: string; url: string | null }[] = [];

	test.beforeAll(async ({ browser, request, baseURL }) => {
		page = await browser.newPage();

		// Queried instead of walked through the media grid: the newest sample-data
		// attachment is a video, and grid order differs between environments.
		// orderby=id keeps the pick stable for a given database.
		const response = await request.get(
			baseURL +
				'/wp-json/wp/v2/media?media_type=image&per_page=2&orderby=id&order=asc'
		);
		expect(response.ok()).toBeTruthy();

		const attachments = await response.json();
		expect(attachments.length).toBeGreaterThan(0);

		for (const attachment of attachments.slice(0, 2)) {
			logos.push({
				id: String(attachment.id),
				url: attachment.source_url,
			});
		}

		const { palette } = data;

		palette.logo_logo =
			'{"dark":"' +
			(logos[0]?.id || '') +
			'","light":"' +
			(logos[1]?.id || '') +
			'","same":false}';

		await setCustomizeSettings('hfgLogo', palette, {
			request,
			baseURL,
		});
	});

	test('Check light/dark-mode logo', async () => {
		await page.goto('/?test_name=hfgLogo');

		const siteLogo = await page.locator('.desktop-left .neve-site-logo');

		await expect(await siteLogo.getAttribute('src')).toBe(logos[1]?.url);

		await page.getByRole('link', { name: 'Palette Switch' }).click();

		await expect(await siteLogo.getAttribute('src')).toBe(logos[0]?.url);
	});
});

async function testAlignment(
	alignment: 'Center' | 'Right' | 'Left',
	testData: LogoComponentData,
	{ page, request, baseURL }: TestOptions
) {
	await setCustomizeSettings(
		`hfgLogo${alignment}`,
		testData[alignment.toLowerCase() as keyof LogoComponentData],
		{
			request,
			baseURL,
		}
	);

	await page.goto(`/?test_name=hfgLogo${alignment}`);
	const siteLogo = await page.locator('.nv-navbar.hide-on-mobile .site-logo');
	await expect(siteLogo).toBeVisible();
	await expect(siteLogo).toHaveCSS('text-align', alignment.toLowerCase());
}
