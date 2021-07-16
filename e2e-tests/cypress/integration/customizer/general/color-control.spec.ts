describe('Color Control', function () {
	before('Setup Color Control - Customizer', function () {
		cy.fixture('customizer/general/color-control-setup').then((colorSetup) => {
			cy.setCustomizeSettings(colorSetup);
		});
	});

	it('Test Color Control - Front End', function () {
		cy.visit('/');
		cy.get('.header-main-inner').should('have.css', 'color', 'rgb(253, 143, 106)');
	});
});
