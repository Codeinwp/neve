/* jshint esversion: 6 */
import { initBlog } from './blog.js';
import { neveResponsiveEmbeds } from "./embeds";
import { initNavigation, repositionDropdowns } from './navigation.js';
import { HFG } from './hgf.js';

function run() {
	window.HFG = new HFG();
	initBlog();
	initNavigation();
	neveResponsiveEmbeds();
}

function onResizeDebouncedRun() {
	repositionDropdowns();
}

/**
 * Run JS on load.
 */
window.addEventListener('load', () => {
	run();
});

/**
 * Do resize events debounced.
 */
let neveResizeTimeout;
window.addEventListener('resize', () => {
	neveResponsiveEmbeds();
	clearTimeout(neveResizeTimeout);
	neveResizeTimeout = setTimeout(onResizeDebouncedRun, 500);
});
