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
	// Add more properties as needed
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
