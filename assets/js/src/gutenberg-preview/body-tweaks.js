/* jshint esversion: 6 */
/* global neveGutenbergHelper */
import { store } from './store.js';

export const initBodyManipulation = function () {
	addCssTag();
	addClasses();
	handleSidebar();
	handleContainer();
	handleMetaboxChanges();
	handleContentWidth();
};

const addCssTag = function () {
	let tag = document.createElement( 'style' );
	tag.classList.add( 'neve-live-css' );

	document.body.appendChild( tag );
};

const addClasses = function () {
	let editor = document.querySelector( '.editor-styles-wrapper' ),
		contentWrap = document.querySelector( '.editor-writing-flow > div:not(.wp-block)' ),
		blocksWrap = document.querySelector( '.editor-writing-flow > div > div' ),
		titleState = store.getState( 'titleMeta' ),
		metaState = store.getState( 'postMeta' );


	// Add utilitary classes
	if ( store.getState( 'integrationStatus' ) === 'enabled' && wp.data.select( 'core/editor' ).getEditedPostAttribute( 'template' ) === '' ) {
		editor.classList.add( 'neve-gtb' );
	}
	contentWrap.classList.add( 'neve-content-wrap' );
	blocksWrap.classList.add( 'neve-blocks-wrap' );

	// Hide or show meta based on data from php.
	if ( metaState === 'enabled' ) {
		editor.classList.add( 'neve-has-meta' );
	}

	// Disable title if already hidden.
	if ( titleState === 'on' ) {
		document.getElementsByClassName( 'editor-post-title' )[ 0 ].style.display = 'none';
	}

};

/**
 * Handle sidebar setup.
 */
const handleSidebar = function () {
	let position = store.getState( 'sidebarPosition' );
	handleSidebarChange( position );
};

/**
 * Handle sidebar change.
 */
const handleSidebarChange = function ( position ) {
	let blocksWrap = document.querySelector( '.editor-writing-flow > div:not(.wp-block)' ),
		editor = document.querySelector( '.editor-styles-wrapper' ),
		sidebar = getSidebarMarkup( position );

	editor.classList.remove( 'has-sidebar-left', 'has-sidebar-right', 'has-sidebar-full-width' );
	editor.classList.add( 'has-sidebar-' + position );

	switch ( position ) {
		case 'right':
			blocksWrap.appendChild( sidebar );
			break;
		case 'left':
			blocksWrap.insertBefore( sidebar, blocksWrap.firstChild );
			break;
		case 'full-width':
			break;
		default:
			break;
	}
	return false;
};

/**
 * Get the sidebar markup.
 */
const getSidebarMarkup = function ( position ) {
	let sidebar = document.createElement( 'div' );

	sidebar.classList.add( 'neve-gtb-sidebar', position );
	sidebar.innerHTML = '<p>' + neveGutenbergHelper.strings.sidebar + '</p>';

	return sidebar;
};

/**
 * Handle container setup.
 */
const handleContainer = function () {
	let value = store.getState( 'containerSetup' );
	handleContainerChange( value );
};

/**
 * Handle container change.
 */
const handleContainerChange = function ( value ) {
	let editor = document.querySelector( '.editor-styles-wrapper' );
	switch ( value ) {
		default:
		case 'contained':
			editor.classList.remove( 'container-fluid' );
			editor.classList.add( 'container' );
			break;
		case 'full-width':
			editor.classList.remove( 'container' );
			editor.classList.add( 'container-fluid' );
			break;
	}
	return false;
};

/**
 * Handle metabox changes.
 */
