// eslint-disable-next-line @typescript-eslint/no-var-requires
const testData = require('../../../fixtures/storybook/controls/dynamic-fields-inserter.json');

describe('Dynamic Fields Inserter', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});
	context('All Options Enabled', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Dynamic Fields Inserter', 'All Options Enabled');
		});

		testData.allOptions.forEach((tag) => {
			it(` ${tag.name} works`, function () {
				cy.findByRole('button', {
					name: /insert dynamic tag/i,
				}).click();
				cy.findByRole('menuitem', {
					name: tag.name,
				}).click();

				cy.findByRole('textbox', {
					name: /test input:/i,
				}).should('have.value', tag.value);
			});
		});
	});

	context('Only URL Options', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Dynamic Fields Inserter', 'Only Url Options');
		});

		testData.onlyUrl.forEach((tag) => {
			it(`${tag.name} is present`, function () {
				cy.findByRole('button', {
					name: /insert dynamic tag/i,
				}).click();
				cy.findByRole('menuitem', {
					name: tag.name,
				}).click();

				cy.findByRole('textbox', {
					name: /test input:/i,
				}).should('have.value', tag.value);
			});
		});

		testData.noUrl.forEach((tag) => {
			it(`${tag.name} does not exist`, function () {
				cy.findByRole('button', {
					name: /insert dynamic tag/i,
				}).click();
				cy.findByRole('menuitem', {
					name: tag.name,
				}).should('not.exist');
			});
		});
	});
});
