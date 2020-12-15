describe( 'Header Builder Margin Control', function() {
	it( 'Sets up Margin for the Primary Menu Component', function() {
		cy.login();
		aliasRestRoutes();
		setupCustomizer();
		cy.wait( '@customizerSave' ).then( (req) => {
			expect( req.response.body.success ).to.be.true;
			expect( req.status ).to.equal( 200 );
			cy.wait( 2000 );
			checkFrontEnd();
		} );
	} );
} );

function aliasRestRoutes() {
	let home = Cypress.config().baseUrl;
	cy.server().
			route( 'POST', home + '/wp-admin/admin-ajax.php' ).
			as( 'customizerSave' );
}

function setupCustomizer() {
	// Login to wp and redirect to customizer.
	cy.goToCustomizer();

	// Open customizer panel.
	cy.get( '#accordion-panel-hfg_header' ).should( 'be.visible' ).
			click();

	// Check if Primary Menu component is visible and click it.
	cy.get(
			'.hfg--builder-show .hfg--panel-desktop .hfg--row-main .grid-stack-item[title="Primary Menu"]' ).
			should( 'be.visible' ).
			click();

	// Switch to layout tab.
	cy.get( '#customize-control-primary-menu_tabs [data-tab="layout"]' ).
			should( 'be.visible' ).
			click();

	// Increase Top Margin value
	cy.get(
			'#customize-control-primary-menu_component_margin .top-input' ).
			click().
			type( '{uparrow}{uparrow}' ).
			trigger( 'change' );

	// Check if linked values
	cy.get(
			'#customize-control-primary-menu_component_margin .top-input' ).
			should( 'have.value', '2' );
	cy.get(
			'#customize-control-primary-menu_component_margin .bottom-input' ).
			should( 'have.value', '2' );
	cy.get(
			'#customize-control-primary-menu_component_margin .left-input' ).
			should( 'have.value', '2' );
	cy.get(
			'#customize-control-primary-menu_component_margin .right-input' ).
			should( 'have.value', '2' );

	// Click on Reset button
	cy.get(
			'#customize-control-primary-menu_component_margin button.reset' ).
			click();

	// Check if Reset button works
	cy.get(
			'#customize-control-primary-menu_component_margin .top-input' ).
			should( 'have.value', '0' );
	cy.get(
			'#customize-control-primary-menu_component_margin .bottom-input' ).
			should( 'have.value', '0' );
	cy.get(
			'#customize-control-primary-menu_component_margin .left-input' ).
			should( 'have.value', '0' );
	cy.get(
			'#customize-control-primary-menu_component_margin .right-input' ).
			should( 'have.value', '0' );

	// Unlink values
	cy.get(
			'#customize-control-primary-menu_component_margin button.link' ).
			click();

	// Increase Top Margin value
	cy.get(
			'#customize-control-primary-menu_component_margin .top-input' ).
			click().
			type( '{uparrow}{uparrow}{uparrow}' ).
			trigger( 'change' );

	// Decrease Bottom Padding value
	cy.get(
			'#customize-control-primary-menu_component_margin .bottom-input' ).
			click().
			type( '{downarrow}' ).
			trigger( 'change' );

	cy.get( '#save' ).click();
}

function checkFrontEnd() {
	cy.visit( '/' );

	cy.get( '.builder-item--primary-menu' ).should( 'be.visible' );
	cy.get( '.builder-item--primary-menu' ).
			should( 'have.css', 'margin-top', '3px' );
	cy.get( '.builder-item--primary-menu' ).
			should( 'have.css', 'margin-bottom', '-1px' );
}
