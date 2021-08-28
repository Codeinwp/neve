describe('Header Builder', function () {
	before(function () {
		cy.visitStorybook();
	});
	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/HFG/Header Builder', 'Default');
		});

		it('Remove a component on builder', function () {
			cy.get('.left > .droppable > .builder-item > .actions > .remove > svg').click();
			cy.get('.left > .droppable > .builder-item').should('not.exist');
		});

		it('Adds a component on builder', function () {
			cy.get('.top > .inner-row > .slots-left-wrap > .left > .droppable > .builder-item').should(
				'not.exist',
			);
			cy.get('.top > .inner-row > .slots-left-wrap > .left > .components-button').click({
				force: true,
			});
			cy.get('.items-popover-list > :nth-child(15)').click();
			cy.get('.top > .inner-row > .slots-left-wrap > .left > .droppable > .builder-item');
		});
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/HFG/Header Builder', 'Initially Closed');
		});

		it('Builder should not be visible', function () {
			cy.get('.neve-builder').should('not.be.visible');
		});
	});
});
