const AFTER = () => {
	cy.setCustomizeSettings( {
		neve_blog_list_alternative_layout: false,
		neve_enable_masonry: false,
		neve_grid_layout: '{"desktop":1,"tablet":1,"mobile":1}',
		neve_blog_archive_layout: 'grid',
		neve_post_excerpt_length: 25,
		neve_post_thumbnail_box_shadow: 0,
		neve_post_content_ordering: '["thumbnail","title-meta", "excerpt"]',
		neve_pagination_type: 'number',
		neve_author_avatar: false,
	} );
};

describe( 'Blog/Archive 1 / Default Layout', () => {
	const BEFORE = () => {
		cy.insertPost( 'Blog test post', 'Blog test post.', 'post', true );

		cy.goToCustomizer();
		cy.setCustomizeSettings( {
			neve_blog_archive_layout: 'default',
			neve_post_excerpt_length: 15,
			neve_post_thumbnail_box_shadow: 4,
			neve_post_content_ordering: '["thumbnail","excerpt","title-meta"]',
			neve_post_meta_ordering: '["date", "author", "category"]',
			neve_pagination_type: 'number',
		} );
	};

	before( () => BEFORE() );
	after( () => AFTER() );

	it( 'Tests Default Layout (List)', () => {
		cy.visit( '/' );
		cy.get( 'article' ).each( ( el ) => {
			// Layout classes and styles.
			cy.get( el ).should( 'have.class', 'layout-default' );
			cy.get( el )
				.find( '.content' )
				.should( 'have.css', 'flex-direction', 'row' );
		} );
	} );

	it( 'Post Content Order', () => {
		cy.visit( '/' );
		cy.get( 'article' ).each( ( el ) => {
			cy.get( el )
				.find( '.excerpt-wrap:first-child' )
				.should( 'exist' )
				.and( 'be.visible' );
			cy.get( el )
				.find( '.nv-meta-list:last-child' )
				.should( 'exist' )
				.and( 'be.visible' );
			cy.get( el ).should( 'have.descendants', '.nv-meta-list' );
			cy.get( el ).should( 'have.descendants', '.excerpt-wrap' );
		} );
	} );

	it( 'Meta Order', () => {
		cy.visit( '/' );

		cy.get( 'article' ).each( ( el ) => {
			cy.get( el )
				.find( '.nv-meta-list > .date:first-child' )
				.should( 'exist' );
			cy.get( el )
				.find( '.nv-meta-list > .author:nth-child(2)' )
				.should( 'exist' );
			cy.get( el )
				.find( '.nv-meta-list > .category:last-child' )
				.should( 'exist' );
		} );
	} );

	it( 'No Author Avatar', () => {
		cy.visit( '/' );
		cy.get( 'article' ).each( ( el ) => {
			cy.get( el ).find( '.author .photo' ).should( 'not.exist' );
		} );
	} );

	it( 'Excerpt length', () => {
		cy.visit( '/' );
		let count = 5;
		cy.get( 'article' ).each( ( el ) => {
			if ( count === 0 ) {
				return false;
			}
			cy.get( el )
				.find( '.excerpt-wrap' )
				.invoke( 'text' )
				.then( ( val ) => {
					const res = val.split( ' ' );
					cy.log( res );
					expect( res.length ).to.be.at.most( 21 );
				} );
			count--;
		} );
	} );

	it( 'Thumbnail Shadow', () => {
		cy.visit( '/' );
		cy.get( '.nv-post-thumbnail-wrap img' ).each( ( el ) => {
			cy.get( el ).should(
				'have.css',
				'box-shadow',
				'rgba(0, 0, 0, 0.12) 0px 14px 28px 0px, rgba(0, 0, 0, 0.12) 0px 10px 10px 0px'
			);
		} );
	} );

	it( 'Pagination Number', () => {
		cy.visit( '/' );
		cy.get( '.page-numbers' ).should( 'exist' );
	} );

	it( 'Alternative layout', () => {
		cy.setCustomizeSettings( { neve_blog_list_alternative_layout: true } );

		cy.visit( '/' );
		let count = 0;
		cy.get( 'article' ).each( ( el ) => {
			cy.get( el ).should( 'have.class', 'layout-alternative' );
			if ( count % 2 === 0 ) {
				cy.get( el )
					.find( '.content' )
					.should( 'have.css', 'flex-direction', 'row-reverse' );
			} else {
				cy.get( el )
					.find( '.content' )
					.should( 'have.css', 'flex-direction', 'row' );
			}
			count++;
		} );
	} );
} );

