/* jshint esversion: 6 */
import { initShop } from './shop.js';
import { initBlog } from './blog.js';
import { initNavigation, repositionDropdowns } from './navigation.js';


function run () {
  initShop();
  initBlog();
  initNavigation();
}

function onResizeDebouncedRun () {
  repositionDropdowns();
}

/**
 * Run JS on load.
 */
window.addEventListener('DOMContentLoaded', function () {
  run();
});

/**
 * Do resize events debounced.
 */
let neveResizeTimeout;
window.addEventListener('resize', function () {
  clearTimeout(neveResizeTimeout);
  neveResizeTimeout = setTimeout(onResizeDebouncedRun, 500);
});
