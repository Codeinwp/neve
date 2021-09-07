describe('Form fields', function () {
	before('Sets up customizer', function () {
		cy.fixture('customizer/form-fields/form-fields-setup').then((componentSetup) => {
			cy.setCustomizeSettings(componentSetup);
		});
	});

	it('Checks up the search field', function () {
		cy.visit('/');
		cy.wait(500);
		cy.reload();
		cy.findByRole('searchbox')
			.should('have.css', 'padding-top', '14px')
			.and('have.css', 'padding-bottom', '14px')
			.and('have.css', 'padding-left', '14px')
			.and('have.css', 'color', 'rgb(3, 102, 214)')
			.and('have.css', 'background-color', 'rgb(237, 237, 237)')
			.and('have.css', 'border-bottom-color', 'rgb(20, 23, 28)')
			.and('have.css', 'border-top-color', 'rgb(20, 23, 28)')
			.and('have.css', 'border-left-color', 'rgb(20, 23, 28)')
			.and('have.css', 'border-right-color', 'rgb(20, 23, 28)')
			.and('have.css', 'border-top-width', '3px')
			.and('have.css', 'border-bottom-width', '3px')
			.and('have.css', 'border-left-width', '3px')
			.and('have.css', 'border-right-width', '3px')
			.and('have.css', 'border-top-left-radius', '4px')
			.and('have.css', 'border-top-right-radius', '4px')
			.and('have.css', 'border-bottom-left-radius', '4px')
			.and('have.css', 'border-bottom-right-radius', '4px')
			//to do - text transform, works only in customizer for search
			.and('have.css', 'font-size', '15px')
			.and('have.css', 'line-height', '24px')
			.and('have.css', 'letter-spacing', '1.5px')
			.and('have.css', 'font-weight', '600');
	});
	it('Checks up the comment label', function () {
		cy.visit('/hello-world');
		cy.get('.comment-form-comment label')
			.should('have.css', 'font-size', '15px')
			.and('have.css', 'line-height', '24px')
			.and('have.css', 'letter-spacing', '1.5px')
			.and('have.css', 'font-weight', '100')
			.and('have.css', 'text-transform', 'capitalize');
	});
	it('Checks up the button', function () {
		cy.visit('/hello-world');
		cy.findByRole('button', { name: /post comment/i })
			.should('have.css', 'background-color', 'rgb(3, 102, 214)')
			.and('have.css', 'color', 'rgb(255, 255, 255)')
			.and('have.css', 'border-bottom-left-radius', '3px')
			.and('have.css', 'border-bottom-right-radius', '3px')
			.and('have.css', 'border-top-left-radius', '3px')
			.and('have.css', 'border-top-right-radius', '3px')
			.and('have.css', 'text-transform', 'uppercase')
			.and('have.css', 'padding-top', '8px')
			.and('have.css', 'padding-bottom', '8px')
			.and('have.css', 'padding-right', '12px')
			.and('have.css', 'padding-left', '12px');
	});
});