const handleMetaboxChanges = function () {
	let editor = document.querySelector( '.editor-styles-wrapper' );

	// Title toggle.
	let disableTitle = document.querySelector( '#neve-page-settings  #neve_meta_disable_title' );
	if ( disableTitle !== null ) {
		disableTitle.addEventListener( 'change', function () {
			let title = editor.querySelector( '.editor-post-title' );
			if ( title.style.display === 'none' ) {
				title.style.display = 'block';
				return false;
			}
			title.style.display = 'none';
			return false;
		} );
	}


	// Sidebar setting.
	let sidebarRadios = document.querySelectorAll( '#neve-page-settings input[name=neve_meta_sidebar]' );
	sidebarRadios.forEach( function ( element ) {
		element.addEventListener( 'change', function ( event ) {
			let value = event.target.value;
			if ( value === 'default' ) {
				value = neveGutenbergHelper.sidebarSetup;
			}

			let sidebars = document.querySelectorAll( '.neve-gtb-sidebar' );
			Array.prototype.forEach.call( sidebars, function ( node ) {
				node.parentNode.removeChild( node );
			} );
			handleSidebarChange( value );

			return false;
		} );
	} );

	// Container setting.
	let containerRadios = document.querySelectorAll( '#neve-page-settings input[name=neve_meta_container]' );
	containerRadios.forEach( function ( element ) {
		element.addEventListener( 'change', function ( event ) {
			let value = event.target.value;
			if ( value === 'default' ) {
				value = neveGutenbergHelper.containerSetup;
			}
			handleContainerChange( value );
			return false;
		} );
	} );

	// Content width toggle.
	document.querySelector( '#neve-page-settings input[name=neve_meta_enable_content_width]' ).addEventListener( 'change', function ( event ) {
		let value = event.target.checked;
		if ( value === true ) {
			handleContentWidthChange();
			return false;
		}
		document.querySelector( '.neve-live-css' ).innerHTML = '';
	} );

	// Content width.
	document.querySelector( '#neve-page-settings #neve_meta_content_width' ).addEventListener( 'input', function ( event ) {
		let value = event.target.value;
		handleContentWidthChange( value );
		return false;
	} );
	document.querySelector( '#neve-page-settings #neve_meta_content_width-range' ).addEventListener( 'input', function ( event ) {
		let value = event.target.value;
		handleContentWidthChange( value );
		return false;
	} );
};

/**
 * Handle content width setup.
 */
const handleContentWidth = function () {
	if ( neveGutenbergHelper.neve_meta_enable_content_width !== 'on' ) {
		return false;
	}
	handleContentWidthChange();
	return false;
};

/**
 * Handle Wide Alignments
 *
 * @param contentWidth
 * @returns {string}
 */
const getWideAlignmentStyle = function ( contentWidth ) {
	let windowWidth = window.getComputedStyle( document.querySelector( '.neve-content-wrap' ) ).width,
		containerWidth = window.getComputedStyle( document.querySelector( '.wp-block.editor-post-title__block' ) ).width,
		realContentWidth = (contentWidth / 100) * containerWidth,
		remainderSpace = (windowWidth - realContentWidth) / 5,
		wideAlignWidth = Math.floor( realContentWidth + (remainderSpace * 2) );

	if ( wideAlignWidth !== 0 ) {
		return '.wp-block[data-align=wide] { max-width:' + wideAlignWidth + 'px;}';
	}
	return '';
};

/**
 * Handle content width changes.
 * @param setValue
 * @returns {boolean}
 */
const handleContentWidthChange = function ( setValue ) {
	if ( !setValue ) {
		setValue = document.querySelector( '#neve-page-settings input[name=neve_meta_content_width]' ).value;
	}

	document.querySelector( '.neve-live-css' ).innerHTML = '@media(min-width: 960px) { ' +
		'.neve-gtb.has-sidebar-full-width .neve-blocks-wrap > .editor-block-list__layout > .wp-block:not([data-align=full]):not([data-align=wide]) > *,' +
		'.neve-gtb.has-sidebar-full-width .neve-blocks-wrap .wp-block.editor-post-title__block > div,' +
		'.neve-gtb.has-sidebar-left .neve-blocks-wrap,' +
		'.neve-gtb.has-sidebar-right .neve-blocks-wrap' +
		' { max-width: ' + setValue + '% !important; } ' + getWideAlignmentStyle( setValue ) + '}';

	return false;
};
