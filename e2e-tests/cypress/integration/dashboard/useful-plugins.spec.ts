describe('Useful Plugins Tab - Install Optimole Plugin', function () {
	before(function () {
		cy.aliasRestRoutes();
		cy.loginWithRequest('/wp-admin/themes.php?page=neve-welcome#plugins');
		cy.get('.templates-patterns-collection > .card-footer > .components-button')
			.should('contain', 'Install')
			.click()
			.then(() => {
				cy.wait('@customizerSave').then(() => {
					cy.reload();
				});
			});
	});
	beforeEach(function () {
		cy.loginWithRequest('/wp-admin/themes.php?page=neve-welcome#plugins');
		cy.aliasRestRoutes();
		cy.get('.optimole-wp > .card-footer > .components-button').as('cloudButton');
		cy.get('.tab-content.plugins').as('pluginsTab');
	});

	it('Installs Plugins', function () {
		cy.get('@pluginsTab').find('.plugin.card').should('have.length.greaterThan', 4);
		cy.get('@cloudButton')
			.should('contain', 'Install')
			.click()
			.then(() => {
				cy.wait('@customizerSave').then((interception) => {
					cy.log(interception.response.body);
					expect(interception.response.statusCode).to.equal(200);
					expect(interception.response.body.success).to.equal(true);
				});
			});
	});

	it('Activates Plugins', function () {
		cy.get('@cloudButton').contains('Activate').click();
		cy.get('@cloudButton').should('contain', 'Deactivate');

		cy.reload();
		cy.get('@cloudButton').should('contain', 'Deactivate').click();
		cy.get('@cloudButton').should('contain', 'Activate');

		cy.reload();
		cy.get('@cloudButton').should('contain', 'Activate').click();
		cy.get('@cloudButton').should('contain', 'Deactivate');
	});
});
