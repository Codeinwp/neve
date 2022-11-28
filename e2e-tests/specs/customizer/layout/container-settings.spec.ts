// /* eslint-disable array-callback-return */
// describe('Container Settings', function () {
// 	const setup = {
// 		pageTitle: 'Container on Page',
// 		postTitle: 'Container on Post',
// 		content: 'Container Test Content',
// 		pageUrl: null,
// 		postUrl: null,
// 	};
//
// 	before(
// 		'Create new page named "' +
// 			setup.pageTitle +
// 			'"and Create new post named "' +
// 			setup.postTitle +
// 			'".',
// 		function () {
// 			// test
// 			cy.insertPost(setup.pageTitle, setup.content, 'page');
// 			cy.get('.post-publish-panel__postpublish-header a')
// 				.contains(setup.pageTitle)
// 				.should('have.attr', 'href')
// 				.then((href) => {
// 					setup.pageUrl = href;
// 				});
//
// 			cy.insertPost(setup.postTitle, setup.content, 'post', true);
// 			cy.get('.post-publish-panel__postpublish-header a')
// 				.contains(setup.postTitle)
// 				.should('have.attr', 'href')
// 				.then((href) => {
// 					setup.postUrl = href;
// 				});
// 		},
// 	);
// 	context('Container width', function () {
// 		before('Setup customizer container width.', function () {
// 			cy.fixture('customizer/layout/container-setting-setup').then((containerSetup) => {
// 				cy.setCustomizeSettings(containerSetup.width);
// 			});
// 		});
//
// 		it('Container width on front end.', function () {
// 			cy.visit(setup.pageUrl);
// 			cy.get('.single-page-container').as('container');
// 			cy.get('@container').should('have.css', 'max-width').and('eq', '1200px');
//
// 			cy.viewport(768, 1024); //iPad
// 			cy.get('@container').should('have.css', 'max-width').and('eq', '960px');
//
// 			cy.viewport(375, 812); //iPhoneX
// 			cy.get('@container').should('have.css', 'max-width').and('eq', '680px');
// 		});
// 	});
//
// 	context('Container Style', function () {
// 		before('Setup customizer container style.', function () {
// 			cy.fixture('customizer/layout/container-setting-setup').then((containerSetup) => {
// 				cy.setCustomizeSettings(containerSetup.style);
// 			});
// 		});
//
// 		it('Container style on front end.', function () {
// 			cy.visit(setup.pageUrl);
// 			cy.get('.single-page-container').as('container');
// 			cy.get('@container').should('have.class', 'container-fluid');
// 			cy.visit(setup.postUrl);
// 			cy.get('.single-post-container').as('container');
// 			cy.get('@container').should('have.class', 'container-fluid');
// 		});
// 	});
// });
