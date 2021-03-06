describe('Accordion', () => {
	before(() => {
		cy.visitStorybook();
	});

	it('Initially Opened', () => {
		cy.loadStory('Customizer/Controls/Accordion', 'Initially Opened');

		cy.get('.nv-accordion').should('have.class', 'expanded');
		cy.get('.accordion-content').should('exist');

		cy.get('.nv-accordion').click();
		cy.get('.nv-accordion').should('not.have.class', 'expanded');
		cy.get('.accordion-content').should('not.exist');
	});

	it('Initially Closed', () => {
		cy.loadStory('Customizer/Controls/Accordion', 'Initially Closed');

		cy.get('.nv-accordion').should('not.have.class', 'expanded');
		cy.get('.accordion-content').should('not.exist');

		cy.get('.nv-accordion').click();
		cy.get('.nv-accordion').should('have.class', 'expanded');
		cy.get('.accordion-content').should('exist');
	});

	it('Label Works', () => {
		cy.loadStory('Customizer/Controls/Accordion', 'Initially Closed');

		cy.changeArg('label', 'New Accordion Label');

		cy.get('button.nv-accordion h4')
			.invoke('text')
			.then((text) => {
				expect(text).equal('New Accordion Label');
			});
	});
});
