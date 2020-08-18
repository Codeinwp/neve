describe( 'Blog/Archive Check', function () {
	it( 'Default layout', function () {
		cy.login();
		goToCustomizerSection();
		maybeChangeBlogLayoutValue( 'default' );
		cy.visit( '/' );
		cy.get( 'article' ).each( function ( el ) {
			cy.get( el ).should( 'have.class', 'layout-default' );
			cy.get( el ).find( '.content' ).should( 'have.css', 'flex-direction', 'row' );
		} )
	} );

	it( 'Alternative layout', function () {
		cy.login();
		goToCustomizerSection();
		maybeChangeBlogLayoutValue( 'alternative' );
		cy.visit( '/' );
		let count = 0;
		cy.get( 'article' ).each( function ( el ) {
			cy.get( el ).should( 'have.class', 'layout-alternative' );
			if ( count % 2 === 0 ) {
				cy.get( el ).find( '.content' ).should( 'have.css', 'flex-direction', 'row-reverse' );
			} else {
				cy.get( el ).find( '.content' ).should( 'have.css', 'flex-direction', 'row' );
			}
			count++;
		} )
	} );

	it( 'Grid layout', function () {
		cy.login();
		goToCustomizerSection();
		maybeChangeBlogLayoutValue( 'grid' );
		checkGridCols( 4 );
		checkGridCols( 3 );
		checkGridCols( 2 );
		checkGridCols( 1 );
	} );

	it( 'Masonry', function () {
		cy.login();
		goToCustomizerSection();
		cy.get( '#customize-control-neve_blog_archive_layout' ).find( 'label[for="neve_blog_archive_layout-grid"]' ).click();
		cy.get( '#_customize-input-neve_grid_layout' ).select( '2' );
		saveCustomizer();
		cy.login()
		goToCustomizerSection();
		cy.get( '#customize-control-neve_enable_masonry input' ).click().should( 'be.checked' );
		saveCustomizer();
		cy.visit( '/' );
		cy.get( 'article' ).each( function ( el ) {
			cy.get( el ).should( 'have.css', 'position', 'absolute' );
			cy.get( el ).should( 'have.css', 'left' );
			cy.get( el ).should( 'have.css', 'top' );
		} )
	} );

	it( 'Excerpt length', function () {
		cy.login();
		goToCustomizerSection();
		cy.get( '#customize-control-neve_post_excerpt_length' )
			.find( 'input[type=number]' )
			.type('{selectall}')
			.type( 15 );
			saveCustomizer();
		cy.visit( '/' );
		let count = 5;
		cy.get( 'article' ).each( function ( el ) {
			if ( count === 0 ) {
				return false;
			}
			cy.get( el )
				.find( '.excerpt-wrap' )
				.invoke( 'text' )
				.then( ( val ) => {
					let res = val.split( ' ' );
					cy.log( res );
					expect( res.length ).to.be.at.most( 21 );
				} );
			count--;
		} )
	} );

	it( 'Pagination Infinite', function () {
		cy.login();
		goToCustomizerSection();
		cy.get( '#_customize-input-neve_pagination_type' ).invoke( 'attr', 'value' ).then( ( val ) => {
			if ( val !== 'infinite' ) {
				cy.get( '#_customize-input-neve_pagination_type' ).select( 'infinite' );
				saveCustomizer();
			}
		} );
		cy.visit( '/' );
		cy.get( '.page-numbers' ).should( 'not.exist' );
	} );

	it( 'Pagination Number', function () {
		cy.login();
		goToCustomizerSection();
		cy.get( '#_customize-input-neve_pagination_type' ).invoke( 'attr', 'value' ).then( ( val ) => {
			if ( val !== 'number' ) {
				cy.get( '#_customize-input-neve_pagination_type' ).select( 'number' );
				saveCustomizer();
			}
		} );
		cy.visit( '/' );
		cy.get( '.page-numbers' ).should( 'exist' );
	} );

	it( 'Meta Visibility', function () {
		cy.login();
		goToCustomizerSection();

		let status = {'author': 'be.visible', 'category': 'be.visible', 'date': 'be.visible', 'comments': 'be.visible'};
		cy.get( '#customize-control-neve_post_meta_ordering' )
			.find( 'li.order-component' )
			.each( function ( el ) {


				cy.get( el ).find( '.toggle-display' ).click();

				cy.get( el ).invoke( 'attr', 'data-id' ).then( function ( meta ) {
					status[meta] = 'not.exist';
					cy.get( el ).invoke( 'attr', 'class' ).then( ( val ) => {
						if ( val.includes( 'enabled' ) ) {
							status[meta] = 'be.visible';
						}
					} )
				} );
			} );
		saveCustomizer();
		cy.log( status );
		cy.visit( '/' );
		cy.get( 'article' ).each( function ( el ) {
			cy.get( el ).find( '.meta.author' ).should( status.author );
			cy.get( el ).find( '.meta.category' ).should( status.category );
			cy.get( el ).find( '.meta.date' ).should( status.date );
		} );
		cy.log( status );

		cy.get( 'article#post-1' ).then( ( body ) => {
			let comments = body.find( '.comments' ).length;
			if ( status['comments'] === 'be.visible' ) {
				expect( comments ).to.be.greaterThan( 0 );
			} else {
				expect( comments ).to.equal( 0 );
			}
		} );
	} );

	it( 'Meta order', function () {
		cy.login();
		goToCustomizerSection();
		setOrderElementsVisible( '#customize-control-neve_post_meta_ordering' );
		dropElAfter( '#customize-control-neve_post_meta_ordering .ti-order-sortable li', 0, 2 );
		cy.wait( 1000 );
		saveCustomizer();


		let elemOrder = [];
		cy.get( '#customize-control-neve_post_meta_ordering .ti-order-sortable li' ).each( ( elem ) => {
			cy.get( elem ).invoke( 'attr', 'data-id' ).then( ( val ) => {
				elemOrder.push( val );
			} )
		} );
		cy.visit( '/' );
		let index = 0;
		cy.get( '#post-1' ).find( '.nv-meta-list li' ).each( ( el ) => {
			cy.get( el ).should( 'have.class', elemOrder[index] );
			index++;
		} )
	} );

	it( 'Post content elements visibility', function () {
		cy.login();
		goToCustomizerSection();

		let status = {'thumbnail': 'have.descendants', 'title-meta': 'have.descendants', 'excerpt': 'have.descendants'};
		cy.get( '#customize-control-neve_blog_archive_layout' ).find( 'label[for="neve_blog_archive_layout-grid"]' ).click();
		cy.get( '#customize-control-neve_post_content_ordering' )
			.find( 'li.order-component' )
			.each( function ( el ) {
				cy.get( el ).find( '.toggle-display' ).click();
				cy.get( el ).invoke( 'attr', 'data-id' ).then( function ( meta ) {
					status[meta] = 'not.have.descendants';
					cy.get( el ).invoke( 'attr', 'class' ).then( ( val ) => {
						if ( val.includes( 'enabled' ) ) {
							status[meta] = 'have.descendants';
						}
					} )
				} );
			} );
		saveCustomizer();
		cy.visit( '/' );

		cy.get( 'article.has-post-thumbnail' ).each( ( el ) => {
			cy.get( el ).should( status['thumbnail'], '.nv-post-thumbnail-wrap' );
			cy.get( el ).should( status['title-meta'], '.nv-meta-list' );
			cy.get( el ).should( status['excerpt'], '.excerpt-wrap' );
		} );
	} );

	it( 'Post content elements order', function () {
		cy.login();
		goToCustomizerSection();
		setOrderElementsVisible( '#customize-control-neve_post_content_ordering' );
		dropElAfter( '#customize-control-neve_post_content_ordering .ti-order-sortable li', 0, 1 );
		cy.wait( 1000 );
		saveCustomizer();
		let elemOrder = [];
		cy.get( '#customize-control-neve_post_content_ordering .ti-order-sortable li' ).each( ( elem ) => {
			cy.get( elem ).invoke( 'attr', 'data-id' ).then( ( val ) => {
				elemOrder.push( val );
			} )
		} );
		cy.visit( '/' );


		cy.get( 'article.has-post-thumbnail' ).each( ( el ) => {
			checkPostContentOrder( el, 0, elemOrder );
			cy.wait( 100 );
			checkPostContentOrder( el, 1, elemOrder );
			cy.wait( 100 );
			checkPostContentOrder( el, 2, elemOrder );
		} );
	} )

	it( 'Author avatar in meta', function () {
		cy.login();
		goToCustomizerSection();
		cy.get( '#customize-control-neve_post_meta_ordering' )
			.find( 'li[data-id="author"]' )
			.invoke( 'attr', 'class' ).then( function ( classList ) {
				if ( !classList.includes( 'enabled' ) ) {
					cy.get( '#customize-control-neve_post_meta_ordering' )
						.find( 'li[data-id="author"]' )
						.find( '.toggle-display' ).click();
				}
			} );
			cy.get( '#customize-control-neve_author_avatar input' ).click();
			saveCustomizer();
			cy.visit( '/' );
			cy.get( 'article' ).each( function ( el ) {
			cy.get( el ).find( '.meta.author' ).find( '.photo' ).should( 'be.visible' );
		} );
	} )
} );

