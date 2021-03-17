describe('Blog/Archive 1 / Default Layout', function () {
	before('Setup', function () {
		cy.insertPost('Blog test post', 'Blog test post.', 'post', true);
		cy.fixture('customizer/layout/blog-archive-setting-setup').then((archiveSetup) => {
			cy.setCustomizeSettings(archiveSetup.archive1);
		});
	});
	it('Tests Default Layout (List)', function () {
		cy.visit('/');
		cy.get('article').each((el) => {
			// Layout classes and styles.
			cy.get(el).should('have.class', 'layout-default');
			cy.get(el).find('.content').should('have.css', 'flex-direction', 'row');
		});
	});

	it('Post Content Order', function () {
		cy.visit('/');
		cy.get('article').each((el) => {
			cy.get(el).find('.excerpt-wrap:first-child').should('exist').and('be.visible');
			cy.get(el).find('.nv-meta-list:last-child').should('exist').and('be.visible');
			cy.get(el).should('have.descendants', '.nv-meta-list');
			cy.get(el).should('have.descendants', '.excerpt-wrap');
		});
	});

	it('Meta Order', function () {
		cy.visit('/');

		cy.get('article').each((el) => {
			cy.get(el).find('.nv-meta-list > .date:first-child').should('exist');
			cy.get(el).find('.nv-meta-list > .author:nth-child(2)').should('exist');
			cy.get(el).find('.nv-meta-list > .category:last-child').should('exist');
		});
	});

	it('No Author Avatar', function () {
		cy.visit('/');
		cy.get('article').each((el) => {
			cy.get(el).find('.author .photo').should('not.exist');
		});
	});

	it('Excerpt length', function () {
		cy.visit('/');
		let count = 5;
		cy.get('article').each((el) => {
			if (count === 0) {
				return false;
			}
			cy.get(el)
				.find('.excerpt-wrap')
				.invoke('text')
				.then((val) => {
					const res = val.split(' ');
					expect(res.length).to.be.at.most(21);
				});
			count--;
		});
	});

	it('Thumbnail Shadow', function () {
		cy.visit('/');
		cy.get('.nv-post-thumbnail-wrap img').each((el) => {
			cy.get(el).should(
				'have.css',
				'box-shadow',
				'rgba(0, 0, 0, 0.12) 0px 14px 28px 0px, rgba(0, 0, 0, 0.12) 0px 10px 10px 0px',
			);
		});
	});

	it('Pagination Number', function () {
		cy.visit('/');
		cy.get('.page-numbers').should('exist');
	});

	it('Alternative layout', function () {
		cy.fixture('customizer/layout/blog-archive-setting-setup').then((archiveSetup) => {
			archiveSetup.archive1.neve_blog_list_alternative_layout = true;
			cy.setCustomizeSettings(archiveSetup.archive1);
		});

		cy.visit('/');
		let count = 0;
		cy.get('article').each((el) => {
			cy.get(el).should('have.class', 'layout-alternative');
			if (count % 2 === 0) {
				cy.get(el).find('.content').should('have.css', 'flex-direction', 'row-reverse');
			} else {
				cy.get(el).find('.content').should('have.css', 'flex-direction', 'row');
			}
			count++;
		});
	});
});

describe('Blog/Archive 2 / Grid Layout', function () {
	beforeEach('Setup', function () {
		cy.fixture('customizer/layout/blog-archive-setting-setup').then((archiveSetup) => {
			cy.setCustomizeSettings(archiveSetup.archive2).then((response) => {
				expect(response.status).to.be.equal(200);
			});
		});
	});

	it('Grid layout', function () {
		cy.visit('/');
		cy.get('article').each((el) => {
			cy.get(el)
				.should('have.class', 'layout-grid')
				.and('have.class', 'col-md-4')
				.and('have.class', 'col-sm-6')
				.and('have.class', 'col-3');
		});
	});

	it('Pagination Infinite', function () {
		cy.visit('/');
		cy.get('.page-numbers').should('not.exist');
		cy.get('.nv-loader').should('exist');
	});

	it('Author Avatar', function () {
		cy.visit('/');
		cy.get('article').each((el) => {
			cy.get(el).find('.author').should('have.descendants', '.photo');
		});
	});
});

describe('Blog/Archive 3 / Covers Layout', function () {
	before('Setup', function () {
		cy.fixture('customizer/layout/blog-archive-setting-setup').then((archiveSetup) => {
			cy.setCustomizeSettings(archiveSetup.archive3);
		});
		cy.loginWithRequest();
	});

	it('Covers layout', function () {
		cy.visit('/');
		cy.get('article').each((el) => {
			cy.get(el).should('have.class', 'layout-covers');
			cy.get(el)
				.find('.cover-post.nv-post-thumbnail-wrap')
				.should('exist')
				.and('be.visible')
				.and('have.css', 'background-image');
		});
	});

	it('Thumbnail Box Shadow', function () {
		cy.visit('/');
		cy.get('article').each((el) => {
			cy.get(el)
				.find('.cover-post.nv-post-thumbnail-wrap')
				.should(
					'have.css',
					'box-shadow',
					'rgba(0, 0, 0, 0.12) 0px 14px 28px 0px, rgba(0, 0, 0, 0.12) 0px 10px 10px 0px',
				);
		});
	});

	it('Post Content Order', function () {
		cy.visit('/');
		cy.get('article').each((el) => {
			cy.get(el).find('.entry-title:first-child').should('exist');
			cy.get(el).find('.nv-meta-list:last-child').should('exist');
		});
	});

	it('Text Color', function () {
		cy.visit('/');
		cy.get('article').each((el) => {
			cy.get(el).find('.inner').should('have.css', 'color', 'rgb(186, 218, 85)');
		});
	});

	it('Masonry', function () {
		cy.visit('/');
		cy.get('article').each((el) => {
			cy.get(el).should('have.css', 'position', 'absolute');
			cy.get(el).should('have.css', 'left');
			cy.get(el).should('have.css', 'top');
		});
	});
});
