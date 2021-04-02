describe('Starter sites import', function () {
	before(function () {
		cy.loginWithRequest('/wp-admin/themes.php?page=tiob-starter-sites');
	});
	it('Successfully imports Web Agency starter site template', function () {
		cy.get(':nth-child(1) > .top > .actions > .import').click();
		cy.get('.modal-footer > .import').contains('Import entire site').click();
		cy.get('.import-done-actions > .is-secondary', {
			timeout: 30000,
		}).click();
		cy.get('h1.has-text-align-center').contains('Create and grow your unique website today');
	});
});
