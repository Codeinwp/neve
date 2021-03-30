describe('Header Builder Padding Control', function () {
	before(function () {
		cy.fixture('customizer/hfg/padding-control').then((paddingSetup) => {
			cy.setCustomizeSettings(paddingSetup);
		});
		cy.visit('/');
	});

	it('Sets up Padding for the Logo Component', function () {
		cy.get('.site-logo').should('be.visible');
		cy.get('.site-logo').should('have.css', 'padding-top').and('contain', '11px');
		cy.get('.site-logo').should('have.css', 'padding-bottom').and('contain', '9px');
	});
});
