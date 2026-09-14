/* global NeveProperties,_wpCustomizeSettings,parent,Masonry,imagesLoaded */
import { httpGetAsync, isInView, qs } from '../utils';

let masonryContainer = null,
	page = 2;
const postWrapSelector = '.nv-index-posts .posts-wrapper';
const triggerSelector = '.infinite-scroll-trigger';

/**
 * Initialize blog JS.
 */
export const initBlog = () => {
	if (
		qs('.blog.nv-index-posts') === null ||
		typeof NeveProperties === 'undefined'
	) {
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
	masonryContainer = qs(postWrapSelector);

	if (masonryContainer === null) {
		return;
	}

	imagesLoaded(masonryContainer, () => {
		const selector = 'article.layout-' + blogLayout;
		window.nvMasonry = new Masonry(masonryContainer, {
			itemSelector: selector,
			columnWidth: selector,
			percentPosition: true,
		});
	});
};

/**
 * Infinite scroll.
 */
const infiniteScroll = () => {
	if (
		NeveProperties.infScroll !== 'enabled' ||
		qs(postWrapSelector) === null
	) {
		return;
	}

	isInView(qs(triggerSelector), () => {
		if (parent && parent.wp && parent.wp.customize) {
			parent.wp.customize.requestChangesetUpdate().then(() => {
				requestMorePosts();
			});
			return false;
		}
		requestMorePosts();
	});
};

/**
 * Request more posts.
 *
 */
const requestMorePosts = () => {
	const nP = window.NeveProperties;

	const trigger = qs(triggerSelector);
	if (trigger === null) {
		return;
	}
	const loader = qs('.nv-loader');
	loader.style.display = 'block';

	if (page > nP.maxPages) {
		trigger.remove();
		loader.style.display = 'none';
		return;
	}
	const blog = qs(postWrapSelector);
	const lang = nP.lang;
	const baseUrl = nP.endpoint + page;
	const url = lang ? baseUrl + '/' + lang : baseUrl;
	const requestUrl = maybeParseUrlForCustomizer(url);
	page++;

	// Create an empty div that will be replaced with the new posts. Used to keep the order of the posts.
	const postsPlaceholder = document.createElement('div');
	blog.appendChild(postsPlaceholder);

	httpGetAsync(
		requestUrl,
		(response) => {
			postsPlaceholder.outerHTML = JSON.parse(response);
			if (nP.masonryStatus !== 'enabled') {
				return false;
			}
			window.nvMasonry.reloadItems();
			window.nvMasonry.layout();
		},
		nP.query
	);
};

/**
 * Parse in the customizer context.
 *
 * @param {string} url URL to parse.
 * @return {*} Sanitized URL.
 */
const maybeParseUrlForCustomizer = (url) => {
	if (typeof wp === 'undefined') return url;
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
