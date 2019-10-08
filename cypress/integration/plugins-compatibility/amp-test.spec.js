describe('AMP Check', function () {

    it('Checks the search box from the menu', function () {
        cy.visit('/?amp');
        cy.get('#nv-primary-navigation-main .menu-item-nav-search')
            .as('navSearchButton')
            .should('be.visible')
            .click();

        cy.get('@navSearchButton').should('have.class', 'active');

        cy.get('#nv-primary-navigation-main .menu-item-nav-search.active .nv-nav-search')
            .as('navSearchForm')
            .should('be.visible');

        cy.get('@navSearchButton').click();
        cy.get('@navSearchButton').should('not.have.class', 'active');
        cy.get('@navSearchForm').should('have.css', 'opacity', '0');
        cy.get('@navSearchButton').click();

        cy.get('@navSearchForm').find('form')
            .invoke('removeAttr', 'target')
            .invoke('removeAttr', 'action');
        cy.get('@navSearchForm')
            .find('.search-field')
            .as('formField')
            .click();
        cy.get('@navSearchForm')
            .find('.search-submit')
            .as('submitButton');
        cy.get('@formField')
            .should('have.focus')
            .type('Hello');
        cy.get('@submitButton').click();
        cy.url().should('include', '/?s=Hello');
        cy.get('.nv-page-title')
            .find('h1')
            .should('have.text', 'Search Results for: Hello');
    });

    it('Checks the sidebar menu on mobile', function () {
        cy.visit('/?amp');
        cy.viewport(550, 750);

        cy.get('#header-menu-sidebar')
            .as('navSidebar')
            .should('not.be.visible');

        cy.get('.menu-mobile-toggle .navbar-toggle')
            .as('navToggle')
            .should('be.visible')
            .click();

        cy.get('@navSidebar').should('be.visible');
        cy.get('@navSidebar')
            .find('.navbar-toggle')
            .should('be.visible')
            .should('have.class', 'active')
            .click();

        cy.get('@navSidebar')
            .should('not.be.visible');

    });

    it('Checks the sidebar sub-menu', function () {
        cy.visit('/?amp');
        cy.viewport(550, 750);

        cy.get('.menu-mobile-toggle .navbar-toggle').click();

        cy.get('#header-menu-sidebar')
            .as('navSidebar')
            .should('be.visible');

        cy.get('@navSidebar')
            .find('.amp-caret-wrap')
            .first()
            .click()
            .should('have.class', 'dropdown-open');

        cy.get('@navSidebar')
            .find('.amp-caret-wrap')
            .first()
            .parent()
            .find('.sub-menu')
            .should('be.visible');

        cy.get('@navSidebar')
            .find('.amp-caret-wrap')
            .first()
            .click();

        cy.get('@navSidebar')
            .find('.amp-caret-wrap')
            .first()
            .parent()
            .find('.sub-menu')
            .should('not.be.visible');
    })
});
