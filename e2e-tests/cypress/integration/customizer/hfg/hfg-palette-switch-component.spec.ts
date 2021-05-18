describe('Palette Switch component', function () {
	before('Setup by adding a new palette', function () {
		cy.fixture('customizer/hfg/hfg-palette-switch-component').then((setup) => {
			cy.setCustomizeSettings(setup);
		});
	});

	it('Changes the color palette by clicking', function () {
		cy.visit('/');
    cy.get('')
		cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
	});

	it('Removes collor palette from website', function () {});
});

describe('Palette Swich auto', function () {
	before('Setup', function () {});

	it('Automatically changes the color palette based on system config', function () {});
});
