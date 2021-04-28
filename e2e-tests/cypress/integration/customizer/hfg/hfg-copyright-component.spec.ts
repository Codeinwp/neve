describe('Copyright component test', function () {
	before('Sets up the copyright component in footer', function () {
		cy.fixture('customizer/hfg/hfg-copyright-component-setup').then((componentSetup) => {
			cy.setCustomizeSettings(componentSetup);
		});
	});

	it('Checks the copyright component in front-end', function () {
		cy.visit('/');
		cy.contains('This is a test ' + new Date().getFullYear()).should(
			'have.css',
			'color',
			'rgb(227, 6, 6)',
		);
	});
});
