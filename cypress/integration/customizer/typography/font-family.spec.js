const fonts = {
	general: 'Arapey',
	headings: 'Allerta Stencil'
};

/**
 * Set font family inside i
 * @param controlSelector
 * @param fontFamily
 */
function setFontFamilyControl(controlSelector, fontFamily) {
	cy.get( controlSelector ).
			as( 'control' );

	cy.get( '@control' ).
			should( 'be.visible' ).
			and( 'contain', 'Abc' ).
			and( 'contain', 'Font Family' );

	cy.get( '@control' ).
			find( '.neve-typeface-control button' ).
			click();

	cy.get( '@control' ).
			find( '.popover-content' ).
			should( 'be.visible' );

	// Scroll popover to bottom and make sure that we're seeing load more.
	cy.get( '@control' ).find( '.neve-fonts-list li' ).then( $el => {
		const count = $el.length;
		cy.get( '@control' ).find( '.neve-fonts-list' ).scrollTo( 'bottom' );
		cy.get( '@control' ).find( 'li.load-more' ).should( 'be.visible' );
		// Wait to load more.
		cy.wait( 2000 );
		// Make sure we have more fonts loaded.
		cy.get( '@control' ).
				find( '.neve-fonts-list li' ).
				its( 'length' ).
				should( 'be.gte', count );
	} );
	// Search for fontFamily.
	cy.get( '@control' ).
			find( '.search .components-text-control__input' ).
			type( fontFamily );

	// Check that we found exactly 3 fonts.
	cy.get( '@control' ).
			find( '.neve-fonts-list li a' ).
			should( 'have.length', 2 ).
			and( 'contain', fontFamily );

	// Click on fontFamily font.
	cy.get( '@control' ).
			find( '.neve-fonts-list li a' ).
			contains( fontFamily ).
			click();

	cy.get( '@control' ).
			closest( '.accordion-section-content' ).
			find( '.customize-section-back' ).
			should( 'be.visible' ).
			click();

}

describe( 'Font Family', function() {
	it( 'Sets up customizer Font Family', function() {
		cy.login();
		cy.visit( '/wp-admin/customize.php' );

		// Setup general.
		cy.get( '.accordion-section' ).contains( 'Typography' ).click();
		cy.get( '.accordion-section' ).contains( 'General' ).click();
		setFontFamilyControl( '#customize-control-neve_body_font_family',
				fonts.general );
		cy.get( '.accordion-section' ).contains( 'Headings' ).click();
		setFontFamilyControl( '#customize-control-neve_headings_font_family',
				fonts.headings );

		cy.aliasRestRoutes();
		cy.get( '#save' ).click();
		cy.wait( '@customizerSave' ).then( (req) => {
			expect( req.response.body.success ).to.be.true;
			expect( req.status ).to.equal( 200 );
			cy.wait( 2000 );
		} );
	} );

	it( 'Test Font Family on Front End', function() {
		cy.visit( '/markup-html-tags-and-formatting/' );

		cy.get( 'body' ).
				should( 'have.css', 'font-family' ).
				and( 'match', new RegExp( fonts.general, 'g' ) );

		cy.get( 'h1, h2, h3, h4, h5, h6' ).
				should( 'have.css', 'font-family' ).
				and( 'match', new RegExp( fonts.headings, 'g' ) );
	} );

	it( 'Test Font Family inside the Editor', function() {
		cy.visit( '/markup-html-tags-and-formatting/' );
		cy.get( '#wp-admin-bar-edit > a' ).click();
		cy.clearWelcome();
		cy.get( '.editor-styles-wrapper .block-editor-writing-flow p' ).
				as( 'body' );
		cy.get( '@body' ).should( 'have.css', 'font-family' ).
				and( 'match', new RegExp( fonts.general, 'g' ) );

		['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach( function(heading) {
			cy.get( `.editor-styles-wrapper ${heading}` ).
					should( 'have.css', 'font-family' ).
					and( 'match', new RegExp( fonts.headings, 'g' ) );
		} );
	} );
} );
