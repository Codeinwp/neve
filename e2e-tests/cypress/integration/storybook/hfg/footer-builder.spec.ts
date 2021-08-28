describe('Footer Builder', function () {
	before(function () {
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
			cy.get(':nth-child(8) > .name').click();
			cy.get('.left > .droppable > .builder-item > .actions > .remove > svg').click({
				force: true,
			});
			cy.get('.left > .droppable > .builder-item').should('not.exist');
		});
	});
});