/**
 * Publish customizer changes.
 */
function saveCustomizer() {
	let home = Cypress.config().baseUrl;
	cy.server().route( 'POST', home + '/wp-admin/admin-ajax.php' ).as( 'customizerSave' );
	cy.get( '#save' ).click( {force: true} );
	cy.wait( '@customizerSave' ).then( ( req ) => {
		expect( req.response.body.success ).to.be.true;
		expect( req.status ).to.equal( 200 );
	} );
}

/**
 * Check if Blog/Archive layout has a layout and it sets it if not.
 *
 * @param wantedValue Desired layout.
 */
function maybeChangeBlogLayoutValue( wantedValue ) {
	cy.get( '#customize-control-neve_blog_archive_layout input[checked="checked"' ).invoke( 'attr', 'value' ).then( ( val ) => {
		if ( val !== wantedValue ) {
			cy.get( '#customize-control-neve_blog_archive_layout' ).find( 'label[for="neve_blog_archive_layout-' + wantedValue + '"]' ).click();
			saveCustomizer();
		}
	} );
}

/**
 * Check if grid layout has the proper bootstrap class.
 * @param colNb Number of grid columns.
 */
function checkGridCols( colNb ) {
	let bootstrapClass = 'col-sm-' + ( 12 / colNb );
	goToCustomizerSection();
	cy.get( '#_customize-input-neve_grid_layout' ).select( colNb.toString() );
	saveCustomizer();
	cy.visit( '/' );
	cy.get( 'article' ).each( function ( el ) {
		cy.get( el ).should( 'have.class', 'layout-grid' );
		cy.get( el ).should( 'have.class', bootstrapClass );
	} )
}

