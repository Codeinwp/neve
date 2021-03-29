describe('Color Control', function () {
	const rgbColor = 'rgb(253, 143, 106)';

	before('Setup Color Control - Customizer', function () {
		cy.fixture('customizer/general/color-control-setup').then((colorSetup) => {
			cy.setCustomizeSettings(colorSetup);
		});
	});

	it('Test Color Control - Front End', function () {
		cy.visit('/');
		cy.get('.header-main-inner').should('have.css', 'color').and('eq', rgbColor);
	});
});
