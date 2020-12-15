const setup = {
	textTransform: 'lowercase',
	fontWeight: '100',
	fontSize: {
		suffix: { mobile: 'px', tablet: 'px', desktop: 'px' },
		mobile: '10',
		tablet: '11',
		desktop: '12',
	},
	lineHeight: {
		suffix: { mobile: 'em', tablet: 'em', desktop: 'em' },
		mobile: '4',
		tablet: '3',
		desktop: '2',
	},
	letterSpacing: { mobile: '3', tablet: '2', desktop: '1' },
};

describe( 'Blog Typography', function () {
	it( 'Sets up blog typography in customizer', function () {
		cy.goToCustomizer();
		cy.window().then( ( win ) => {
				win.wp.customize
					.control( 'neve_archive_typography_post_title' )
					.setting.set( setup );
				win.wp.customize
					.control( 'neve_archive_typography_post_excerpt' )
					.setting.set( setup );
				win.wp.customize
					.control( 'neve_archive_typography_post_meta' )
					.setting.set( setup );
				win.wp.customize
					.control( 'neve_single_post_typography_post_title' )
					.setting.set( setup );
				win.wp.customize
					.control( 'neve_single_post_typography_post_meta' )
					.setting.set( setup );
				win.wp.customize
					.control( 'neve_single_post_typography_comments_title' )
					.setting.set( setup );
		} );
		aliasRestRoutes();
		cy.get( '#save' ).click();
		cy.wait( '@customizerSave' ).then( ( req ) => {
			expect( req.response.body.success ).to.be.true;
			expect( req.status ).to.equal( 200 );
			cy.wait( 2000 );
		} );
	} );

	it( 'Test blog typography on frontend', function () {
		const settings = [
			{
				pageToVisit: '/',
				titleSelector: '.blog-entry-title',
				metaSelector: '.blog .nv-meta-list li',
				excerptSelector: '.entry-summary',
			},
			{
				pageToVisit: '/template-comments/',
				titleSelector: '.nv-title-meta-wrap .entry-title',
				metaSelector: '.single .nv-meta-list li',
				commentsSelector: '.single .comment-reply-title',
			},
		];

		const deviceMap = {
			desktop: {
				height: 1080,
				width: 1920,
			},
			tablet: {
				height: 1024,
				width: 768,
			},
			mobile: {
				height: 667,
				width: 375,
			},
		};

		for ( const i in settings ) {
			const currentSettings = settings[ i ];

			cy.visit( currentSettings.pageToVisit );
			cy.get( currentSettings.titleSelector ).each( function ( elem ) {
				testTransformAndWeight( elem );
			} );
			cy.get( currentSettings.metaSelector ).each( function ( elem ) {
				testTransformAndWeight( elem );
			} );
			if ( currentSettings && currentSettings.excerptSelector ) {
				cy.get( currentSettings.excerptSelector ).each( function (
					elem
				) {
					testTransformAndWeight( elem );
				} );
			}
			if ( currentSettings && currentSettings.commentsSelector ) {
				cy.get( currentSettings.commentsSelector ).each( function (
					elem
				) {
					testTransformAndWeight( elem );
				} );
			}

			Object.keys( deviceMap ).map( ( device ) => {
				// Change viewport.
				cy.viewport(
					deviceMap[ device ].width,
					deviceMap[ device ].height
				);

				cy.get( currentSettings.titleSelector ).each( function (
					elem
				) {
					testSizeLheightSpacing( elem, device );
				} );

				cy.get( currentSettings.metaSelector ).each( function ( elem ) {
					testSizeLheightSpacing( elem, device );
				} );

				if ( currentSettings && currentSettings.excerptSelector ) {
					cy.get( currentSettings.excerptSelector ).each( function (
						elem
					) {
						testSizeLheightSpacing( elem, device );
					} );
				}

				if ( currentSettings && currentSettings.commentsSelector ) {
					cy.get( currentSettings.commentsSelector ).each( function (
						elem
					) {
						testSizeLheightSpacing( elem, device );
					} );
				}
			} );
		}
	} );
} );

/**
 * Test text transform and font weight
 *
 * @param elem
 */
function testTransformAndWeight( elem ) {
	// Test text transform.
	cy.get( elem )
		.should( 'have.css', 'text-transform' )
		.and( 'match', new RegExp( setup.textTransform.toLowerCase(), 'g' ) );

	// Test font weight
	cy.get( elem )
		.should( 'have.css', 'font-weight' )
		.and( 'match', new RegExp( setup.fontWeight, 'g' ) );
}

/**
 * Test font size, line height and letter spacing
 *
 * @param elem
 * @param device
 */
function testSizeLheightSpacing( elem, device ) {
	// Test font size.
	cy.get( elem )
		.should( 'have.css', 'font-size' )
		.and( 'match', new RegExp( setup.fontSize[ device ] + 'px', 'g' ) );

	// Test line height.
	cy.get( elem )
		.should( 'have.css', 'line-height' )
		.and( 'match', new RegExp( setup.lineHeight[ device ], 'g' ) );

	// Test letter spacing.
	cy.get( elem )
		.should( 'have.css', 'letter-spacing' )
		.and( 'match', new RegExp( setup.letterSpacing[ device ], 'g' ) );
}

/**
 * Alias routes
 */
function aliasRestRoutes() {
	const home = Cypress.config().baseUrl;
	cy.server()
		.route( 'POST', home + '/wp-admin/admin-ajax.php' )
		.as( 'customizerSave' );
}
