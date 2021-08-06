describe('Check the html for each page', function () {
	const urls = [
		'/',
		'/edge-case-no-title/',
		'/about/',
		'/title-should-not-overflow-the-content-area/',
		'/blog/',
		'/about/clearing-floats/',
		'/edge-case-many-categories/',
		'/edge-case-many-tags/',
		'/edge-case-nested-and-mixed-lists/',
		'/edge-case-no-content/',
		'/front-page/',
		'/hello-world/',
		'/level-1/',
		'/level-1/level-2/',
		'/level-1/level-2a/',
		'/level-1/level-2b/',
		'/level-1/level-2/level-3/',
		'/level-1/level-2/level-3a/',
		'/level-1/level-2/level-3b/',
		'/lorem-ipsum/',
		'/markup-html-tags-and-formatting/',
		'/markup-image-alignment/',
		'/markup-text-alignment/',
		'/markup-title-with-markup/',
		'/title-with-special-characters/',
		'/media-twitter-embeds/',
		'/page-a/',
		'/page-b/',
		'/about/page-image-alignment/',
		'/about/page-markup-and-formatting/',
		'/about/page-with-comments/',
		'/about/page-with-comments-disabled/',
		'/post-format-aside/',
		'/post-format-audio/',
		'/post-format-chat/',
		'/post-format-gallery/',
		'/post-format-gallery-tiled/',
		'/post-format-image/',
		'/post-format-image-caption/',
		'/post-format-image-linked/',
		'/post-format-link/',
		'/post-format-quote/',
		'/post-format-standard/',
		'/post-format-status/',
		'/post-format-video-videopress/',
		'/post-format-video-wordpresstv/',
		'/post-format-video-youtube/',
		'/sample-page/',
		'/scheduled/',
		'/template-comments/',
		'/template-comments-disabled/',
		'/template-excerpt-defined/',
		'/template-excerpt-generated/',
		'/template-featured-image-horizontal/',
		'/template-featured-image-vertical/',
		'/template-more-tag/',
		'/template-paginated/',
		'/template-password-protected/',
		'/template-pingbacks-an-trackbacks/',
		'/template-sticky/',
	];

	const urlsSelected = urls
		.sort(() => {
			return 0.5 - Math.random();
		})
		.slice(0, 5);

	urlsSelected.forEach(function (url) {
		it(`Page ${url} have url validated`, function () {
			cy.visit(url);
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			cy.htmlvalidate();
		});
	});
});
