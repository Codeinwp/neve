describe('Single product - Exclusive products', function () {
	before('Sets up the customizer', function () {
		cy.fixture('woocommerce/single-product-setup').then((componentSetup) => {
			cy.setCustomizeSettings(componentSetup);
		});
	});
	it('Checks up frontend', function () {
		cy.visit('/product/beanie/');
		cy.get('h2').contains('Exclusive Products');
		cy.get('.exclusive').should('be.visible');
		cy.get('.dots-nav').should('be.visible');
	});
});
