describe('Blog/Archive Check', function () {
    // it('Default layout', function () {
    //     cy.login();
    //     aliasRestRoutes();
    //     goToCustomizerSection();
    //     cy.get('#customize-control-neve_blog_archive_layout').find('label[for="neve_blog_archive_layout-default"]').click();
    //     saveCustomizer();
    //     cy.visit('/');
    //     cy.get('article').each(function (el) {
    //         cy.get(el).should('have.class', 'layout-default');
    //         cy.get(el).find('.content').should('have.css', 'flex-direction', 'row');
    //     })
    // });
    //
    // it('Alternative layout', function () {
    //     cy.login();
    //     aliasRestRoutes();
    //     goToCustomizerSection();
    //     cy.get('#customize-control-neve_blog_archive_layout').find('label[for="neve_blog_archive_layout-alternative"]').click();
    //     saveCustomizer();
    //     cy.visit('/');
    //     let count = 0;
    //     cy.get('article').each(function (el) {
    //         cy.get(el).should('have.class', 'layout-alternative');
    //         if (count % 2 === 0) {
    //             cy.get(el).find('.content').should('have.css', 'flex-direction', 'row-reverse');
    //         } else {
    //             cy.get(el).find('.content').should('have.css', 'flex-direction', 'row');
    //         }
    //         count++;
    //     })
    // });
    //
    // it('Grid layout', function () {
    //     cy.login();
    //     aliasRestRoutes();
    //     goToCustomizerSection();
    //     cy.get('#customize-control-neve_blog_archive_layout').find('label[for="neve_blog_archive_layout-grid"]').click();
    //     saveCustomizer();
    //     checkGridCols(1);
    //     checkGridCols(2);
    //     checkGridCols(3);
    //     checkGridCols(4);
    // });
    //
    // it('Masonry', function () {
    //     cy.login();
    //     aliasRestRoutes();
    //     goToCustomizerSection();
    //     cy.get('#customize-control-neve_blog_archive_layout').find('label[for="neve_blog_archive_layout-grid"]').click();
    //     cy.get('#_customize-input-neve_grid_layout').select('2');
    //     cy.get('#_customize-input-neve_enable_masonry').check({force: true}).should('be.checked');
    //     saveCustomizer();
    //     cy.visit('/');
    //     cy.get('article').each(function (el) {
    //         cy.get(el).should('have.css', 'position', 'absolute');
    //         cy.get(el).should('have.css', 'left');
    //         cy.get(el).should('have.css', 'top');
    //     })
    // });
    //
    // it('Excerpt length', function () {
    //     cy.login();
    //     aliasRestRoutes();
    //     goToCustomizerSection();
    //     cy.get('#customize-control-neve_post_excerpt_length')
    //         .find('.range-slider-value')
    //         .invoke('val', 15)
    //         .trigger('change');
    //     saveCustomizer();
    //     cy.visit('/');
    //     let count = 5;
    //     cy.get('article').each(function (el) {
    //         if (count === 0) {
    //             return false;
    //         }
    //         cy.get(el)
    //             .find('.excerpt-wrap')
    //             .invoke('text')
    //             .then((val) => {
    //                 let res = val.split(' ');
    //                 cy.log(res);
    //                 expect(res.length).to.be.at.most(21);
    //             });
    //         count--;
    //     })
    // });
    //
    // it('Pagination Number', function () {
    //     cy.login();
    //     aliasRestRoutes();
    //     goToCustomizerSection();
    //     cy.get('#_customize-input-neve_pagination_type').select('number');
    //     saveCustomizer();
    //     cy.visit('/');
    //     cy.get('.page-numbers').should('exist');
    // })
    //
    // it('Pagination Infinite', function () {
    //     cy.login();
    //     aliasRestRoutes();
    //     goToCustomizerSection();
    //     cy.get('#_customize-input-neve_pagination_type').select('infinite');
    //     saveCustomizer();
    //     cy.visit('/');
    //     cy.get('.page-numbers').should('not.exist');
    // });

    // it('Meta Visibility', function () {
    //     cy.login();
    //     aliasRestRoutes();
    //     goToCustomizerSection();
    //
    //     let status = {'author': 'be.visible', 'category': 'be.visible', 'date': 'be.visible', 'comments': 'be.visible'};
    //     cy.get('#customize-control-neve_post_meta_ordering')
    //         .find('li.order-component')
    //         .each(function (el) {
    //
    //
    //             cy.get(el).find('.toggle-display').click();
    //
    //             cy.get(el).invoke('attr', 'data-id').then(function (meta) {
    //                 status[meta] = 'not.exist';
    //                 cy.get(el).invoke('attr', 'class').then((val) => {
    //                     if (val.includes('enabled')) {
    //                         status[meta] = 'be.visible';
    //                     }
    //                 })
    //             });
    //         });
    //     saveCustomizer();
    //     cy.log(status);
    //     cy.visit('/');
    //     cy.get('article').each(function (el) {
    //         cy.get(el).find('.meta.author').should(status.author);
    //         cy.get(el).find('.meta.category').should(status.category);
    //         cy.get(el).find('.meta.date').should(status.date);
    //     });
    //     cy.log(status);
    //
    //     cy.get('article#post-1').then((body) => {
    //         let comments = body.find('.comments').length;
    //         if (status['comments'] === 'be.visible') {
    //             expect(comments).to.be.greaterThan(0);
    //         } else {
    //             expect(comments).to.equal(0);
    //         }
    //     });
    // });

    // const moveItemFromFirstListToTopOfSecondList = function (sourceIndex) {
    //     const source = `#customize-control-neve_post_meta_ordering li:nth-child(${sourceIndex + 1})`;
    //     const target = '#customize-control-neve_post_meta_ordering';
    //     cy.get(source).drop(target, 'bottom')
    // };

    it( 'Meta order', function () {
        cy.login();
        aliasRestRoutes();
        goToCustomizerSection();

        cy.get('#customize-control-neve_post_meta_ordering')
            .find('li.order-component')
            .each(function (el) {
                cy.get(el).invoke('attr', 'data-id').then(function (meta) {
                    cy.get(el).invoke('attr', 'class').then((val) => {
                        if (!val.includes('enabled')) {
                            cy.get(el).find('.toggle-display').click();
                        }
                    })
                });
            });

        shuffleMeta();
        cy.wait(1000);
        saveCustomizer();



        // cy.wait(3000);
        //
        //
        // let elemOrder = [];
        // cy.get('#customize-control-neve_post_meta_ordering .ti-order-sortable li').each( (elem) => {
        //    cy.get(elem).invoke('attr','data-id').then( (val) => {
        //        elemOrder.push(val);
        //    })
        // }).then(function () {
        //     elemOrder = JSON.stringify(elemOrder);
        //
        //     cy.get('.ti-order-collector[data-customize-setting-link="neve_post_meta_ordering"]')
        //         .invoke('attr', 'type','text')
        //         .invoke('attr','value', elemOrder)
        //         .invoke('val', elemOrder)
        //         .trigger('change')
        //         .invoke('attr', 'type','hidden');
        //     saveCustomizer();
        // });




















            // .invoke('attr', 'type','hidden');
        // cy.log( elemOrder );

        // cy.wait(3000);
        // saveCustomizer();

    });

    // it('Author avatar in meta', function () {
    //     cy.login();
    //     aliasRestRoutes();
    //     goToCustomizerSection();
    //     cy.get('#customize-control-neve_post_meta_ordering')
    //         .find('li[data-id="author"]')
    //         .invoke('attr', 'class').then(function (classList) {
    //         if (!classList.includes('enabled')) {
    //             cy.get('#customize-control-neve_post_meta_ordering')
    //                 .find('li[data-id="author"]')
    //                 .find('.toggle-display').click();
    //         }
    //     });
    //     cy.get('#_customize-input-neve_author_avatar').check();
    //     saveCustomizer();
    //     cy.visit('/');
    //     cy.get('article').each(function (el) {
    //         cy.get(el).find('.meta.author').find('.photo').should('be.visible');
    //     });
    // })
});

