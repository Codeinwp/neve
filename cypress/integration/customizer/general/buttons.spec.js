let colors = {
	hexaBackground: '#38d421',
	hexaText: '#830202',
	rgbBackground: 'rgb(56, 212, 33)',
	rgbText: 'rgb(131, 2, 2)'
}
describe('Primary button control ', function () {

	it('Changes button settings in customizer', function () {
		cy.login();
		cy.visit('/wp-admin/customize.php');
		cy.get('#accordion-section-neve_buttons_section').click();

		//Changes border-radius
		cy.get('#customize-control-neve_button_appearance > .neve-button-appearance-control > .neve-white-background-control > .neve-responsive-sizing > :nth-child(2) > .top-input').
		click().clear().
		//the border radius will be 20
		type('2');

		//Changes the background color
		cy.get('button.components-button.is-secondary.is-button').
		filter(":visible").
		eq(0).
		click();
		cy.get('input.components-text-control__input').click({
			force: true
		}).clear().type(colors.hexaBackground);

		//Changes text color
		cy.get('button.components-button.is-secondary.is-button').
		filter(":visible").
		eq(1).
		click();
		cy.get('input.components-text-control__input').click({
			force: true
		}).clear().type(colors.hexaText);

		cy.get('button.components-button.components-panel__body-toggle').
		contains('Normal').click();

		//Change hover colors, can't check it in front-end till cypress make it possible.
		/*
		cy.get('button.components-button.components-panel__body-toggle').
		contains('Hover').click();

		cy.get('div.neve-control-header.neve-color-component').
		filter(':visible').find('button').eq('0').click();
		cy.get('input.components-text-control__input').click({ force: true }).clear().type('#eeee13');
		
		cy.get('div.neve-control-header.neve-color-component').
		filter(':visible').find('button').eq('4').click();
		cy.get('input.components-text-control__input').click({ force: true }).clear().type('#dc0adc');
		*/

		cy.get('#save').click();
		cy.wait(2000);
	})

	it('Creates a post using a primary button', function () {
		//Creates the post
		cy.insertPost('Test primary button', 'temporaryContent', 'post', false);
		cy.wait(2000);

		//Goes to homepage and clicks on the last post created
		cy.visit('/');
		cy.get('h2.blog-entry-title.entry-title > a').contains('Test primary button').first().click({
			force: true
		});

		//Edits the post
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();

		//Clears the content and adds a button
		cy.get('p').
		contains('temporaryContent').
		click().
		clear().
		type('/button');

		cy.get('button.components-button.components-autocomplete__result.block-editor-autocompleters__block').
		click();

		//Clicks on the button so it can write content inside
		cy.get('div[role="textbox"]').first().
		type('Button content');
		cy.get('div.block-editor-block-styles__item-preview').eq('1').click();

		cy.updatePost();
	})

	it('Check button properties in front-end', function () {
		//Goes to homepage and clicks on the last post created
		cy.visit('/');
		cy.get('h2.blog-entry-title.entry-title > a').contains('Test primary button').first().click({
			force: true
		});

		//Checks if the button is visible
		cy.get('div.wp-block-button.is-style-primary').
		should('be.visible');

		//Checks the content, border-radius, and colors
		cy.get('a.wp-block-button__link').
		should('contain.text', 'Button content').
		and('have.css', 'background-color', colors.rgbBackground).
		and('have.css', 'color', colors.rgbText).
		and('have.css', 'border-top-left-radius', '20px').
		and('have.css', 'border-top-right-radius', '20px').
		and('have.css', 'border-bottom-right-radius', '20px').
		and('have.css', 'border-bottom-left-radius', '20px');

	})

})
