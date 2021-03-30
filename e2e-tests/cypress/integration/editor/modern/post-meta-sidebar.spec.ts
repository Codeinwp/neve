describe('Single post meta sidebar', function () {
	const postSetup = {
		title: 'Test Post',
		content: 'The Post Content',
		url: '/',
	};

	before('Create new post named "' + postSetup.title + '".', function () {
		cy.insertPost(postSetup.title, postSetup.content, 'post', true, true);
		cy.get('.post-publish-panel__postpublish-header a')
			.contains(postSetup.title)
			.should('have.attr', 'href')
			.then((href) => {
				postSetup.url = href.toString();
			})
			.then(() => {
				window.localStorage.setItem('postId', Cypress.$('#post_ID').val().toString());
				cy.getJWT();
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
		});
		cy.visit(postSetup.url);
		cy.get('h1.entry-title')
			.should('have.class', 'has-text-align-center')
			.and('have.css', 'text-align')
			.and('eq', 'center');

		cy.updatePageOrPostByRequest(postId, 'posts', {
			meta: {
				neve_meta_title_alignment: 'right',
			},
		});
		cy.visit(postSetup.url);
		cy.get('h1.entry-title')
			.should('have.class', 'has-text-align-right')
			.and('have.css', 'text-align')
			.and('eq', 'right');

		cy.updatePageOrPostByRequest(postId, 'posts', {
			meta: {
				neve_meta_title_alignment: 'left',
			},
		});
		cy.visit(postSetup.url);
		cy.get('h1.entry-title')
			.should('have.class', 'has-text-align-left')
			.and('have.css', 'text-align')
			.and('eq', 'left');
		cy.get('#wp-admin-bar-edit a').click();
	});

	it('Check author avatar', function () {
		cy.loginWithRequest(postSetup.url);
		cy.clearWelcome();
		cy.get('#wp-admin-bar-edit a').click();

		cy.get('.interface-complementary-area-header');

		cy.activateCheckbox('.components-toggle-control__label', 'Author Avatar');
		cy.updatePost();

		cy.visit(postSetup.url);
		cy.get('.nv-meta-list .author .photo').should('exist');
	});

	it('Check post elements', function () {
		cy.loginWithRequest(postSetup.url);
		cy.reload();
		cy.get('#wp-admin-bar-edit a').click();

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
			if (index === 6) {
				cy.get(el).parent().should('have.class', 'hidden');
			} else {
				cy.get(el).parent().should('not.have.class', 'hidden');
			}
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
		// const headerToggle = cy.get('.components-toggle-control__label').contains('Disable Header');
		cy.activateCheckbox('.components-toggle-control__label', 'Disable Header');
		cy.updatePost();
		cy.visit(postSetup.url);
		cy.get('.hfg_header').should('not.exist');
		cy.get('#wp-admin-bar-edit a').click();

		cy.activateCheckbox('.components-toggle-control__label', 'Disable Footer');
		cy.updatePost();
		cy.visit(postSetup.url);
		cy.get('footer.site-footer').should('not.exist');
	});
});
