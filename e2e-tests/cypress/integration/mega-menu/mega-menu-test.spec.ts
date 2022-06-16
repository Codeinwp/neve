describe('Mega Menu Check', () => {
	it('Desktop Mega Menu', () => {
		cy.visit('/');

		cy.get('.header--row .neve-mega-menu').as('mm').should('exist');

		cy.get('@mm').realHover();

		cy.get('@mm').find('> .sub-menu').should('be.visible');
		cy.get('@mm').find('.neve-mm-col').should('be.visible').and('have.length', 4);
		cy.get('@mm').find('.neve-mm-divider').should('be.visible').and('have.length', 4);
		cy.get('@mm').find('.neve-mm-heading > span').should('be.visible').and('have.length', 4);

		cy.get('@mm').find('.neve-mm-col > .sub-menu > .menu-item-has-children').as('dd');

		cy.get('@dd').should('be.visible').and('have.length', 1);
		cy.get('@dd').realHover();

		cy.get('@dd').find('.sub-menu').should('be.visible');
		cy.get('@dd')
			.find('.sub-menu a')
			.should('contain', 'Submenu Link')
			.and('be.visible')
			.and('have.length', 2);
	});

	it('Mobile Mega Menu', () => {
		cy.visit('/');
		cy.viewport('iphone-x');

		cy.get('.header--row .navbar-toggle').click();

		cy.get('.header-menu-sidebar .neve-mega-menu').as('mm');

		cy.get('@mm').find(' > .wrap > .caret-wrap').click();

		cy.get('@mm').find('> .sub-menu').should('be.visible');
		cy.get('@mm').find('.neve-mm-col').should('be.visible').and('have.length', 4);
		cy.get('@mm').find('.neve-mm-divider').should('be.visible').and('have.length', 4);
		cy.get('@mm').find('.neve-mm-heading > span').should('be.visible').and('have.length', 4);

		cy.get('@mm').find('.neve-mm-col > .sub-menu > .menu-item-has-children').as('dd');

		cy.get('@dd').find('> .wrap > .caret-wrap').click();
		cy.get('@dd').find('.sub-menu').should('be.visible');
		cy.get('@dd')
			.find('.sub-menu a')
			.should('contain', 'Submenu Link')
			.and('be.visible')
			.and('have.length', 2);
	});
});
