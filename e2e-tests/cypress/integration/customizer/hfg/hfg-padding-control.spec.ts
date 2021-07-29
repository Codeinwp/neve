describe('Header Builder Padding Control', function () {
	before(function () {
		cy.fixture('customizer/hfg/padding-control').then((paddingSetup) => {
			cy.setCustomizeSettings(paddingSetup);
		});
		cy.visit('/');
	});

	it('Sets up Padding for the Logo Component', function () {
		cy.get('.builder-item--logo').should('be.visible');
		cy.get('.builder-item--logo').should('have.css', 'padding-top').and('contain', '11px');
		cy.get('.builder-item--logo').should('have.css', 'padding-bottom').and('contain', '9px');
	});
});
