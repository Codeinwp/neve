describe('Homepage-settings', function () {
	beforeEach(function () {
		cy.goToCustomizer();
		cy.get('#accordion-panel-neve_layout > .accordion-section-title').click();
		cy.get('#accordion-section-static_front_page > .accordion-section-title').click();
		cy.get('#_customize-input-show_on_front-radio-page').click();
	});

	it('Sets up a page to be the homepage', function () {
		cy.get('#_customize-input-page_on_front').select('Sample Page');
		cy.get('#save').click({ force: true });
		cy.wait(550);
		cy.visit('/');
		cy.get('h1').should('contain.text', 'Sample Page');
	});

	it('Sets up a page to be the posts page', function () {
		cy.get('#_customize-input-page_for_posts').select('Blog');
		cy.get('#save').click({ force: true });
		cy.wait(550);
		cy.visit('/Blog');
		cy.get('.nv-index-posts');
	});

	it('Sets the homepage to be the latest posts', function () {
		cy.get('#_customize-input-show_on_front-radio-posts').click();
		cy.get('#save').click({ force: true });
		cy.wait(550);
		cy.visit('/');
		cy.get('.nv-index-posts');
	});
});
