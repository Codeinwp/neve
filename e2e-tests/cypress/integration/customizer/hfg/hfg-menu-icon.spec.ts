describe('Menu Icon HFG', function () {
	beforeEach(function () {
		cy.goToCustomizer();

		// Go to Menu Icon component
		cy.get('#accordion-panel-hfg_header > .accordion-section-title').click();
		cy.get('.responsive-switches > :nth-child(2)').click();
		cy.get('.right > .droppable > .builder-item > .actions > .settings > svg').click();
	});

	it('Menu Icon label', function () {
		expect(true).to.equal(true);
		cy.get('#_customize-input-nav-icon_menu_label').clear();
		cy.get('#_customize-input-nav-icon_menu_label').type('Test');
		cy.get('.nav-icon_menu_icon').click();
		cy.get('#save').click({ force: true });
		cy.viewport('iphone-6');
		cy.visit('/');
		cy.get('.nav-toggle-label').contains('Test');
	});

	it('Menu Icon variants', function () {
		cy.get('.nav-icon_menu_icon').click();
		cy.get('#inspector-select-control-4').select('minimal');
		cy.get('#save').click({ force: true });

		cy.viewport('iphone-6');
		cy.visit('/');
		cy.get('.hamburger').should('have.class', 'hamburger--minimal');
	});
});
