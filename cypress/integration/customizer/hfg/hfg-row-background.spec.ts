describe('Header Row Background Control', function () {
	before('Setup Customizer Control', function () {
		cy.fixture('customizer/hfg/row-background-setup').then((rowSetup) => {
			cy.setCustomizeSettings(rowSetup);
		});
		cy.visit('/');
	});

	it('Background image control on front end.', function () {
		cy.get('.header-main[data-show-on="desktop"] .header--row-inner').as('row');

		cy.get('@row').should('be.visible');
		cy.get('@row').should('have.css', 'background-attachment').and('contain', 'fixed');
		cy.get('@row')
			.should('have.css', 'background-image')
			.and('contain', 'url(')
			.and('contain', 'wp-content/uploads');
	});
});
