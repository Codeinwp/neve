describe( 'Header Builder Alignment Control', function() {
    it( 'Sets up Margin for the Primary Menu Control', function() {
        cy.login();
        aliasRestRoutes();
        setupCustomizer();
        alignCenter();
        cy.wait( '@customizerSave' ).then( (req) => {
            expect( req.response.body.success ).to.be.true;
            expect( req.status ).to.equal( 200 );
            cy.wait(2000);
            checkAlignCenter();
        } );
        setupCustomizer();
        alignRight();
        cy.wait( '@customizerSave' ).then( (req) => {
            expect( req.response.body.success ).to.be.true;
            expect( req.status ).to.equal( 200 );
            cy.wait(2000);
            checkAlignRight();
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
    cy.get('#accordion-panel-hfg_header').should('be.visible').click();

    // Check if Logo and Site title component is visible and click it.
    cy.get(
        '.hfg--builder-show > .hfg--cb-inner > .hfg--cb-body > .hfg--panel-desktop > .hfg--cp-rows > .hfg--cb-row > .hfg--row-inner > .hfg--cb-items > .for-s-title_tagline' ).
        should( 'be.visible' ).
        click();

    // Switch to layout tab.
    cy.get( '#customize-control-logo_tabs [data-tab="layout"]' ).
        should( 'be.visible' ).
        click();
}

function alignCenter() {

    // Click on align center button
    cy.get('label[for="nv_customize-input-logo_component_align-radio-center"]').
        click();

    cy.get( '#save' ).should('be.visible').click();
}

function checkAlignCenter() {

    cy.visit( '/' );

    cy.get( '.hfg-item-center' ).
        should( 'be.visible' ).
        find('.site-logo').
        should('be.visible');
}

function alignRight() {

    // Click on align right button
    cy.get('label[for="nv_customize-input-logo_component_align-radio-right"]').
        click();

    cy.get( '#save' ).should('be.visible').click();
}

function checkAlignRight() {

    cy.visit( '/' );

    cy.get( '.hfg-item-right' ).
        should( 'be.visible' ).
        find('.site-logo').
        should('be.visible');
}
