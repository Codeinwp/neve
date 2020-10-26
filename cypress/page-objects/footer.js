export class Footer {
	enterFooterMenu() {
		cy.visit( '/wp-admin/customize.php' );
		cy.get( '#accordion-panel-hfg_footer' ).should( 'be.visible' ).click();
	}

	selectChangeCopyright() {
		cy.get( 'a' ).contains( 'Change Copyright' ).click();
	}

	changeFooterText( text ) {
		cy.get( '#_customize-input-footer_copyright_content' )
			.click()
			.clear()
			.type( text );
	}

	publishChanges() {
		cy.get( '#save' ).should( 'be.visible' ).click();
		cy.wait( '@customizerSave' ).then( ( req ) => {
			expect( req.response.body.success ).to.be.true;
			expect( req.status ).to.equal( 200 );
			cy.wait( 2000 );
		} );
	}

	validateCopyrightTextUpdated( text ) {
		cy.visit( '/' );
		cy.get( 'div[data-item-id="footer_copyright"]' )
			.should( 'be.visible' )
			.and( 'have.class', `${ elems.builder }--footer_copyright` )
			.and( 'have.class', 'item--inner' )
			.find( '.component-wrap' )
			.should( 'be.visible' )
			.contains( text );
	}

	selectLayoutMeunu() {
		cy.get( '.footer_copyright_component_align' ).click( { force: true } );
	}

	alignHorizontalLayout( position ) {
		cy.get(
			`#customize-control-footer_copyright_component_align button[aria-label="${ position }"]`
		).click( { force: true } );
	}

	validateHorizontalLayout( pos ) {
		cy.visit( '/' );
		cy.get( elems.footerSection )
			.should( 'be.visible' )
			.and( 'have.class', elems.builder )
			.and( 'have.class', elems.verticalPosition() )
			.and( 'have.class', elems.horizontalPosition( pos ) );
	}

	alignVerticalLayout( position ) {
		cy.get(
			`#customize-control-footer_copyright_component_vertical_align button[aria-label="${ position }"]`
		).click( { force: true } );
	}

	validateVerticalLayout( pos ) {
		cy.visit( '/' );
		cy.get( elems.footerSection )
			.should( 'be.visible' )
			.and( 'have.class', elems.builder )
			.and( 'have.class', elems.horizontalPosition() )
			.and( 'have.class', elems.verticalPosition( pos ) );
	}

	increaseLinkedSpacing( type, times ) {
		const spaceType = elems[ type ];
		cy.get( `${ spaceType } .top-input` )
			.click()
			.type( generateInput( times ) )
			.trigger( 'change' );
	}

	checkLinkedSpacingValues( type, number ) {
		const spaceType = elems[ type ];
		cy.get( `${ spaceType } .top-input` ).should( 'have.value', number );
		cy.get( `${ spaceType } .bottom-input` ).should( 'have.value', number );
		cy.get( `${ spaceType } .left-input` ).should( 'have.value', number );
		cy.get( `${ spaceType } .right-input` ).should( 'have.value', number );
	}

	resetSpacing( type ) {
		const spaceType = elems[ type ];
		cy.get( `${ spaceType } button.reset` ).click();
	}

	toggleLinkSpacingValues( type ) {
		const spaceType = elems[ type ];
		cy.get( `${ spaceType } button.link` ).click();
	}

	editSpacing( type, position, number, change ) {
		const spaceType = elems[ type ];
		cy.get( `${ spaceType } .${ position }-input` )
			.click()
			.type( generateInput( number, change ) )
			.trigger( 'change' );
	}

	validateSpacing( type, top, right, bottom, left ) {
		cy.visit( '/' );
		cy.get( elems.footerCopyrightStyle )
			.should( 'be.visible' )
			.should( 'have.css', `${ type }-top` )
			.and( 'contain', `${ top }px` );
		cy.get( elems.footerCopyrightStyle )
			.should( 'have.css', `${ type }-right` )
			.and( 'contain', `${ right }px` );
		cy.get( elems.footerCopyrightStyle )
			.should( 'have.css', `${ type }-bottom` )
			.and( 'contain', `${ bottom }px` );
		cy.get( elems.footerCopyrightStyle )
			.should( 'have.css', `${ type }-left` )
			.and( 'contain', `${ left }px` );
	}

	selectStyleMenu() {
		cy.get( '.footer_copyright_color' ).click( { force: true } );
	}

	changeTextColor( color ) {
		cy.get(
			'#customize-control-footer_copyright_color button.is-secondary'
		).click();
		cy.get( '#inspector-text-control-0' ).click().clear().type( color );
	}

	changeTypography(
		textTransform,
		fontWeight,
		fontSize,
		lineHeight,
		letterSpacing
	) {
		cy.get(
			'#customize-control-footer_copyright_footer_copyright_typography_wrap'
		).click();
		// change text-transform
		cy.get( '#inspector-select-control-12' ).select( textTransform );
		//change line weight
		cy.get( '#inspector-select-control-13' ).select( fontWeight );
		// change font size
		cy.get( elems.typographyInputUnit( 'font-size' ) ).click();
		cy.get( elems.typographyInput( 'font-size' ) )
			.click()
			.type( generateInput( fontSize ) )
			.trigger( 'change' );
		// change line height
		cy.get( elems.typographyInputUnit( 'line-height' ) ).click();
		cy.get( elems.typographyInput( 'line-height' ) )
			.click()
			.type( generateInput( lineHeight ) )
			.trigger( 'change' );
		// change letter spacing
		cy.get( elems.typographyInput( 'letter-spacing' ) )
			.click()
			.type( generateInput( letterSpacing ) )
			.trigger( 'change' );
	}

	validateStyles(
		textColor,
		textTransform,
		fontWeight,
		fontSize,
		lineHeight,
		letterSpacing
	) {
		cy.visit( '/' );
		cy.get( elems.footerCopyrightTextStyle )
			.should( 'be.visible' )
			.should( 'have.css', 'color' )
			.and( 'contain', `${ hexToRgb( textColor ) }` );
		cy.get( elems.footerCopyrightTextStyle )
			.should( 'have.css', 'text-transform' )
			.and( 'contain', `${ textTransform.toLowerCase() }` );
		cy.get( elems.footerCopyrightTextStyle )
			.should( 'have.css', 'font-weight' )
			.and( 'contain', `${ fontWeight }` );
		cy.get( elems.footerCopyrightTextStyle )
			.should( 'have.css', 'font-size' )
			.and( 'contain', `${ fontSize }px` );
		cy.get( elems.footerCopyrightTextStyle )
			.should( 'have.css', 'line-height' )
			.and( 'contain', `${ lineHeight }px` );
		cy.get( elems.footerCopyrightTextStyle )
			.should( 'have.css', `letter-spacing` )
			.and( 'contain', `${ letterSpacing }px` );
	}
}

