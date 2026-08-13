import { test, expect } from '@playwright/test';
import { setCustomizeSettings, scrollTo } from '../../../utils';
import data from '../../../fixtures/customizer/scroll-to-top/scroll-to-top-setup.json';

test.describe( 'Scroll to top', function () {
	test( 'Checks the position', async function ( { page, request, baseURL } ) {
		await setCustomizeSettings( 'stt-left', data.general, {
			request,
			baseURL,
		} );
		await page.goto( '/hello-world/?test_name=stt-left' );
		await scrollTo( page, 'bottom' );
		const scrollToTopBtn = await page.locator( '#scroll-to-top' );
		await expect( scrollToTopBtn ).toHaveCSS( 'left', '20px' );

		await setCustomizeSettings(
			'stt-right',
			{ neve_scroll_to_top_side: 'right' },
			{
				request,
				baseURL,
			}
		);
		await page.goto( '/hello-world/?test_name=stt-right' );
		await scrollTo( page, 'bottom' );
		await expect( scrollToTopBtn ).toHaveCSS( 'right', '20px' );
		await scrollToTopBtn.click();
		await page.waitForTimeout( 2000 );
		const isAtTop = await page.evaluate( () => {
			return window.scrollY === 0;
		} );
		await expect( isAtTop ).toBeTruthy();
	} );

	test( 'Checks scroll to top general settings', async function ( {
		page,
		request,
		baseURL,
	} ) {
		await setCustomizeSettings( 'stt-general', data.general, {
			request,
			baseURL,
		} );

		await page.goto( '/hello-world/?test_name=stt-general' );
		const sttButton = await page.locator( '#scroll-to-top' );

		// Checks label
		await page.evaluate( () => {
			window.scrollTo( 0, document.body.scrollHeight );
		} );
		await expect( sttButton ).toBeVisible();
		await expect(
			await sttButton.getByText( /Go up/ ).first()
		).toBeVisible();

		// Checks offset
		await scrollTo( page, 80 );
		await page.waitForTimeout( 500 );
		await expect( sttButton ).not.toBeVisible();
		await scrollTo( page, 110 );
		await page.waitForTimeout( 500 );
		await expect( sttButton ).toBeVisible();

		// Checks button padding
		await scrollTo( page, 'bottom' );
		await expect( sttButton ).toHaveCSS( 'padding', '10px 12px' );

		await page.setViewportSize( { width: 768, height: 1024 } );
		await expect( sttButton ).toHaveCSS( 'padding', '6px 8px' );

		await page.setViewportSize( { width: 375, height: 812 } );
		await expect( sttButton ).toHaveCSS( 'padding', '10px 12px' );

		// Checks border radius
		await scrollTo( page, 'bottom' );
		await expect( sttButton ).toHaveCSS( 'border-radius', '100px' );

		// Checks colors
		await scrollTo( page, 'bottom' );
		await expect( sttButton ).toHaveCSS( 'color', 'rgb(255, 0, 0)' );
		await expect( sttButton ).toHaveCSS(
			'background-color',
			'rgb(255, 255, 255)'
		);

		await sttButton.hover();
		await expect( sttButton ).toHaveCSS(
			'background-color',
			'rgb(255, 255, 255)'
		);
		await expect( sttButton ).toHaveCSS( 'color', 'rgb(255, 0, 0)' );
	} );

	test( 'Checks the icon type', async function ( {
		page,
		request,
		baseURL,
	} ) {
		const iconTypeData = Object.assign( {}, data.general );

		// Queried instead of taking the first attachment in the media grid: the
		// newest sample-data attachment is a video, and the set differs between
		// a fresh CI import and a long-lived local database.
		const mediaResponse = await request.get(
			baseURL +
				'/wp-json/wp/v2/media?media_type=image&per_page=1&orderby=id&order=asc'
		);
		expect( mediaResponse.ok() ).toBeTruthy();

		const [ attachment ] = await mediaResponse.json();
		expect( attachment ).toBeTruthy();

		iconTypeData.neve_scroll_to_top_type = 'image';
		iconTypeData.neve_scroll_to_top_image = attachment.id;

		await setCustomizeSettings( 'stt-icon-check', iconTypeData, {
			request,
			baseURL,
		} );

		await page.goto( '/hello-world/?test_name=stt-icon-check' );
		await scrollTo( page, 'bottom' );

		const scrollToTopImage = page.locator(
			'#scroll-to-top .scroll-to-top-image'
		);
		await expect( scrollToTopImage ).not.toHaveCount( 0 );

		// Asserted against the image we selected above. The theme renders it with
		// wp_get_attachment_url(), so this is the full URL, unsized.
		await expect( scrollToTopImage ).toHaveCSS(
			'background-image',
			`url("${ attachment.source_url }")`
		);

		await setCustomizeSettings( 'stt-icon-check2', data.general, {
			request,
			baseURL,
		} );
		await page.goto( '/hello-world/?test_name=stt-icon-check2' );
		await scrollTo( page, 'bottom' );
		await expect(
			await page.locator( '#scroll-to-top svg' ).count()
		).toEqual( 1 );
	} );

	test( 'Checks hiding on mobile', async function ( {
		page,
		request,
		baseURL,
	} ) {
		const hidingData = Object.assign( {}, data.general );
		hidingData.neve_scroll_to_top_on_mobile = true;

		await setCustomizeSettings( 'stt-check-hiding', hidingData, {
			request,
			baseURL,
		} );

		await page.goto( '/hello-world/?test_name=stt-check-hiding' ); // iphone-x

		const sttButton = await page.locator( '#scroll-to-top' );

		await page.setViewportSize( { width: 375, height: 812 } );
		await scrollTo( page, 'bottom' );
		await expect( sttButton ).not.toBeVisible();

		await page.setViewportSize( { width: 1440, height: 900 } );
		await scrollTo( page, 'bottom' );
		await expect( sttButton ).toBeVisible();
	} );

	test( 'Checks icon size', async function ( { page, request, baseURL } ) {
		await setCustomizeSettings( 'stt-check-icon3', data[ 'icon-check' ], {
			request,
			baseURL,
		} );

		await page.goto( '/hello-world/?test_name=stt-check-icon3' );
		await scrollTo( page, 'bottom' );

		const sttIcon = await page.locator(
			'#scroll-to-top .scroll-to-top-icon'
		);
		await expect( sttIcon ).toHaveCSS( 'width', '100px' );
		await expect( sttIcon ).toHaveCSS( 'height', '100px' );

		await page.setViewportSize( { width: 768, height: 1024 } );
		await expect( sttIcon ).toHaveCSS( 'width', '50px' );
		await expect( sttIcon ).toHaveCSS( 'height', '50px' );

		await page.setViewportSize( { width: 375, height: 812 } );
		await expect( sttIcon ).toHaveCSS( 'width', '100px' );
		await expect( sttIcon ).toHaveCSS( 'height', '100px' );
	} );
} );
