describe('Footer Builder', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});
	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Hfg/Footer Builder', 'Default');
		});

		it('Adds a component on builder and remove it', function () {
			cy.reload();
			cy.get('.left > .droppable > .builder-item').should('not.exist');
			cy.get('.bottom > .inner-row > .slots-wrap > .left > .components-button').click({
				force: true,
			});
			cy.get('.theme-list :last-child > .name').click();
			cy.get('.left > .droppable > .builder-item > .actions > .remove > svg').click({
				force: true,
			});
			cy.get('.left > .droppable > .builder-item').should('not.exist');
		});
	});
});
