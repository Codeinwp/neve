describe('Homepage-settings', function () {
	beforeEach(function () {
		cy.loginWithRequest('/wp-admin/customize.php');
		cy.get('#accordion-panel-neve_layout > .accordion-section-title').click()
		cy.get('#accordion-section-static_front_page > .accordion-section-title').click()
		cy.get('#_customize-input-show_on_front-radio-page').click()
		
	});

	it('Sets up a page to be the homepage', function () {
		/** TODO */
		
		cy.get('#_customize-input-page_on_front').select('Sample Page')
		cy.get('#save').click({force:true});
		cy.visit('/');
		cy.get('h1').should('contain.text','Sample Page');


	});

	it.only('Sets up a page to be the posts page', function () {
		/** todo */
		cy.get('#_customize-input-page_for_posts').select('Blog')
		cy.get('#save').click({force:true});
		cy.visit('/Blog');
		cy.get('container archive-container');



	});
});
