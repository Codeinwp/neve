describe( 'AMP Check', function() {
	it( 'Sets up serach icon on menu top row', function() {
		cy.login( '/wp-admin/customize.php' );
		cy.aliasRestRoutes();

		cy.get( '#accordion-panel-hfg_header' ).should( 'be.visible' ).
				click();

		cy.get(
				'.hfg--builder-show .hfg--panel-desktop .hfg--row-top .row--grid > div:last-child' ).
				trigger( 'mouseover' );
		cy.get(
				'.hfg--builder-show .hfg--panel-desktop .hfg--row-top .row--grid > div:last-child .add-button--grid' ).
				should( 'be.visible' ).
				click();

		cy.get( '.widgets-panel--visible' ).should( 'exist' );
		cy.get(
				'.widgets-panel--visible .hfg--widgets-desktop  .grid-stack-item.for-s-header_search_responsive' ).
				click();

		cy.get( '#save' ).should( 'be.visible' ).click();
		cy.wait( '@customizerSave' ).then( (req) => {
			expect( req.response.body.success ).to.be.true;
			expect( req.status ).to.equal( 200 );
		} );
		cy.visit( '/wp-admin' );
		cy.get( '#wp-admin-bar-logout > a' ).click( { force: true } );
	} );

	it( 'Checks the search box from the menu', function() {
		cy.visit( '/?amp' );
		cy.get(
				'.header--row.header-top[data-show-on=desktop] .builder-item--header_search_responsive .nv-search-icon-component .menu-item-nav-search' ).
				as( 'navSearchButton' ).
				should( 'be.visible' ).
				click();

		cy.get( '@navSearchButton' ).should( 'have.class', 'active' );

		cy.get( '@navSearchButton' ).find( '> .nv-nav-search' ).
				as( 'navSearchForm' ).
				should( 'be.visible' );

		cy.get( '@navSearchButton' ).find( '.close-responsive-search' ).click();
		cy.get( '@navSearchButton' ).should( 'not.have.class', 'active' );
		cy.get( '@navSearchForm' ).should( 'have.css', 'opacity', '0' );
		cy.get( '@navSearchButton' ).click();

		cy.get( '@navSearchForm' ).
				find( 'form' ).
				invoke( 'removeAttr', 'target' ).
				invoke( 'removeAttr', 'action' );
		cy.get( '@navSearchForm' ).
				find( '.search-field' ).
				as( 'formField' ).
				click();
		cy.get( '@navSearchForm' ).find( '.search-submit' ).as( 'submitButton' );
		cy.get( '@formField' ).should( 'have.focus' ).type( 'Hello' );
		cy.get( '@submitButton' ).click();
		cy.url().should( 'include', '/?s=Hello' );
		cy.get( '.nv-page-title' ).
				find( 'h1' ).
				should( 'have.text', 'Search Results for: Hello' );
	} );

	it( 'Checks the sidebar menu on mobile', function() {
		cy.visit( '/?amp' );
		cy.viewport( 'iphone-x' );

		cy.get( '#header-menu-sidebar' ).
				as( 'navSidebar' ).
				should( 'not.be.visible' );

		cy.get( '.menu-mobile-toggle .navbar-toggle' ).
				as( 'navToggle' ).
				should( 'be.visible' ).
				click();

		cy.get( '@navSidebar' ).should( 'be.visible' );
		cy.get( '@navSidebar' ).
				find( '.navbar-toggle' ).
				should( 'be.visible' ).
				should( 'have.class', 'active' ).
				click();

		cy.get( '@navSidebar' ).should( 'not.be.visible' );

	} );

	it( 'Checks the sidebar sub-menu', function() {
		cy.visit( '/?amp' );
		cy.viewport( 'iphone-x' );

		cy.get( '.menu-mobile-toggle .navbar-toggle' ).click();

		cy.get( '#header-menu-sidebar' ).as( 'navSidebar' ).should( 'be.visible' );

		cy.get( '@navSidebar' ).
		  find( '.amp-caret-wrap' ).
		  first().
		  click();

		cy.get('@navSidebar').
		  find('.has-caret').
		  first().
		  should( 'have.class', 'dropdown-open' );

		cy.get( '@navSidebar' ).
		  find( '.amp-caret-wrap' ).
		  first().
		  closest('li').
		  find( '.sub-menu' ).
		  should( 'be.visible' );

		cy.get( '@navSidebar' ).find( '.amp-caret-wrap' ).first().click();

		cy.get( '@navSidebar' ).
		  find( '.amp-caret-wrap' ).
		  first().
		  closest('li').
		  find( '.sub-menu' ).
		  should( 'not.be.visible' );
	} );
} );
