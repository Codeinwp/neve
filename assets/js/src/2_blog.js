/* global NeveProperties */

(function ( $ ) {
	var utils = $.neveUtilities;
	$.neveBlog = {
		'init': function () {
			this.handleMasonry();
			this.handleInfiniteScroll();
			this.handleGutenbergAlignment();
		},
		'handleMasonry': function () {
			if ( NeveProperties.masonry !== 'enabled' ) {
				return false;
			}
			var postsWrap = $( '.nv-index-posts .posts-wrapper' );
			if ( postsWrap.length === 0 ) {
				return false;
			}
			$( postsWrap ).masonry( {
				itemSelector: 'article.layout-grid',
				columnWidth: 'article.layout-grid',
				percentPosition: true
			} );
		},
		'handleInfiniteScroll': function () {
			if ( NeveProperties.infiniteScroll !== 'enabled' ) {
				return false;
			}
			var postsWrap = $( '.nv-index-posts' );

			if ( !postsWrap.length ) {
				return false;
			}
			var lock = false;
			var page = 2;
			$( window ).scroll( function () {
				var trigger = postsWrap.find( '.infinite-scroll-trigger' );
				var reachedTrigger = utils.isElementInViewport( trigger );
				if ( reachedTrigger === false || lock === true ) {
					return false;
				}
				if ( page > NeveProperties.infiniteScrollMaxPages ) {
					return false;
				}

				var counter = $( 'article' ).length;
				lock = true;
				$.ajax( {
					type: "POST",
					url: NeveProperties.ajaxurl,
					data: {
						action: 'infinite_scroll',
						page: page,
						counter: counter,
						nonce: NeveProperties.nonce
					},
					beforeSend: function () {
						$( '.nv-loader' ).css( 'display', 'block' );
					},
					success: function ( response ) {
						if ( response ) {
							$( '.nv-loader' ).hide();
							var postGrid = $( '.nv-index-posts .posts-wrapper' );
							postGrid.append( response );
							if ( NeveProperties.masonry === 'enabled' ) {
								$( postGrid ).masonry( 'reloadItems' );
								$( postGrid ).imagesLoaded().progress( function () {
									$( postGrid ).masonry( 'layout' );
								} );
							}
							page++;
							lock = false;
						}
					},
				} );
			} );
		},
		'handleGutenbergAlignment': function () {
			if ( $( 'body' ).hasClass( 'page-template-template-pagebuilder-full-width' ) ) {
				return false;
			}

			var fullAlignments = $( '.alignfull' );
			var wideAlignments = $( '.alignwide' );

			// Break if nothing to adjust.
			if ( !fullAlignments.length && !wideAlignments.length )
				return false;

			// Get the content width for contained layout.
			var contentWidth = $( '.neve-main > .container > .row > .col' );
			// If the layout isn't contained, reassign the selector.
			if ( !contentWidth.length )
				contentWidth = $( '.neve-main > .container-fluid > .row > .col' );
			// Break if there isn't any container on the page.
			if ( !contentWidth.length )
				return;

			// Get the container width, excluding padding.
			var containerWidth = $( contentWidth ).innerWidth() - 30;
			// Get the window width - based on body to exclude scrollbars.
			var windowWidth = $( 'body' ).innerWidth();

			// Break if nothing needs adjustment.
			if ( containerWidth === windowWidth )
				return false;

			var marginFullNeeded = 0;
			var marginWideNeeded = 0;
			if ( utils.isMobile() || !$( '.nv-sidebar-wrap' ).length ) {
				marginFullNeeded = (windowWidth - containerWidth) / 2 + 15;
				marginWideNeeded = (windowWidth - containerWidth) / 5;
			}

			if ( fullAlignments.length ) {
				$( fullAlignments ).each( function ( index, element ) {
					$( element ).css( {
						'margin-left': '-' + marginFullNeeded + 'px',
						'margin-right': '-' + marginFullNeeded + 'px'
					} );
				} );
			}
			if ( wideAlignments.length ) {
				$( wideAlignments ).each( function ( index, element ) {
					$( element ).css( {
						'margin-left': '-' + marginWideNeeded + 'px',
						'margin-right': '-' + marginWideNeeded + 'px'
					} );
				} );
			}
		},
	};
}( jQuery ));