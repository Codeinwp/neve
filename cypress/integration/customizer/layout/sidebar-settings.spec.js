describe('Sidebar/Content Settings', () => {
	before('Setup customizer site wide Sidebar settings.', () => {
		cy.goToCustomizer();
		cy.aliasRestRoutes();
		cy.get('#accordion-panel-neve_layout').click();
		cy.get('#accordion-section-neve_sidebar').click();
		cy.get('#customize-control-neve_default_sidebar_layout label[data-option="left"]').click();
		cy.get('#customize-control-neve_sitewide_content_width input[type=number]')
			.type('{selectall}')
			.type(50);
		cy.get('#save').click();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
		});
	});

	after('Go back to defaults.', () => {
		cy.goToCustomizer();
		cy.aliasRestRoutes();
		cy.get('#customize-control-neve_advanced_layout_options label').click({
			force: true,
		});
		cy.get('#save').click();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
		});
		cy.reload();
		cy.get('#accordion-panel-neve_layout').click();
		cy.get('#accordion-section-neve_sidebar').click();
		cy.get('#customize-control-neve_default_sidebar_layout label[data-option="right"]').click();
		cy.get('#customize-control-neve_sitewide_content_width button').contains('Reset').click();
		cy.get('#save').click();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
		});
	});

	it('Sidebar site wide on front end.', () => {
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

	it('Setup customizer site wide Sidebar settings.', () => {
		cy.goToCustomizer();
		cy.aliasRestRoutes();
		cy.get('#accordion-panel-neve_layout').click();
		cy.get('#accordion-section-neve_sidebar').click();
		cy.get('#customize-control-neve_advanced_layout_options input').click();
		cy.get('#save').click();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
		});
		cy.reload();
		cy.get('#accordion-panel-neve_layout').click();
		cy.get('#accordion-section-neve_sidebar').click();
		cy.get('#sub-accordion-section-neve_sidebar').as('section');
		cy.get('@section').find('.customize-control-customizer-heading:not(.expanded)').click({
			multiple: true,
		});

		cy.get('#customize-control-neve_blog_archive_sidebar_layout [data-option="left"]').click();
		cy.get('#customize-control-neve_blog_archive_content_width input[type=number]')
			.type('{selectall}')
			.type(50);

		cy.get('#customize-control-neve_single_post_sidebar_layout [data-option="left"]').click();
		cy.get('#customize-control-neve_single_post_content_width input[type=number]')
			.type('{selectall}')
			.type(50);

		cy.get('#customize-control-neve_other_pages_sidebar_layout [data-option="left"]').click();
		cy.get('#customize-control-neve_other_pages_content_width input[type=number]')
			.type('{selectall}')
			.type(50);

		cy.get('#save').click();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
		});
	});

	it('Sidebar advanced on front end.', () => {
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
