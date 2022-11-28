describe('Starter sites import', function () {
	before(function () {
		cy.visit('/');
		cy.visit('/wp-admin/themes.php?page=tiob-starter-sites');
	});
	it('Successfully imports Web Agency starter site template', function () {
		cy.visit('/wp-admin/themes.php?page=tiob-starter-sites');
		cy.get(':nth-child(1) > .top > .actions > .import').click();
		cy.findByRole('button', {
			name: /import entire site/i,
		}).click();
		cy.findByRole('button', {
			name: /view website/i,
			timeout: 120000,
		}).click();
		cy.get('h1.has-text-align-center').contains('Create and grow your unique website today');
	});
});
