describe('AMP Check', function () {
	before('Sets up search icon on menu top row', function () {
		cy.goToCustomizer();
		cy.aliasRestRoutes();

		cy.get('#accordion-panel-hfg_header').should('be.visible').click();

		cy.get('.top > .inner-row > .slots-right-wrap > .right > .components-button').click();
		cy.get('button').contains('Search Form').click({ force: true });

		cy.get('.responsive-switches > :nth-child(2)').click({ force: true });
		cy.get('.top > .inner-row > .slots-right-wrap > .right > .components-button').click({
			force: true,
		});
		cy.get('button').contains('Search Form').click({ force: true });
		cy.get('#save').click({ force: true });
		cy.wait('@customizerSave').then((interception) => {
			expect(interception.response.body.success).to.be.true;
			expect(interception.response.statusCode).to.equal(200);
		});
		cy.visit('/wp-admin');
		cy.get('#wp-admin-bar-logout > a').click({
			force: true,
		});
	});

	it('Checks the search box from the menu', function () {
		cy.visit('/?amp');
		cy.get(
			'.header-top.hide-on-mobile > .header--row-inner > .container > .row > .right > .builder-item > .item--inner > .component-wrap > .widget > .search-form > .search-submit',
		).as('navSearchButton');

		cy.get(
			'.header-top.hide-on-mobile > .header--row-inner > .container > .row > .right > .builder-item > .item--inner > .component-wrap > .widget > .search-form > label > .search-field',
		)
			.as('navSearchForm')
			.should('be.visible');

		cy.get('@navSearchForm').should('have.css', 'opacity', '1');

		cy.get('@navSearchForm').click();

		cy.get('@navSearchForm').should('have.focus').type('Hello');
	});

	it('Checks the sidebar menu on mobile', function () {
		cy.visit('/?amp');
		cy.viewport('iphone-x');

		cy.get('#header-menu-sidebar').as('navSidebar').should('not.be.visible');

		cy.get('.menu-mobile-toggle .navbar-toggle').as('navToggle').should('be.visible').click();

		cy.get('@navSidebar').should('be.visible');
		cy.get('@navSidebar')
			.find('.navbar-toggle')
			.should('be.visible')
			.should('have.class', 'active')
			.click();

		cy.get('@navSidebar').should('not.be.visible');
	});

	it('Checks the sidebar sub-menu', function () {
		cy.visit('/?amp');
		cy.viewport('iphone-x');

		cy.get('.menu-mobile-toggle .navbar-toggle').click();

		cy.get('#header-menu-sidebar').as('navSidebar').should('be.visible');

		cy.get('@navSidebar').find('.amp-caret-wrap').first().click();

		cy.get('@navSidebar').find('.has-caret').first().should('have.class', 'dropdown-open');

		cy.get('@navSidebar')
			.find('.amp-caret-wrap')
			.first()
			.closest('li')
			.find('.sub-menu')
			.should('be.visible');

		cy.get('@navSidebar').find('.amp-caret-wrap').first().click();

		cy.get('@navSidebar')
			.find('.amp-caret-wrap')
			.first()
			.closest('li')
			.find('.sub-menu')
			.should('not.be.visible');
	});
});
