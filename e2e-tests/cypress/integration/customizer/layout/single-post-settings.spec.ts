describe('Single Post Check', function () {
	before(function () {
		cy.loginWithRequest();
		cy.visit('/markup-image-alignment/');
		cy.get('#wp-admin-bar-edit').click();
		cy.clearWelcome();
		cy.get('.components-panel__body').contains('Discussion').click();
		cy.get('label').contains('Allow comments').click();
		cy.get('button').contains('Update').click();
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

			cy.visit('/markup-image-alignment/');
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
});
