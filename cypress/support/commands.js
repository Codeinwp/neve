import 'cypress-file-upload';

Cypress.Cookies.defaults( {
	whitelist: /wordpress_.*/
} );
Cypress.Commands.add( 'login', (nextRoute = null) => {
	//console.log(cy.getCookies());

	let cookies = cy.getCookies( { log: true } ).then( function(cookies) {
		let isLoggedIn = false;
		cookies.forEach( function(value) {
			if ( value.name.includes( 'wordpress_' ) ) {
				isLoggedIn = true;
			}
		} );

		if ( isLoggedIn ) {
			if ( nextRoute !== null ) {
				cy.visit( nextRoute );
			}
			return;
		}
		cy.visit( '/wp-admin' );
		cy.wait( 500 );
		cy.get( '#user_login' ).type( Cypress.config().user );
		cy.get( '#user_pass' ).type( Cypress.config().password );
		cy.get( '#wp-submit' ).click();
		if ( nextRoute === null ) {
			return;
		}
		cy.visit( nextRoute );
	} );

} );
Cypress.Commands.add( 'navigate',
		(nextRoute = '/') => {
			cy.visit( nextRoute );
		} );
Cypress.Commands.add('clearWelcome', ()=>{
	cy.window()
		.then(win => {
			win.wp && win.wp.data.select( "core/edit-post" ).isFeatureActive( "welcomeGuide" ) && win.wp.data.dispatch( "core/edit-post" ).toggleFeature( "welcomeGuide" )
		});
});
Cypress.Commands.add( 'insertCoverBlock',()=>{
	importCodeContent('<!-- wp:cover {"overlayColor":"neve-button-color","align":"full"} -->\n' +
		'<div class="wp-block-cover alignfull has-neve-button-color-background-color has-background-dim"><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->\n' +
		'<p class="has-text-align-center has-large-font-size">test</p>\n' +
		'<!-- /wp:paragraph --></div></div>\n' +
		'<!-- /wp:cover -->\n' +
		'\n' +
		'<!-- wp:cover {"overlayColor":"neve-button-color","align":"wide"} -->\n' +
		'<div class="wp-block-cover alignwide has-neve-button-color-background-color has-background-dim"><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->\n' +
		'<p class="has-text-align-center has-large-font-size">test</p>\n' +
		'<!-- /wp:paragraph --></div></div>\n' +
		'<!-- /wp:cover -->\n' +
		'\n' +
		'<!-- wp:cover {"overlayColor":"neve-button-color"} -->\n' +
		'<div class="wp-block-cover has-neve-button-color-background-color has-background-dim"><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center","placeholder":"Write title…","fontSize":"large"} -->\n' +
		'<p class="has-text-align-center has-large-font-size">test</p>\n' +
		'<!-- /wp:paragraph --></div></div>\n' +
		'<!-- /wp:cover -->');
	cy.wait(1000);
	updatePost();
});
function importCodeContent( text ){
	cy.get('.edit-post-more-menu').click().get('.components-dropdown-menu__menu button').contains('Code editor').click();
	cy.get('textarea.editor-post-text-editor').focus().invoke('val', text).type('{enter}')
	cy.get('.edit-post-text-editor__toolbar button').contains("Exit Code Editor").click();
}
Cypress.Commands.add('editCurrentPost',editCurrentPost);
Cypress.Commands.add( 'insertPost',
		(title = 'Test', content = 'Content', type = 'post', featured = false) => {
			let loginRoute = '/wp-admin/post-new.php';
			if ( type !== 'post' ) {
				loginRoute += '?post_type=' + type;
			}

			cy.login( loginRoute );
			cy.clearWelcome();
			if ( featured ) {
				addFeaturedImage();
			}

			cy.wait(1000);
			cy.get( '.editor-post-title__input' ).type( title );
			cy.get(
					' textarea.block-editor-default-block-appender__content' ).
					click( { force: true } );
			cy.get( '.block-editor-rich-text__editable' ).type( content );
			cy.get( '.editor-post-publish-panel__toggle' ).click();
			updatePost();
		} );
Cypress.Commands.add('updatePost', updatePost);


function updatePost(){
	cy.get( '.editor-post-publish-button' ).click();
	cy.wait(1000);
}
function editCurrentPost(){
	cy.get( '#wp-admin-bar-edit a' ).click();
	cy.clearWelcome();
}
function addFeaturedImage() {
	cy.get( '.components-panel__body-toggle' ).
			contains( 'Featured image' ).
			click();
	cy.get( '.editor-post-featured-image__toggle' ).click();
	cy.get( '.media-frame' ).
			find( '.media-menu-item' ).
			contains( 'Media Library' ).
			click({ force: true });

	cy.get( '.attachments-browser .attachments > li.attachment' ).
			first().
			click({ force: true });
	cy.wait( 2500 );
	cy.get( '.media-button-select' ).click();
}


