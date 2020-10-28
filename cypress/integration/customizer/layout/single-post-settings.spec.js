describe('Single Post Check', function () {
    it('Post Elements Visibility', function () {
        cy.login();
        aliasRestRoutes();
        goToCustomizerSection();

        let status = {'title-meta': 'not.have.descendants', 'thumbnail': 'not.have.descendants', 'content': 'not.have.descendants', 'tags': 'not.have.descendants', 'comments': 'not.have.descendants', 'post-navigation': 'not.have.descendants'};
        let classes = {'title-meta': '.entry-header', 'thumbnail': '.nv-thumb-wrap', 'content': '.entry-content', 'tags': '.nv-tags-list', 'comments': '.comments-area', 'post-navigation': '.nv-post-navigation'};
        cy.get('#customize-control-neve_layout_single_post_elements_order')
            .find('li.neve-sortable-item')
            .each(function (el) {
                cy.get(el).find('.toggle').click();
                cy.get(el).invoke('attr', 'class').then((val) => {
                	if (!val.includes('disabled')) {
                		status[meta] = 'have.descendants';
                	}
                })
            });

        saveCustomizer();
        cy.visit('/markup-image-alignment/');
        cy.get( '#wp-admin-bar-edit').click();

		cy.clearWelcome();
        cy.get( '.components-panel__body').each((el) =>{
            cy.get(el).invoke('attr','class').then( (className) => {
                if( ! className.includes('is-opened') ){
                    cy.get(el).click();
                }
            })
        });
        cy.get( '.components-checkbox-control__label').contains('Allow comments').parent().find(".components-checkbox-control__input").click();
        cy.get( 'button').contains('Update').click();
        cy.visit('/markup-image-alignment/');
        cy.wrap(status).then((el)=>{
            Object.keys(el).forEach(function(key) {
                cy.get('.nv-single-post-wrap').should(el[key],classes[key]);
            });
        })
    });

    it('Post Elements Order', function () {
        cy.login();
        aliasRestRoutes();
        goToCustomizerSection();
        setOrderElementsVisible('#customize-control-neve_layout_single_post_elements_order');
        dropElAfter('#customize-control-neve_layout_single_post_elements_order .ti-order-sortable li', 0, 3);
        cy.wait(1000);
        saveCustomizer();
        let elemOrder = [];
        cy.get('#customize-control-neve_layout_single_post_elements_order .ti-order-sortable li').each((elem) => {
            cy.get(elem).invoke('attr', 'data-id').then((val) => {
                elemOrder.push(val);
            })
        });
        cy.visit('/markup-image-alignment/');

        let index = 0;
        let classes = {'title-meta': 'entry-header', 'thumbnail': 'nv-thumb-wrap', 'content': 'entry-content', 'tags': 'nv-tags-list', 'comments': 'comments-area', 'post-navigation': 'nv-post-navigation'};
        cy.get('.nv-single-post-wrap').find('> *').each((el) => {
            cy.get(el).should('have.class', classes[elemOrder[index]]);
            index++;
        });
    })
});

/**
 * Drag and drop an element after another.
 * @param selector
 * @param dragItem
 * @param dropItem
 */
function dropElAfter(selector, dragItem, dropItem) {
    cy.get(selector).then(function (el) {
        const drag = el[dragItem].getBoundingClientRect();
        const drop = el[dropItem].getBoundingClientRect();
        cy.get(el[0]).trigger('mousedown', {which: 1, pageX: drag.x, pageY: drag.y});
        cy.get(el[0]).trigger('mousemove', {which: 1, pageX: drop.x, pageY: drop.y + 20});
        cy.get(el[0]).wait(200);
        cy.get(el[0]).trigger('mouseup');
    });
}

/**
 * Enable all ordering items.
 * @param selector
 */
function setOrderElementsVisible(selector) {
    cy.get(selector)
        .find('li.neve-sortable-item')
        .each(function (el) {
        	cy.get(el).invoke('attr', 'class').then((val) => {
        		if (val.includes('disabled')) {
        			cy.get(el).find('.toggle').click();
        		}
        	})
        });
}

/**
 * Alias Rest Routes
 */
function aliasRestRoutes() {
    let home = Cypress.config().baseUrl;
    cy.server().route('POST', home + '/wp-admin/admin-ajax.php').as('customizerSave');
}

/**
 * Go to Blog/Archive customizer section.
 */
function goToCustomizerSection() {
    cy.visit('/wp-admin/customize.php');
    cy.get('#accordion-panel-neve_layout').click();
    cy.get('#accordion-section-neve_single_post_layout').click();
}

/**
 * Publish customizer changes.
 */
function saveCustomizer() {
    cy.get('#save').click({force: true});
    cy.wait('@customizerSave').then((req) => {
        expect(req.response.body.success).to.be.true;
        expect(req.status).to.equal(200);
    });
}