function saveCustomizer() {
    cy.get('#save').click({force: true});
    cy.wait('@customizerSave').then((req) => {
        expect(req.response.body.success).to.be.true;
        expect(req.status).to.equal(200);
    });
}

function goToCustomizerSection() {
    cy.visit('/wp-admin/customize.php');
    cy.get('#accordion-panel-neve_layout').click();
    cy.get('#accordion-section-neve_blog_archive_layout').click();
}

function checkGridCols(colNb) {
    let bootstrapClass = 'col-sm-' + (12 / colNb);
    goToCustomizerSection();
    cy.get('#_customize-input-neve_grid_layout').select(colNb.toString());
    saveCustomizer();
    cy.visit('/');
    cy.get('article').each(function (el) {
        cy.get(el).should('have.class', 'layout-grid');
        cy.get(el).should('have.class', bootstrapClass);
    })
}

function aliasRestRoutes() {
    let home = Cypress.config().baseUrl;
    cy.server().route('POST', home + '/wp-admin/admin-ajax.php').as('customizerSave');
}

function shuffleMeta() {
    cy.get('#customize-control-neve_post_meta_ordering .ti-order-sortable li').then( function (el) {
        const drag = el[0].getBoundingClientRect();
        const drop = el[2].getBoundingClientRect();
        cy.get(el[0]).trigger('mousedown', { which: 1, pageX: drag.x, pageY: drag.y });
        cy.get(el[0]).trigger('mousemove', { which: 1, pageX: drop.x, pageY: drop.y + 20 });
        cy.get(el[0]).wait(200);
        cy.get(el[0]).trigger('mouseup');
    });
}

