describe('Multiselect', function () {
	before(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Multiselect', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
		it('Changes color when hovering to remove an item', function () {
			cy.findByRole('button', {
				name: /posts/i,
			})
				.realHover()
				.should('have.css', 'background-color', 'rgb(236, 124, 124)');
			cy.findByText(/remove item/i);
		});

		it('Changes color when hovering to add an item', function () {
			cy.findByRole('button', {
				name: /media/i,
			})
				.realHover()
				.should('have.css', 'background-color', 'rgb(110, 183, 122)');
			cy.findByText(/add item/i);
		});
	});

	context('Empty', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Multiselect', 'Empty');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Can add all items', function () {
			cy.get('@valuePreview').should('have.text', '[]');
			cy.findByText(/add items by clicking the ones below\./i);
			cy.findByText(/all items are already selected\./i).should('not.exist');
			clickAllOptions();
			cy.findByText(/all items are already selected\./i);
			cy.findByText(/add items by clicking the ones below\./i).should('not.exist');
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
			cy.findByText(/all items are already selected\./i);
			cy.findByText(/add items by clicking the ones below\./i).should('not.exist');
			cy.get('@valuePreview').should(
				'have.text',
				'[\n "attachment",\n "neve_custom_layouts",\n "page",\n "post"\n]',
			);
			clickAllOptions();
			cy.get('@valuePreview').should('have.text', '[]');
			cy.findByText(/add items by clicking the ones below\./i);
			cy.findByText(/all items are already selected\./i).should('not.exist');
		});
	});
});

const clickAllOptions = () => {
	cy.findByRole('button', {
		name: /media/i,
	}).click();
	cy.findByRole('button', {
		name: /custom layouts/i,
	}).click();
	cy.findByRole('button', {
		name: /pages/i,
	}).click();
	cy.findByRole('button', {
		name: /posts/i,
	}).click();
};
