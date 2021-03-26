describe('Useful Plugins Tab - Install Optimole', function () {
	beforeEach(function () {
		cy.loginWithRequest();
		cy.visit('/wp-admin/themes.php?page=neve-welcome#plugins');
		cy.aliasRestRoutes();
		cy.get('.tab-content.plugins').as('pluginsTab');
	});

	it('Installs Plugins', function () {
		cy.get('@pluginsTab').find('.plugin.card').should('have.length.greaterThan', 4);
		cy.get('@pluginsTab')
			.find('.plugin.optimole-wp button')
			.click()
			.then(() => {
				cy.wait('@customizerSave').then((interception) => {
					expect(interception.response.statusCode).to.equal(200);
					expect(interception.response.body.success).to.equal(true);
				});
			});
	});

	it('Activates Plugins', function () {
		cy.get('@pluginsTab').find('.plugin.optimole-wp button').as('button');
		cy.get('@button').contains('Activate').click();
		cy.get('@button').should('contain', 'Deactivate');

		cy.reload();
		cy.get('@button').should('contain', 'Deactivate').click();
		cy.get('@button').should('contain', 'Activate');

		cy.reload();
		cy.get('@button').should('contain', 'Activate').click();
		cy.get('@button').should('contain', 'Deactivate');
	});
});
