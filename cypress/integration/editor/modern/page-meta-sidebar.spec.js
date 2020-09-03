describe('Single page sidebar', function () {
	const pageSetup = {
		'title': 'Test Page',
		'content': 'The Page Content',
		'url': null
	};

	it('Create new page named "' + pageSetup.title + '".', function () {
		cy.insertPost(pageSetup.title, pageSetup.content, 'page');

		cy.get('.post-publish-panel__postpublish-header a').contains(pageSetup.title).should('have.attr', 'href').then((href) => {
			pageSetup.url = href;
		});
	});

	it('Default page should not have sidebar and use 100% width.', function () {
		cy.visit(pageSetup.url);
		cy.get('.nv-sidebar-wrap').should('not.exist');
		cy.get('.single-page-container').should('not.have.class', 'container-fluid').and('be.visible');
		cy.get('.nv-single-page-wrap').should('have.css', 'max-width').and('eq', '100%');
		cy.get('.nv-page-title').should('exist').and('contain', pageSetup.title);
		cy.get('.hfg_header').should('exist');
		cy.get('footer.site-footer').should('exist');
		cy.get('.nv-content-wrap').should('contain', pageSetup.content);
	});

	it('Check sidebar layout', function () {
		cy.login(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		openNeveSidebar();

		let sidebarControl = getControl('neve_meta_sidebar');
		sidebarControl.find('.components-radio-control__input[value="full-width"]').parent().click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-sidebar-wrap').should('not.exist');
		cy.get('#wp-admin-bar-edit a').click();

		sidebarControl = getControl('neve_meta_sidebar');
		sidebarControl.find('.components-radio-control__input[value="left"]').parent().click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-sidebar-wrap').should('exist').and('have.class', 'nv-left');
		cy.get('#wp-admin-bar-edit a').click();

		sidebarControl = getControl('neve_meta_sidebar');
		sidebarControl.find('.components-radio-control__input[value="right"]').parent().click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-sidebar-wrap').should('exist').and('have.class', 'nv-right');
	});

	it('Check container layout', function () {
		cy.login(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		openNeveSidebar();

		let sidebarControl = getControl('neve_meta_container');
		sidebarControl.find('.components-button').contains('Contained').click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.single-page-container').should('have.class', 'container').and('be.visible');
		cy.get('#wp-admin-bar-edit a').click();

		sidebarControl = getControl('neve_meta_container');
		sidebarControl.find('.components-button').contains('Full Width').click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.single-page-container').should('not.have.class', 'container').and('be.visible');
	});

	it('Check container width', function () {
		cy.login(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		openNeveSidebar();

		const enableContentWidth = cy.get('.components-toggle-control__label').contains('Custom Content Width (%)');
		activateCheckbox(enableContentWidth);

		cy.get('.neve_meta_content_width').find('input[type=number]').type('{selectall}').type(60);
		cy.updatePost();
		cy.visit(pageSetup.url);

		cy.get('.nv-single-page-wrap').should('have.css', 'max-width').and('eq', '60%');
	})

	it('Check title alignment', function () {
		cy.login(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		openNeveSidebar();

		cy.get('.neve_meta_title_alignment .nv-align-center').click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-page-title').should('have.class', 'has-text-align-center').and('have.css', 'text-align').and('eq', 'center');
		cy.get('#wp-admin-bar-edit a').click();

		cy.get('.neve_meta_title_alignment .nv-align-right').click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-page-title').should('have.class', 'has-text-align-right').and('have.css', 'text-align').and('eq', 'right');
		cy.get('#wp-admin-bar-edit a').click();

		cy.get('.neve_meta_title_alignment .nv-align-left').click();
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-page-title').should('have.class', 'has-text-align-left').and('have.css', 'text-align').and('eq', 'left');
		cy.get('#wp-admin-bar-edit a').click();
	});

	it('Check author avatar not to exist for page', function () {
		cy.login(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		openNeveSidebar();

		cy.get('.components-toggle-control__label').contains('Author Avatar').should('not.exist')
	});

	it('Check post elements', function () {
		cy.login(pageSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		openNeveSidebar();
		cy.get('.neve-meta-sortable').should('not.exist');

		const headerToggle = cy.get('.components-toggle-control__label').contains('Disable Header');
		activateCheckbox(headerToggle);
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.hfg_header').should('not.exist');
		cy.get('#wp-admin-bar-edit a').click();

		const footerToggle = cy.get('.components-toggle-control__label').contains('Disable Footer');
		activateCheckbox(footerToggle);
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('footer.site-footer').should('not.exist');
		cy.get('#wp-admin-bar-edit a').click();

		const disableTitleToggle = cy.get('.components-toggle-control__label').contains('Disable Title');
		activateCheckbox(disableTitleToggle);
		cy.updatePost();
		cy.visit(pageSetup.url);
		cy.get('.nv-page-title-wrap').should('not.exist');

	});

})

function toggleElements($show) {
	const icon = $show ? 'dashicons-hidden' : 'dashicons-visibility';
	cy.get('.ti-sortable-item-area .ti-sortable-item-toggle').each(function (el) {
		cy.get(el).find('.dashicon').then(($icon) => {
			if ($icon.hasClass(icon)) {
				cy.get($icon).click();
			}
		})
	})
};

function getControl($control) {
	return cy.get('label.components-base-control__label[for="' + $control + '"]').parent();
}

function activateCheckbox($checkbox) {
	$checkbox.prev().then(($checkbox) => {
		if (!$checkbox.hasClass('is-checked')) {
			cy.get($checkbox).click();
		}
	})
}

function openNeveSidebar() {
	cy.get('button.components-button[aria-label="Neve Options"]').then(($btn) => {
		cy.get($btn).invoke('attr', 'aria-expanded').then((value) => {
			if (value === true) {
				return true;
			}
			cy.get('button.components-button[aria-label="Neve Options"]').click();
		});
	})
}
