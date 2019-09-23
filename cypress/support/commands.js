Cypress.Commands.add("login", () => {
	cy.visit( '/wp-admin' );
	cy.wait( 500 );
	cy.get( '#user_login' ).type( 'admin' );
	cy.get( '#user_pass' ).type( 'admin' );
	cy.get( '#wp-submit' ).click();
});
