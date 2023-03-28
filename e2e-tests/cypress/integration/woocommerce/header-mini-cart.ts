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
