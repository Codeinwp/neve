import 'cypress-file-upload';

Cypress.Cookies.defaults({
	whitelist: /wordpress_.*/
});
Cypress.Commands.add('login', (nextRoute = null) => {
	//console.log(cy.getCookies());

	let cookies = cy.getCookies({log: true}).then(function (cookies) {
		let isLoggedIn = false;
		cookies.forEach(function (value) {
			if (value.name.includes('wordpress_')) {
				isLoggedIn = true;
			}
		});

		if (isLoggedIn) {
			if (nextRoute !== null) {
				cy.visit(nextRoute);
			}
			return;
		}
		cy.visit('/wp-admin');
		cy.wait(500);
		cy.get('#user_login').type(Cypress.config().user);
		cy.get('#user_pass').type(Cypress.config().password);
		cy.get('#wp-submit').click();
		if (nextRoute === null) {
			return;
		}
		cy.visit(nextRoute);
	});

});
Cypress.Commands.add('navigate',
	(nextRoute = '/') => {
		cy.visit(nextRoute);
	});
Cypress.Commands.add('clearWelcome', () => {
	cy.window()
		.then(win => {
			win.wp && win.wp.data.select('core/edit-post').isFeatureActive('welcomeGuide') && win.wp.data.dispatch('core/edit-post').toggleFeature('welcomeGuide');
		});
});
Cypress.Commands.add('insertCoverBlock', () => {
	importCodeContent('<!-- wp:cover {"overlayColor":"neve-button-color","align":"full"} -->\n' +
		'<div class="wp-block-cover alignfull has-neve-button-color-background-color has-background-dim"><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->\n' +
		'<p class="has-text-align-center has-large-font-size">test</p>\n' +
		'<!-- /wp:paragraph --></div></div>\n' +
		'<!-- /wp:cover -->\n' +
		'\n' +
		'<!-- wp:cover {"overlayColor":"neve-button-color","align":"wide"} -->\n' +
		'<div class="wp-block-cover alignwide has-neve-button-color-background-color has-background-dim"><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->\n' +
		'<p class="has-text-align-center has-large-font-size">test</p>\n' +
		'<!-- /wp:paragraph --></div></div>\n' +
		'<!-- /wp:cover -->\n' +
		'\n' +
		'<!-- wp:cover {"overlayColor":"neve-button-color"} -->\n' +
		'<div class="wp-block-cover has-neve-button-color-background-color has-background-dim"><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->\n' +
		'<p class="has-text-align-center has-large-font-size">test</p>\n' +
		'<!-- /wp:paragraph --></div></div>\n' +
		'<!-- /wp:cover -->');
	cy.wait(1000);
	updatePost();
});

function importCodeContent(text) {
	cy.get('.edit-post-more-menu').click().get('.components-dropdown-menu__menu button').contains('Code editor').click();
	cy.get('textarea.editor-post-text-editor').focus().invoke('val', text).type('{enter}');
	cy.get('.edit-post-text-editor__toolbar button').contains('Exit Code Editor').click();
}

Cypress.Commands.add('editCurrentPost', editCurrentPost);
Cypress.Commands.add('insertPost',
	(title = 'Test', content = 'Content', type = 'post', featured = false) => {
		let loginRoute = '/wp-admin/post-new.php';
		if (type !== 'post') {
			loginRoute += '?post_type=' + type;
		}

		cy.login(loginRoute);
		cy.clearWelcome();
		if (featured) {
			addFeaturedImage();
		}

		cy.wait(1000);
		cy.get('.editor-post-title__input').type(title);
		cy.get(
			' textarea.block-editor-default-block-appender__content').click({force: true});
		cy.get('.block-editor-rich-text__editable').type(content);
		cy.get('.editor-post-publish-panel__toggle').click();
		updatePost();
	});
Cypress.Commands.add('updatePost', updatePost);

Cypress.Commands.add('getCustomizerControl', (slug) => {
	cy.window()
		.then((win) => {
			win.wp.customize.control(slug).focus();
		});
	return( cy.get('#customize-control-' + slug) );
});

Cypress.Commands.add('getCustomizerControlValue', (slug) => {
	return cy.window().then((win) => win.wp.customize.control(slug).setting.get() );
});

Cypress.Commands.add('setTypographyControl', ( controlSelector, values ) => {
  setTypographyControl( controlSelector, values )
});


function updatePost() {
	cy.get('.editor-post-publish-button').click();
	cy.wait(1000);
}

function editCurrentPost() {
	cy.get('#wp-admin-bar-edit a').click();
	cy.clearWelcome();
}

function addFeaturedImage() {
	cy.get('.components-panel__body-toggle').contains('Featured image').click();
	cy.get('.editor-post-featured-image__toggle').click();
	cy.get('.media-frame').find('.media-menu-item').contains('Media Library').click({force: true});

	cy.get('.attachments-browser .attachments > li.attachment').first().click({force: true});
	cy.wait(2500);
	cy.get('.media-button-select').click();
}

/**
 * Set single typography control.
 *
 * @param controlSelector
 * @param values
 */
function setTypographyControl( controlSelector, values ) {
  cy.get( controlSelector ).
  as( 'control' );

  cy.get( '@control' ).
  should( 'be.visible' ).
  and( 'contain', 'Transform' ).
  and( 'contain', 'Weight' ).
  and( 'contain', 'Font Size' ).
  and( 'contain', 'Line Height' ).
  and( 'contain', 'Letter Spacing' );

  // Change text transform.
  cy.get( '@control' ).
  find( '.text-transform select' ).
  select( values.transform );

  // Change font weight.
  cy.get( '@control' ).
  find( '.font-weight select' ).
  select( values.weight );

  let devices = ['desktop', 'tablet', 'mobile'],
    controls = ['fontSize', 'lineHeight', 'letterSpacing'];

  devices.map( ( device ) => {
    cy.get( '@control' ).find( 'button.' + device ).first().click();
    // Change font size.
    cy.get( '@control' ).
    find( '.font-size input' ).
    as( 'fontSize' );

    cy.get( '@control' ).
    find( '.line-height input' ).
    as( 'lineHeight' );

    cy.get( '@control' ).
    find( '.letter-spacing input' ).
    as( 'letterSpacing' );

    controls.map( control => {
      cy.get( '@' + control ).invoke( 'val' ).then( value => {
        // Make sure value is default.
        cy.get( '@' + control ).should( 'have.value', value );
        // Change the value.
        changeNumberInputValue( '@' + control, values[control][device] );
        // Value was changed?
        cy.get( '@' + control ).should( 'have.value', values[control][device] );
        // Reset to old value.
        cy.get( '@' + control ).
        closest( '.neve-responsive-sizing' ).
        find( 'button' ).
        click();
        // Make sure value has been reset.
        cy.get( '@' + control ).should( 'have.value', value );
        // Change the value.
        changeNumberInputValue( '@' + control, values[control][device] );
      } );
    } );
  } );
}

function changeNumberInputValue( input, value ) {
  cy.get( input ).
  clear( {force: true} ).
  type( '{leftarrow}' + value + '{rightarrow}{backspace}' );
}

