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
			var alignments = $( '.alignfull' );

			if ( !alignments.length ) {
				return false;
			}

			var windowWidth = $( window ).innerWidth();
			$( alignments ).each( function ( index, element ) {
				var containerWidth = $( '#primary > .container' ).innerWidth();
				var marginNeeded = (windowWidth - containerWidth) / 2 + 15;
				$( element ).css( {
					'margin-left': '-' + marginNeeded + 'px',
					'margin-right': '-' + marginNeeded + 'px'
				} );
			} );

		}
	};
}( jQuery ));