/**
 * Check the order of the post components.
 * @param el
 * @param item
 * @param elemOrder
 */
function checkPostContentOrder( el, item, elemOrder ) {
	let metaPosition = elemOrder.indexOf( 'title-meta' );
	let metaOrder = item + 2;
	let thumbnailOrder = item + 1;
	let excerptOrder = item + 1;
	if ( metaPosition + 1 < metaOrder ) {
		thumbnailOrder += 1;
	}
	if ( metaPosition + 1 < metaOrder ) {
		excerptOrder += 1;
	}
	if ( elemOrder[item] === 'thumbnail' ) {
		cy.get( el ).find( '.content *:nth-child(' + thumbnailOrder + ')' ).should( 'have.class', 'nv-post-thumbnail-wrap' );
	}
	if ( elemOrder[item] === 'title-meta' ) {
		cy.get( el ).find( '.content *:nth-child(' + metaOrder + ')' ).should( 'have.class', 'nv-meta-list' );
	}
	if ( elemOrder[item] === 'excerpt' ) {
		cy.get( el ).find( '.content *:nth-child(' + excerptOrder + ')' ).should( 'have.class', 'excerpt-wrap' );
	}
}

/**
 * Go to Blog/Archive customizer section.
 */
function goToCustomizerSection() {
	cy.visit( '/wp-admin/customize.php' );
	cy.get( '#accordion-panel-neve_layout' ).click();
	cy.get( '#accordion-section-neve_blog_archive_layout' ).click();
}

/**
 * Drag and drop an element after another.
 * @param selector
 * @param dragItem
 * @param dropItem
 */
function dropElAfter( selector, dragItem, dropItem ) {
	cy.get( selector ).then( function ( el ) {
		const drag = el[dragItem].getBoundingClientRect();
		const drop = el[dropItem].getBoundingClientRect();
		cy.get( el[0] ).trigger( 'mousedown', {which: 1, pageX: drag.x, pageY: drag.y} );
		cy.get( el[0] ).trigger( 'mousemove', {which: 1, pageX: drop.x, pageY: drop.y + 20} );
		cy.get( el[0] ).wait( 200 );
		cy.get( el[0] ).trigger( 'mouseup' );
	} );
}

/**
 * Enable all ordering items.
 * @param selector
 */
function setOrderElementsVisible( selector ) {
	cy.get( selector )
		.find( 'li.order-component' )
		.each( function ( el ) {
			cy.get( el ).invoke( 'attr', 'data-id' ).then( function () {
				cy.get( el ).invoke( 'attr', 'class' ).then( ( val ) => {
					if ( !val.includes( 'enabled' ) ) {
						cy.get( el ).find( '.toggle-display' ).click();
					}
				} )
			} );
		} );
}
