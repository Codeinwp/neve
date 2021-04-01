describe('Useful Plugins Tab - Install Optimole Plugin', function () {
	beforeEach(function () {
		cy.loginWithRequest('/wp-admin/themes.php?page=neve-welcome#plugins');
	});

	it('Can installs Plugins', function () {
		cy.get('.tab-content.plugins').find('.plugin.card').should('have.length.greaterThan', 4);
		cy.get('.optimole-wp > .card-footer > .components-button')
			.should('have.text', 'Install')
			.and('be.enabled');
	});

	it('Can activates Plugins', function () {
		cy.get('.feedzy-rss-feeds > .card-footer > .components-button')
			.should('have.text', 'Activate')
			.and('be.enabled');
	});

	it('Can deactivates Plugins', function () {
		cy.get('.weglot > .card-footer > .components-button')
			.should('have.text', 'Deactivate')
			.and('be.enabled');
	});
});
