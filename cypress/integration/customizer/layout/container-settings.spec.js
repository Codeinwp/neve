/* eslint-disable array-callback-return */
describe('Container Settings', () => {
	const setup = {
		pageTitle: 'Container on Page',
		postTitle: 'Container on Post',
		content: 'Container Test Content',
		pageUrl: null,
		postUrl: null,
	};

	it('Create new page named "' + setup.pageTitle + '".', () => {
		cy.insertPost(setup.pageTitle, setup.content, 'page');
		cy.get('.post-publish-panel__postpublish-header a')
			.contains(setup.pageTitle)
			.should('have.attr', 'href')
			.then((href) => {
				setup.pageUrl = href;
			});
	});

	it('Create new post named "' + setup.postTitle + '".', () => {
		cy.insertPost(setup.postTitle, setup.content, 'post', true);
		cy.get('.post-publish-panel__postpublish-header a')
			.contains(setup.postTitle)
			.should('have.attr', 'href')
			.then((href) => {
				setup.postUrl = href;
			});
	});

	it('Setup customizer container width.', () => {
		cy.goToCustomizer();
		cy.aliasRestRoutes();
		cy.get('#accordion-panel-neve_layout').click();
		cy.get('#accordion-section-neve_container').click();
		cy.get('#customize-control-neve_container_width').as('control');

		const devices = {
			desktop: 1200,
			tablet: 960,
			mobile: 680,
		};
		Object.keys(devices).map((device) => {
			cy.get('@control')
				.find('button.' + device)
				.click();
			cy.get('@control')
				.find('input[type=number]')
				.type('{selectall}')
				.type(devices[device]);
		});

		cy.get('#save').click();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
		});
	});

	it('Container width on front end.', () => {
		cy.visit(setup.pageUrl);
		cy.get('.single-page-container').as('container');
		cy.get('@container')
			.should('have.css', 'max-width')
			.and('eq', '1200px');

		cy.viewport(768, 1024); //iPad
		cy.get('@container').should('have.css', 'max-width').and('eq', '960px');

		cy.viewport(375, 812); //iPhoneX
		cy.get('@container').should('have.css', 'max-width').and('eq', '680px');
	});

	it('Setup customizer container style.', () => {
		cy.goToCustomizer();
		cy.aliasRestRoutes();
		cy.get('#accordion-panel-neve_layout').click();
		cy.get('#accordion-section-neve_container').click();
		cy.get('#_customize-input-neve_default_container_style').select(
			'full-width'
		);
		cy.get('#_customize-input-neve_blog_archive_container_style').select(
			'full-width'
		);
		cy.get('#_customize-input-neve_single_post_container_style').select(
			'full-width'
		);
		cy.get('#save').click();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
		});
	});

	it('Container style on front end.', () => {
		cy.visit(setup.pageUrl);
		cy.get('.single-page-container').as('container');
		cy.get('@container').should('have.class', 'container-fluid');
		cy.visit(setup.postUrl);
		cy.get('.single-post-container').as('container');
		cy.get('@container').should('have.class', 'container-fluid');
	});

	it('Go back to defaults.', () => {
		cy.goToCustomizer();
		cy.aliasRestRoutes();
		cy.get('#accordion-panel-neve_layout').click();
		cy.get('#accordion-section-neve_container').click();
		cy.get('#customize-control-neve_container_width').as('control');
		cy.get('#_customize-input-neve_default_container_style').select(
			'contained'
		);
		cy.get('#_customize-input-neve_blog_archive_container_style').select(
			'contained'
		);
		cy.get('#_customize-input-neve_single_post_container_style').select(
			'contained'
		);

		cy.get('#customize-control-neve_container_width').as('control');

		const devices = ['desktop', 'tablet', 'mobile'];
		devices.map((device) => {
			cy.get('@control')
				.find('button.' + device)
				.click();
			cy.get('@control')
				.find('button')
				.contains('Reset')
				.should('be.visible')
				.click();
		});
		cy.get('#save').click();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
		});
	});
});
