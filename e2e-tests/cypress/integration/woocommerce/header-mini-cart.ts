describe('Header Mini Cart Functionality', function () {
	context('Desktop', function () {
		beforeEach(function () {
			cy.fixture('woocommerce/header-mini-cart').then((setup) => {
				cy.setCustomizeSettings(setup.desktopFunctionality);
			});
			cy.viewport(1920, 1080);
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
			cy.visit('/product/album/');
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

	context('Mobile', function () {
		beforeEach(function () {
			cy.fixture('woocommerce/header-mini-cart').then((setup) => {
				cy.setCustomizeSettings(setup.mobileFunctionality);
			});
			cy.viewport('iphone-xr');
		});

		it('Visit the cart page after clicking on the mini cart icon', function () {
			cy.visit('/shop');
			cy.findByRole('link', {
				name: /cart/i,
			}).click();
			cy.url().should('contain', '/cart');
		});
		it('Update value of products in cart after adding a product', function () {
			let countBefore = 0;

			// Add product to cart
			cy.visit('/product/album');
			cy.get(
				'.header-bottom.hide-on-desktop > .header--row-inner > .container > .row > .right > .builder-item > .item--inner > .component-wrap > .responsive-nav-cart > .cart-icon-wrapper > .cart-count',
			)
				.invoke('text')
				.then((count) => {
					countBefore = parseInt(count);
					cy.findByRole('button', {
						name: /add to cart/i,
					}).click();
					const countExpect = ++countBefore;
					cy.get(
						'.header-bottom.hide-on-desktop > .header--row-inner > .container > .row > .right > .builder-item > .item--inner > .component-wrap > .responsive-nav-cart > .cart-icon-wrapper > .cart-count',
					).should('have.text', countExpect);
				});
		});

		it('Update value of products in cart after clearing the cart', function () {
			cy.visit('/cart');
			cy.findByRole('link', {
				name: /remove this item/i,
			}).click({ multiple: true });
			cy.findByRole('link', {
				name: /cart 0/i,
			});
		});
	});
});

describe('Header Mini Cart Style', function () {
	const devices = [
		{
			name: 'Desktop',
			preset: 'macbook-16',
		},
		{
			name: 'Phone',
			preset: 'iphone-xr',
		},
		{ name: 'Tablet', preset: 'ipad-mini' },
	];

	before(function () {
		cy.fixture('woocommerce/header-mini-cart').then((setup) => {
			cy.setCustomizeSettings(setup.style);
		});
		cy.visit('/shop');
	});

	devices.forEach((device) => {
		context(device.name, function () {
			beforeEach(function () {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				cy.viewport(device.preset);
			});

			it('Check style for the mini cart', function () {
				cy.get('.nv-icon > svg')
					.should('have.css', 'color', 'rgb(118, 5, 5)')
					.and('have.css', 'fill', 'rgb(118, 5, 5)')
					.and('have.css', 'width', '80px');
			});

			it('Check margin and padding', function () {
				cy.get('[data-item-id="header_cart_icon"]')
					.should('have.css', 'padding-bottom', '0px')
					.and('have.css', 'padding-top', '0px')
					.and('have.css', 'padding-left', '10px')
					.and('have.css', 'padding-right', '10px')
					.and('have.css', 'margin-bottom', '0px')
					.and('have.css', 'margin-top', '0px')
					.and('have.css', 'margin-left', '0px')
					.and('have.css', 'margin-right', '0px');
			});
		});
	});

	context('Desktop-only', function () {
		beforeEach(function () {
			cy.viewport(1920, 1080);
		});

		it('Check hover style', function () {
			cy.get('.nv-icon > svg')
				.realHover()
				.should('have.css', 'color', 'rgb(18, 90, 50)')
				.and('have.css', 'fill', 'rgb(18, 90, 50)')
				.and('have.css', 'width', '80px');
		});
	});
});
