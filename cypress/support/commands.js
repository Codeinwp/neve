import 'cypress-file-upload';
import '@percy/cypress';
let scrollToBottom = require("scroll-to-bottomjs");
Cypress.Cookies.defaults({
	preserve: /wordpress_.*/
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
			win.wp && win.wp.data &&  win.wp.data.select('core/edit-post').isFeatureActive('welcomeGuide') && win.wp.data.dispatch('core/edit-post').toggleFeature('welcomeGuide');
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
	cy.get('.edit-post-text-editor__toolbar button').contains(/Exit Code Editor/i).click();
}

Cypress.Commands.add('editCurrentPost', editCurrentPost);
Cypress.Commands.add('insertPost',
	(title = 'Test', content = 'Content', type = 'post', featured = false, tags = false) => {
		let loginRoute = '/wp-admin/post-new.php';
		if (type !== 'post') {
			loginRoute += '?post_type=' + type;
		}

		cy.login(loginRoute);
		cy.clearWelcome();
		if (featured) {
			addFeaturedImage();
		}

		if (tags) {
			addTags();
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

function addTags() {
	cy.get('.components-panel__body-toggle').contains('Tags').click();
	cy.get('.components-form-token-field__label').contains('Add New Tag').parent().find('input').type( 'test-tag,');
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

/**
 * Capture and compare the fullpage snapshots.
 *
 */
Cypress.Commands.add("captureDocument", (generalMaskAndClip = true, screenShotName = false) => {
	if(generalMaskAndClip){
		let maskElement = '.elementor-element-31b9e15, .pikaday__display--pikaday, .elementor-widget-video, label[for="vscf_captcha"],.elementor-widget-google_maps,.pikaday__display,.elementor-video-iframe';
		let clipElement = '.widget_top_rated_products, .wpcf7-quiz-label, .eaw-typed-text,.product .related.products,.captcha_img,.elementor-element-38f7ff1e,.elementor-widget-container[style*="will-change"], .particles-js-canvas-el,.product_list_widget li + li, .exclusive.products';
		cy.maskAndClip(maskElement,clipElement);
	}
	cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }));
	cy.wait(5000);
	cy.percySnapshot(screenShotName);
});
/**
 * Capture and compare the fullpage snapshots.
 *
 * @param {string} path The path to store the snapshot.
 */
Cypress.Commands.add("maskAndClip", (maskSelectors, clipSelectors, hideElements) => {
	cy.get('body').then(($body) => {
		// synchronously query from body
		// to find which element was created
		if ($body.find(maskSelectors).length) {
			cy.get(maskSelectors).invoke('css', 'background', 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWBAMAAACWdajhAAAAG1BMVEUAAAD///+fn59fX18fHx/f398/Pz9/f3+/v78mHjoVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC00lEQVR4nO2WTW/TQBCGN7Hj9Nip68THWmo5x1Ir5ei0CnDstoA4OghEjg0Czlil8LeZmV3HCUlQIa64vI9UrT3exs+OZz+MAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHkeHHJvxP98bOnxCK2j9FRuv2xGH1tbX7Yj/L60sNiagE2Pe2eSzi8ub9fn49am2lzZ5Jn2Dh5ui1goe6O1I+nWTExOe0U0p0bFN7lvRmiaF/vW5/pNyTeuAQzmJNXPHfSui2GtFlmOp9Mt4TDnfDDn6QXp+20tLOdRMScYWSfmCXq1pZWlxKXM1T0ZRxW/t0vcw81rT5DzM2bVDcVQGdGvmfBPa2+JK/fbWYicxC1nJZMNVrYiuJUHuUY8KM0skg05rMZAsXnO/E2MmnG1jjznjpQyiFa1p4r7hnfz8qlafuHZy34r6QsvQaVluQr7uiIk8MPkRu3M72TGZHqlVX3HlxJKFYhn3Whqa+DbkzFTHTmWJavFDeSBj+u2X99IyUrNuoOtaGtLWJ1Yy1CwQ4ccz1eJL2+wYzz/ZlrQmMuDOplbHay2/N61qXbiYdlpuZIHdtqH9m5Zma4tWb6nlO65ma0r08/1Sy6uGltKvrdZWTwupKXmtqVLbnrRCNWhqixcPX/LiO3AdeAVpreTdTOzqtDtyWlzBM3KTk2diV9qIV8nFcGUmHkvMa2WyVM1SN7ZZO1pu3XKL1EDjNm7WKyvtQGbqSJenntcS9YNaayL5rGI/LffT8mVar/JZWr7kS3kNL/i6unM715bOo4o3mj69iSqvVaXllWU31epTXMw5nQf0I+SpULSgVe+J3XqP03Im+RQSWpDR7VJ3uox3vqbkKbaxz/rC/XMoE/FCymFvrZUTRDryH/dL4k4OY3tfnyD0XBA8pCOvJWeGIk+9Ft/JcUI6ngZ77dUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ6KX6rsak4Q9c5cAAAAAElFTkSuQmCC) #000 no-repeat center center');
			cy.get(maskSelectors).invoke('css', 'color', 'transparent');
			if ($body.find(maskSelectors).find("*").length > 0) {
				cy.get(maskSelectors).children().invoke('css', 'visibility', 'hidden');
			}
		}
		if ($body.find(clipSelectors).length) {
			cy.get(clipSelectors).invoke('css', 'display', 'none');
		}
		if (hideElements && hideElements.length > 0 && $body.find(hideElements).length) {
			cy.get(hideElements).invoke('css', 'visibility', 'hidden');
		}
	});
});


function changeNumberInputValue(input, value) {
	cy.get(input).clear({force: true}).type('{leftarrow}' + value + '{rightarrow}{backspace}');
}

/**
 * Alias rest routes
 */
Cypress.Commands.add("aliasRestRoutes", () => {
	let home = Cypress.config().baseUrl;
	cy.server().
			route( 'POST', home + '/wp-admin/admin-ajax.php' ).
			as( 'customizerSave' );
});
