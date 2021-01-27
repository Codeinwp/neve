describe('Header Builder Alignment Control', () => {
	beforeEach(() => {
		// Login to wp and redirect to customizer.

		cy.goToCustomizer();

		cy.aliasRestRoutes();
		// Open customizer panel.
		cy.get('#accordion-panel-hfg_header').should('be.visible').click();

		// Check if Logo and Site title component is visible and click it.
		cy.get(
			'.hfg--builder-show .hfg--panel-desktop .hfg--row-main .grid-stack-item[title="Logo & Site Identity"]'
		)
			.should('be.visible')
			.click();

		// Switch to layout tab.
		cy.get('#customize-control-logo_tabs [data-tab="layout"]')
			.should('be.visible')
			.click();
	});
	it('Sets up alignment for the Primary Menu to Center', () => {
		cy.alignCenter();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
		});
		cy.checkAlignCenter();
	});

	it('Sets up alignment for the Primary Menu to Right', () => {
		cy.alignRight();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
		});
		cy.checkAlignRight();
	});
});
