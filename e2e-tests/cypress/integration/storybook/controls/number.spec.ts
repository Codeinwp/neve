describe('number', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Number', 'Default');
			cy.get('.value-previewer > :nth-child(2)').as('device');
			cy.get('.value-previewer > :nth-child(4)').as('value');
		});

		it('Change unit type value', function () {
			cy.get('@device').should('have.text', 'desktop');
			cy.findByRole('button', {
				name: /em/i,
			}).click();
			cy.get('.active').should('have.text', 'em');

			cy.findByRole('button', {
				name: /tablet/i,
			}).click();
			cy.get('@device').should('have.text', 'tablet');
			cy.findByRole('button', {
				name: /%/i,
			}).click();
			cy.get('.active').should('have.text', '%');

			cy.findByRole('button', {
				name: /mobile/i,
			}).click();
			cy.get('@device').should('have.text', 'mobile');
			cy.findByRole('button', {
				name: /em/i,
			}).click();
			cy.get('.active').should('have.text', 'em');

			cy.get('@value').should(
				'have.text',
				'{\n "desktop": 30,\n "tablet": 20,\n "mobile": 10,\n "desktopUnit": "em",\n "tabletUnit": "%",\n "mobileUnit": "em"\n}',
			);
		});
	});

	context('Single Unit', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Number', 'Single Unit');
			cy.get('.value-previewer > :nth-child(2)').as('device');
			cy.get('.value-previewer > :nth-child(4)').as('value');
		});

		it('Change value for each device', function () {
			cy.findByRole('button', {
				name: /px/i,
			}).should('be.disabled');

			cy.get('@device').should('have.text', 'desktop');
			cy.findByRole('spinbutton').clear().type('5');

			cy.findByRole('button', {
				name: /tablet/i,
			}).click();
			cy.get('@device').should('have.text', 'tablet');
			cy.findByRole('spinbutton').clear().type('6');

			cy.findByRole('button', {
				name: /mobile/i,
			}).click();
			cy.get('@device').should('have.text', 'mobile');
			cy.findByRole('spinbutton').clear().type('7');

			cy.get('@value').should(
				'have.text',
				'{\n "desktop": "50",\n "tablet": "60",\n "mobile": "70",\n "desktopUnit": "px",\n "tabletUnit": "px",\n "mobileUnit": "px"\n}',
			);
		});

		it('Reset the value to the old one', function () {
			cy.findByRole('spinbutton').clear().type('7');
			cy.get('@value').should(
				'have.text',
				'{\n "desktop": "70",\n "tablet": 20,\n "mobile": 10,\n "desktopUnit": "px",\n "tabletUnit": "px",\n "mobileUnit": "px"\n}',
			);

			cy.get('.neve-responsive-sizing > .components-button > .dashicon').click();
			cy.get('@value').should(
				'have.text',
				'{\n "desktop": 30,\n "tablet": 20,\n "mobile": 10,\n "desktopUnit": "px",\n "tabletUnit": "px",\n "mobileUnit": "px"\n}',
			);
		});
	});
});
