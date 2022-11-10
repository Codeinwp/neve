describe('Single post meta sidebar', function () {
	const postSetup = {
		title: 'Test Post',
		content: 'The Post Content',
		url: '/',
	};

	before('Create new post named "' + postSetup.title + '".', function () {
		cy.createTagWithRequest('tag-test' + Math.random());
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
					const tagId = parseInt(window.localStorage.getItem('tagId'));
					cy.updatePageOrPostByRequest(window.localStorage.getItem('postId'), 'posts', {
						tags: tagId,
					});
				});
		});
		cy.setCustomizeSettings({
			neve_migrated_hfg_colors: true,
			nav_menu_locations: [],
			custom_css_post_id: -1,
			neve_new_skin: 'new',
			neve_ran_migrations: true,
		});

		cy.saveLocalStorage();
	});

	beforeEach(function () {
		cy.restoreLocalStorage();
	});

	afterEach(function () {
		cy.saveLocalStorage();
	});
	it('Default meta box settings on front end.', function () {
		cy.visit(postSetup.url);

		cy.get('.nv-sidebar-wrap').should('have.class', 'nv-right').and('be.visible');
		cy.get('.single-post-container').should('not.have.class', 'container-fluid').and('be.visible');
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

	it('Check sidebar layout', function () {
		cy.loginWithRequest(postSetup.url);
		const postId = window.localStorage.getItem('postId');
		cy.clearWelcome();

		cy.updatePageOrPostByRequest(postId, 'posts', {
			meta: {
				neve_meta_sidebar: 'full-width',
			},
		});
		cy.visit(postSetup.url);
		cy.get('.nv-sidebar-wrap').should('not.exist');

		cy.updatePageOrPostByRequest(postId, 'posts', {
			meta: {
				neve_meta_sidebar: 'left',
			},
		});
		cy.visit(postSetup.url);
		cy.get('.nv-sidebar-wrap').should('exist').and('have.class', 'nv-left');

		cy.updatePageOrPostByRequest(postId, 'posts', {
			meta: {
				neve_meta_sidebar: 'right',
			},
		});
		cy.visit(postSetup.url);
		cy.get('.nv-sidebar-wrap').should('exist').and('have.class', 'nv-right');
	});

	it('Check container layout', function () {
		cy.loginWithRequest(postSetup.url);
		cy.clearWelcome();

		cy.updatePageOrPostByRequest(window.localStorage.getItem('postId'), 'posts', {
			meta: {
				neve_meta_container: 'full-width',
			},
		});

		cy.visit(postSetup.url);
		cy.get('.single-post-container').should('not.have.class', 'container').and('be.visible');
	});

	it('Check container width', function () {
		cy.loginWithRequest(postSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		cy.openNeveSidebar();

		cy.activateCheckbox('.components-toggle-control__label', 'Custom Content Width (%');

		cy.get('.neve_meta_content_width')
			.find('input[type=number]')
			.scrollIntoView()
			.type('{selectall}', { force: true })
			.type('60', { force: true });

		cy.updatePost();
		cy.visit(postSetup.url);

		cy.get('.nv-single-post-wrap').should('have.css', 'max-width').and('eq', '60%');
	});

	it('Check title alignment', function () {
		cy.loginWithRequest(postSetup.url);
		const postId = window.localStorage.getItem('postId');
		cy.clearWelcome();

		cy.updatePageOrPostByRequest(postId, 'posts', {
			meta: {
				neve_meta_title_alignment: 'center',
			},
		}).then(() => {
			cy.visit(postSetup.url);
			cy.get('.title').should('have.css', 'text-align', 'center');
		});

		cy.updatePageOrPostByRequest(postId, 'posts', {
			meta: {
				neve_meta_title_alignment: 'right',
			},
		}).then(() => {
			cy.visit(postSetup.url);
			cy.get('.title').should('have.css', 'text-align', 'right');
		});
		cy.updatePageOrPostByRequest(postId, 'posts', {
			meta: {
				neve_meta_title_alignment: 'left',
			},
		}).then(() => {
			cy.visit(postSetup.url);
			cy.get('.title').should('have.css', 'text-align', 'left');
		});
	});

	it('Check author avatar', function () {
		cy.loginWithRequest(postSetup.url);
		cy.clearWelcome();
		cy.updatePageOrPostByRequest(window.localStorage.getItem('postId'), 'posts', {
			meta: {
				neve_meta_author_avatar: 'on',
			},
		}).then(() => {
			cy.visit(postSetup.url);
			cy.get('.nv-meta-list .author .photo').should('exist');
		});
	});

	it('Check post elements', function () {
		cy.loginWithRequest(postSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();
		cy.openNeveSidebar();
		cy.get('.interface-complementary-area-header');

		cy.get('.ti-sortable-item-label').each((el, index) => {
			const shouldContain = [
				'Post Title',
				'Post Meta',
				'Featured Image',
				'Content',
				'Tags',
				'Comments',
				'Post Navigation',
			];
			expect(el).to.contain(shouldContain[index]);
			// if (index === 6) {
			// 	cy.get(el).parent().should('have.class', 'hidden');
			// } else {
			// 	cy.get(el).parent().should('not.have.class', 'hidden');
			// }
		});

		cy.toggleElements(false);
		cy.get('.components-toggle-control__label').contains('Author Avatar').should('not.exist');
		cy.updatePost();
		cy.visit(postSetup.url);

		cy.get('h1.title').should('not.exist');
		cy.get('.nv-thumb-wrap').should('not.exist');
		cy.get('.nv-tags-list').should('not.exist');
		cy.get('.nv-meta-list').should('not.exist');
		cy.get('.nv-content-wrap').should('not.exist');
		cy.get('#comments').should('not.exist');
		cy.get('.nv-post-navigation').should('not.exist');

		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();
		cy.openNeveSidebar();
		cy.toggleElements(true);
		cy.get('.components-toggle-control__label').contains('Author Avatar').should('exist');
		cy.updatePost();
		cy.visit(postSetup.url);

		cy.get('h1.title').should('exist');
		cy.get('.nv-thumb-wrap').should('exist');
		cy.get('.nv-tags-list').should('exist');
		cy.get('.nv-meta-list').should('exist');
		cy.get('.nv-content-wrap').should('exist');
		cy.get('#comments').should('exist');
		cy.get('.nv-post-navigation').should('exist');
		cy.visit(postSetup.url);

		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();
		cy.openNeveSidebar();
		// const headerToggle = cy.get('.components-toggle-control__label').contains('Disable Header');
		cy.activateCheckbox('.components-toggle-control__label', 'Disable Header');
		cy.updatePost();
		cy.visit(postSetup.url);
		cy.get('.hfg_header').should('not.exist');
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();
		cy.openNeveSidebar();

		cy.activateCheckbox('.components-toggle-control__label', 'Disable Footer');
		cy.updatePost();
		cy.visit(postSetup.url);
		cy.get('footer.site-footer').should('not.exist');
	});
});
