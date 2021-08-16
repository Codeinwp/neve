describe('Font Family Selector', function () {
	before(function () {
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
		});
	});

	context('Only System Fonts', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Font Family Selector', 'Only System Fonts');
		});
	});

	context('Inherit is Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Font Family Selector', 'Inherit Is Default');
		});
	});
});
