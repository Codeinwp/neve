const color = '#285078';
const rgbColor = 'rgb(40, 80, 120)';

describe('Header Builder Logo & Site Identity settings', function () {
	it('Sets changes and checks them', function () {
		cy.login();
		aliasRestRoutes();
		hideTitleAndTagline();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
			cy.wait(2000);
			checkFrontEndHided();
		});
		setupCustomizer();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
			cy.wait(2000);
			checkFrontEnd();
		});

	});
});

function aliasRestRoutes() {
	let home = Cypress.config().baseUrl;
	cy.server().
	route('POST', home + '/wp-admin/admin-ajax.php').
	as('customizerSave');
}

function hideTitleAndTagline() {
	cy.visit('/wp-admin/customize.php');

	cy.get('#accordion-panel-hfg_header').should('be.visible').
	click();

	//Switches to Logo & Site Identity settings.
	cy.get(
		'.hfg--builder-show .hfg--panel-desktop .hfg--row-main .grid-stack-item[title="Logo & Site Identity"]').
	should('be.visible').
	click();

	//Hides the site Title and Tagline
	cy.get(
		'#inspector-toggle-control-0').
	click();
	cy.get(
		'#inspector-toggle-control-1').
	click();
	cy.get('#save').click();
}

function setupCustomizer() {
	// Logins to wp and redirect to customizer.
	cy.visit('/wp-admin/customize.php');

	// Opens customizer panel.
	cy.get('#accordion-panel-hfg_header').should('be.visible').
	click();

	// Checks if logo & site identity component is visible and click it.
	cy.get(
		'.hfg--builder-show .hfg--panel-desktop .hfg--row-main .grid-stack-item[title="Logo & Site Identity"]').
	should('be.visible').
	click();

	//Makes title visible back.
	cy.get(
		'#inspector-toggle-control-0').
	should('be.visible').
	click();

	//Makes tagline visible back.
	cy.get(
		'#inspector-toggle-control-1').
	should('be.visible').
	click();

	//Changes blog name
	cy.get(
		'#_customize-input-blogname').
	should('be.visible').
	click().
	clear().
	type('Test blog title').
	trigger('change');

	//Changes blog description
	cy.get(
		'#_customize-input-blogdescription').
	click().
	clear().
	type('Test this description').
	trigger('change');

	//Switches to Layout settings
	cy.get('label.logo_component_align.logo_component_padding.logo_component_margin').
	//should('be.visible').
	click();

	//Sets the allignment to Center
	cy.get('#customize-control-logo_component_align > .neve-white-background-control > .neve-radio-icons > [aria-label="Center"]').
	should('be.visible').
	click();

	//Sets the Margin to 5px
	cy.get(
		'#customize-control-logo_component_margin .top-input').
	click().
	clear().
	type('{uparrow}{uparrow}{uparrow}{uparrow}{uparrow}').
	trigger('change');

	//Switches to Style settings
	cy.get('.logo_color').
	//should('be.visible').
	click();

	//Clicks on the color change button
	cy.get('#customize-control-logo_color > .neve-white-background-control > .neve-control-header > .components-dropdown > .components-button').
	should('be.visible').
	click();

	//Changes the color
	cy.get('input.components-text-control__input').
	click().
	clear().
	type(color);

	cy.get('#save').click();

}

function checkFrontEndHided() {

	cy.visit('/');
	cy.get('a.brand').
	should('not.be.visible');
}

function checkFrontEnd() {

	cy.visit('/');

	//Tests blog name
	cy.get('h1.site-title').
	should('be.visible').
	contains('Test blog title');

	//Tests blog description
	cy.get('div.nv-title-tagline-wrap > small').
	should('be.visible').
	contains('Test this description');

	//Checks if title section is centered
	cy.get('div.site-logo').
	should('have.css', 'justify-content', 'center');

	//Checks if title section has a margin of 5px.
	cy.get('.builder-item--logo').should('be.visible');
	cy.get('.builder-item--logo').
	should('have.css', 'margin-top', '5px').should('have.css', 'margin-bottom', '5px').
	should('have.css', 'margin-right', '5px').should('have.css', 'margin-left', '5px');

	//Checks if the color of the title and tagline was setted.
	cy.get('.builder-item--logo > .site-logo > .brand > .nv-title-tagline-wrap').
	should('have.css', 'color', rgbColor);
}


