describe('Header Builder Alignment Control', function () {
	it('Sets up alignment for the Primary Menu to Center', function () {
		cy.login();
		cy.aliasRestRoutes();
		setupCustomizer();
		alignCenter();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
			cy.wait(2000);
			checkAlignCenter();
		});
		setupCustomizer();
		alignRight();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
			cy.wait(2000);
			checkAlignRight();
		});
	});
});

function setupCustomizer() {
	// Login to wp and redirect to customizer.

	cy.goToCustomizer();

	// Open customizer panel.
	cy.get('#accordion-panel-hfg_header').should('be.visible').click();

	// Check if Logo and Site title component is visible and click it.
	cy.get(
		'.hfg--builder-show .hfg--panel-desktop .hfg--row-main .grid-stack-item[title="Logo & Site Identity"]').
	should('be.visible').
	click();

	// Switch to layout tab.
	cy.get('#customize-control-logo_tabs [data-tab="layout"]').
	should('be.visible').
	click();
}

function alignCenter() {

	// Click on align center button
	cy.get(
		'#customize-control-logo_component_align button[aria-label="Center"]').
	click();

	cy.get('#save').should('be.visible').click();
}

function checkAlignCenter() {

	cy.visit('/');

	cy.get('.desktop-center').
	should('be.visible').
	and('have.class', 'mobile-left').
	and('have.class', 'tablet-left').
	find('.site-logo').
	should('be.visible');
}

function alignRight() {

	// Click on align right button
	cy.get(
		'#customize-control-logo_component_align button[aria-label="Right"]').
	click();

	cy.get('#save').should('be.visible').click();
}

function checkAlignRight() {

	cy.visit('/');

	cy.get('.desktop-right').
	should('be.visible').
	and('have.class', 'mobile-left').
	and('have.class', 'tablet-left').
	find('.site-logo').
	should('be.visible');
}
