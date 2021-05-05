describe('Sidebar/Content Settings', function () {
	before('Setup customizer site wide Sidebar settings.', function () {
		cy.fixture('customizer/layout/sidebar-settings').then((sidebarSetup) => {
			cy.setCustomizeSettings(sidebarSetup);
		});
	});

	it('Sidebar site wide on front end.', function () {
		//Index
		cy.visit('/');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width').and('eq', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-index-posts').should('have.css', 'max-width').and('eq', '50%');

		//Page
		cy.visit('/sample-page');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width').and('eq', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-single-page-wrap').should('have.css', 'max-width').and('eq', '50%');

		//Author archive
		cy.visit('/?author=1');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width').and('eq', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-index-posts').should('have.css', 'max-width').and('eq', '50%');

		//Single Post
		cy.get('.widget_recent_entries').first().find('a').first().click();
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width').and('eq', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-single-post-wrap').should('have.css', 'max-width').and('eq', '50%');
	});

	it('Sidebar advanced on front end.', function () {
		//Index
		cy.visit('/');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width').and('eq', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-index-posts').should('have.css', 'max-width').and('eq', '50%');

		//Page
		cy.visit('/sample-page');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width').and('eq', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-single-page-wrap').should('have.css', 'max-width').and('eq', '50%');

		//Author archive
		cy.visit('/?author=1');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width').and('eq', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-index-posts').should('have.css', 'max-width').and('eq', '50%');

		//Single Post
		cy.get('.widget_recent_entries').first().find('a').first().click();
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width').and('eq', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-single-post-wrap').should('have.css', 'max-width').and('eq', '50%');
	});
});
