/* jshint esversion: 6 */
/* global NeveProperties */
import { httpGetAsync, isInView, neveEach } from '../utils';

let masonryContainer = null,
	page = 2,
	postWrapSelector = '.nv-index-posts .posts-wrapper'

/**
 * Initialize blog JS.
 */
export const initBlog = () => {
	if ( document.querySelector( '.blog.nv-index-posts' ) === null ) {
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
const masonry = () => {
  	const { masonry, masonryColumns, blogLayout } = NeveProperties

  if (masonry !== 'enabled' || masonryColumns < 2) {
	return false
  }
	masonryContainer = document.querySelector( postWrapSelector );

	if ( masonryContainer === null ) {
		return false;
	}

	imagesLoaded( masonryContainer, () => {
		window.nvMasonry = new Masonry( masonryContainer, {
			itemSelector: `article.layout-${blogLayout}`,
			columnWidth: `article.layout-${blogLayout}`,
			percentPosition: true
		} );
	} );
};

/**
 * Infinite scroll
 *
 * @returns {boolean}
 */
const infiniteScroll = () => {
	if ( NeveProperties.infiniteScroll !== 'enabled' ) {
		return false;
	}

	if ( document.querySelector( postWrapSelector ) === null ) {
		return false;
	}

	isInView( document.querySelector( '.infinite-scroll-trigger' ),
			() => {
				if ( parent.wp.customize ) {
					parent.wp.customize.requestChangesetUpdate().then( () => {
						requestMorePosts();
					} );
					return false;
				}
				requestMorePosts();
			} );
};

/**
 * Request more posts
 * @returns {boolean}
 */
const requestMorePosts = () => {
	let trigger = document.querySelector( '.infinite-scroll-trigger' );
	if ( trigger === null ) {
		return false;
	}
	document.querySelector( '.nv-loader' ).style.display = 'block';
	if ( page > NeveProperties.infiniteScrollMaxPages ) {
		trigger.parentNode.removeChild( trigger );
		document.querySelector( '.nv-loader' ).style.display = 'none';
		return false;
	}

	let blog = document.querySelector( postWrapSelector );
	let requestUrl = maybeParseUrlForCustomizer(
			NeveProperties.infiniteScrollEndpoint + page );
	page++;

	httpGetAsync(requestUrl, (response) => {
		if( NeveProperties.masonry !== 'enabled' ) {
			blog.innerHTML += JSON.parse( response );
		} else {
			const tmp = document.createElement('div');
			tmp.innerHTML = JSON.parse(response);
			neveEach(tmp.children, (el) => {
				masonryContainer.append(el);
			 	window.nvMasonry.appended(el);
			});
		}
	}, NeveProperties.infiniteScrollQuery);
};

/**
 * Parse in the customizer context.
 * @param url
 * @returns {*}
 */
const maybeParseUrlForCustomizer =  (url) => {
	//Add change-set uuid.
	if ( typeof wp.customize === 'undefined' ) return url;
	url += '?customize_changeset_uuid=' + wp.customize.settings.changeset.uuid +
			'&customize_autosaved=on';

	//Add preview nonce.
	if ( typeof _wpCustomizeSettings === 'undefined' ) return url;
	url += '&customize_preview_nonce=' + _wpCustomizeSettings.nonce.preview;

	return url;
};

