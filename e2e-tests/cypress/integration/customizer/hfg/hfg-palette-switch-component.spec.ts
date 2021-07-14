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

	it('Removes color palette from website', function () {
		cy.setCustomizeSettings({});
		cy.visit('/');
		cy.get('.icon > svg > path').should('not.exist');
	});
});

describe('Palette Swich auto', function () {
	before('Setup', function () {
		cy.fixture('customizer/hfg/hfg-palette-switch-component').then((setup) => {
			setup.header_palette_switch_auto_adjust_color = 1;
			cy.setCustomizeSettings(setup);
		});
	});

	it('Automatically changes the color palette when dark is default', function () {
		cy.setLocalStorage('neve_user_theme', 'dark');
		cy.visit('/');
		cy.get('h2').should('have.css', 'color', 'rgb(255, 255, 255)');
	});

	it('Automatically changes the color palette when light is default', function () {
		cy.setLocalStorage('neve_user_theme', 'light');
		cy.visit('/');
		cy.get('h2').should('have.css', 'color', 'rgb(57, 57, 57)');
	});
});
