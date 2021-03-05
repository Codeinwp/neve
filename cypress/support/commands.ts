/* eslint-disable array-callback-return */
/* eslint-disable chai-friendly/no-unused-expressions */
import 'cypress-file-upload';
import '@percy/cypress';
import { scrollToBottom } from 'scroll-to-bottomjs';

// const scrollToBottom = require('scroll-to-bottomjs');
Cypress.Cookies.defaults({
	preserve: /wordpress_.*/,
});

Cypress.Commands.add('loginWithRequest', (nextRoute = '/wp-admin') => {
	cy.request({
		method: 'POST',
		url: '/wp-login.php',
		form: true,
		body: {
			log: Cypress.env('user'),
			pwd: Cypress.env('password'),
			'wp-submit': 'Log In',
			redirect_to: 'http://localhost:8080' + nextRoute,
		},
	});
});

Cypress.Commands.add('login', (nextRoute: string = null) => {
	cy.getCookies({
		log: true,
	}).then((cookies) => {
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
		cy.get('#user_login').type(Cypress.env('user'));
		cy.get('#user_pass').type(Cypress.env('password'));
		cy.get('#wp-submit').click();
		if (nextRoute === null) {
			return;
		}
		cy.visit(nextRoute);
	});
});

Cypress.Commands.add('clearWelcome', () => {
	cy.window().then((win) => {
		win.wp &&
			win.wp.data &&
			win.wp.data.select('core/edit-post').isFeatureActive('welcomeGuide') &&
			win.wp.data.dispatch('core/edit-post').toggleFeature('welcomeGuide');
	});
});

Cypress.Commands.add('insertCoverBlock', () => {
	const text =
		'<!-- wp:cover {"overlayColor":"neve-button-color","align":"full"} -->\n' +
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
		'<!-- /wp:cover -->';
	cy.get('.edit-post-more-menu')
		.click()
		.get('.components-dropdown-menu__menu button')
		.contains('Code editor')
		.click();
	cy.get('textarea.editor-post-text-editor').focus().invoke('val', text).type('{enter}');
	cy.get('.edit-post-text-editor__toolbar button')
		.contains(/Exit Code Editor/i)
		.click();

	cy.updatePost();
});

Cypress.Commands.add(
	'insertPost',
	(title = 'Test', content = 'Content', type = 'post', featured = false, tags = false) => {
		let loginRoute = '/wp-admin/post-new.php';
		if (type !== 'post') {
			loginRoute += '?post_type=' + type;
		}

		cy.login(loginRoute);
		cy.clearWelcome();
		if (featured) {
			cy.wait(500);
			cy.get('button').contains('Featured image').click();
			cy.get('.editor-post-featured-image__toggle').click();
			cy.get('.media-frame').find('.media-menu-item').contains('Media Library').click({
				force: true,
			});

			cy.get('.attachments-browser .attachments > li.attachment').first().click({
				force: true,
			});
			cy.get('.media-button-select').click();
		}

		if (tags) {
			cy.get('.components-panel__body-toggle').contains('Tags').click();
			cy.get('.components-form-token-field__label')
				.contains('Add New Tag')
				.parent()
				.find('input')
				.type('test-tag,');
		}
		cy.get('.editor-post-title__input').type(title);
		cy.get(' textarea.block-editor-default-block-appender__content').click({
			force: true,
		});
		cy.get('.block-editor-rich-text__editable').type(content);
		cy.get('.editor-post-publish-panel__toggle').click();
		cy.updatePost();
	},
);

Cypress.Commands.add('updatePost', () => {
	cy.get('.editor-post-publish-button').click();
	cy.wait(500);
});

Cypress.Commands.add('getCustomizerControl', (slug: string) => {
	cy.window().then((win) => {
		win.wp.customize.control(slug).focus();
	});
	return cy.get('#customize-control-' + slug);
});

Cypress.Commands.add('captureDocument', (generalMaskAndClip = true, screenShotName = false) => {
	if (generalMaskAndClip) {
		const maskElement =
			'.elementor-element-31b9e15, .pikaday__display--pikaday, .elementor-widget-video, label[for="vscf_captcha"],.elementor-widget-google_maps,.pikaday__display,.elementor-video-iframe';
		const clipElement =
			'.widget_top_rated_products, .wpcf7-quiz-label, .eaw-typed-text,.product .related.products,.captcha_img,.elementor-element-38f7ff1e,.elementor-widget-container[style*="will-change"], .particles-js-canvas-el,.product_list_widget li + li, .exclusive.products';
		cy.maskAndClip(maskElement, clipElement);
	}
	cy.window().then((cyWindow) =>
		scrollToBottom({
			remoteWindow: cyWindow,
		}),
	);
	cy.wait(5000);
	cy.percySnapshot(screenShotName);
});

