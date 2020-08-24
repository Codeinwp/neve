describe( 'Single meta sidebar', function () {
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

	// it( 'Default meta box settings on front end.', function() {
	// 	cy.visit( postSetup.url );
	//
	// 	cy.get( '.nv-sidebar-wrap' ).
	// 	should( 'have.class', 'nv-right' ).
	// 	and( 'be.visible' );
	// 	cy.get( '.single-post-container' ).
	// 	should( 'not.have.class', 'container-fluid' ).
	// 	and( 'be.visible' );
	// 	cy.get( '.nv-single-post-wrap' ).
	// 	should( 'have.css', 'max-width' ).
	// 	and( 'eq', '70%' );
	// 	cy.get( '.entry-title' ).
	// 	should( 'exist' ).
	// 	and( 'contain', postSetup.title );
	// 	cy.get( '.hfg_header' ).should( 'exist' );
	// 	cy.get( 'footer.site-footer' ).should( 'exist' );
	// 	cy.get( '.nv-thumb-wrap > img' ).
	// 	should( 'exist' ).
	// 	and( 'be.visible' ).
	// 	and( 'have.attr', 'src' ).
	// 	then( ($href) => {
	// 		expect( $href ).
	// 		to.
	// 		contain( '/wp-content/uploads/' );
	// 	} );
	// 	cy.get( '.nv-content-wrap' ).should( 'contain', postSetup.content );
	// } );

	// it( 'Check sidebar layout', function () {
	// 	cy.login( postSetup.url );
	// 	cy.get( '#wp-admin-bar-edit a' ).click();
	// 	cy.clearWelcome();
	//
	// 	openNeveSidebar();
	//
	// 	let sidebarControl = getControl( 'neve_meta_sidebar' );
	// 	sidebarControl.find( '.components-radio-control__input[value="full-width"]').parent().click();
	// 	cy.updatePost();
	// 	cy.visit( postSetup.url );
	// 	cy.get( '.nv-sidebar-wrap' ).should( 'not.exist' );
	// 	cy.get( '#wp-admin-bar-edit a' ).click();
	//
	// 	sidebarControl = getControl( 'neve_meta_sidebar' );
	// 	sidebarControl.find( '.components-radio-control__input[value="left"]').parent().click();
	// 	cy.updatePost();
	// 	cy.visit( postSetup.url );
	// 	cy.get( '.nv-sidebar-wrap' ).should( 'exist' ).and( 'have.class', 'nv-left' );
	// 	cy.get( '#wp-admin-bar-edit a' ).click();
	//
	// 	sidebarControl = getControl( 'neve_meta_sidebar' );
	// 	sidebarControl.find( '.components-radio-control__input[value="right"]').parent().click();
	// 	cy.updatePost();
	// 	cy.visit( postSetup.url );
	// 	cy.get( '.nv-sidebar-wrap' ).should( 'exist' ).and( 'have.class', 'nv-right' );
	// });

	// it( 'Check container layout', function () {
	// 	cy.login( postSetup.url );
	// 	cy.get( '#wp-admin-bar-edit a' ).click();
	// 	cy.clearWelcome();
	//
	// 	openNeveSidebar();
	//
	// 	let sidebarControl = getControl( 'neve_meta_container' );
	// 	sidebarControl.find( '.components-button').contains( 'Contained' ).click();
	// 	cy.updatePost();
	// 	cy.visit( postSetup.url );
	// 	cy.get( '.single-post-container' ).should( 'have.class', 'container' ).and( 'be.visible' );
	// 	cy.get( '#wp-admin-bar-edit a' ).click();
	//
	// 	sidebarControl = getControl( 'neve_meta_container' );
	// 	sidebarControl.find( '.components-button').contains( 'Full Width' ).click();
	// 	cy.updatePost();
	// 	cy.visit( postSetup.url );
	// 	cy.get( '.single-post-container' ).should( 'not.have.class', 'container' ).and( 'be.visible' );
	// });

	// it( 'Check container width', function () {
	// 	cy.login( postSetup.url );
	// 	cy.get( '#wp-admin-bar-edit a' ).click();
	// 	cy.clearWelcome();
	//
	// 	openNeveSidebar();
	//
	// 	const enableContentWidth = cy.get('.components-toggle-control__label').contains('Custom Content Width (%)');
	// 	activateCheckbox( enableContentWidth );
	//
	// 	cy.get( '.neve_meta_content_width' ).find( 'input[type=number]' ).type('{selectall}').type( 60 );
	// 	cy.updatePost();
	// 	cy.visit( postSetup.url );
	//
	// 	cy.get( '#content.neve-main > .container > .row > .col' ).should( 'have.css', 'max-width' ).and( 'eq', '60%' );
	// })

	// it( 'Check title alignment', function () {
	// 	cy.login( postSetup.url );
	// 	cy.get( '#wp-admin-bar-edit a' ).click();
	// 	cy.clearWelcome();
	//
	// 	openNeveSidebar();
	//
	// 	cy.get('.neve_meta_title_alignment .nv-align-center').click();
	// 	cy.updatePost();
	// 	cy.visit( postSetup.url );
	// 	cy.get( 'h1.entry-title' ).should( 'have.class', 'has-text-align-center').and( 'have.css', 'text-align' ).and( 'eq', 'center' );
	// 	cy.get( '#wp-admin-bar-edit a' ).click();
	//
	// 	cy.get('.neve_meta_title_alignment .nv-align-right').click();
	// 	cy.updatePost();
	// 	cy.visit( postSetup.url );
	// 	cy.get( 'h1.entry-title' ).should( 'have.class', 'has-text-align-right').and( 'have.css', 'text-align' ).and( 'eq', 'right' );
	// 	cy.get( '#wp-admin-bar-edit a' ).click();
	//
	// 	cy.get('.neve_meta_title_alignment .nv-align-left').click();
	// 	cy.updatePost();
	// 	cy.visit( postSetup.url );
	// 	cy.get( 'h1.entry-title' ).should( 'have.class', 'has-text-align-left').and( 'have.css', 'text-align' ).and( 'eq', 'left' );
	// 	cy.get( '#wp-admin-bar-edit a' ).click();
	// });
})

function getControl( $control ) {
	return cy.get( 'label.components-base-control__label[for="' +  $control + '"]' ).parent();
}

function activateCheckbox( $checkbox ) {
	$checkbox.prev().then(($checkbox) => {
		if ( ! $checkbox.hasClass('is-checked')) {
			cy.get( $checkbox ).click();
		}
	})
}
function openNeveSidebar() {
	cy.get( 'button.components-button[aria-label="Neve Options"]').then( ($btn) => {
		cy.get($btn).invoke('attr', 'aria-expanded').then( (value) => {
			if ( value === true ){
				return true;
			}
			cy.get('button.components-button[aria-label="Neve Options"]').click();
		});
	})
}
