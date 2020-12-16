describe( 'Global Colors', () => {
	before( () => {
		cy.goToCustomizer();
		cy.getCustomizerControl( 'neve_global_colors' );
		cy.get( '.neve-global-colors-wrap' ).as( 'wrap' );
	} );

	it( 'Palette Selector', () => {
		cy.get( '.neve-global-color-palette-inner.active' ).should(
			'contain',
			'Base'
		);

		cy.get( '.neve-global-color-palette-inner' )
			.contains( 'Dark Mode' )
			.click();

		cy.get( '.neve-global-color-palette-inner.active' ).should(
			'contain',
			'Dark Mode'
		);
	} );

	it( 'Palette Add', () => {
		cy.get( '.add-palette-form' ).as( 'form' );
		cy.get( '@form' ).find( 'button' ).click();
		cy.get( '@form' ).find( 'input' ).type( 'Base' );
		cy.get( '@form' )
			.find( 'button' )
			.contains( 'Add' )
			.should( 'be.disabled' );
		cy.get( '@form' ).find( 'input' ).clear();

		cy.get( '@form' ).find( 'input' ).type( 'Test Palette' );
		cy.get( '@form' ).find( 'select' ).select( 'darkMode' );
		cy.get( '@form' ).find( 'button' ).contains( 'Add' ).click();

		cy.get( '.neve-global-color-palette-inner.active' ).should(
			'contain',
			'Test Palette'
		);
	} );

	it( 'Palette Delete', () => {
		cy.get( '.neve-global-color-palette-inner.active' )
			.siblings( '.delete-palette' )
			.click( { force: true } );

		cy.get( '.neve-global-colors-confirm-delete-modal button' )
			.contains( 'Delete' )
			.click( { force: true } );

		cy.get( '.neve-global-colors-confirm-delete-modal' ).should(
			'not.exist'
		);

		cy.get( '.neve-global-color-palette-inner.active' ).should(
			'contain',
			'Base'
		);
	} );

	it( 'Changes Colors', () => {
		cy.get( '.color-array-wrap .neve-color-component' ).each(
			( control ) => {
				cy.get( control )
					.find( 'button.is-secondary' )
					.click( { force: true } );
				cy.get( control ).find( 'input' ).clear().type( '#000000' );
				cy.get( control )
					.find( '.customize-control-title' )
					.click( { force: true } );
			}
		);

		cy.get( '.neve-global-color-palette-inner.active .color' ).each(
			( color ) => {
				cy.get( color )
					.should( 'have.css', 'background-color' )
					.and( 'eq', 'rgb(0, 0, 0)' );
			}
		);
		cy.wait( 100 )
			.window()
			.then( ( win ) => {
				const controlValue = win.wp.customize
					.control( 'neve_global_colors' )
					.setting.get();
				const nonBlack = Object.values(
					controlValue.palettes.base.colors
				).filter( ( item ) => item !== '#000000' );
				expect( nonBlack ).to.have.length( 0 );
			} );
	} );

	it( 'Palette Selector in Color Component', () => {
		cy.getCustomizerControl( 'neve_button_appearance' ).as(
			'buttonControl'
		);

		cy.get( '@buttonControl' )
			.find( '.global-color-picker' )
			.first()
			.click();

		cy.get( '.nv-custom-palette-wrap' ).should( 'be.visible' );
		cy.get( '.nv-custom-palette-wrap .nv-custom-palette-color' ).should(
			'have.length',
			9
		);

		cy.get( '.nv-custom-palette-wrap .nv-custom-palette-color' )
			.first()
			.click();

		cy.get( '@buttonControl' )
			.find( '.global-color-picker' )
			.first()
			.should( 'have.class', 'active' );

		cy.get( '.nv-custom-palette-wrap button' ).contains( 'Edit' ).click();
	} );

	it( 'Palette Reset', () => {
		cy.get( '.reset-palette' ).should( 'not.be', 'disabled' ).click();
		cy.window().then( ( win ) => {
			const controlValue = win.wp.customize
				.control( 'neve_global_colors' )
				.setting.get();
			const nonBlack = Object.values(
				controlValue.palettes.base.colors
			).filter( ( item ) => item !== '#000000' );
			expect( nonBlack ).to.have.length( 9 );
		} );
	} );
} );
