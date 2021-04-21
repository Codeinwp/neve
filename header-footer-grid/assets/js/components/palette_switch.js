/**
 * File palette_switch.js.js.
 *
 * Theme Control Component.
 *
 * Js logic for the component.
 */

"use strict"; // prevent global namespace pollution

const attributeDataName = "data-neve-theme";
const localStorageName = "neve_user_theme";

function detectColorScheme(){
	let theme="light";

	// local storage is used to override OS theme settings
	if( localStorage.getItem( localStorageName ) ) {
		if( localStorage.getItem( localStorageName ) === "dark" ) {
			theme = "dark";
		}
	} else if( !window.matchMedia ) {
		//matchMedia method not supported
		return false;
	} else if( window.matchMedia( "(prefers-color-scheme: dark)" ).matches ) {
		//OS theme setting detected as dark
		theme = "dark";
	}

	if ( theme === "dark" ) {
		document.documentElement.setAttribute( attributeDataName, "dark" );
	}
}
detectColorScheme();

//identify the toggle switch HTML element
const toggleSwitch = document.querySelector('.toggle-palette a.palette-icon-wrapper');

//function that changes the theme, and sets a localStorage variable to track the theme between page loads
function switchTheme(e) {
	e.preventDefault();
	if ( document.documentElement.getAttribute( attributeDataName ) === "dark" ){
		localStorage.setItem( localStorageName, "light" );
		document.documentElement.setAttribute( attributeDataName, "light" );
		return;
	}
	localStorage.setItem( localStorageName, "dark" );
	document.documentElement.setAttribute( attributeDataName, "dark" );
}

//listener for changing themes
toggleSwitch.addEventListener('click', switchTheme, false);
