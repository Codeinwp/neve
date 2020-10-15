describe('Ordering Control', function () {
  let VALUE = null
  const CONTROL_ID = '#customize-control-neve_post_content_ordering'
  const BEFORE_EACH = () => {
	cy.login('/wp-admin/customize.php')
	cy.window().then(win => {
	  win.wp.customize.control('neve_post_content_ordering').focus()
	  VALUE = JSON.parse(win.wp.customize.control('neve_post_content_ordering').setting())
	  cy.get('#customize-control-neve_blog_ordering_content_heading').click()
	})

	cy.get(CONTROL_ID).as('control')
  }

  const BEFORE = () => {
	cy.login('/wp-admin/customize.php')
	cy.window().then(win => {
	  const defaultValue = JSON.stringify(["thumbnail","title-meta","excerpt"]);
	  const currentValue = win.wp.customize.control('neve_post_content_ordering').setting();
	  if( currentValue !== defaultValue) {
	    win.wp.customize.control('neve_post_content_ordering').setting.set(defaultValue);
		aliasRestRoutes();
		cy.get( '#save' ).click();
		cy.wait( '@customizerSave' ).then( ( req ) => {
		  expect( req.response.body.success ).to.be.true;
		  expect( req.status ).to.equal( 200 );
		  cy.wait( 2000 );
		} );
	  }
	})
  }

  beforeEach(() => BEFORE_EACH())
  before(() => BEFORE())

  it('Test Ordering', function () {
	cy.get('@control').find('.handle').should('have.length', 3)
	dropElAfter(CONTROL_ID + ' .items-list .neve-sortable-item .handle', 0, 1)
	cy.window().then(win => {
	  let newValue = JSON.parse(win.wp.customize.control('neve_post_content_ordering').setting())
	  const tmp = VALUE[0]
	  VALUE[0] = VALUE[1]
	  VALUE[1] = VALUE[2]
	  VALUE[2] = tmp
	  expect(VALUE).to.deep.eq(newValue)
	})
  })

  it('Test Hiding', function () {
	cy.get('@control').find('.toggle').should('have.length', 3)
	cy.get('@control').find('.toggle').first().click()
	cy.get('@control').find('.neve-sortable-item.disabled').should('exist')
	cy.window().then(win => {
	  let newValue = JSON.parse(win.wp.customize.control('neve_post_content_ordering').setting())
	  VALUE.shift()
	  expect(VALUE).to.deep.eq(newValue)
	})
  })
})

/**
 * Drag and drop an element after another.
 */
function dropElAfter(selector, moveFrom, moveTo) {
  cy.get(selector).then(function (el) {
	const drag = el[moveFrom].getBoundingClientRect()
	const drop = el[moveTo].getBoundingClientRect()
	cy.get(el[moveFrom]).trigger('mousedown', {
	  which: 1,
	  pageX: drag.x,
	  pageY: drag.y
	})
	cy.document().trigger('mousemove', {
	  which: 1,
	  pageX: drop.x,
	  pageY: drop.y + 35
	})
	cy.wait(200)
	cy.document().trigger('mouseup')
  })
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
