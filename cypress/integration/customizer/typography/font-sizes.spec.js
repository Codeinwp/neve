const SETUP = {
	fontSize: {
		suffix: {
			mobile: 'px',
			tablet: 'px',
			desktop: 'px',
		},
		mobile: '10',
		tablet: '11',
		desktop: '12',
	},
	lineHeight: {
		mobile: '4',
		tablet: '3',
		desktop: '2',
		suffix: {
			mobile: 'em',
			tablet: 'em',
			desktop: 'em',
		},
	},
	letterSpacing: {
		mobile: '3',
		tablet: '2',
		desktop: '1',
	},
	fontWeight: 500,
	textTransform: 'lowercase',
};
const DEFAULT = {
	fontSize: {
		suffix: {
			mobile: 'px',
			tablet: 'px',
			desktop: 'px',
		},
		mobile: 15,
		tablet: 16,
		desktop: 16,
	},
	lineHeight: {
		mobile: 1.6,
		tablet: 1.6,
		desktop: 1.6,
		suffix: {
			mobile: 'em',
			tablet: 'em',
			desktop: 'em',
		},
	},
	letterSpacing: {
		mobile: 0,
		tablet: 0,
		desktop: 0,
	},
	fontWeight: '400',
	textTransform: 'none',
};

describe( 'Typography Control', () => {
	const BEFORE = () => {
		cy.setCustomizeSettings( { neve_typeface_general: SETUP } );
	};

	const AFTER = () => {
		cy.setCustomizeSettings( {
			neve_typeface_general: DEFAULT,
		} );
	};

	before( () => BEFORE() );
	after( () => AFTER() );

	it( 'Test Typography on Front End', () => {
		cy.visit( '/markup-html-tags-and-formatting/' );

		// Test text transform.
		cy.get( 'body' )
			.should( 'have.css', 'text-transform' )
			.and( 'eq', 'lowercase' );

		// Test font weight.
		cy.get( 'body' )
			.should( 'have.css', 'font-weight' )
			.and( 'match', new RegExp( SETUP.fontWeight, 'g' ) );

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

		Object.keys( deviceMap ).map( ( device ) => {
			// Change viewport.
			cy.viewport(
				deviceMap[ device ].width,
				deviceMap[ device ].height
			);

			// Test font size.
			cy.get( 'body' )
				.should( 'have.css', 'font-size' )
				.and(
					'match',
					new RegExp( SETUP.fontSize[ device ] + 'px', 'g' )
				);

			// Test line height.
			cy.get( 'body' )
				.should( 'have.css', 'line-height' )
				.and( 'match', new RegExp( SETUP.lineHeight[ device ], 'g' ) );

			// Test letter spacing.
			cy.get( 'body' )
				.should( 'have.css', 'letter-spacing' )
				.and(
					'match',
					new RegExp( SETUP.letterSpacing[ device ], 'g' )
				);
		} );
	} );

	it( 'Test Typography inside the Editor', () => {
		cy.visit( '/markup-html-tags-and-formatting/' );
		cy.get( '#wp-admin-bar-edit > a' ).click();

		cy.clearWelcome();
		cy.get( '.editor-styles-wrapper .wp-block p' )
			.first()
			.as( 'editorBody' );
		// Test text transform.
		cy.get( '@editorBody' )
			.should( 'have.css', 'text-transform' )
			.and(
				'match',
				new RegExp( SETUP.textTransform.toLowerCase(), 'g' )
			);

		// Test font weight.
		cy.get( '@editorBody' )
			.should( 'have.css', 'font-weight' )
			.and( 'match', new RegExp( SETUP.fontWeight, 'g' ) );

		// Test font size.
		cy.get( '@editorBody' )
			.should( 'have.css', 'font-size' )
			.and( 'match', new RegExp( SETUP.fontSize.desktop + 'px', 'g' ) );

		// Test line height.
		cy.get( '@editorBody' )
			.should( 'have.css', 'line-height' )
			.and( 'match', new RegExp( SETUP.lineHeight.desktop, 'g' ) );

		// Test letter spacing.
		cy.get( '@editorBody' )
			.should( 'have.css', 'letter-spacing' )
			.and( 'match', new RegExp( SETUP.letterSpacing.desktop, 'g' ) );
	} );
} );
