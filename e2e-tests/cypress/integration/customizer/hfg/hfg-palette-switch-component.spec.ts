describe('Palette Switch component', function () {
	before('Setup by adding a new palette', function () {
		cy.fixture('customizer/hfg/hfg-palette-switch-component').then((setup) => {
			cy.setCustomizeSettings(setup);
		});
	});

	it('Changes the color palette by clicking', function () {
		cy.visit('/');
		cy.get('h2').should('have.css', 'color', 'rgb(57, 57, 57)');
		cy.get('.icon > svg > path').click();
		cy.get('h2').should('have.css', 'color', 'rgb(255, 255, 255)');
	});

	it('Removes collor palette from website', function () {});
});

describe('Palette Swich auto', function () {
	before('Setup', function () {});

	it('Automatically changes the color palette based on system config', function () {});
});
