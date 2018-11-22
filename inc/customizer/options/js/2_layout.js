/**
 * Handle the layout preview.
 *
 * @param $
 */
var layoutRanges = {
	'neve_container_width': {
		'selector': '.container',
		'cssProp': 'max-width',
		'unit': 'px',
		'styleClass': 'container-width-css'
	},
	'neve_body_font_size': {
		'selector': 'body',
		'cssProp': 'font-size',
		'styleClass': 'body-font-size-css'
	},
	'neve_body_line_height': {
		'selector': 'body',
		'cssProp': 'line-height',
		'unit': ' ',
		'styleClass': 'body-line-height-css'
	},
	'neve_h1_font_size': {
		'selector': 'h1, .single .entry-title',
		'cssProp': 'font-size',
		'styleClass': 'h1-font-size-css'
	},
	'neve_h1_line_height': {
		'selector': 'h1, .single .entry-title',
		'cssProp': 'line-height',
		'unit': ' ',
		'styleClass': 'h1-line-height-css'
	},
	'neve_h2_font_size': {
		'selector': 'h2',
		'cssProp': 'font-size',
		'styleClass': 'h2-font-size-css'
	},
	'neve_h2_line_height': {
		'selector': 'h2',
		'cssProp': 'line-height',
		'unit': ' ',
		'styleClass': 'h2-line-height-css'
	},
	'neve_h3_font_size': {
		'selector': 'h3',
		'cssProp': 'font-size',
		'styleClass': 'h3-font-size-css'
	},
	'neve_h3_line_height': {
		'selector': 'h3',
		'cssProp': 'line-height',
		'unit': ' ',
		'styleClass': 'h3-line-height-css'
	},
	'neve_h4_font_size': {
		'selector': 'h4',
		'cssProp': 'font-size',
		'styleClass': 'h4-font-size-css'
	},
	'neve_h4_line_height': {
		'selector': 'h4',
		'cssProp': 'line-height',
		'unit': ' ',
		'styleClass': 'h4-line-height-css'
	},
	'neve_h5_font_size': {
		'selector': 'h5',
		'cssProp': 'font-size',
		'styleClass': 'h5-font-size-css'
	},
	'neve_h5_line_height': {
		'selector': 'h5',
		'cssProp': 'line-height',
		'unit': ' ',
		'styleClass': 'h5-line-height-css'
	},
	'neve_h6_font_size': {
		'selector': 'h6',
		'cssProp': 'font-size',
		'styleClass': 'h6-font-size-css'
	},
	'neve_h6_line_height': {
		'selector': 'h6',
		'cssProp': 'line-height',
		'unit': ' ',
		'styleClass': 'h6-line-height-css'
	},
};

var layoutLivePreview = function ( $ ) {
	'use strict';
	$.each( layoutRanges, function ( id, args ) {
		wp.customize( id, function ( value ) {
			value.bind( function ( newval ) {
				var values = JSON.parse( newval );
				if ( !values ) {
					return true;
				}
				if( typeof values.suffix === 'object' ) {
					args.unit = values.suffix;
				}
				var settings = {
					selectors: args.selector,
					cssProperty: args.cssProp,
					propertyUnit: args.unit ? args.unit : '' ,
					styleClass: args.styleClass,
				};
				$.neveCustomizeUtilities.setLiveCss( settings, values );
			} );
		} );
	} );
};

layoutLivePreview( jQuery );

var contentWidths = {
	'neve_sitewide_content_width': {
		content: '.neve-main > .container .col',
		sidebar: '.nv-sidebar-wrap'
	},
	'neve_blog_archive_content_width': {
		content: '.archive-container .nv-index-posts',
		sidebar: '.archive-container .nv-sidebar-wrap'
	},
	'neve_single_post_content_width': {
		content: '.single-post-container .nv-single-post-wrap',
		sidebar: '.single-post-container .nv-sidebar-wrap'
	},
	'neve_shop_archive_content_width': {
		content: '.archive.woocommerce .shop-container .nv-shop.col',
		sidebar: '.archive.woocommerce .shop-container .nv-sidebar-wrap'
	},
	'neve_single_product_content_width': {
		content: '.single-product .shop-container .nv-shop.col',
		sidebar: '.single-product .shop-container .nv-sidebar-wrap'
	},
	'neve_other_pages_content_width': {
		content: 'body:not(.single):not(.archive):not(.blog) .neve-main > .container .col',
		sidebar: 'body:not(.single):not(.archive):not(.blog) .nv-sidebar-wrap'
	},
};

var contentWidthsPreview = function ( $ ) {
	$.each( contentWidths, function ( id, args ) {
		wp.customize( id, function ( value ) {
			value.bind( function ( newval ) {
				console.log(id);
				jQuery( args.content ).css( 'max-width', newval + '%' );
				jQuery( args.sidebar ).css( 'max-width', 100 - newval + '%' );
			} );
		} );
	} );
};

contentWidthsPreview( jQuery );

var containersLayoutMap = {
	'neve_default_container_style': '.page:not(.woocommerce) .single-page-container',
	'neve_blog_archive_container_style': '.archive-container',
	'neve_single_post_container_style': '.single-post-container',
	'neve_shop_archive_container_style': '.woocommerce-page.post-type-archive .neve-main > div',
	'neve_single_product_container_style': '.single-product .neve-main > div',
};

var containersLivePreview = function ( $ ) {
	'use strict';
	$.each( containersLayoutMap, function ( controlId, cssSelector ) {
		wp.customize( controlId, function ( value ) {
			value.bind( function ( newval ) {
				if ( newval === 'contained' ) {
					$( cssSelector ).removeClass( 'container-fluid' ).addClass( 'container' );
					return false;
				}
				$( cssSelector ).removeClass( 'container' ).addClass( 'container-fluid' );
			} );
		} );
	} );
};
containersLivePreview( jQuery );


