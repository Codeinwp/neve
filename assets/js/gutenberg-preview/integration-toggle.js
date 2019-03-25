/* jshint esversion: 6 */
/* global neveGutenbergHelper */
import { store } from './store.js';

let integrationStatus;

export const initIntegrationToggle = function () {
  let observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.target.className === 'edit-post-more-menu') {
        addMenuItem();
      }
    });
  });

  let featuredControls = document.getElementsByClassName('edit-post-layout');
  observer.observe(featuredControls[0], {
    childList: true,
    subtree: true
  });
};

const addMenuItem = function () {
  let menu = document.getElementsByClassName('edit-post-more-menu__content');

  if (menu.length <= 0)
    return false;

  integrationStatus = store.getState('integrationStatus');
  let target = document.querySelector('.components-menu-group:first-of-type div:not(.components-menu-group__label) button:last-child');

  let integrationToggle = document.createElement('button');

  integrationToggle.classList.add('components-button', 'components-icon-button', 'components-menu-item__button');

  integrationToggle.innerHTML = '<svg style="display: none;" aria-hidden="true" role="img" focusable="false" class="dashicon dashicons-yes" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M14.83 4.89l1.34.94-5.81 8.38H9.02L5.78 9.67l1.34-1.25 2.57 2.4z"></path></svg><span class="components-menu-item__info-wrapper">' + neveGutenbergHelper.strings.menuItemTitle + '</span>';

  if (integrationStatus === 'enabled') {
    integrationToggle.classList.add('has-icon');
    integrationToggle.querySelector('svg').style.display = 'block';
  }

  integrationToggle.addEventListener('click', function (event) {
    store.toggleState('integrationStatus');
    new Promise(function (resolve, reject) {
      let requestUrl = neveGutenbergHelper.integrationEndpoint;
      let request = new XMLHttpRequest();
      request.open('POST', requestUrl, true);
      request.setRequestHeader('X-WP-Nonce', neveGutenbergHelper.nonce);
      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      request.onload = function () {
        if (request.status === 200 && request.readyState === 4) {
          resolve(request.responseText);
        } else {
          reject({
            status: this.status,
            statusText: this.statusText
          });
        }
      };

      request.send(JSON.stringify({neve_gutenberg_integration: store.state.integrationStatus}));

    }).then(function () {
      let wrap = document.querySelector('.editor-styles-wrapper');
      let check = integrationToggle.querySelector('svg');
      if (check.style.display === 'none') {
        check.style.display = 'block';
      } else {
        check.style.display = 'none';
      }
      integrationToggle.classList.toggle('has-icon');
      wrap.classList.toggle('neve-gtb');
    });
  });

  target.parentNode.insertBefore(integrationToggle, target.nextSibling);
};