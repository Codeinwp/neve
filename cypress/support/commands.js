import 'cypress-file-upload';

Cypress.Commands.add( 'login', (nextRoute = null) => {
	cy.viewport( 1920, 1080 );
	cy.visit( '/wp-admin' );
	cy.wait( 500 );
	cy.get( '#user_login' ).type( 'admin' );
	cy.get( '#user_pass' ).type( 'admin' );
	cy.get( '#wp-submit' ).click();
	if ( nextRoute === null ) {
		return;
	}
	cy.visit( nextRoute );
} );
Cypress.Commands.add( 'navigate',
		(nextRoute = '/', viewPortWidth = 1920, viewPortHeight = 1080) => {
			cy.viewport( viewPortWidth, viewPortHeight );
			cy.visit( nextRoute );
		} );

Cypress.Commands.add( 'insertPost',
		(title = 'Test', content = 'Content', type = 'post', featured = false) => {
			let loginRoute = '/wp-admin/post-new.php';
			if ( type !== 'post' ) {
				loginRoute += '?post_type=' + type;
			}
			cy.login( loginRoute );
			if ( featured ) {
				addFeaturedImage();
			}
			cy.get( '.editor-post-title__input' ).type( title );
			cy.get( 'textarea.block-editor-default-block-appender__content' ).click();
			cy.get( '.block-editor-rich-text__editable' ).type( content );
			cy.get( '.editor-post-publish-panel__toggle' ).click();
			cy.get( '.editor-post-publish-button' ).click();
		} );

function addFeaturedImage() {
	cy.get( '.components-panel__body-toggle' ).
			contains( 'Featured Image' ).
			click();
	cy.get( '.editor-post-featured-image__toggle' ).click();
	cy.get( '.media-frame' ).
			find( '.media-menu-item' ).
			contains( 'Upload Files' ).
			click();

	const fileName = 'image.jpg';
	cy.fixture( fileName ).then( fileContent => {
		cy.get( '.upload-ui' ).upload(
				{ fileContent, fileName, mimeType: 'image/jpg' },
				{ subjectType: 'drag-n-drop' }
		);
	} );

	cy.get( '.media-button-select' ).contains( 'Select' ).click();
}


