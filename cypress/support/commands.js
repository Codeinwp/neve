import 'cypress-file-upload';

Cypress.Commands.add("login", ( nextRoute = null ) => {
	cy.viewport( 1920, 1080 );
	cy.visit( '/wp-admin' );
	cy.wait( 500 );
	cy.get( '#user_login' ).type( 'admin' );
	cy.get( '#user_pass' ).type( 'admin' );
	cy.get( '#wp-submit' ).click();
	if( nextRoute === null ) {
		return;
	}
	cy.visit(nextRoute);
});
