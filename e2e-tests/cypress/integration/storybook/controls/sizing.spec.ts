describe('Sizing', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Sizing', 'Default');
		});
		it('Changes all values when one field is changed', function () {
			cy.findByRole('button', {
				name: /link values/i,
			}).should('have.class', 'active');

			cy.get('.right-input').type('0');
			cy.findByText(/\{ "top": "100", "right": "100", "bottom": "100", "left": "100" \}/i);

			cy.get('.reset > .dashicon').click();
			cy.findByText(/\{ "top": 10, "right": 10, "bottom": 10, "left": 10 \}/i);

			cy.get('.bottom-input').type('1');
			cy.findByText(/\{ "top": "101", "right": "101", "bottom": "101", "left": "101" \}/i);

			cy.get('.reset > .dashicon').click();
			cy.get('.left-input').type('2');
			cy.findByText(/\{ "top": "102", "right": "102", "bottom": "102", "left": "102" \}/i);

			cy.get('.reset > .dashicon').click();
			cy.get('.top-input').type('3');
			cy.findByText(/\{ "top": "103", "right": "103", "bottom": "103", "left": "103" \}/i);
		});
	});

	context('Unlinked Defaults', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Sizing', 'Unlinked Defaults');
		});
		it('Changes only the value from the field selected', function () {
			cy.findByRole('button', {
				name: /link values/i,
			}).should('not.have.class', 'active');

			cy.findByText(/\{ "top": 0, "right": 10, "bottom": 0, "left": 10 \}/i);

			cy.get('.right-input').type('4');
			cy.get('.bottom-input').type('1');
			cy.get('.left-input').type('2');
			cy.get('.top-input').type('3');
			cy.findByText(/\{ "top": "03", "right": "104", "bottom": "01", "left": "102" \}/i);
		});
	});

	context('No Linking', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Sizing', 'No Linking');
		});

		it('Have no linking icon', function () {
			cy.findByRole('button', {
				name: /link values/i,
			}).should('not.exist');

			cy.findByText(/\{ "top": 0, "right": 10, "bottom": 0, "left": 10 \}/i);

			cy.get('.right-input').type('4');
			cy.get('.bottom-input').type('1');
			cy.get('.left-input').type('2');
			cy.get('.top-input').type('3');
			cy.findByText(/\{ "top": "03", "right": "104", "bottom": "01", "left": "102" \}/i);
		});
	});

	context('Empty Values', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Sizing', 'Empty Values');
			cy.get('.value-previewer > pre').as('valuePreview');
		});
		it('Have empty values by default', function () {
			cy.findByText(/\{ "top": "", "right": "", "bottom": "", "left": "" \}/i);

			cy.get('.right-input').should('have.value', '');
			cy.get('.bottom-input').should('have.value', '');
			cy.get('.left-input').should('have.value', '');
			cy.get('.top-input').should('have.value', '');

			cy.get('.bottom-input').type('101');
			cy.findByText(/\{ "top": "101", "right": "101", "bottom": "101", "left": "101" \}/i);

			cy.get('.reset > .dashicon').click();

			cy.findByText(/\{ "top": "", "right": "", "bottom": "", "left": "" \}/i);

			cy.get('.right-input').should('have.value', '');
			cy.get('.bottom-input').should('have.value', '');
			cy.get('.left-input').should('have.value', '');
			cy.get('.top-input').should('have.value', '');
		});
	});
});
