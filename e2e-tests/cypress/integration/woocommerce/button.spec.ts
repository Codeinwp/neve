describe('Buttons', function () {
	before('Set up customizer', function () {
		cy.fixture('woocommerce/button-setup').then((componentSetup) => {
			cy.setCustomizeSettings(componentSetup);
		});
	});
	it('Checks up Header button, Add to cart button', function () {
		cy.visit('/product/beanie/');
		checksButton('Button');
		checksButton('Add to cart');
	});
});

const checksButton = (selector: string) => {
	cy.get('.button')
		.contains(selector)
		.should('have.css', 'color', 'rgb(4, 177, 24)')
		.and('have.css', 'background-color', 'rgb(255, 255, 255)')
		.and('have.css', 'border', '1px solid rgb(4, 177, 24)')
		.and('have.css', 'text-transform', 'capitalize')
		.and('have.css', 'font-size', '15px');
};
