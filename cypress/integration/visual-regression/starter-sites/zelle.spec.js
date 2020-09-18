describe( 'Starter Sites VR - https://staging.demosites.io/zelle/', () => {
    let pages = [];
    it( 'Check frontpage', () => {
    	let frontpage = "https://staging.demosites.io/zelle/"
	    cy.visit(frontpage );
		cy.captureDocument();
        cy.get( '#nv-primary-navigation-main' ).then( $headerMenu => {
            [ ...$headerMenu.find( '.menu-item a' ) ].forEach( $url => {
            	let url = $url.href;
            	if(url.includes("#")){
            		return;
	            }
            	if(frontpage.replace(/\/*$/, "") === url.replace(/\/*$/, "")){
            		return;
	            }

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