describe( 'Blog/Archive 2 / Grid Layout', () => {
	const BEFORE = () => {
		cy.setCustomizeSettings( {
			neve_blog_archive_layout: 'grid',
			neve_grid_layout: '{"desktop":3,"tablet":2,"mobile":1}',
			neve_pagination_type: 'infinite',
			neve_enable_masonry: true,
			neve_author_avatar: true,
		} );
	};

	before( () => BEFORE() );
	after( () => AFTER() );

	it( 'Grid layout', () => {
		cy.visit( '/' );
		cy.get( 'article' ).each( ( el ) => {
			cy.get( el )
				.should( 'have.class', 'layout-grid' )
				.and( 'have.class', 'col-md-4' )
				.and( 'have.class', 'col-sm-6' )
				.and( 'have.class', 'col-12' );
		} );
	} );

	it( 'Pagination Infinite', () => {
		cy.visit( '/' );
		cy.get( '.page-numbers' ).should( 'not.exist' );
		cy.get( '.nv-loader' ).should( 'exist' );
	} );

	it( 'Masonry', () => {
		cy.get( 'article' ).each( ( el ) => {
			cy.get( el ).should( 'have.css', 'position', 'absolute' );
			cy.get( el ).should( 'have.css', 'left' );
			cy.get( el ).should( 'have.css', 'top' );
		} );
	} );

	it( 'Author Avatar', () => {
		cy.visit( '/' );
		cy.get( 'article' ).each( ( el ) => {
			cy.get( el )
				.find( '.author' )
				.should( 'have.descendants', '.photo' );
		} );
	} );
} );

describe( 'Blog/Archive 3 / Covers Layout', () => {
	const BEFORE = () => {
		cy.setCustomizeSettings( {
			neve_blog_archive_layout: 'covers',
			neve_post_thumbnail_box_shadow: 4,
			neve_post_content_ordering: '["thumbnail","title-meta"]',
			neve_blog_covers_text_color: '#bada55',
		} );
	};

	before( () => BEFORE() );
	after( () => AFTER() );

	it( 'Covers layout', () => {
		cy.visit( '/' );
		cy.get( 'article' ).each( ( el ) => {
			cy.get( el ).should( 'have.class', 'layout-covers' );
			cy.get( el )
				.find( '.cover-post.nv-post-thumbnail-wrap' )
				.should( 'exist' )
				.and( 'be.visible' )
				.and( 'have.css', 'background-image' );
		} );
	} );

	it( 'Thumbnail Box Shadow', () => {
		cy.visit( '/' );
		cy.get( 'article' ).each( ( el ) => {
			cy.get( el )
				.find( '.cover-post.nv-post-thumbnail-wrap' )
				.should(
					'have.css',
					'box-shadow',
					'rgba(0, 0, 0, 0.12) 0px 14px 28px 0px, rgba(0, 0, 0, 0.12) 0px 10px 10px 0px'
				);
		} );
	} );

	it( 'Post Content Order', () => {
		cy.visit( '/' );
		cy.get( 'article' ).each( ( el ) => {
			cy.get( el ).find( '.entry-title:first-child' ).should( 'exist' );
			cy.get( el ).find( '.nv-meta-list:last-child' ).should( 'exist' );
		} );
	} );

	it( 'Text Color', () => {
		cy.visit( '/' );
		cy.get( 'article' ).each( ( el ) => {
			cy.get( el )
				.find( '.inner' )
				.should( 'have.css', 'color', 'rgb(186, 218, 85)' );
		} );
	} );
} );
