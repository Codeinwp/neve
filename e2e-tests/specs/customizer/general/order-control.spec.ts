// describe('Ordering Control', function () {
// 	let value = null;
//
// 	beforeEach(function () {
// 		cy.goToCustomizer();
// 		cy.window().then((win) => {
// 			win.wp.customize.control('neve_post_content_ordering').focus();
// 			value = JSON.parse(win.wp.customize.control('neve_post_content_ordering').setting());
// 			cy.get('#customize-control-neve_blog_ordering_content_heading').click();
// 		});
//
// 		cy.get('#customize-control-neve_post_content_ordering').as('control');
// 	});
//
// 	before(function () {
// 		cy.goToCustomizer();
// 		cy.window().then((win) => {
// 			const defaultValue = JSON.stringify(['thumbnail', 'title-meta', 'excerpt']);
// 			const currentValue = win.wp.customize.control('neve_post_content_ordering').setting();
// 			if (currentValue !== defaultValue) {
// 				win.wp.customize.control('neve_post_content_ordering').setting.set(defaultValue);
// 				cy.aliasRestRoutes();
// 				cy.get('#save').click();
// 				cy.wait('@customizerSave').then((interception) => {
// 					expect(interception.response.body.success).to.be.true;
// 					expect(interception.response.statusCode).to.equal(200);
// 					cy.wait(2000);
// 				});
// 			}
// 		});
// 	});
//
// 	it('Test Ordering', function () {
// 		cy.get('@control').find('.handle').should('have.length', 3);
// 		cy.get('#customize-control-neve_post_content_ordering .items-list .neve-sortable-item .handle')
// 			.eq(0)
// 			.drag(
// 				'#customize-control-neve_post_content_ordering .items-list .neve-sortable-item .handle:eq(2)',
// 			);
// 		cy.window().then((win) => {
// 			const newValue = JSON.parse(win.wp.customize.control('neve_post_content_ordering').setting());
// 			const tmp = value[0];
// 			value[0] = value[1];
// 			value[1] = value[2];
// 			value[2] = tmp;
// 			expect(value).to.deep.eq(newValue);
// 		});
// 	});
//
// 	it('Test Hiding', function () {
// 		cy.get('@control').find('.toggle').should('have.length', 3);
// 		cy.get('@control').find('.toggle').first().click();
// 		cy.get('@control').find('.neve-sortable-item.disabled').should('exist');
// 		cy.window().then((win) => {
// 			const newValue = JSON.parse(win.wp.customize.control('neve_post_content_ordering').setting());
// 			value.shift();
// 			expect(value).to.deep.eq(newValue);
// 		});
// 	});
// });
