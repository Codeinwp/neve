describe( 'Starter Sites VR - https://demosites.io/original/', () => {
    let pages = [];
    it( 'Check frontpage', () => {
        cy.visit( "https://demosites.io/original/" );
		cy.captureDocument();
        cy.get( '#nv-primary-navigation-main' ).then( $headerMenu => {
            [ ...$headerMenu.find( '.menu-item a' ) ].forEach( $url => {
                pages.push( $url.href );
            } );
        } );
    } );

    it( 'Check additional pages', () => {
        pages.forEach( page => {
            cy.visit( page );
            cy.captureDocument();
        } );
    } );

} );
