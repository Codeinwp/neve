/* global NeveProperties */
import inView from 'in-view';
import {httpGetAsync} from './utils.js';

let masonryInstance = null;
let page = 2;

/**
 * Iniitialize blog JS.
 */
export const initBlog = function () {
  if (document.querySelector('.blog.nv-index-posts') === null) {
    return false;
  }

  masonry();
  infiniteScroll();
};

/**
 * Handles masonry
 *
 * @returns {boolean}
 */
const masonry = function () {
  if (NeveProperties.masonry !== 'enabled' || NeveProperties.masonryColumns < 2) {
    return false;
  }
  masonryInstance = new Masonry(document.querySelector('.nv-index-posts .posts-wrapper'), {
    itemSelector: 'article.layout-grid',
    columnWidth: 'article.layout-grid',
    percentPosition: true,
  });
};

/**
 * Infinite scroll
 *
 * @returns {boolean}
 */
const infiniteScroll = function () {
  if (NeveProperties.infiniteScroll !== 'enabled') {
    return false;
  }

  inView('.infinite-scroll-trigger').on('enter', function () {
    if (typeof parent.wp.customize !== 'undefined') {
      parent.wp.customize.requestChangesetUpdate().then(requestMorePosts());
      return false;
    }
    requestMorePosts();
  });
};

/**
 * Request more posts
 * @returns {boolean}
 */
const requestMorePosts = function () {
  let trigger = document.querySelector('.infinite-scroll-trigger');
  if (trigger === null) {
    return false;
  }
  document.querySelector('.nv-loader').style.display = 'block';
  if (page > NeveProperties.infiniteScrollMaxPages) {
    trigger.parentNode.removeChild(trigger);
    document.querySelector('.nv-loader').style.display = 'none';
    return false;
  }

  let blog = document.querySelector('.nv-index-posts .posts-wrapper');
  let requestUrl = NeveProperties.infiniteScrollEndpoint + page;
  page++;

  if (typeof wp.customize !== 'undefined') {
    requestUrl += '?customize_changeset_uuid=' + wp.customize.settings.changeset.uuid + '&customize_autosaved=on';
  }
  if (typeof _wpCustomizeSettings !== 'undefined') {
    requestUrl += '&customize_preview_nonce=' + _wpCustomizeSettings.nonce.preview;
  }

  httpGetAsync( requestUrl, function (response) {
    blog.innerHTML += JSON.parse(response);
    refreshMasonry();
    if (inView.is(trigger)) {
      requestMorePosts();
    }
  } );
};

const refreshMasonry = function () {
  if (masonryInstance === null) {
    return;
  }
  masonryInstance.reloadItems();
  masonryInstance.layout();
};

