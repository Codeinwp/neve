/* global NeveProperties,_wpCustomizeSettings,parent,Masonry,imagesLoaded */
import { httpGetAsync, isInView } from '../utils';

let masonryContainer = null,
	page = 2;
const postWrapSelector = '.nv-index-posts .posts-wrapper';

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
	if (NeveProperties.infScroll !== 'enabled') {
		return;
	}

	if (document.querySelector(postWrapSelector) === null) {
		return;
	}

	isInView(document.querySelector('.infinite-scroll-trigger'), () => {
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
 * Request more posts
 */
const requestMorePosts = () => {
	const trigger = document.querySelector('.infinite-scroll-trigger');
	if (trigger === null) {
		return;
	}
	document.querySelector('.nv-loader').style.display = 'block';
	if (page > NeveProperties.maxPages) {
		trigger.parentNode.removeChild(trigger);
		document.querySelector('.nv-loader').style.display = 'none';
		return;
	}
	const blog = document.querySelector(postWrapSelector);
	const lang = NeveProperties.lang;
	const baseUrl = NeveProperties.endpoint + page;
	const url = lang ? baseUrl + '/' + lang : baseUrl;
	const requestUrl = maybeParseUrlForCustomizer(url);
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
		NeveProperties.query
	);
};

/**
 * Parse in the customizer context.
 *
 * @param {string} url
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
