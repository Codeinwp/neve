describe('Copyright in footer', function () {
	it('Checks the copyright in front-end', function () {
		cy.visit('/');
		cy.contains('Neve | Powered by WordPress').should('be.visible');
	});
});
