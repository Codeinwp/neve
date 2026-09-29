/* jshint esversion: 6 */
import { initBlog } from './blog.js';
import { initNavigation, repositionDropdowns } from './navigation.js';
import { HFG } from './hgf.js';
import { on } from '../utils.js';

function run() {
	window.HFG = new HFG();
	initBlog();
	initNavigation();
}

function onResizeDebouncedRun() {
	repositionDropdowns();
}

/**
 * Run JS on load.
 */
on(window, 'load', run);

/**
 * Do resize events debounced.
 */
let neveResizeTimeout;
on(window, 'resize', () => {
	clearTimeout(neveResizeTimeout);
	neveResizeTimeout = setTimeout(onResizeDebouncedRun, 500);
});
