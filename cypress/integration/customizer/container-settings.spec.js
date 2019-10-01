describe( 'Container Settings', function() {

	const setup = {
		'title': 'Container Test',
		'content': 'Container Test Content',
		'pageUrl': null,
		'postUrl': null
	};
	it( 'Create new page named "' + setup.title + '".', function() {
		cy.insertPost(setup.title, setup.content, 'page');
		cy.get( '.post-publish-panel__postpublish-header a' ).
				contains( setup.title ).
				should( 'have.attr', 'href' ).
				then( (href) => {
					setup.pageUrl = href;
				} );
	} );

	// it( 'Create new post named "' + setup.title + '".', function() {
	// 	cy.insertPost( setup.title, setup.content, 'post', true );
	// 	cy.get( '.post-publish-panel__postpublish-header a' ).
	// 			contains( setup.title ).
	// 			should( 'have.attr', 'href' ).
	// 			then( (href) => {
	// 				setup.postUrl = href;
	// 			} );
	// } );

		it( 'Setup customizer container settings.', function() {
			cy.login( '/wp-admin/customize.php' );
			aliasRestRoutes();
			cy.get( '#accordion-panel-neve_layout' ).click();
			cy.get( '#accordion-section-neve_container' ).click();
			cy.get( '#customize-control-neve_container_width' ).as( 'control' );

			let devices = { 'desktop': 1200, 'tablet': 960, 'mobile': 680 };
			Object.keys( devices ).map( (device) => {
				console.log( devices[device] );
				cy.get( '@control' ).
						find( '.responsive-switchers .preview-' + device ).
						click();
				cy.get( '@control' ).find( '.control-wrap.' + device + ' .range-slider-value' ).
						invoke( 'val', devices[device] ).
						trigger( 'change' );
			} );

			// cy.get('.customize-control-neve_default_container_style select').select('full-width');
			// cy.get('.customize-control-neve_blog_archive_container_style select').select('full-width');
			// cy.get('.customize-control-neve_single_post_container_style').select('full-width');

			cy.get( '#save' ).click();
			cy.wait( '@customizerSave' ).then( (req) => {
				expect( req.response.body.success ).to.be.true;
				expect( req.status ).to.equal( 200 );
			} );
		} );

	it( 'Container width on front end.', function() {
		cy.navigate(setup.pageUrl);
		cy.get('.single-page-container').as('container');
		cy.get('@container').should('have.css', 'max-width').
				and('eq', '1200px');

		cy.viewport( 768, 1024 );//iPad
		cy.get('@container').should('have.css', 'max-width').
				and('eq', '960px');

		cy.viewport( 375, 812 ); //iPhoneX
		cy.get('@container').should('have.css', 'max-width').
				and('eq', '680px');
	} );
} );

function aliasRestRoutes() {
	let home = Cypress.config().baseUrl;
	cy.server().
			route( 'POST', home + '/wp-admin/admin-ajax.php' ).
			as( 'customizerSave' );
}
