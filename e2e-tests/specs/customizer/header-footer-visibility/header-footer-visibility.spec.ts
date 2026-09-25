import { test, expect } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';

const HEADER_WRAPPER = 'header.header';
const FOOTER_WRAPPER = '#site-footer';
const SKIP_LINK = 'a.neve-skip-link';

test.describe( 'Global header and footer visibility', function () {
	test( 'Shows both toggles in the builder panels', async function ( { page } ) {
		// The builder panels hide every section they do not know, so a registered
		// control can still be invisible. Only the browser catches that.
		await page.goto( '/wp-admin/customize.php' );
		await page.waitForSelector( '#customize-theme-controls' );

		const panels = {
			hfg_header: {
				section: 'neve_header_visibility',
				control: 'neve_disable_header',
			},
			hfg_footer: {
				section: 'neve_footer_visibility',
				control: 'neve_disable_footer',
			},
		};

		for ( const [ panel, item ] of Object.entries( panels ) ) {
			await page.click( `#accordion-panel-${ panel } h3` );

			const section = page.locator( `#accordion-section-${ item.section }` );
			await expect( section ).toBeVisible();

			await section.locator( 'h3' ).click();
			const control = page.locator( `#customize-control-${ item.control }` );
			await expect( control ).toBeVisible();

			// Assert on the structure. The label text is translated.
			await expect(
				control.locator( 'input[type="checkbox"]' )
			).toHaveCount( 1 );

			await page.goto( '/wp-admin/customize.php' );
			await page.waitForSelector( '#customize-theme-controls' );
		}
	} );

	test( 'Renders both parts when nothing is turned off', async function ( {
		page,
		request,
		baseURL,
	} ) {
		await setCustomizeSettings(
			'hf-visible',
			{ neve_disable_header: false, neve_disable_footer: false },
			{ request, baseURL }
		);
		await page.goto( '/hello-world/?test_name=hf-visible' );

		await expect( page.locator( HEADER_WRAPPER )).toHaveCount( 1 );
		await expect( page.locator( FOOTER_WRAPPER )).toHaveCount( 1 );
	} );

	test( 'Drops the header wrapper and keeps the skip link', async function ( {
		page,
		request,
		baseURL,
	} ) {
		await setCustomizeSettings(
			'hf-no-header',
			{ neve_disable_header: true },
			{ request, baseURL }
		);
		await page.goto( '/hello-world/?test_name=hf-no-header' );

		// The wrapper used to stay behind, empty, holding only the skip link.
		await expect( page.locator( HEADER_WRAPPER )).toHaveCount( 0 );
		await expect( page.locator( SKIP_LINK )).toHaveCount( 1 );

		// The rest of the page is untouched.
		await expect( page.locator( 'main#content' )).toHaveCount( 1 );
		await expect( page.locator( FOOTER_WRAPPER )).toHaveCount( 1 );
	} );

	test( 'Drops the footer and leaves the header alone', async function ( {
		page,
		request,
		baseURL,
	} ) {
		await setCustomizeSettings(
			'hf-no-footer',
			{ neve_disable_footer: true },
			{ request, baseURL }
		);
		await page.goto( '/hello-world/?test_name=hf-no-footer' );

		await expect( page.locator( FOOTER_WRAPPER )).toHaveCount( 0 );
		await expect( page.locator( HEADER_WRAPPER )).toHaveCount( 1 );
	} );

	test( 'Reaches an archive, where the page metabox never did', async function ( {
		page,
		request,
		baseURL,
	} ) {
		await setCustomizeSettings(
			'hf-archive',
			{ neve_disable_header: true, neve_disable_footer: true },
			{ request, baseURL }
		);
		await page.goto( '/?s=hello&test_name=hf-archive' );

		await expect( page.locator( 'body.search' )).toHaveCount( 1 );
		await expect( page.locator( HEADER_WRAPPER )).toHaveCount( 0 );
		await expect( page.locator( FOOTER_WRAPPER )).toHaveCount( 0 );
	} );
} );
