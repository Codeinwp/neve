describe('Search Icon Component', function () {
	before(function() {
		cy.fixture('customizer/hfg/search-component-setup').then((searchSetup) => {
			cy.setCustomizeSettings(searchSetup);
		});
	});

	it('Canvas Search Works on Front End', function () {
		cy.visit('/');
		cy.get('.builder-item--header_search_responsive .menu-item-nav-search').as('searchIcon');
		cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible');
		cy.get('@searchIcon').should('have.class', 'canvas');
		cy.get('@searchIcon').find('> .nv-search').click();
		cy.get('@searchIcon').should('have.class', 'active');
		cy.get('@searchIcon').find('.nv-nav-search').should('be.visible');
		cy.get('@searchIcon').find('.close-responsive-search').click();
		cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible');
	});

	context('Minimal Search', function () {
		before('Set search to minimal', function () {
			cy.fixture('customizer/hfg/search-component-setup').then((searchSetup) => {
				searchSetup.header_search_responsive_open_type = 'minimal';
				cy.setCustomizeSettings(searchSetup);
			});
		});

		it('Minimal Search Works on Front End', function () {
			cy.visit('/');
			cy.get('.builder-item--header_search_responsive .menu-item-nav-search').as('searchIcon');
			cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible');
			cy.get('@searchIcon').should('have.class', 'minimal');
			cy.get('@searchIcon').find('> .nv-search').click();
			cy.get('@searchIcon').should('have.class', 'active');
			cy.get('@searchIcon').find('.nv-nav-search').should('be.visible');
			cy.get('.nav-clickaway-overlay').should('exist').click();
			cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible');
			cy.get('.nav-clickaway-overlay').should('not.exist');
		});
	});

	context('Floating Search', function () {
		before('Set search to floating', function () {
			cy.fixture('customizer/hfg/search-component-setup').then((searchSetup) => {
				searchSetup.header_search_responsive_open_type = 'floating';
				cy.setCustomizeSettings(searchSetup);
			});
		});

		it('Floating Search Works on Front End', function () {
			cy.visit('/');
			cy.get('.builder-item--header_search_responsive .menu-item-nav-search').as('searchIcon');
			cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible');
			cy.get('@searchIcon').should('have.class', 'floating');
			cy.get('@searchIcon').find('> .nv-search').click();
			cy.get('@searchIcon').should('have.class', 'active');
			cy.get('@searchIcon').find('.nv-nav-search').should('be.visible');
			cy.get('.nav-clickaway-overlay').should('exist');
			cy.get('@searchIcon').find('.close-responsive-search').click();
			cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible');
			cy.get('.nav-clickaway-overlay').should('not.exist');
		});
	});
});
