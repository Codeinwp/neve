describe('Header Builder Alignment Control', () => {
	beforeEach(() => {
		// Login to wp and redirect to customizer.

		cy.goToCustomizer();

		cy.aliasRestRoutes();
		// Open customizer panel.
		cy.get('#accordion-panel-hfg_header').should('be.visible').click();

		// Check if Logo and Site title component is visible and click it.
		cy.get(
			'.hfg--builder-show .hfg--panel-desktop .hfg--row-main .grid-stack-item[title="Logo & Site Identity"]',
		)
			.should('be.visible')
			.click();

		// Switch to layout tab.
		cy.get('#customize-control-logo_tabs [data-tab="layout"]').should('be.visible').click();
	});
	it('Sets up alignment for the Logo to Center', () => {
		alignCenter();
		cy.wait('@customizerSave').then((interception) => {
			expect(interception.response.body.success).to.be.true;
			expect(interception.response.statusCode).to.equal(200);
		});
		checkAlignCenter();
	});

	it('Sets up alignment for the Logo to Right', () => {
		alignRight();
		cy.wait('@customizerSave').then((interception) => {
			expect(interception.response.body.success).to.be.true;
			expect(interception.response.statusCode).to.equal(200);
		});
		checkAlignRight();
	});
});

/**
 * Check if it is aligned to the right into customizer
 *
 * @example checkAlignRight()
 */
const checkAlignRight = () => {
	cy.visit('/');

	cy.get('.header-main .desktop-right.hfg-item-first')
		.should('be.visible')
		.and('not.have.class', 'mobile-left')
		.and('not.have.class', 'tablet-left')
		.find('.site-logo')
		.should('be.visible');
};

/**
 * Check if it is aligned to the center into customizer
 *
 * @example checkAlignCenter()
 */
const checkAlignCenter = () => {
	cy.visit('/');

	cy.get('.header-main .desktop-center.hfg-item-first')
		.should('be.visible')
		.and('not.have.class', 'mobile-left')
		.and('not.have.class', 'tablet-left')
		.find('.site-logo')
		.should('be.visible');
};

/**
 * Click on align center button into customizer
 *
 * @example cy.alignCenter()
 */
const alignCenter = () => {
	cy.get('#customize-control-logo_component_align button[aria-label="Center"]').click();

	cy.get('#save').should('be.visible').click();
};

/**
 * Click on align right button into customizer
 *
 * @example cy.alignRight()
 */
const alignRight = () => {
	cy.get('#customize-control-logo_component_align button[aria-label="Right"]').click();

	cy.get('#save').should('be.visible').click();
};
