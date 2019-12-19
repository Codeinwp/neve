describe( 'Page meta box settings', function() {
	const pageSetup = {
		'title': 'Test Page',
		'content': 'The Page Content',
		'url': null
	};
	it( 'Create new page named "' + pageSetup.title + '".', function() {
		cy.insertPost( pageSetup.title, pageSetup.content, 'page' );
		cy.get( '.post-publish-panel__postpublish-header a' ).
				contains( pageSetup.title ).
				should( 'have.attr', 'href' ).
				then( (href) => {
					pageSetup.url = href;
				} );
	} );

	it( 'Default meta box settings on front end.', function() {
		cy.visit( pageSetup.url );
		cy.get( '.nv-sidebar-wrap' ).
				should( 'not.exist' );
		cy.get( '.single-page-container' ).
				should( 'not.have.class', 'container-fluid' ).
				and( 'be.visible' );
		cy.get( '.nv-single-page-wrap' ).
				should( 'have.css', 'max-width' ).
				and( 'eq', '100%' );
		cy.get( '.nv-page-title' ).
				should( 'exist' ).
				and( 'contain', pageSetup.title );
		cy.get( '.hfg_header' ).should( 'exist' );
		cy.get( 'footer.site-footer' ).should( 'exist' );
		cy.get( '.nv-content-wrap' ).should( 'contain', pageSetup.content );
	} );

	it( 'Edit meta box settings "' + pageSetup.title + '".', function() {
		cy.login( pageSetup.url );
		cy.get( '#wp-admin-bar-edit a' ).click();
		cy.get( 'label[for="neve_meta_container_full-width"]' ).click();
		cy.get( 'label[for="neve_meta_sidebar_left"]' ).click();
		cy.get( 'label[for="neve_meta_disable_title"]' ).click();
		cy.get( 'label[for="neve_meta_disable_header"]' ).click();
		cy.get( 'label[for="neve_meta_disable_footer"]' ).click();
		cy.get( '#neve_meta_content_width-range' ).
				invoke( 'val', 70 ).
				trigger( 'change' );
		cy.get( '.editor-post-publish-button' ).contains( 'Update' ).click();
		cy.get( '.components-snackbar__content' ).contains( 'View Page' );
	} );

	it( 'Edited meta box settings on front end.', function() {
		cy.visit( pageSetup.url );
		cy.get( '.nv-sidebar-wrap' ).
				should( 'have.class', 'nv-left' ).
				and( 'be.visible' );
		cy.get( '.single-page-container' ).
				should( 'have.class', 'container-fluid' ).
				and( 'be.visible' );
		cy.get( '.nv-single-page-wrap' ).
				should( 'have.css', 'max-width' ).
				and( 'eq', '70%' );
		cy.get( '.nv-page-title' ).should( 'not.exist' );
		cy.get( '.hfg_header' ).should( 'not.exist' );
		cy.get( 'footer.site-footer' ).should( 'not.exist' );
		cy.get( '.nv-content-wrap' ).should( 'contain', pageSetup.content );
	} );
} );

describe( 'Posts meta box settings', function() {
	const postSetup = {
		'title': 'Test Post',
		'content': 'The Post Content',
		'url': null
	};
	it( 'Create new post named "' + postSetup.title + '".', function() {
		cy.insertPost( postSetup.title, postSetup.content, 'post', true );
		cy.get( '.post-publish-panel__postpublish-header a' ).
				contains( postSetup.title ).
				should( 'have.attr', 'href' ).
				then( (href) => {
					postSetup.url = href;
				} );
	} );

	it( 'Default meta box settings on front end.', function() {
		cy.visit( postSetup.url );
		cy.get( '.nv-sidebar-wrap' ).
				should( 'have.class', 'nv-right' ).
				and( 'be.visible' );
		cy.get( '.single-post-container' ).
				should( 'not.have.class', 'container-fluid' ).
				and( 'be.visible' );
		cy.get( '.nv-single-post-wrap' ).
				should( 'have.css', 'max-width' ).
				and( 'eq', '70%' );
		cy.get( '.entry-title' ).
				should( 'exist' ).
				and( 'contain', postSetup.title );
		cy.get( '.hfg_header' ).should( 'exist' );
		cy.get( 'footer.site-footer' ).should( 'exist' );
		cy.get( '.nv-thumb-wrap > img' ).
				should( 'exist' ).
				and( 'be.visible' ).
				and( 'have.attr', 'src' ).
				then( ($href) => {
					expect( $href ).
							to.
							contain( '/wp-content/uploads/' );
				} );
		cy.get( '.nv-content-wrap' ).should( 'contain', postSetup.content );
	} );

	it( 'Edit meta box settings "' + postSetup.title + '".', function() {
		cy.login( postSetup.url );
		cy.get( '#wp-admin-bar-edit a' ).click();
		cy.get( 'label[for="neve_meta_container_full-width"]' ).click();
		cy.get( 'label[for="neve_meta_sidebar_left"]' ).click();
		cy.get( 'label[for="neve_meta_disable_title"]' ).click();
		cy.get( 'label[for="neve_meta_disable_header"]' ).click();
		cy.get( 'label[for="neve_meta_disable_featured_image"]' ).click();
		cy.get( 'label[for="neve_meta_disable_footer"]' ).click();
		cy.get( 'label[for="neve_meta_enable_content_width"]' ).click();
		cy.get( '#neve_meta_content_width-range' ).
				invoke( 'val', 50 ).
				trigger( 'change' );
		cy.get( '.editor-post-publish-button' ).contains( 'Update' ).click();
		cy.get( '.components-snackbar__content' ).contains( 'View Post' );
	} );

	it( 'Edited meta box settings on front end.', function() {
		cy.visit( postSetup.url );
		cy.get( '.nv-sidebar-wrap' ).
				should( 'have.class', 'nv-left' ).
				and( 'be.visible' );
		cy.get( '.single-post-container' ).
				should( 'have.class', 'container-fluid' ).
				and( 'be.visible' );
		cy.get( '.nv-single-post-wrap' ).
				should( 'have.css', 'max-width' ).
				and( 'eq', '50%' );
		cy.get( '.entry-title' ).should( 'not.exist' );
		cy.get( '.hfg_header' ).should( 'not.exist' );
		cy.get( 'footer.site-footer' ).should( 'not.exist' );
		cy.get( '.nv-thumb-wrap' ).should( 'not.exist' );
		cy.get( '.nv-content-wrap' ).should( 'contain', postSetup.content );
	} );
} );
