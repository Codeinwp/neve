/* global NeveProperties,_wpCustomizeSettings,parent,Masonry,imagesLoaded */
import { httpGetAsync, isInView } from '../utils';

const getLinkParam = ($param) => {
	const parts = window.location.search.substr(1).split('&');
	const $_GET = {};
	for (let i = 0; i < parts.length; i++) {
		const temp = parts[i].split('=');
		$_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
	}

	return $_GET[$param] ? $_GET[$param] : false;
};

let masonryContainer = null;
const postWrapSelector = '.nv-index-posts .posts-wrapper';
const currentUrlPage = getLinkParam('paged');
let page = currentUrlPage ? parseInt(currentUrlPage) + 1 : 2;

/**
 * Initialize blog JS.
 */
export const initBlog = () => {
	if (document.querySelector('.blog.nv-index-posts') === null) {
		return false;
	}
	masonry();
	infiniteScroll();
};

/**
 * Handles masonry
 */
const masonry = () => {
	const { masonryStatus, masonryColumns, blogLayout } = NeveProperties;

	if (masonryStatus !== 'enabled' || masonryColumns < 2) {
		return;
	}
	masonryContainer = document.querySelector(postWrapSelector);

	if (masonryContainer === null) {
		return;
	}

	imagesLoaded(masonryContainer, () => {
		window.nvMasonry = new Masonry(masonryContainer, {
			itemSelector: `article.layout-${blogLayout}`,
			columnWidth: `article.layout-${blogLayout}`,
			percentPosition: true,
		});
	});
};

/**
 * Infinite scroll.
 */
const infiniteScroll = () => {
	if (NeveProperties.infiniteScroll !== 'enabled') {
		return;
	}

	if (document.querySelector(postWrapSelector) === null) {
		return;
	}

	manageLinkChange();

	isInView(document.querySelector('.infinite-scroll-trigger'), () => {
		if (parent.wp.customize) {
			parent.wp.customize.requestChangesetUpdate().then(() => {
				requestMorePosts();
			});
			return false;
		}
		requestMorePosts();
	});
};

const isScrolledIntoView = (el) => {
	const rect = el.getBoundingClientRect();
	const elemTop = rect.top;
	const elemBottom = rect.bottom;
	return elemTop >= 0 && elemBottom <= window.innerHeight;
};

const manageLinkChange = () => {
	const UrlPage = getLinkParam('paged');
	let currentPage = UrlPage ? UrlPage : '1';

	window.addEventListener(
		'scroll',
		debounce(() => {
			const posts = document.querySelectorAll('.posts-wrapper .post');
			if (posts === null) {
				return false;
			}

			for (const post of posts) {
				if (isScrolledIntoView(post)) {
					currentPage = post.getAttribute('data-page');
				}
			}

			const url = new URL(window.location.href);
			url.searchParams.set('paged', currentPage);
			window.history.replaceState(null, null, url);
		}, 250)
	);
};

const debounce = (func, wait) => {
	let timeout;
	return function () {
		const context = this,
			args = arguments;
		const later = function () {
			timeout = null;
			func.apply(context, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

/**
 * Request more posts
 */
const requestMorePosts = () => {
	const trigger = document.querySelector('.infinite-scroll-trigger');
	if (trigger === null) {
		return;
	}
	document.querySelector('.nv-loader').style.display = 'block';
	if (page > NeveProperties.infiniteScrollMaxPages) {
		trigger.parentNode.removeChild(trigger);
		document.querySelector('.nv-loader').style.display = 'none';
		return;
	}

	const blog = document.querySelector(postWrapSelector);
	const requestUrl = maybeParseUrlForCustomizer(
		NeveProperties.infiniteScrollEndpoint + page
	);
	page++;

	httpGetAsync(
		requestUrl,
		(response) => {
			blog.innerHTML += JSON.parse(response);
			if (NeveProperties.masonryStatus !== 'enabled') {
				return false;
			}
			window.nvMasonry.reloadItems();
			window.nvMasonry.layout();
		},
		NeveProperties.infiniteScrollQuery
	);
};

/**
 * Parse in the customizer context.
 *
 * @param {string} url
 * @return {*} Sanitized URL.
 */
const maybeParseUrlForCustomizer = (url) => {
	//Add change-set uuid.
	if (typeof wp.customize === 'undefined') return url;
	url +=
		'?customize_changeset_uuid=' +
		wp.customize.settings.changeset.uuid +
		'&customize_autosaved=on';

	//Add preview nonce.
	if (typeof _wpCustomizeSettings === 'undefined') return url;
	url += '&customize_preview_nonce=' + _wpCustomizeSettings.nonce.preview;

	return url;
};
