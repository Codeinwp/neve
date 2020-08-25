describe('Post custom excerpt', function () {
	const postSetup = {
		'title': 'Test Post',
		'content': 'Some post content',
		'excerpt': 'A custom post excerpt',
		'url': null
	};
	it('Create new post named "' + postSetup.title + '".', function () {
		cy.insertPost(postSetup.title, postSetup.content, 'post', false);
		//Copies new post's url
		cy.get('.post-publish-panel__postpublish-header a').
		contains(postSetup.title).
		should('have.attr', 'href').
		then((href) => {
			postSetup.url = href;
		});
	});

	it('Sets up a custom Excerpt', function () {
		cy.visit(postSetup.url);
		cy.get('#wp-admin-bar-edit a').click();
		cy.clearWelcome();
		
		//Selects the Excerpt panel
        cy.get('div.components-panel__body').
		contains('Excerpt').
        click();
		
		//Sets the custom Excerpt and updates the post
        cy.get('textarea.components-textarea-control__input').
        click().
        type(postSetup.excerpt);
        cy.get( '.editor-post-publish-button' ).contains( 'Update' ).click();
        cy.wait(2000);
    })
    
    it( 'Check post excerpt in front-end' , function() {
        cy.visit('/');
        cy.get('.posts-wrapper.row > article').first().then(($post) =>{
            cy.get('.article-content-col > .content > .excerpt-wrap > p').
            should('be.visible').
            contains(postSetup.excerpt);
        })
    })

});
