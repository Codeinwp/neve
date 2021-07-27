describe('Header Mini Cart Functionality', function () {
	before(function () {
		cy.fixture('woocommerce/header-mini-cart').then((setup) => {
			cy.setCustomizeSettings(setup);
		});
	});

	it('Open the cart page when clicking on mini cart', function () {
		cy.visit('/shop');
		/* ==== Generated with Cypress Studio ==== */
		cy.get('.nv-icon > svg > path').click();
		/* ==== End Cypress Studio ==== */
		cy.url().should('contain', '/cart');
	});

	it('Value of products is updated when adding or removing a product', function () {
		let countBefore = 0;

		// Add prodcut to cart
		cy.visit('/product/album');
		cy.get('.cart-count')
			.invoke('text')
			.then((count) => {
				countBefore = parseInt(count);
				cy.findByRole('button', {
					name: /add to cart/i,
				}).click();
				const countExpect = ++countBefore;
				cy.get('.cart-count').should('have.text', countExpect);
			});

		// Removes the product from cart
		cy.get('.nv-icon > svg')
			.realHover({ pointer: 'mouse', position: 'center' })
			.then(() => {
				cy.findByRole('link', {
					name: /remove this item/i,
				}).click();
			});
		cy.get('.cart-count').should('have.text', '0');
	});
});

describe.skip('Header Mini Cart Style'), function () {};
