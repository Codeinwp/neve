describe('Posts meta box default settings', function () {
	const postSetup = {
		title: 'Test Post',
		content: 'The Post Content',
		url: '/',
	};
	before('Create new post named "' + postSetup.title + '".', function () {
		cy.getRandomAttachment().then(() => {
			cy.insertPostWithRequest(
				postSetup.title,
				postSetup.content,
				'posts',
				parseInt(window.localStorage.getItem('randomAttachmentId')),
			)
				.then(() => {
					postSetup.url = window.localStorage.getItem('postUrl');
				})
				.then(() => {
					cy.updatePageOrPostByRequest(window.localStorage.getItem('postId'), 'posts', {
						meta: {
							neve_meta_content_width: 0,
						},
					});
				});
		});
		cy.setCustomizeSettings({
			neve_migrated_hfg_colors: true,
			nav_menu_locations: [],
			custom_css_post_id: -1,
			neve_new_skin: 'new',
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
	context('Deactivated Plugin', function () {
		it('Default meta box settings on front end.', function () {
			cy.visit(postSetup.url);

			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-right').and('be.visible');
			cy.get('.single-post-container')
				.should('not.have.class', 'container-fluid')
				.and('be.visible');
			cy.get('.nv-single-post-wrap').should('have.css', 'max-width').and('eq', '70%');
			cy.get('.entry-title').should('exist').and('contain', postSetup.title);
			cy.get('.hfg_header').should('exist');
			cy.get('footer.site-footer').should('exist');
			cy.get('.nv-thumb-wrap > img')
				.should('exist')
				.and('be.visible')
				.and('have.attr', 'src')
				.then(($href) => {
					expect($href).to.contain('/wp-content/uploads/');
				});
			cy.get('.nv-content-wrap').should('contain', postSetup.content);
		});
	});

	context('Activated Plugin', function () {
		before('Activates Classic Editor', function () {
			cy.activateClassicEditorPlugin();
		});

		after('Deactivates Classic Editor', function () {
			cy.deactivateClassicEditorPlugin();
		});
		it('Edit meta box settings "' + postSetup.title + '".', function () {
			cy.loginWithRequest(postSetup.url);
			cy.get('#wp-admin-bar-edit a').click();

			cy.get('label[for="neve_meta_container_full-width"]').click();
			cy.get('label[for="neve_meta_sidebar_left"]').click();
			cy.get('label[for="neve_meta_disable_title"]').click();
			cy.get('label[for="neve_meta_disable_header"]').click();
			cy.get('label[for="neve_meta_disable_featured_image"]').click();
			cy.get('label[for="neve_meta_disable_footer"]').click();
			cy.get('label[for="neve_meta_enable_content_width"]').click();
			cy.get('#neve_meta_content_width-range').invoke('val', 50).trigger('change');
			cy.wait(1000);
			cy.get('#publish').contains('Update').click();

			cy.visit(postSetup.url);
			cy.wait(500);
			cy.reload();
			cy.get('.nv-sidebar-wrap').should('have.class', 'nv-left').and('be.visible');
			cy.get('.single-post-container').should('have.class', 'container-fluid').and('be.visible');
			cy.get('.nv-single-post-wrap').should('have.css', 'max-width').and('eq', '50%');
			cy.get('.entry-title').should('not.exist');
			cy.get('.hfg_header').should('not.exist');
			cy.get('footer.site-footer').should('not.exist');
			cy.get('.nv-thumb-wrap').should('not.exist');
			cy.get('.nv-content-wrap').should('contain', postSetup.content);
		});
	});
});
