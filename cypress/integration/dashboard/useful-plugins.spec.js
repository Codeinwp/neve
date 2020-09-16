describe('Useful Plugins Tab - Install Optimole', () => {
  const home = Cypress.config().baseUrl

  beforeEach(() => {
	cy.login()
	cy.visit('/wp-admin/themes.php?page=neve-welcome#plugins')
	cy.server()
	cy.route({ method: 'POST', url: home + '/wp-admin/admin-ajax.php'}).as('adminAjax')
	cy.route({ method: 'POST', url: home + '/wp-admin/upload.php?page=optimole'}).as('optimoleActivation')
	cy.get('.tab-content.plugins').as('pluginsTab')
  })

  it('Installs Plugins', () => {
	cy.get('@pluginsTab').find('.plugin.card').should('have.length.greaterThan', 4)
	cy.get('@pluginsTab').find('.plugin.optimole-wp button').then((btn)=> {
		if(btn.text().includes('Install')){
			btn.trigger("click");
			cy.wait('@adminAjax').then((req) => {
				expect(req.status).to.equal(200)
				expect(req.response.body.success).to.equal(true)
			})
		}
	});
  })

  it('Activates Plugins', () => {
	cy.get('@pluginsTab').find('.plugin.optimole-wp button').as('button')
	cy.get('@button').contains('Activate').click()
	cy.get('@button').should('contain', 'Deactivate')

	cy.reload()
	cy.get('@button').should('contain', 'Deactivate').click()
	cy.get('@button').should('contain', 'Activate')

	cy.reload()
	cy.get('@button').should('contain', 'Activate').click()
	cy.get('@button').should('contain', 'Deactivate')
  })
})
