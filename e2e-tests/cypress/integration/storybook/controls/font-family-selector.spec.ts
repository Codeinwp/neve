describe('Font Family Selector', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});
	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Font Family Selector', 'Default');
		});
		it('Google Font Appears', function () {
			cy.findByRole('button', {
				name: /default abc/i,
			}).click();
			cy.findByRole('link', {
				name: /acme abc/i,
			});
			cy.findByText(/google/i);
		});
	});

	context('Only System Fonts', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Font Family Selector', 'Only System Fonts');
		});

		it('Google Font does not appears', function () {
			cy.findByRole('button', {
				name: /default abc/i,
			}).click();
			cy.findByRole('link', {
				name: /acme abc/i,
			}).should('not.exist');
			cy.findByText(/google/i).should('not.exist');
		});
	});

	context('Inherit is Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Font Family Selector', 'Inherit Is Default');
		});
		it('Inherit is selected by default', function () {
			cy.findByRole('button', {
				name: /inherit abc/i,
			});
		});
	});
});
