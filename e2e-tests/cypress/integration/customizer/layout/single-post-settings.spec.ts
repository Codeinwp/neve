describe('Single Post Check', function () {
	before(function () {
		cy.setCustomizeSettings({
			neve_new_skin: 'new',
		});
	});

	it('Shows all options on customizer', function () {
		cy.goToCustomizer();
		cy.get('#accordion-panel-neve_layout > .accordion-section-title').click();
		cy.get('#accordion-section-neve_single_post_layout > .accordion-section-title').click();

		cy.get('#sub-accordion-section-neve_single_post_layout').contains('Header Layout');
		cy.get('#sub-accordion-section-neve_single_post_layout').contains('Title Alignment');
		cy.get('#sub-accordion-section-neve_single_post_layout').contains('Page Elements');
		cy.get('#sub-accordion-section-neve_single_post_layout').contains('Post Meta');
		cy.get('#sub-accordion-section-neve_single_post_layout').contains('Comments Section');
		cy.get('#sub-accordion-section-neve_single_post_layout').contains('Submit Form Section');
	});

	context('Hidden', function () {
		before(function () {
			cy.fixture('customizer/layout/single-post-settings').then((postSetup) => {
				cy.setCustomizeSettings(postSetup.hidden);
			});
		});
		it('All elements hidden', function () {
			const HIDDEN = [
				'.entry-header',
				'.nv-thumb-wrap',
				'.entry-content',
				'.nv-tags-list',
				'.comments-area',
				'.nv-post-navigation',
			];

			cy.visit('/template-comments/');
			HIDDEN.forEach((className) => {
				cy.get('.nv-single-post-wrap').should('not.have.descendants', className);
			});
		});
	});

	context('Enabled and reordered', function () {
		before(function () {
			cy.fixture('customizer/layout/single-post-settings').then((postSetup) => {
				cy.setCustomizeSettings(postSetup.enabled);
			});
		});
		it('All elements enabled and reordered', function () {
			const ORDER = [
				'nv-post-navigation',
				'nv-tags-list',
				'nv-content-wrap',
				'comments-area',
				'entry-header',
				'nv-thumb-wrap',
			];

			cy.visit('/markup-image-alignment/');
			// eslint-disable-next-line no-unused-vars
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			ORDER.forEach((className) => {
				cy.get('.nv-single-post-wrap')
					.find('> *')
					.each((el, index) => {
						cy.get(el).should('have.class', ORDER[index]);
					});
			});
		});
	});

	context('Header Cover', function () {
		const urls = ['/hello-world', '/markup-text-alignment', '/scheduled'];
		before(function () {
			cy.fixture('customizer/layout/single-post-settings').then((setup) => {
				cy.setCustomizeSettings(setup.cover);
			});
		});
		urls.forEach(function (url) {
			it(`Should have the cover layout on the single post ${url} as the setup`, function () {
				cy.visit(url);
				cy.get('.nv-overlay')
					.should('have.css', 'height', '505px')
					.and('have.css', 'background-color', 'rgb(198, 53, 53)')
					.and('have.css', 'color', 'rgb(255, 255, 255)');
			});
		});
	});
});
