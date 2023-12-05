import { subscribe, select } from '@wordpress/data';

/**
 * Append New Sub Menu Page.
 *
 * The page will be added after the parent container of the linkSelector.
 *
 * @param {string} linkSelector The link selector to determine the position of the added submenu page.
 * @param {Object} subMenuData The Sub Menu data to be added.
 * @return {HTMLAnchorElement} Custom Layouts menu page.
 */
function appendNewSubMenuPage(linkSelector, subMenuData) {
	// Create and configure a new anchor element
	const link = document.createElement('a');
	link.setAttribute('href', subMenuData?.linkSubMenu);
	link.textContent = subMenuData?.labelSubMenu;

	const linkToAppendAfter = document.querySelector(linkSelector);
	if (!linkToAppendAfter) {
		return;
	}

	// Append the after the Customizer menu item.
	const listNode = linkToAppendAfter.parentNode;
	const container = document.createElement('li');
	container.appendChild(link);
	listNode.parentNode.insertBefore(container, listNode.nextSibling);

	return link;
}

/**
 * Auto Sub Menu Pages on Admin Dashboard for Pro Modules.
 */
function autoHideModuleSubMenuPages() {
	let clLinkElem = document.querySelector(
		'.toplevel_page_neve-welcome a[href*="edit.php?post_type=neve_custom_layouts"]'
	);

	subscribe(() => {
		/**
		 * Auto hide Custom Layouts submenu page link based on module status.
		 */
		const isModuleEnabled =
			select('neve-dashboard').getModuleStatus('custom_layouts');

		if (isModuleEnabled && !clLinkElem) {
			clLinkElem = appendNewSubMenuPage(
				'.toplevel_page_neve-welcome .wp-submenu a[href*="customize.php"]',
				window?.neveDash?.moduleObserver?.customLayouts
			);
		} else if (!isModuleEnabled && clLinkElem) {
			clLinkElem.parentNode.remove();
			clLinkElem = undefined;
		}
	});
}

function run() {
	// Run only on the Neve Pro tab.
	if (window.location.hash === '#pro') {
		autoHideModuleSubMenuPages();
	}
}

if (document.readyState !== 'loading') {
	run();
} else {
	document.addEventListener('DOMContentLoaded', function () {
		run();
	});
}
