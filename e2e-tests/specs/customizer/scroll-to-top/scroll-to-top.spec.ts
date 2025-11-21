import { test, expect } from '@playwright/test';
import { setCustomizeSettings, scrollTo, visitAdminPage }  from '../../../utils';
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

		// Get the id of the first image to be able to apply it.
		await visitAdminPage( page, 'upload.php', '' );
		await page.locator( '.attachment' ).first().click();
		const urlString = page.url();
		const url = new URL( urlString );
		const imageId = url.searchParams.get( 'item' ) || '';

		iconTypeData.neve_scroll_to_top_type = 'image';
		iconTypeData.neve_scroll_to_top_image = parseInt( imageId );

		await setCustomizeSettings( 'stt-icon-check', iconTypeData, {
			request,
			baseURL,
		} );

		await page.goto( '/hello-world/?test_name=stt-icon-check' );
		await scrollTo( page, 'bottom' );

		const scrollToTopImage = await page.locator(
			'#scroll-to-top .scroll-to-top-image'
		);
		await expect( await scrollToTopImage.count() ).toBeGreaterThan( 0 );

		await expect( scrollToTopImage ).toHaveCSS(
			'background-image',
			/spectacles.gif/
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
