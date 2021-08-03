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

		// Add product to cart
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
				cy.findAllByRole('link', {
					name: /remove this item/i,
				}).click({ multiple: true });
			});
		cy.get('.cart-count').should('have.text', '0');
	});

	it('Enables Checkout page button on mini cart when at least one product is on cart', function () {
		cy.visit('/product/sunglasses/');
		cy.findByRole('button', {
			name: /add to cart/i,
		}).click();

		cy.get('.nv-icon > svg')
			.realHover({ pointer: 'mouse', position: 'center' })
			.then(() => {
				//Checks if the view cart exists
				cy.findByRole('link', {
					name: /view cart/i,
				});

				//Clicks on the Checkout button
				cy.findByRole('link', {
					name: /checkout/i,
				}).click();
			});
		cy.url().should('contain', '/checkout');
	});
});

describe.skip('Header Mini Cart Style'), function () {};
