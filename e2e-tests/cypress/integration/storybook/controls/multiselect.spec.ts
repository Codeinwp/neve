const allOptions = ['media', 'custom layouts', 'pages', 'posts'];

describe('Multiselect', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Multiselect', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
	});

	context('Empty', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Multiselect', 'Empty');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Can add all items', function () {
			cy.get('@valuePreview').should('have.text', '[]');
			addAllOptions();
			cy.get('@valuePreview').should(
				'have.text',
				'[\n "attachment",\n "neve_custom_layouts",\n "page",\n "post"\n]',
			);
		});
	});

	context('Full', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Multiselect', 'Full');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
		it('Can remove all items', function () {
			cy.get('@valuePreview').should(
				'have.text',
				'[\n "attachment",\n "neve_custom_layouts",\n "page",\n "post"\n]',
			);
			cy.get('.dd-toggle').should('not.have.attr', 'disabled');
			removeAllOptions();
			cy.get('@valuePreview').should('have.text', '[]');
		});
	});
});

const addAllOptions = () => {
	cy.get('.dd-toggle button').as('toggle');

	cy.get('@toggle').should('not.have.attr', 'disabled');

	allOptions.forEach((option) => {
		cy.get('@toggle').click();
		cy.get('.components-popover__content').should('be.visible');
		cy.get('button').contains(option, { matchCase: false }).click();
	});

	cy.get('.components-popover__content').should('not.exist');
	cy.get('@toggle').should('have.attr', 'disabled');
};

const removeAllOptions = () => {
	cy.get('.dd-toggle button').as('toggle');

	cy.get('@toggle').should('have.attr', 'disabled');

	allOptions.forEach((option) => {
		cy.get('.token').contains(option, { matchCase: false }).click();
	});

	cy.get('@toggle').should('not.have.attr', 'disabled');
};
