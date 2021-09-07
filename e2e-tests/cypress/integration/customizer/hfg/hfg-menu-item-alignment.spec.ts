describe('Menu item alignment', function () {
	before('Setup customizer', function () {
		cy.fixture('customizer/hfg/menu-item-alignment-setup').then((setup) => {
			cy.setCustomizeSettings(setup);
		});
	});
	it('Checks up item alignment', function () {
		cy.visit('/');
		cy.findByRole('button', {
			name: /navigation menu/i,
		}).click();
		cy.get('.menu-item-title-wrap')
			.contains('About The Tests')
			.should('have.css', 'text-align', 'left');
		cy.get(
			'#nv-primary-navigation-sidebar > .menu-item-1643 > [href="http://localhost:8080/level-1/"] > .caret-wrap',
		).click();
		cy.get('.menu-item-title-wrap').contains('Level 2').should('have.css', 'text-align', 'left');
	});
});
