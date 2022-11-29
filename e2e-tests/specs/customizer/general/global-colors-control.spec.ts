// describe('Global Colors', function () {
// 	beforeEach(function () {
// 		cy.goToCustomizer();
// 		cy.getCustomizerControl('neve_global_colors');
// 		cy.get('.neve-global-colors-wrap').as('wrap');
// 	});
//
// 	it('Palette Selector', function () {
// 		cy.get('.neve-global-color-palette-inner.active').should('contain', 'Base');
//
// 		cy.get('.neve-global-color-palette-inner').contains('Dark Mode').click();
//
// 		cy.get('.neve-global-color-palette-inner.active').should('contain', 'Dark Mode');
// 	});
//
// 	it('Palette Add and Delete', function () {
// 		cy.get('.add-palette-form').as('form');
// 		cy.get('@form').find('button').click();
// 		cy.get('@form').find('input').type('Base');
// 		cy.get('@form').find('button').contains('Add').should('be.disabled');
// 		cy.get('@form').find('input').clear();
//
// 		cy.get('@form').find('input').type('Test Palette');
// 		cy.get('@form').find('select').select('darkMode');
// 		cy.get('@form').find('button').contains('Add').click();
//
// 		cy.get('.neve-global-color-palette-inner.active').should('contain', 'Test Palette');
//
// 		cy.get('.neve-global-color-palette-inner.active')
// 			.siblings('.delete-palette')
// 			.click({ force: true });
//
// 		cy.get('.neve-global-colors-confirm-delete-modal button')
// 			.contains('Delete')
// 			.click({ force: true });
//
// 		cy.get('.neve-global-colors-confirm-delete-modal').should('not.exist');
//
// 		cy.get('.neve-global-color-palette-inner.active').should('contain', 'Base');
// 	});
//
// 	it('Changes Colors', function () {
// 		cy.wait(500);
// 		cy.get('button.is-secondary');
// 		cy.get('.color-array-wrap .neve-color-component').each((control) => {
// 			cy.get(control).find('button.is-secondary').click({ force: true });
// 			cy.get(control).find('.components-h-stack button.components-button').click({ force: true });
// 			cy.get(control).find('input').clear().type('#000');
// 			cy.get(control).find('.customize-control-title').click();
// 		});
//
// 		cy.get('.neve-global-color-palette-inner.active .color').each((color) => {
// 			cy.get(color).should('have.css', 'background-color').and('eq', 'rgb(0, 0, 0)');
// 		});
// 		cy.get('#save').click({ force: true });
// 		cy.wait(1000);
// 		cy.request('/wp-json/wpthememods/v1/settings').then((themeOptions) => {
// 			expect(themeOptions.body).to.have.property('neve_global_colors');
// 			const globalColors = themeOptions.body.neve_global_colors;
// 			expect(globalColors.palettes).to.have.property('base');
// 			expect(globalColors.palettes.base).to.have.property('name', 'Base');
// 			expect(globalColors.palettes.base).to.have.property('colors');
// 			expect(globalColors.palettes.base.colors).to.deep.equal({
// 				'nv-primary-accent': '#000000',
// 				'nv-secondary-accent': '#000000',
// 				'nv-site-bg': '#000000',
// 				'nv-light-bg': '#000000',
// 				'nv-dark-bg': '#000000',
// 				'nv-text-color': '#000000',
// 				'nv-text-dark-bg': '#000000',
// 				'nv-c-1': '#000000',
// 				'nv-c-2': '#000000',
// 			});
// 		});
// 	});
//
// 	it('Palette Selector in Color Component', function () {
// 		cy.findByRole('heading', {
// 			name: /palette colors/i,
// 		});
// 		cy.get('.color-array-wrap').should('be.visible');
// 		cy.get('.color-array-wrap .neve-color-component').should('have.length', 9);
//
// 		cy.get('.color-array-wrap :nth-child(2) > .components-dropdown > .components-button').click();
//
// 		cy.get('.color-array-wrap :nth-child(2) > .components-dropdown > .components-button').should(
// 			'have.attr',
// 			'aria-expanded',
// 			'true',
// 		);
// 	});
//
// 	it('Palette Reset', function () {
// 		cy.get('.reset-palette').should('not.be', 'disabled').click();
// 		cy.window().then((win) => {
// 			const controlValue = win.wp.customize.control('neve_global_colors').setting.get();
// 			const nonBlack = Object.values(controlValue.palettes.base.colors).filter(
// 				(item) => item !== '#000000',
// 			);
// 			expect(nonBlack).to.have.length(9);
// 		});
// 	});
// });
