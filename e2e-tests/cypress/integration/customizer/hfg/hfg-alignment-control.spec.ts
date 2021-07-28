describe('Header Builder Alignment Control', function () {
	context('Center Alignment', function () {
		before(function () {
			cy.fixture('customizer/hfg/alignment-control-setup').then((alignmentSetup) => {
				cy.setCustomizeSettings(alignmentSetup.center);
			});
		});
		it('Checks alignment for the Logo to Center', function () {
			cy.visit('/');

			cy.get('.site-logo')
				.should('be.visible')
				.and('not.have.class', 'mobile-left')
				.and('not.have.class', 'tablet-left')
				.and('have.css', 'text-align', 'center');
		});
	});

	context('Right Alignment', function () {
		before(function () {
			cy.fixture('customizer/hfg/alignment-control-setup').then((alignmentSetup) => {
				cy.setCustomizeSettings(alignmentSetup.right);
			});
		});
		it('Checks alignment for the Logo to Right', function () {
			cy.visit('/');

			cy.get('.site-logo')
				.should('be.visible')
				.and('not.have.class', 'mobile-left')
				.and('not.have.class', 'tablet-left')
				.and('have.css', 'text-align', 'right');
		});
	});
});
