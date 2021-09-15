describe('Accordion', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	it('Initially Opened', function () {
		cy.loadStory('Customizer/Controls/Accordion', 'Initially Opened');

		cy.get('.nv-accordion').should('have.class', 'expanded');
		cy.get('.accordion-content');

		cy.get('.nv-accordion').click();
		cy.get('.nv-accordion').should('not.have.class', 'expanded');
		cy.get('.accordion-content').should('not.exist');
	});

	it('Initially Closed', function () {
		cy.loadStory('Customizer/Controls/Accordion', 'Initially Closed');

		cy.get('.nv-accordion').should('not.have.class', 'expanded');
		cy.get('.accordion-content').should('not.exist');

		cy.get('.nv-accordion').click();
		cy.get('.nv-accordion').should('have.class', 'expanded');
		cy.get('.accordion-content');
	});

	it('Label Works', function () {
		cy.loadStory('Customizer/Controls/Accordion', 'Initially Closed');

		cy.changeArg('label', 'New Accordion Label');

		cy.get('button.nv-accordion h4')
			.invoke('text')
			.then((text) => {
				expect(text).equal('New Accordion Label');
			});
	});
});
