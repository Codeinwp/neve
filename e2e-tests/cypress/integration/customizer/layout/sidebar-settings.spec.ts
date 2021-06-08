describe('Sidebar/Content Settings', function () {
	it('Sidebar site wide on front end.', function () {
		cy.fixture('customizer/layout/sidebar-settings').then((sidebarSetup) => {
			cy.setCustomizeSettings(sidebarSetup.site_wide).then(() => {
				cy.visit('/');
			});
		});
		//Index
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-index-posts').should('have.css', 'max-width', '50%');

		//Page
		cy.visit('/sample-page');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-single-page-wrap').should('have.css', 'max-width', '50%');

		//Author archive
		cy.visit('/?author=1');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-index-posts').should('have.css', 'max-width', '50%');

		//Single Post
		cy.visit('/hello-world');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '50%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-single-post-wrap').should('have.css', 'max-width', '50%');
	});

	it('Sidebar advanced on front end.', function () {
		cy.fixture('customizer/layout/sidebar-settings').then((sidebarSetup) => {
			cy.setCustomizeSettings(sidebarSetup.advanced).then(() => {
				cy.visit('/');
			});
		});
		//Index
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '80%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-index-posts').should('have.css', 'max-width', '20%');

		//Page
		cy.visit('/sample-page');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '30%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-single-page-wrap').should('have.css', 'max-width', '70%');

		//Author archive
		cy.visit('/');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '80%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		cy.get('.nv-index-posts').should('have.css', 'max-width', '20%');

		//Single Post
		cy.visit('/hello-world');
		cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '30%');
		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-right');
		cy.get('.nv-single-post-wrap').should('have.css', 'max-width', '70%');
	});
});
