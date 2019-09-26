describe( 'Header Builder Padding Control', function() {
    it( 'Sets up Padding for the Logo Control', function() {
        cy.login();
        aliasRestRoutes();
        setupCustomizer();
        /*cy.wait( '@customizerSave' ).then( (req) => {
            expect( req.response.body.success ).to.be.true;
            expect( req.status ).to.equal( 200 );
            cy.wait(2000);
            checkFrontEnd();
        } );*/
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
    cy.visit( '/wp-admin/customize.php' );

    // Open customizer panel.
    cy.get( '#accordion-panel-hfg_header' ).should( 'be.visible' ).click();

    // Check if Logo and Site title component is visible and click it.
    cy.get(
        '.hfg--builder-show > .hfg--cb-inner > .hfg--cb-body > .hfg--panel-desktop > .hfg--cp-rows > .hfg--cb-row > .hfg--row-inner > .hfg--cb-items > .for-s-title_tagline' ).
        should( 'be.visible' ).
        click();

    // Switch to layout tab.
    cy.get( '#customize-control-logo_tabs [data-tab="layout"]' ).
        should( 'be.visible' ).
        click();

    // Increase Top Padding value
    /*cy.get( '#customize-control-logo_component_padding > .neve-responsive-sizing > .nv-sizing-item > div > #top-input' ).
        type('{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}');*/

    // Increase Top Padding value
    cy.get( '#customize-control-logo_component_padding > .neve-responsive-sizing > .nv-sizing-item > div > #top-input' ).
        invoke('val', 30).
        trigger('change');




    cy.get( '#save' ).click();
}