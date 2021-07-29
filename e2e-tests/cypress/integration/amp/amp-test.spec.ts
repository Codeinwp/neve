describe('AMP Check', function () {
	before('Sets up search icon on menu top row', function () {
		cy.fixture('amp/amp-setup').then((setup) => {
			cy.setCustomizeSettings(setup);
		});
	});

	it('Checks the search box from the menu', function () {
		cy.visit('/?amp');
		cy.get(
			'.header-top.hide-on-mobile > .header--row-inner > .container > .row > .right > .builder-item > .item--inner > .component-wrap > .widget > .search-form > .search-submit',
		).as('navSearchButton');

		cy.findByPlaceholderText(/upper search/i)
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
