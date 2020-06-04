describe('Search Icon Component', function () {
  const HFGSection = 'hfg_header'
  const searchSection = 'header_search_responsive'

  it('Adds Icon and sets up field settings', () => {
	cy.login('/wp-admin/customize.php')
	cy.window().then((win) => {
	  win.wp.customize.panel(HFGSection).focus()
	})
	cy.server().route('POST', Cypress.config().baseUrl + '/wp-admin/admin-ajax.php').as('save')
	cy.get('.hfg--builder-show .hfg--panel-desktop .hfg--row-top .row--grid > div:first-child > button').click()
	cy.get('.hfg--widgets-desktop .grid-stack-item[title="Search Icon"]').click()
	cy.get('#save').click()
	cy.wait('@save').then(r => {
	  expect(r.response.body.success).to.be.true
	  expect(r.status).to.equal(200)
	})
  })

  it('Canvas Search Works on Front End', () => {
	cy.visit('/')
	cy.get('.builder-item--header_search_responsive .menu-item-nav-search').as('searchIcon')
	cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible')
	cy.get('@searchIcon').should('have.class', 'canvas')
	cy.get('@searchIcon').find('> .nv-search').click()
	cy.get('@searchIcon').should('have.class', 'active')
	cy.get('@searchIcon').find('.nv-nav-search').should('be.visible')
	cy.get('@searchIcon').find('.close-responsive-search').click()
	cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible')
  })

  it('Set search to minimal', () => {
	cy.login('/wp-admin/customize.php')
	cy.server().route('POST', Cypress.config().baseUrl + '/wp-admin/admin-ajax.php').as('save')

	cy.window().then((win) => {
	  win.wp.customize.section(searchSection).focus()
	  win.wp.customize.control('header_search_responsive_open_type').setting.set('minimal')
	})

	cy.get('#save').click()
	cy.wait('@save').then(r => {
	  expect(r.response.body.success).to.be.true
	  expect(r.status).to.equal(200)
	})
  })

  it('Minimal Search Works on Front End', () => {
	cy.visit('/')
	cy.get('.builder-item--header_search_responsive .menu-item-nav-search').as('searchIcon')
	cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible')
	cy.get('@searchIcon').should('have.class', 'minimal')
	cy.get('@searchIcon').find('> .nv-search').click()
	cy.get('@searchIcon').should('have.class', 'active')
	cy.get('@searchIcon').find('.nv-nav-search').should('be.visible')
	cy.get('.nav-clickaway-overlay').should('exist').click()
	cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible')
	cy.get('.nav-clickaway-overlay').should('not.exist')
  })

  it('Set search to floating', () => {
	cy.login('/wp-admin/customize.php')
	cy.server().route('POST', Cypress.config().baseUrl + '/wp-admin/admin-ajax.php').as('save')

	cy.window().then((win) => {
	  win.wp.customize.section(searchSection).focus()
	  win.wp.customize.control('header_search_responsive_open_type').setting.set('floating')
	})

	cy.get('#save').click()
	cy.wait('@save').then(r => {
	  expect(r.response.body.success).to.be.true
	  expect(r.status).to.equal(200)
	})
  })

  it('Floating Search Works on Front End', () => {
	cy.visit('/')
	cy.get('.builder-item--header_search_responsive .menu-item-nav-search').as('searchIcon')
	cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible')
	cy.get('@searchIcon').should('have.class', 'floating')
	cy.get('@searchIcon').find('> .nv-search').click()
	cy.get('@searchIcon').should('have.class', 'active')
	cy.get('@searchIcon').find('.nv-nav-search').should('be.visible')
	cy.get('.nav-clickaway-overlay').should('exist')
	cy.get('@searchIcon').find('.close-responsive-search').click()
	cy.get('@searchIcon').find('.nv-nav-search').should('not.be.visible')
	cy.get('.nav-clickaway-overlay').should('not.exist')
  })
})
