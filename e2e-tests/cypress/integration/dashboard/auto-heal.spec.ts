describe('Checks the auto-heal capability of the theme', function () {
	before(function () {
		cy.loginWithRequest();
		cy.exec(
			'docker-compose -f ../docker-compose.ci.yml run --rm -u root cli wp --allow-root option update theme_mods_neve 1',
		);
	});
	it('Verify if the theme is able to self heal', function () {
		cy.visit('/wp-admin');
		cy.contains('Warning: Illegal').should('not.exist');
		cy.visit('/');
		cy.contains('Warning: Illegal').should('not.exist');
	});
});
