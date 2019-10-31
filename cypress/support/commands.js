import 'cypress-file-upload';
Cypress.Cookies.defaults({
	whitelist: /wordpress_.*/
});
Cypress.Commands.add( 'login', (nextRoute = null) => {
	//console.log(cy.getCookies());

	let cookies = cy.getCookies({log:true}).then(function(cookies){
		let isLoggedIn = false;
		cookies.forEach(function(value) {
			if (value.name.includes("wordpress_")) {
				isLoggedIn = true;
			}
		});

		if(isLoggedIn){
			if ( nextRoute === null ) {
				return;
			}
			return;
		}
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
	});


} );
Cypress.Commands.add( 'navigate',
		(nextRoute = '/') => {
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
			cy.get( '.editor-default-block-appender textarea.block-editor-default-block-appender__content' ).click({force: true});
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
	cy.wait(2500);
	cy.get( '.media-button-select' ).contains( 'Select' ).click();
}


