const fonts = {
	general: 'Arapey',
	headings: 'Allerta Stencil',
};

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
