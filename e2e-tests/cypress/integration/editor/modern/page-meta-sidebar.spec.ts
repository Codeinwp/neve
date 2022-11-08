describe('Single page sidebar', function () {
	const pageSetup = {
		title: 'Test Page',
		content: 'The Page Content',
		url: '/',
	};

	before('Create new page named "' + pageSetup.title + '".', function () {
		cy.insertPostWithRequest(pageSetup.title, pageSetup.content, 'pages')
			.then(() => {
				pageSetup.url = window.localStorage.getItem('postUrl');
			})
			.then(() => {
				cy.updatePageOrPostByRequest(window.localStorage.getItem('postId'), 'pages', {
					meta: {
						neve_meta_sidebar: 'full-width',
						neve_meta_enable_content_width: 'on',
						neve_meta_content_width: 100,
					},
				});
			});

		cy.setCustomizeSettings({
			custom_css_post_id: -1,
			nav_menu_locations: [],
			neve_migrated_hfg_colors: true,
			neve_new_skin: 'new',
			neve_ran_migrations: true,
			neve_blog_archive_content_width: 50,
			neve_other_pages_content_width: 30,
			neve_single_post_content_width: 40,
		});
		cy.saveLocalStorage();
	});

	beforeEach(function () {
		cy.restoreLocalStorage();
	});

	afterEach(function () {
		cy.removeLocalStorage('WP_DATA_USER_1');
		cy.saveLocalStorage();
	});
	it('Default page should not have sidebar and use 100% width.', function () {
		cy.visit(pageSetup.url);
		cy.get('.nv-sidebar-wrap').should('not.exist');
		cy.get('.single-page-container').should('not.have.class', 'container-fluid').and('be.visible');
		cy.get('.nv-single-page-wrap').should('have.css', 'max-width').and('eq', '100%');
		cy.get('.nv-page-title').should('contain', pageSetup.title);
		cy.get('.hfg_header');
		cy.get('footer.site-footer');
		cy.get('.nv-content-wrap').should('contain', pageSetup.content);
	});

	context('Check sidebar layout', function () {
		beforeEach(function () {
			cy.loginWithRequest(pageSetup.url);
			cy.clearWelcome();
		});

		it('Full-width', function () {
			cy.updatePageOrPostByRequest(window.localStorage.getItem('postId'), 'pages', {
				meta: {
					neve_meta_sidebar: 'full-width',
				},
			}).then(() => {
				cy.visit(pageSetup.url);
			});
			cy.get('.nv-sidebar-wrap').should('not.exist');
		});
		it('Left', function () {
			cy.updatePageOrPostByRequest(window.localStorage.getItem('postId'), 'pages', {
				meta: {
					neve_meta_sidebar: 'left',
				},
			}).then(() => {
				cy.visit(pageSetup.url);
			});
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left');
		});
		it('Right', function () {
			cy.updatePageOrPostByRequest(window.localStorage.getItem('postId'), 'pages', {
				meta: {
					neve_meta_sidebar: 'right',
				},
			}).then(() => {
				cy.visit(pageSetup.url);
			});
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-right');
		});
	});

	it('Check container layout', function () {
		cy.loginWithRequest(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		cy.openNeveSidebar();

		cy.getControl('neve_meta_container').find('.components-button').contains('Contained').click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.single-page-container').should('have.class', 'container').and('be.visible');
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();
		cy.openNeveSidebar();

		cy.getControl('neve_meta_container').find('.components-button').contains('Full Width').click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.single-page-container').should('not.have.class', 'container').and('be.visible');
	});

	it('Check container width', function () {
		cy.loginWithRequest(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		cy.openNeveSidebar();

		cy.get('.neve_meta_content_width').find('input[type=number]').type('{selectall}').type('60');
		cy.updatePost();
		cy.visit(pageSetup.url);

		cy.get('.nv-single-page-wrap').should('have.css', 'max-width').and('eq', '60%');
	});

	it('Check title alignment', function () {
		cy.loginWithRequest(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		cy.openNeveSidebar();

		cy.get('.neve_meta_title_alignment .nv-align-center').click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-page-title').should('have.css', 'text-align').and('eq', 'center');
		cy.get('#wp-admin-bar-edit a').click();

		cy.openNeveSidebar();

		cy.get('.neve_meta_title_alignment .nv-align-right').click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-page-title').should('have.css', 'text-align').and('eq', 'right');
		cy.get('#wp-admin-bar-edit a').click();

		cy.openNeveSidebar();

		cy.get('.neve_meta_title_alignment .nv-align-left').click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-page-title').should('have.css', 'text-align').and('eq', 'left');
		cy.get('#wp-admin-bar-edit a').click();

		cy.openNeveSidebar();
	});

	it('Check author avatar not to exist for page', function () {
		cy.loginWithRequest(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		cy.openNeveSidebar();

		cy.get('.components-toggle-control__label').contains('Author Avatar').should('not.exist');
	});

	it('Check post elements', function () {
		cy.loginWithRequest(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		cy.openNeveSidebar();
		cy.get('.neve-meta-sortable').should('not.exist');

		cy.activateCheckbox('.components-toggle-control__label', 'Disable Header');
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.hfg_header').should('not.exist');
		cy.get('#wp-admin-bar-edit a').click();

		cy.openNeveSidebar();

		cy.activateCheckbox('.components-toggle-control__label', 'Disable Footer');
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('footer.site-footer').should('not.exist');
		cy.get('#wp-admin-bar-edit a').click();

		cy.openNeveSidebar();

		cy.activateCheckbox('.components-toggle-control__label', 'Disable Title');
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-page-title-wrap').should('not.exist');
	});
});
