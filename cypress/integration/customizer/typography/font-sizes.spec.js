const setup = {
	general: {
		transform: 'Lowercase',
		weight: '500',
		fontSize: {
			desktop: '12',
			tablet: '11',
			mobile: '10'
		},
		lineHeight: {
			desktop: '2',
			tablet: '3',
			mobile: '4'
		},
		letterSpacing: {
			desktop: '1',
			tablet: '2',
			mobile: '3'
		}
	}
};

function aliasRestRoutes() {
	let home = Cypress.config().baseUrl;
	cy.server().
			route( 'POST', home + '/wp-admin/admin-ajax.php' ).
			as( 'customizerSave' );
}

function changeNumberInputValue(input, value) {
	cy.get( input ).
			clear( {force: true} ).
			type( '{leftarrow}' + value + '{rightarrow}{backspace}' );
}

/**
 * Set single typography control.
 *
 * @param controlSelector
 * @param values
 */
function setTypographyControl(controlSelector, values) {
	cy.get( controlSelector ).
			as( 'control' );

	cy.get( '@control' ).
			should( 'be.visible' ).
			and( 'contain', 'Text Transform' ).
			and( 'contain', 'Font Weight' ).
			and( 'contain', 'Font Size' ).
			and( 'contain', 'Line Height' ).
			and( 'contain', 'Letter Spacing' );

	// Change text transform.
	cy.get( '@control' ).
			find( '.neve-typeface-control button[aria-label="' + values.transform +
					'"]' ).
			should( 'be.visible' ).
			click();

	// Change font weight.
	cy.get( '@control' ).
			find( 'select' ).
			select( values.weight );

	let devices = ['desktop', 'tablet', 'mobile'],
			controls = ['fontSize', 'lineHeight', 'letterSpacing'];

	devices.map( (device) => {
		cy.get( '@control' ).find( 'button.' + device ).click();
		// Change font size.
		cy.get( '@control' ).
				find( '.font-size input' ).
				as( 'fontSize' );

		cy.get( '@control' ).
				find( '.line-height input' ).
				as( 'lineHeight' );

		cy.get( '@control' ).
				find( '.letter-spacing input' ).
				as( 'letterSpacing' );

		controls.map( control => {
			cy.get( '@' + control ).invoke( 'val' ).then( value => {
				// Make sure value is default.
				cy.get( '@' + control ).should( 'have.value', value );
				// Change the value.
				changeNumberInputValue( '@' + control, values[control][device] );
				// Value was changed?
				cy.get( '@' + control ).should( 'have.value', values[control][device] );
				// Reset to old value.
				cy.get( '@' + control ).
						closest( '.neve-responsive-sizing' ).
						find( 'button' ).
						click();
				// Make sure value has been reset.
				cy.get( '@' + control ).should( 'have.value', value );
				// Change the value.
				changeNumberInputValue( '@' + control, values[control][device] );
			} );
		} );
	} );
}

describe( 'Typography Control', function() {
	it( 'Sets up customizer Typography', function() {
		cy.login();
		cy.visit( '/wp-admin/customize.php' );

		// Setup general.
		cy.get( '.accordion-section' ).contains( 'Typography' ).click();
		cy.get( '.accordion-section' ).contains( 'General' ).click();
		setTypographyControl( '#customize-control-neve_typeface_general',
				setup.general );
		aliasRestRoutes();
		cy.get( '#save' ).click();
		cy.wait( '@customizerSave' ).then( (req) => {
			expect( req.response.body.success ).to.be.true;
			expect( req.status ).to.equal( 200 );
			cy.wait( 2000 );
		} );
	} );

	it( 'Test Typography on Front End', function() {
		cy.visit( '/markup-html-tags-and-formatting/' );

		// Test text transform.
		cy.get( 'body' ).
				should( 'have.css', 'text-transform' ).
				and( 'match',
						new RegExp( setup.general.transform.toLowerCase(), 'g' ) );

		// Test font weight.
		cy.get( 'body' ).
				should( 'have.css', 'font-weight' ).
				and( 'match',
						new RegExp( setup.general.weight, 'g' ) );

		let deviceMap = {
			'desktop': {
				height: 1080, width: 1920
			},
			'tablet': {
				height: 1024, width: 768
			},
			'mobile': {
				height: 667, width: 375
			}
		};

		Object.keys( deviceMap ).map( device => {
			// Change viewport.
			cy.viewport( deviceMap[device].width, deviceMap[device].height );

			// Test font size.
			cy.get( 'body' ).
					should( 'have.css', 'font-size' ).
					and( 'match',
							new RegExp( setup.general.fontSize[device] + 'px', 'g' ) );

			// Test line height.
			cy.get( 'body' ).
					should( 'have.css', 'line-height' ).
					and( 'match',
							new RegExp( setup.general.lineHeight[device], 'g' ) );

			// Test letter spacing.
			cy.get( 'body' ).
					should( 'have.css', 'letter-spacing' ).
					and( 'match',
							new RegExp( setup.general.letterSpacing[device], 'g' ) );
		} );
	} );

	it( 'Test Typography inside the Editor', function() {
		cy.visit( '/markup-html-tags-and-formatting/' );
		cy.get( '#wp-admin-bar-edit > a' ).click();

		cy.get( '.editor-styles-wrapper .wp-block p' ).
				first().
				as( 'editorBody' );
		// Test text transform.
		cy.get( '@editorBody' ).
				should( 'have.css', 'text-transform' ).
				and( 'match',
						new RegExp( setup.general.transform.toLowerCase(), 'g' ) );

		// Test font weight.
		cy.get( '@editorBody' ).
				should( 'have.css', 'font-weight' ).
				and( 'match',
						new RegExp( setup.general.weight, 'g' ) );

		// Test font size.
		cy.get( '@editorBody' ).
				should( 'have.css', 'font-size' ).
				and( 'match',
						new RegExp( setup.general.fontSize['desktop'] + 'px', 'g' ) );

		// Test line height.
		cy.get( '@editorBody' ).
				should( 'have.css', 'line-height' ).
				and( 'match',
						new RegExp( setup.general.lineHeight['desktop'], 'g' ) );

		// Test letter spacing.
		cy.get( '@editorBody' ).
				should( 'have.css', 'letter-spacing' ).
				and( 'match',
						new RegExp( setup.general.letterSpacing['desktop'], 'g' ) );
	} );
} );