Cypress.Commands.add(
	'maskAndClip',
	(maskSelectors: string, clipSelectors: string, hideElements?: string) => {
		cy.get('body').then(($body) => {
			// synchronously query from body
			// to find which element was created
			if ($body.find(maskSelectors).length) {
				cy.get(maskSelectors).invoke(
					'css',
					'background',
					'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWBAMAAACWdajhAAAAG1BMVEUAAAD///+fn59fX18fHx/f398/Pz9/f3+/v78mHjoVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC00lEQVR4nO2WTW/TQBCGN7Hj9Nip68THWmo5x1Ir5ei0CnDstoA4OghEjg0Czlil8LeZmV3HCUlQIa64vI9UrT3exs+OZz+MAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHkeHHJvxP98bOnxCK2j9FRuv2xGH1tbX7Yj/L60sNiagE2Pe2eSzi8ub9fn49am2lzZ5Jn2Dh5ui1goe6O1I+nWTExOe0U0p0bFN7lvRmiaF/vW5/pNyTeuAQzmJNXPHfSui2GtFlmOp9Mt4TDnfDDn6QXp+20tLOdRMScYWSfmCXq1pZWlxKXM1T0ZRxW/t0vcw81rT5DzM2bVDcVQGdGvmfBPa2+JK/fbWYicxC1nJZMNVrYiuJUHuUY8KM0skg05rMZAsXnO/E2MmnG1jjznjpQyiFa1p4r7hnfz8qlafuHZy34r6QsvQaVluQr7uiIk8MPkRu3M72TGZHqlVX3HlxJKFYhn3Whqa+DbkzFTHTmWJavFDeSBj+u2X99IyUrNuoOtaGtLWJ1Yy1CwQ4ccz1eJL2+wYzz/ZlrQmMuDOplbHay2/N61qXbiYdlpuZIHdtqH9m5Zma4tWb6nlO65ma0r08/1Sy6uGltKvrdZWTwupKXmtqVLbnrRCNWhqixcPX/LiO3AdeAVpreTdTOzqtDtyWlzBM3KTk2diV9qIV8nFcGUmHkvMa2WyVM1SN7ZZO1pu3XKL1EDjNm7WKyvtQGbqSJenntcS9YNaayL5rGI/LffT8mVar/JZWr7kS3kNL/i6unM715bOo4o3mj69iSqvVaXllWU31epTXMw5nQf0I+SpULSgVe+J3XqP03Im+RQSWpDR7VJ3uox3vqbkKbaxz/rC/XMoE/FCymFvrZUTRDryH/dL4k4OY3tfnyD0XBA8pCOvJWeGIk+9Ft/JcUI6ngZ77dUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ6KX6rsak4Q9c5cAAAAAElFTkSuQmCC) #000 no-repeat center center',
				);
				cy.get(maskSelectors).invoke('css', 'color', 'transparent');
				if ($body.find(maskSelectors).find('*').length > 0) {
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
	},
);

Cypress.Commands.add('setCustomizeSettings', (to) => {
	cy.request('POST', '/wp-json/wpthememods/v1/settings', to);
	// cy.goToCustomizer();
	// cy.window().then((win) => {
	// 	Object.keys(to).map((mod) => {
	// 		win.wp.customize.control(mod).setting.set(to[mod]);
	// 	});
	// });
	// cy.wait(500);
	// cy.intercept('POST', '/wp-admin/admin-ajax.php').as('save');
	// cy.get('#save').click();
	// cy.wait('@save').then((interception) => {
	// 	expect(interception.response.body.success).to.be.true;
	// 	expect(interception.response.statusCode).to.equal(200);
	// });
});

Cypress.Commands.add('goToCustomizer', () => {
	cy.login('/wp-admin/customize.php');
	cy.window()
		.then((win) => {
			//If the customizer is not ready, bind the flag to ready event.
			win.wp.customize.bind('ready', () => {
				win.appReady = true;
			});
		})
		.then(() => {
			// If we bind to the ready event too late, we can check the body class 'ready'.
			cy.get('body').then(($body) => {
				if ($body.hasClass('ready')) {
					cy.window().then((win) => {
						win.appReady = true;
					});
				}
			});
		});
	cy.window({
		timeout: 15000,
	}).should('have.property', 'appReady', true);
});

Cypress.Commands.add('aliasRestRoutes', () => {
	cy.intercept('POST', '/wp-admin/admin-ajax.php').as('customizerSave');
});

Cypress.Commands.add('toggleElements', (show: boolean) => {
	const icon = show ? 'dashicons-hidden' : 'dashicons-visibility';
	cy.get('.ti-sortable-item-area .ti-sortable-item-toggle').each(function (el) {
		cy.get(el)
			.find('.dashicon')
			.then(($icon) => {
				if ($icon.hasClass(icon)) {
					cy.get($icon).click();
				}
			});
	});
});

Cypress.Commands.add('getControl', (control: string) => {
	return cy.get(`label[for=${control}]`).parent();
});

Cypress.Commands.add('activateCheckbox', (checkboxSelector: string, checkboxText: string) => {
	cy.get(checkboxSelector)
		.contains(checkboxText)
		.prev()
		.then((checkbox) => {
			if (!checkbox.hasClass('is-checked')) {
				cy.get(checkbox).click();
			}
		});
});

Cypress.Commands.add('openNeveSidebar', () => {
	cy.get('button.components-button[aria-label="Neve Options"]').click();
});

Cypress.Commands.add('activateClassicEditorPlugin', () => {
	cy.login('/wp-admin/plugins.php');
	cy.get('#activate-classic-editor').contains('Activate').click();
	cy.get('#deactivate-classic-editor').should('exist');
});

Cypress.Commands.add('deactivateClassicEditorPlugin', () => {
	cy.login('/wp-admin/plugins.php');
	cy.get('#deactivate-classic-editor').contains('Deactivate').click();
	cy.get('#activate-classic-editor').should('exist');
});
