describe('Radio Icons', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Text', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'Text');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Included Icons', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'Included Icons');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Included Icons With Labels', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'Included Icons With Labels');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Large Icons', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'Large Icons');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Editor Icons', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'Editor Icons');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('With Labels', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Radio Icons', 'With Labels');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});
});
