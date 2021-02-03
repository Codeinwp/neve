describe('Useful Plugins Tab - Install Optimole', () => {
	beforeEach(() => {
		cy.login();
		cy.visit('/wp-admin/themes.php?page=neve-welcome#plugins');
		cy.intercept('POST', '/wp-admin/admin-ajax.php').as('adminAjax');
		cy.get('.tab-content.plugins').as('pluginsTab');
	});

	it('Installs Plugins', () => {
		cy.get('@pluginsTab')
			.find('.plugin.card')
			.should('have.length.greaterThan', 4);
		cy.get('@pluginsTab')
			.find('.plugin.optimole-wp button')
			.then((btn) => {
				if (btn.text().includes('Install')) {
					btn.trigger('click');
					cy.wait('@adminAjax').then((interception) => {
						expect(interception.response.statusCode).to.equal(200);
						expect(interception.response.body.success).to.equal(
							true
						);
					});
				}
			});
	});

	it('Activates Plugins', () => {
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
