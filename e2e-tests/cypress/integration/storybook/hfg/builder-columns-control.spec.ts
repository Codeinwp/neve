describe('Builder Columns Control', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});
	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Hfg/Builder Columns Control', 'Default');
		});
		it('Changes the number of columns', function () {
			cy.findByRole('spinbutton', {
				name: /columns number:/i,
			}).type('{selectall}2');

			cy.findByRole('img', {
				name: /option equal/i,
			});
			cy.findByRole('img', {
				name: /option left\-third/i,
			});
			cy.findByRole('img', {
				name: /option right\-third/i,
			});
		});
	});
});
