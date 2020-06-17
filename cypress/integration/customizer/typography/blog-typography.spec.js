const setup = {
  general: {
    transform: 'Lowercase',
    weight: '100',
    fontSize: {
      desktop: '12',
      tablet: '11',
      mobile: '10'
    },
    lineHeight: {
      desktop: '2',
      tablet: '3',
      mobile: '4'
    },
    letterSpacing: {
      desktop: '1',
      tablet: '2',
      mobile: '3'
    }
  }
};

describe( 'Blog Typography', function() {
  it( 'Sets up blog typography in customizer', function() {
    cy.login();
    cy.visit( '/wp-admin/customize.php' );
    cy.get( '#accordion-panel-neve_typography' ).click();
    cy.get( '#accordion-section-neve_typography_blog' ).click();

    // cy.get( '#customize-control-neve_archive_typography_post_title_accordion_wrap .neve-customizer-heading').click();
    // cy.setTypographyControl( '#customize-control-neve_archive_typography_post_title', setup.general );
    // cy.get( '#customize-control-neve_archive_typography_post_title_accordion_wrap .neve-customizer-heading').click();

    // cy.get( '#customize-control-neve_archive_typography_post_excerpt_accordion_wrap .neve-customizer-heading').click();
    // cy.setTypographyControl( '#customize-control-neve_archive_typography_post_excerpt', setup.general );
    // cy.get( '#customize-control-neve_archive_typography_post_excerpt_accordion_wrap .neve-customizer-heading').click();

    // cy.get( '#customize-control-neve_archive_typography_post_meta_accordion_wrap .neve-customizer-heading').click();
    // cy.setTypographyControl( '#customize-control-neve_archive_typography_post_meta', setup.general );
    // cy.get( '#customize-control-neve_archive_typography_post_meta_accordion_wrap .neve-customizer-heading').click();

    cy.get( '#customize-control-neve_single_post_typography_post_title_accordion_wrap .neve-customizer-heading').click();
    cy.setTypographyControl( '#customize-control-neve_single_post_typography_post_title', setup.general );
    cy.get( '#customize-control-neve_single_post_typography_post_title_accordion_wrap .neve-customizer-heading').click();

    // cy.get( '#customize-control-neve_single_post_typography_post_meta_accordion_wrap .neve-customizer-heading').click();
    // cy.setTypographyControl( '#customize-control-neve_single_post_typography_post_meta', setup.general );
    // cy.get( '#customize-control-neve_single_post_typography_post_meta_accordion_wrap .neve-customizer-heading').click();

    // cy.get( '#customize-control-neve_single_post_typography_comments_title_accordion_wrap .neve-customizer-heading').click();
    // cy.setTypographyControl( '#customize-control-neve_single_post_typography_comments_title', setup.general );
    // cy.get( '#customize-control-neve_single_post_typography_comments_title_accordion_wrap .neve-customizer-heading').click();

    aliasRestRoutes();
    cy.get( '#save' ).click();
    cy.wait( '@customizerSave' ).then( ( req ) => {
      expect( req.response.body.success ).to.be.true;
      expect( req.status ).to.equal( 200 );
      cy.wait( 2000 );
    } );
  } );

  // it( 'Test blog page typography on frontend', function () {
  //   cy.visit( '/' );
  //
  //   cy.get( '.blog-entry-title' ).each( function ( elem ) {
  //     testTransformAndWeight(elem);
  //   });
  //
  //   cy.get( '.entry-summary' ).each( function ( elem ) {
  //     testTransformAndWeight(elem);
  //   });
  //
  //   cy.get( '.blog .nv-meta-list li' ).each( function ( elem ) {
  //     testTransformAndWeight(elem);
  //   });
  //
  //   let deviceMap = {
  //     'desktop': {
  //       height: 1080, width: 1920
  //     },
  //     'tablet': {
  //       height: 1024, width: 768
  //     },
  //     'mobile': {
  //       height: 667, width: 375
  //     }
  //   };
  //
  //   Object.keys( deviceMap ).map( device => {
  //     // Change viewport.
  //     cy.viewport( deviceMap[device].width, deviceMap[device].height );
  //
  //     cy.get( '.blog-entry-title' ).each( function ( elem ) {
  //       testSizeLheightSpacing(elem, device);
  //     });
  //
  //     cy.get( '.entry-summary' ).each( function ( elem ) {
  //       testSizeLheightSpacing(elem, device);
  //     });
  //
  //     cy.get( '.blog .nv-meta-list li' ).each( function ( elem ) {
  //       testSizeLheightSpacing(elem, device);
  //     });
  //
  //   } );
  // } )

} );

/**
 * Test text transform and font weight
 *
 * @param elem
 */
function testTransformAndWeight(elem) {
  // Test text transform.
  cy.get(elem).should( 'have.css', 'text-transform' ).
  and( 'match',
    new RegExp( setup.general.transform.toLowerCase(), 'g' ) );

  // Test font weight
  cy.get(elem).should( 'have.css', 'font-weight' ).
  and( 'match',
    new RegExp( setup.general.weight, 'g' ) );
}

/**
 * Test font size, line height and letter spacing
 *
 * @param elem
 * @param device
 */
function testSizeLheightSpacing(elem, device) {
  // Test font size.
  cy.get( elem ).
  should( 'have.css', 'font-size' ).
  and( 'match',
    new RegExp( setup.general.fontSize[device] + 'px', 'g' ) );

  // Test line height.
  cy.get( elem ).
  should( 'have.css', 'line-height' ).
  and( 'match',
    new RegExp( setup.general.lineHeight[device], 'g' ) );

  // Test letter spacing.
  cy.get( elem ).
  should( 'have.css', 'letter-spacing' ).
  and( 'match',
    new RegExp( setup.general.letterSpacing[device], 'g' ) );
}

/**
 * Alias routes
 */
function aliasRestRoutes() {
  let home = Cypress.config().baseUrl;
  cy.server().
  route( 'POST', home + '/wp-admin/admin-ajax.php' ).
  as( 'customizerSave' );
}
