/// <reference types="cypress" />
import { registerCommand } from 'cypress-wait-for-stable-dom';
registerCommand();

Cypress.Commands.add('loginWithRequest', (nextRoute = '/wp-admin') => {
  cy.visit('/wp-login.php');
  cy.get('input[name=log]').type('{selectall}{backspace}admin')
  cy.get('input[name=pwd]').type(`{selectall}{backspace}admin{enter}`)
  let isLoggedIn = false;
  cy.getCookies({ log: true }).then((cookies) => {
    cookies.forEach((value) => {
      if (value.name.includes('wordpress_logged_in_')) {
        isLoggedIn = true;
      }
    });
    if (!isLoggedIn) {
      cy.visit('/');
    }
    cy.visit(nextRoute);
  });
});

Cypress.Commands.add('login', (nextRoute = '/wp-admin') => {
  cy.loginWithRequest(nextRoute);
});

Cypress.Commands.add('clearWelcome', () => {
  cy.window().then((win) => {
    // eslint-disable-next-line chai-friendly/no-unused-expressions
    win.wp &&
      win.wp.data &&
      win.wp.data.select('core/edit-post').isFeatureActive('welcomeGuide') &&
      win.wp.data.dispatch('core/edit-post').toggleFeature('welcomeGuide');
  });
});

Cypress.Commands.add(
  'insertPost',
  (title = 'Test', content = 'Content', type = 'post', featured = false, tags = false) => {
    let loginRoute = '/wp-admin/post-new.php';
    if (type !== 'post') {
      loginRoute += '?post_type=' + type;
    }

    cy.loginWithRequest(loginRoute);
    cy.clearWelcome();
    if (featured) {
      cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 })
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
      cy.get('.components-panel__body-toggle').contains('Tags').click({ force: true });
      cy.get('.components-form-token-field__label')
        .contains('Add New Tag')
        .parent()
        .find('input')
        .type('test-tag,', { force: true });
    }
    cy.get('.editor-post-title__input').type(title);
    cy.get('.block-editor-default-block-appender__content').click({
      force: true,
    });
    cy.get('.block-editor-rich-text__editable').type(content);
    cy.get('.editor-post-publish-panel__toggle').click();
    cy.updatePost();
  },
);

Cypress.Commands.add(
  'insertPostWithRequest',
  (title = 'Test Title', content = 'Test content', type = 'posts', featured = 0) => {
    cy.loginWithRequest();
    cy.request({
      method: 'POST',
      url: '/wp-json/wp/v2/' + type,
      body: {
        title,
        status: 'publish',
        content: {
          raw: content,
          rendered: 'The test content',
          protected: false,
        },
        featured_media: featured,
      },
    }).then((resp) => {
      expect(resp.status).to.eq(201);
      window.localStorage.setItem('postId', resp.body.id);
      window.localStorage.setItem('postUrl', '/' + resp.body.slug);
    });
  },
);

Cypress.Commands.add('getRandomAttachment', () => {
  cy.loginWithRequest();
  cy.request({
    method: 'GET',
    url: '/wp-json/wp/v2/media',
  }).then((resp) => {
    expect(resp.status).to.eq(200);
    window.localStorage.setItem('randomAttachmentId', resp.body[0].id);
    window.localStorage.setItem('randomAttachmentUrl', resp.body[0].source_url);
  });
});
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

Cypress.Commands.add('setCustomizeSettings', (to) => {
  cy.request('POST', '/wp-json/wpthememods/v1/settings', to);
});

Cypress.Commands.add('goToCustomizer', () => {
  cy.loginWithRequest('/wp-admin/customize.php');
  cy.visit('/wp-admin/customize.php');
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

Cypress.Commands.add('toggleElements', (show) => {
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

Cypress.Commands.add('getControl', (control) => {
  return cy.get(`label[for=${control}]`).parent();
});

Cypress.Commands.add('activateCheckbox', (checkboxSelector, checkboxText) => {
  cy.get(checkboxSelector)
    .contains(checkboxText)
    .parent()
    .find('.components-form-toggle__input')
    .then((checkbox) => {
      if (!checkbox.hasClass('is-checked')) {
        cy.get(checkbox).click({ force: true });
      }
    });
});

Cypress.Commands.add('openNeveSidebar', () => {
  cy.get('button.components-button[aria-label="Neve Options"]').click();
});

Cypress.Commands.add('activateClassicEditorPlugin', () => {
  cy.changePluginStatus('classic-editor/classic-editor', 'active');
});

Cypress.Commands.add('deactivateClassicEditorPlugin', () => {
  cy.changePluginStatus('classic-editor/classic-editor', 'inactive');
});

Cypress.Commands.add('updatePageOrPostByRequest', (postId, type, body) => {
  cy.request({
    method: 'POST',
    url: '/wp-json/wp/v2/' + type + '/' + postId,
    body,
  });
});

Cypress.Commands.add('createTagWithRequest', (tagName) => {
  cy.request({
    method: 'POST',
    url: '/wp-json/wp/v2/tags',

    body: { name: tagName },
  }).then((resp) => {
    expect(resp.status).to.eq(201);
    window.localStorage.setItem('tagId', resp.body.id);
  });
});
Cypress.Commands.add('changePluginStatus', (pluginSlug, status) => {
  cy.loginWithRequest();

  cy.request({
    method: 'POST',
    url: '/wp-json/wp/v2/plugins/' + pluginSlug + '?status=' + status,
  }).then((resp) => {
    expect(resp.status).to.eq(200);
  });
});

Cypress.Commands.add('updateSettingWithRequest', (body) => {
  cy.request({
    method: 'POST',
    url: '/wp-json/wp/v2/settings',
    body,
  });
});
