

describe( 'Posts meta box default settings', function() {
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

	it( 'Activates Classic Editor', function () {
		cy.login( '/wp-admin/plugins.php');
		cy.get( '#activate-classic-editor' ).contains('Activate').click();
		cy.get( '#deactivate-classic-editor' ).should( 'exist' );
	});

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
		cy.wait(1000);
		cy.get( '#publish' ).contains( 'Update' ).click();
	} );

	it( 'Edited meta box settings on front end.', function() {


		cy.visit( postSetup.url );
		cy.reload();
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

	it( 'Deactivates Classic Editor', function () {
		cy.login( '/wp-admin/plugins.php');
		cy.get( '#deactivate-classic-editor' ).contains('Deactivate').click();
		cy.get( '#activate-classic-editor' ).should( 'exist' );
	});
} );
