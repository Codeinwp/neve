describe('Sidebar/Content Settings', function () {
	context('Sidebar site wide on front end.', function () {
		beforeEach(function () {
			cy.fixture('customizer/layout/sidebar-settings').then((sidebarSetup) => {
				cy.setCustomizeSettings(sidebarSetup.site_wide);
			});
		});

		it('Page', function () {
			cy.visit('/sample-page');
			cy.reload();
			cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '50%');
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
			cy.get('.nv-single-page-wrap').should('have.css', 'max-width', '50%');
		});
		it('Author archive', function () {
			cy.visit('/?author=1');
			cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '50%');
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
			cy.get('.nv-index-posts').should('have.css', 'max-width', '50%');
		});
		it('Single Post', function () {
			cy.visit('/hello-world');
			cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '50%');
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
			cy.get('.nv-single-post-wrap').should('have.css', 'max-width', '50%');
		});
		it('Index', function () {
			cy.visit('/');
			cy.wait(2000);
			cy.reload();
			cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '50%');
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
			cy.get('.nv-index-posts').should('have.css', 'max-width', '50%');
		});
	});

	context('Sidebar advanced on front end.', function () {
		beforeEach(function () {
			cy.fixture('customizer/layout/sidebar-settings').then((sidebarSetup) => {
				cy.setCustomizeSettings(sidebarSetup.advanced);
			});
		});

		it('Page', function () {
			cy.visit('/sample-page');
			cy.reload();
			cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '30%');
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
			cy.get('.nv-single-page-wrap').should('have.css', 'max-width', '70%');
		});
		it('Author archive', function () {
			cy.visit('/?author=1');
			cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '80%');
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
			cy.get('.nv-index-posts').should('have.css', 'max-width', '20%');
		});
		it('Single Post', function () {
			cy.visit('/hello-world');
			cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '30%');
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-right');
			cy.get('.nv-single-post-wrap').should('have.css', 'max-width', '70%');
		});
		it('Index', function () {
			cy.visit('/');
			cy.wait(2000);
			cy.reload();
			cy.get('.nv-sidebar-wrap').should('have.css', 'max-width', '80%');
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
			cy.get('.nv-index-posts').should('have.css', 'max-width', '20%');
		});
	});
});
