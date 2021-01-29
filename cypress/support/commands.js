import 'cypress-file-upload';
import '@percy/cypress';

const scrollToBottom = require('scroll-to-bottomjs');
Cypress.Cookies.defaults({
	preserve: /wordpress_.*/,
});
Cypress.Commands.add('login', (nextRoute = null) => {
	//console.log(cy.getCookies());

	const cookies = cy
		.getCookies({
			log: true,
		})
		.then(function (cookies) {
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
Cypress.Commands.add('navigate', (nextRoute = '/') => {
	cy.visit(nextRoute);
});
Cypress.Commands.add('clearWelcome', () => {
	cy.window().then((win) => {
		win.wp &&
			win.wp.data &&
			win.wp.data
				.select('core/edit-post')
				.isFeatureActive('welcomeGuide') &&
			win.wp.data
				.dispatch('core/edit-post')
				.toggleFeature('welcomeGuide');
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
	cy.get('textarea.editor-post-text-editor')
		.focus()
		.invoke('val', text)
		.type('{enter}');
	cy.get('.edit-post-text-editor__toolbar button')
		.contains(/Exit Code Editor/i)
		.click();

	cy.updatePost();
});

Cypress.Commands.add('editCurrentPost', () => {
	cy.get('#wp-admin-bar-edit a').click();
	cy.clearWelcome();
});

Cypress.Commands.add(
	'insertPost',
	(
		title = 'Test',
		content = 'Content',
		type = 'post',
		featured = false,
		tags = false
	) => {
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
			cy.get('.media-frame')
				.find('.media-menu-item')
				.contains('Media Library')
				.click({
					force: true,
				});

			cy.get('.attachments-browser .attachments > li.attachment')
				.first()
				.click({
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
	}
);
Cypress.Commands.add('updatePost', () => {
	cy.get('.editor-post-publish-button').click();
	cy.wait(500);
});

Cypress.Commands.add('getCustomizerControl', (slug) => {
	cy.window().then((win) => {
		win.wp.customize.control(slug).focus();
	});
	return cy.get('#customize-control-' + slug);
});

Cypress.Commands.add('getCustomizerControlValue', (slug) => {
	return cy
		.window()
		.then((win) => win.wp.customize.control(slug).setting.get());
});

/**
 * Set single typography control.
 *
 * @param controlSelector
 * @param values
 */
Cypress.Commands.add('setTypographyControl', (controlSelector, values) => {
	const changeNumberInputValue = (input, value) => {
		cy.get(input)
			.clear({
				force: true,
			})
			.type('{leftarrow}' + value + '{rightarrow}{backspace}');
	};
	cy.get(controlSelector).as('control');

	cy.get('@control')
		.should('be.visible')
		.and('contain', 'Transform')
		.and('contain', 'Weight')
		.and('contain', 'Font Size')
		.and('contain', 'Line Height')
		.and('contain', 'Letter Spacing');

	// Change text transform.
	cy.get('@control').find('.text-transform select').select(values.transform);

	// Change font weight.
	cy.get('@control').find('.font-weight select').select(values.weight);

	const devices = ['desktop', 'tablet', 'mobile'],
		controls = ['fontSize', 'lineHeight', 'letterSpacing'];

	devices.map((device) => {
		cy.get('@control')
			.find('button.' + device)
			.first()
			.click();
		// Change font size.
		cy.get('@control').find('.font-size input').as('fontSize');

		cy.get('@control').find('.line-height input').as('lineHeight');

		cy.get('@control').find('.letter-spacing input').as('letterSpacing');

		controls.map((control) => {
			cy.get('@' + control)
				.invoke('val')
				.then((value) => {
					// Make sure value is default.
					cy.get('@' + control).should('have.value', value);
					// Change the value.
					changeNumberInputValue(
						'@' + control,
						values[control][device]
					);
					// Value was changed?
					cy.get('@' + control).should(
						'have.value',
						values[control][device]
					);
					// Reset to old value.
					cy.get('@' + control)
						.closest('.neve-responsive-sizing')
						.find('button')
						.click();
					// Make sure value has been reset.
					cy.get('@' + control).should('have.value', value);
					// Change the value.
					changeNumberInputValue(
						'@' + control,
						values[control][device]
					);
				});
		});
	});
});

/**
 * Capture and compare the fullpage snapshots.
 *
 */
Cypress.Commands.add(
	'captureDocument',
	(generalMaskAndClip = true, screenShotName = false) => {
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
			})
		);
		cy.wait(5000);
		cy.percySnapshot(screenShotName);
	}
);
/**
 * Capture and compare the fullpage snapshots.
 *
 * @param {string} path The path to store the snapshot.
 */
Cypress.Commands.add(
	'maskAndClip',
	(maskSelectors, clipSelectors, hideElements) => {
		cy.get('body').then(($body) => {
			// synchronously query from body
			// to find which element was created
			if ($body.find(maskSelectors).length) {
				cy.get(maskSelectors).invoke(
					'css',
					'background',
					'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWBAMAAACWdajhAAAAG1BMVEUAAAD///+fn59fX18fHx/f398/Pz9/f3+/v78mHjoVAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC00lEQVR4nO2WTW/TQBCGN7Hj9Nip68THWmo5x1Ir5ei0CnDstoA4OghEjg0Czlil8LeZmV3HCUlQIa64vI9UrT3exs+OZz+MAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHkeHHJvxP98bOnxCK2j9FRuv2xGH1tbX7Yj/L60sNiagE2Pe2eSzi8ub9fn49am2lzZ5Jn2Dh5ui1goe6O1I+nWTExOe0U0p0bFN7lvRmiaF/vW5/pNyTeuAQzmJNXPHfSui2GtFlmOp9Mt4TDnfDDn6QXp+20tLOdRMScYWSfmCXq1pZWlxKXM1T0ZRxW/t0vcw81rT5DzM2bVDcVQGdGvmfBPa2+JK/fbWYicxC1nJZMNVrYiuJUHuUY8KM0skg05rMZAsXnO/E2MmnG1jjznjpQyiFa1p4r7hnfz8qlafuHZy34r6QsvQaVluQr7uiIk8MPkRu3M72TGZHqlVX3HlxJKFYhn3Whqa+DbkzFTHTmWJavFDeSBj+u2X99IyUrNuoOtaGtLWJ1Yy1CwQ4ccz1eJL2+wYzz/ZlrQmMuDOplbHay2/N61qXbiYdlpuZIHdtqH9m5Zma4tWb6nlO65ma0r08/1Sy6uGltKvrdZWTwupKXmtqVLbnrRCNWhqixcPX/LiO3AdeAVpreTdTOzqtDtyWlzBM3KTk2diV9qIV8nFcGUmHkvMa2WyVM1SN7ZZO1pu3XKL1EDjNm7WKyvtQGbqSJenntcS9YNaayL5rGI/LffT8mVar/JZWr7kS3kNL/i6unM715bOo4o3mj69iSqvVaXllWU31epTXMw5nQf0I+SpULSgVe+J3XqP03Im+RQSWpDR7VJ3uox3vqbkKbaxz/rC/XMoE/FCymFvrZUTRDryH/dL4k4OY3tfnyD0XBA8pCOvJWeGIk+9Ft/JcUI6ngZ77dUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ6KX6rsak4Q9c5cAAAAAElFTkSuQmCC) #000 no-repeat center center'
				);
				cy.get(maskSelectors).invoke('css', 'color', 'transparent');
				if ($body.find(maskSelectors).find('*').length > 0) {
					cy.get(maskSelectors)
						.children()
						.invoke('css', 'visibility', 'hidden');
				}
			}
			if ($body.find(clipSelectors).length) {
				cy.get(clipSelectors).invoke('css', 'display', 'none');
			}
			if (
				hideElements &&
				hideElements.length > 0 &&
				$body.find(hideElements).length
			) {
				cy.get(hideElements).invoke('css', 'visibility', 'hidden');
			}
		});
	}
);

Cypress.Commands.add('setCustomizeSettings', (to) => {
	cy.goToCustomizer();
	cy.window().then((win) => {
		Object.keys(to).map((mod) => {
			win.wp.customize.control(mod).setting.set(to[mod]);
		});
	});
	cy.wait(500);
	cy.server()
		.route('POST', Cypress.config().baseUrl + '/wp-admin/admin-ajax.php')
		.as('save');
	cy.get('#save').click();
	cy.wait('@save').then((r) => {
		expect(r.response.body.success).to.be.true;
		expect(r.status).to.equal(200);
	});
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

/**
 * Alias POST route to /wp-admin/admin-ajax.php as customizerSave
 *
 * @example cy.aliasRestRoutes()
 */
Cypress.Commands.add('aliasRestRoutes', () => {
	cy.server().route('POST', '/wp-admin/admin-ajax.php').as('customizerSave');
});

/**
 * Toggle elements on or off
 *
 * @param show
 * @example cy.toggleElements(false)
 */
Cypress.Commands.add('toggleElements', (show) => {
	const icon = show ? 'dashicons-hidden' : 'dashicons-visibility';
	cy.get('.ti-sortable-item-area .ti-sortable-item-toggle').each(function (
		el
	) {
		cy.get(el)
			.find('.dashicon')
			.then(($icon) => {
				if ($icon.hasClass(icon)) {
					cy.get($icon).click();
				}
			});
	});
});

/**
 * Selector for a control
 *
 * @param control
 * @example cy.getControl('neve_sidebar')
 */
Cypress.Commands.add('getControl', (control) => {
	cy.get(
		'label.components-base-control__label[for="' + control + '"]'
	).parent();
});

Cypress.Commands.add('activateCheckbox', (checkboxSelector, checkboxText) => {
	cy.get(checkboxSelector)
		.contains(checkboxText)
		.prev()
		.then((checkbox) => {
			if (!checkbox.hasClass('is-checked')) {
				cy.get(checkbox).click();
			}
		});
});

/**
 * Opens sidebar on Neve Options
 *
 * @example cy.openNeveSidebar()
 */
Cypress.Commands.add('openNeveSidebar', () => {
	cy.get('button.components-button[aria-label="Neve Options"]').then(
		($btn) => {
			cy.get($btn)
				.invoke('attr', 'aria-expanded')
				.then((value) => {
					if (value === true) {
						return true;
					}
					cy.get(
						'button.components-button[aria-label="Neve Options"]'
					).click();
				});
		}
	);
});

/**
 * Activates Classic editor plugin
 *
 * @example cy.activateClassicEditorPlugin()
 */
Cypress.Commands.add('activateClassicEditorPlugin', () => {
	cy.login('/wp-admin/plugins.php');
	cy.get('#activate-classic-editor').contains('Activate').click();
	cy.get('#deactivate-classic-editor').should('exist');
});

/**
 * Deactivates Classic editor plugin
 *
 * @example cy.deactivateClassicEditorPlugin()
 */
Cypress.Commands.add('deactivateClassicEditorPlugin', () => {
	cy.login('/wp-admin/plugins.php');
	cy.get('#deactivate-classic-editor').contains('Deactivate').click();
	cy.get('#activate-classic-editor').should('exist');
});

/**
 * Matches content width
 *
 * @param defaultWidth
 * @example cy.matchContentWidth(2250)
 */
Cypress.Commands.add('matchContentWidth', (defaultWidth) => {
	cy.get(
		'.single-page-container .alignfull [class*="__inner-container"] > *, .single-page-container .alignwide [class*="__inner-container"] > *'
	)
		.invoke('width')
		.should('be.eq', defaultWidth - 30); //we substract the padding.
	cy.get('.single-page-container .nv-content-wrap')
		.invoke('width')
		.should('be.eq', defaultWidth - 30); //we substract the padding.
	cy.get('#wp-admin-bar-edit a').click();
	cy.get('.wp-block').should('have.css', 'max-width', defaultWidth + 'px');
});

/**
 * Drag and drop an element after another.
 *
 * @param selector
 * @param moveFrom
 * @param moveTo
 * @example cy.dropElAfter('control', 0, 1)
 */
Cypress.Commands.add('dropElAfter', (selector, moveFrom, moveTo) => {
	cy.get(selector).then((el) => {
		const drag = el[moveFrom].getBoundingClientRect();
		const drop = el[moveTo].getBoundingClientRect();
		cy.get(el[moveFrom]).trigger('mousedown', {
			which: 1,
			pageX: drag.x,
			pageY: drag.y,
		});
		cy.document().trigger('mousemove', {
			which: 1,
			pageX: drop.x,
			pageY: drop.y + 35,
		});
		cy.wait(200);
		cy.document().trigger('mouseup');
	});
});

/**
 * Click on align center button into customizer
 *
 * @example cy.alignCenter()
 */
Cypress.Commands.add('alignCenter', () => {
	cy.get(
		'#customize-control-logo_component_align button[aria-label="Center"]'
	).click();

	cy.get('#save').should('be.visible').click();
});

/**
 * Check if it is aligned to the center into customizer
 *
 * @example cy.CheckAlignCenter()
 */
Cypress.Commands.add('checkAlignCenter', () => {
	cy.visit('/');

	cy.get('.desktop-center')
		.should('be.visible')
		.and('have.class', 'mobile-left')
		.and('have.class', 'tablet-left')
		.find('.site-logo')
		.should('be.visible');
});

/**
 * Click on align right button into customizer
 *
 * @example cy.alignRight()
 */
Cypress.Commands.add('alignRight', () => {
	cy.get(
		'#customize-control-logo_component_align button[aria-label="Right"]'
	).click();

	cy.get('#save').should('be.visible').click();
});

/**
 * Check if it is aligned to the right into customizer
 *
 * @example cy.checkAlignRight()
 */
Cypress.Commands.add('checkAlignRight', () => {
	cy.visit('/');

	cy.get('.desktop-right')
		.should('be.visible')
		.and('have.class', 'mobile-left')
		.and('have.class', 'tablet-left')
		.find('.site-logo')
		.should('be.visible');
});

/**
 * Check the margin set by customizer on front-end
 *
 * @example cy.checkMarginFrontEnd()
 */
Cypress.Commands.add('checkMarginFrontEnd', () => {
	cy.visit('/');

	cy.get('.builder-item--primary-menu').should('be.visible');
	cy.get('.builder-item--primary-menu').should(
		'have.css',
		'margin-top',
		'3px'
	);
	cy.get('.builder-item--primary-menu').should(
		'have.css',
		'margin-bottom',
		'-1px'
	);
});

/**
 * Check the padding set by customizer on front-end
 *
 * @example cy.checkPaddingFrontEnd()
 */
Cypress.Commands.add('checkPaddingFrontEnd', () => {
	cy.visit('/');

	cy.get('.site-logo').should('be.visible');
	cy.get('.site-logo')
		.should('have.css', 'padding-top')
		.and('contain', '11px');
	cy.get('.site-logo')
		.should('have.css', 'padding-bottom')
		.and('contain', '9px');
});

/**
 * Test text transform and font weight
 *
 * @param elem
 * @param transformMatcher
 * @param weightMatcher
 */
Cypress.Commands.add(
	'testTransformAndWeight',
	(elem, transformMatcher, weightMatcher) => {
		// Test text transform.
		cy.get(elem)
			.should('have.css', 'text-transform')
			.and('match', new RegExp(transformMatcher, 'g'));

		// Test font weight
		cy.get(elem)
			.should('have.css', 'font-weight')
			.and('match', new RegExp(weightMatcher, 'g'));
	}
);

/**
 * Test font size, line height and letter spacing
 *
 * @param elem
 * @param device
 * @param fontSizeMatcher
 * @param lineHeightMatcher
 * @param letterSpacingMatcher
 */
Cypress.Commands.add(
	'testSizeLineHeightSpacing',
	(elem, fontSizeMatcher, lineHeightMatcher, letterSpacingMatcher) => {
		// Test font size.
		cy.get(elem)
			.should('have.css', 'font-size')
			.and('match', new RegExp(fontSizeMatcher + 'px', 'g'));

		// Test line height.
		cy.get(elem)
			.should('have.css', 'line-height')
			.and('match', new RegExp(lineHeightMatcher, 'g'));

		// Test letter spacing.
		cy.get(elem)
			.should('have.css', 'letter-spacing')
			.and('match', new RegExp(letterSpacingMatcher, 'g'));
	}
);