const elems = {
	footerSection: 'div[data-section="hfg_footer_layout_bottom"] > div',
	builder: 'builder-item',
	verticalPosition: ( position = 'middle' ) => `hfg-item-v-${ position }`,
	horizontalPosition: ( position = 'center' ) => `desktop-${ position }`,
	padding: '#customize-control-footer_copyright_component_padding',
	footerCopyrightStyle: 'div[data-section="footer_copyright"]',
	margin: '#customize-control-footer_copyright_component_margin',
	typographyInput: ( style ) =>
		`#customize-control-footer_copyright_component_typeface .${ style } input[type=number]`,
	typographyInputUnit: ( style ) =>
		`#customize-control-footer_copyright_component_typeface .${ style } .is-small:nth-child(2)`,
	footerCopyrightTextStyle: '.component-wrap',
};

const generateInput = ( number, change = 'increase' ) => {
	let input = '';
	const text = change === 'increase' ? 'uparrow' : 'downarrow';
	for ( let i = 0; i < number; i++ ) {
		input += `{${ text }}`;
	}
	return input;
};

const hexToRgb = ( hex ) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
	return result
		? `rgb(${ parseInt( result[ 1 ], 16 ) }, ${ parseInt(
				result[ 2 ],
				16
		  ) }, ${ parseInt( result[ 3 ], 16 ) })`
		: null;
};
