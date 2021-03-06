describe('Header Builder Margin Control', function () {
	before(function () {
		cy.fixture('customizer/hfg/margin-control-setup').then((marginSetup) => {
			cy.setCustomizeSettings(marginSetup);
		});
		cy.visit('/');
	});
	it('Sets up Margin for the Primary Menu Component', function () {
		cy.get('.builder-item--primary-menu').should('be.visible');
		cy.get('.builder-item--primary-menu').should('have.css', 'margin-top', '3px');
		cy.get('.builder-item--primary-menu').should('have.css', 'margin-bottom', '-1px');
	});
});
