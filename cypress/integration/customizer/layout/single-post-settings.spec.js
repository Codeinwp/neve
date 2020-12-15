describe( 'Single Post Check', () => {
	const CONTROL = 'neve_layout_single_post_elements_order';
	const DEFAULT = '["title-meta","thumbnail","content","tags","comments"]';
	const REORDERED =
		'["post-navigation","tags","content","comments","title-meta","thumbnail"]';

	const BEFORE = () => {
		cy.login();
		cy.visit( '/markup-image-alignment/' );
		cy.get( '#wp-admin-bar-edit' ).click();
		cy.clearWelcome();
		cy.wait( 1000 );
		cy.get( '.components-panel__body' ).contains( 'Discussion' ).click();
		cy.get( 'label' ).contains( 'Allow comments' ).click();
		cy.get( 'button' ).contains( 'Update' ).click();
	};

	const AFTER = () => {
		cy.setCustomizeSettings( { [ CONTROL ]: DEFAULT } );
	};

	before( () => BEFORE() );
	after( () => AFTER() );

	it( 'All elements hidden', function () {
		cy.setCustomizeSettings( { [ CONTROL ]: '[]' } );

		const HIDDEN = [
			'.entry-header',
			'.nv-thumb-wrap',
			'.entry-content',
			'.nv-tags-list',
			'.comments-area',
			'.nv-post-navigation',
		];

		cy.visit( '/markup-image-alignment/' );
		HIDDEN.forEach( ( className ) => {
			cy.get( '.nv-single-post-wrap' ).should(
				'not.have.descendants',
				className
			);
		} );
	} );

	it( 'All elements enabled and reordered', () => {
		cy.setCustomizeSettings( { [ CONTROL ]: REORDERED } );

		const ORDER = [
			'nv-post-navigation',
			'nv-tags-list',
			'nv-content-wrap',
			'comments-area',
			'entry-header',
			'nv-thumb-wrap',
		];

		cy.visit( '/markup-image-alignment/' );
		ORDER.forEach( ( className ) => {
			cy.get( '.nv-single-post-wrap' )
				.find( '> *' )
				.each( ( el, index ) => {
					cy.get( el ).should( 'have.class', ORDER[ index ] );
				} );
		} );
	} );
} );
