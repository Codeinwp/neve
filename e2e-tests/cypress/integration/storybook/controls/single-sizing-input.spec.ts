describe('Single Sizing Input', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Single Sizing Input', 'Default');
		});

		it('Has default value', function () {
			cy.findByRole('spinbutton').should('have.value', '10');
		});
	});
});
