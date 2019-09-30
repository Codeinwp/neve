describe( 'Header Builder Margin Control', function() {
    it( 'Sets up Margin for the Primary Menu Control', function() {
        cy.login();
        aliasRestRoutes();
        setupCustomizer();
        cy.wait( '@customizerSave' ).then( (req) => {
            expect( req.response.body.success ).to.be.true;
            expect( req.status ).to.equal( 200 );
            cy.wait(2000);
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
    cy.visit('/wp-admin/customize.php');

    // Open customizer panel.
    cy.get('#accordion-panel-hfg_header').should('be.visible').
        click();

    // Check if Primary Menu component is visible and click it.
    cy.get(
        '.hfg--builder-show > .hfg--cb-inner > .hfg--cb-body > .hfg--panel-desktop > .hfg--cp-rows > .hfg--cb-row > .hfg--row-inner > .hfg--cb-items > .for-s-header_menu_primary').
        should('be.visible').
        click();

    // Switch to layout tab.
    cy.get( '#customize-control-primary-menu_tabs [data-tab="layout"]' ).
        should( 'be.visible' ).
        click();

    // Increase Top Margin value
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #top-input' ).
        type('{uparrow}{uparrow}').
        trigger('change');

    // Check if linked values
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #top-input' ).
        should( 'have.value', '2' );
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #bottom-input' ).
        should( 'have.value', '2' );
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #left-input' ).
        should( 'have.value', '2' );
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #right-input' ).
        should( 'have.value', '2' );

    // Click on Reset button
    cy.get( '.nv-sizing-reset button' ).
        click();

    // Check if Reset button works
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #top-input' ).
        should( 'have.value', '0' );
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #bottom-input' ).
        should( 'have.value', '0' );
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #left-input' ).
        should( 'have.value', '0' );
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #right-input' ).
        should( 'have.value', '0' );

    // Unlink values
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-link > button' ).
        click();

    // Increase Top Margin value
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #top-input' ).
        type('{uparrow}{uparrow}{uparrow}').
        trigger('change');

    // Decrease Bottom Padding value
    cy.get( '#customize-control-primary-menu_component_margin > .neve-responsive-sizing > .nv-sizing-item > div > #bottom-input' ).
        type('{downarrow}').
        trigger('change');

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
