const fonts = {
	general: 'Arapey',
	headings: 'Allerta Stencil',
};

function aliasRestRoutes() {
	const home = Cypress.config().baseUrl;
	cy.server()
		.route( 'POST', home + '/wp-admin/admin-ajax.php' )
		.as( 'customizerSave' );
}

/**
 * Set font family inside i
 *
 * @param controlSelector
 * @param fontFamily
 */
function setFontFamilyControl( controlSelector, fontFamily ) {
	cy.get( controlSelector ).as( 'control' );

	cy.get( '@control' )
		.should( 'be.visible' )
		.and( 'contain', 'Abc' )
		.and( 'contain', 'Font Family' );

	cy.get( '@control' ).find( '.neve-typeface-control button' ).click();

	cy.get( '@control' ).find( '.popover-content' ).should( 'be.visible' );

	// Scroll popover to bottom and make sure that we're seeing load more.
	cy.get( '@control' )
		.find( '.neve-fonts-list li' )
		.then( ( $el ) => {
			const count = $el.length;
			cy.get( '@control' )
				.find( '.neve-fonts-list' )
				.scrollTo( 'bottom' );
			cy.get( '@control' ).find( 'li.load-more' ).should( 'be.visible' );
			// Wait to load more.
			cy.wait( 2000 );
			// Make sure we have more fonts loaded.
			cy.get( '@control' )
				.find( '.neve-fonts-list li' )
				.its( 'length' )
				.should( 'be.gte', count );
		} );
	// Search for fontFamily.
	cy.get( '@control' )
		.find( '.search .components-text-control__input' )
		.type( fontFamily );

	// Check that we found exactly 3 fonts.
	cy.get( '@control' )
		.find( '.neve-fonts-list li a' )
		.should( 'have.length', 2 )
		.and( 'contain', fontFamily );

	// Click on fontFamily font.
	cy.get( '@control' )
		.find( '.neve-fonts-list li a' )
		.contains( fontFamily )
		.click();
}

describe( 'Font Family', function () {
	const BEFORE = () => {
		cy.setCustomizeSettings( {
			neve_body_font_family: fonts.general,
			neve_headings_font_family: fonts.headings,
		} );
	};

	const AFTER = () => {
		cy.setCustomizeSettings( {
			neve_body_font_family: '',
			neve_headings_font_family: '',
		} );
	};

	before( () => BEFORE() );
	after( () => AFTER() );

	it( 'Font Family on Front End', function () {
		cy.visit( '/markup-html-tags-and-formatting/' );

		cy.get( 'body' )
			.should( 'have.css', 'font-family' )
			.and( 'match', new RegExp( fonts.general, 'g' ) );

		cy.get( 'h1, h2, h3, h4, h5, h6' )
			.should( 'have.css', 'font-family' )
			.and( 'match', new RegExp( fonts.headings, 'g' ) );
	} );

	it( 'Test Font Family inside the Editor', function () {
		cy.visit( '/markup-html-tags-and-formatting/' );
		cy.get( '#wp-admin-bar-edit > a' ).click();
		cy.clearWelcome();
		cy.get( '.editor-styles-wrapper .block-editor-writing-flow p' ).as(
			'body'
		);
		cy.get( '@body' )
			.should( 'have.css', 'font-family' )
			.and( 'match', new RegExp( fonts.general, 'g' ) );

		[ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ].forEach( function ( heading ) {
			cy.get( `.editor-styles-wrapper ${ heading }` )
				.should( 'have.css', 'font-family' )
				.and( 'match', new RegExp( fonts.headings, 'g' ) );
		} );
	} );
} );
