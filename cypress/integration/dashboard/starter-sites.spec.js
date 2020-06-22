import 'whatwg-fetch'

const BEFORE = () => {
  // Polyfill Fetch as cypress doesn't handle it.
  Cypress.on('window:before:load', win => {
	delete win.fetch
  })

  cy.server()
  cy.route('https://api.themeisle.com/sites/*/wp-json/ti-demo-data/data').as('loadRemoteData')

  cy.login()
  cy.visit('/wp-admin/themes.php?page=neve-welcome#starter-sites')
  cy.get('.tab-content.starter-sites').as('starterSitesTab')
  cy.get('@starterSitesTab').find('.search input').as('search')
}
describe('Starter Sites - Search', () => {
  beforeEach(() => BEFORE())

  it('No Results', () => {
	const TAG = 'Photography'
	const NORESULTS = 'No results'
	cy.get('@search').type('=')
	cy.get('@starterSitesTab').find('.starter-site-card').should('not.exist')
	cy.get('@starterSitesTab').find('.no-results').as('noResults')
	cy.get('@noResults').should('be.visible')
	cy.get('@noResults').find('p').should('contain', NORESULTS)
	cy.get('@noResults').find('.tags').should('be.visible')
	cy.get('@noResults').find('.tags button').should('have.length', 5)
	cy.get('@noResults').find('.tags button').contains(TAG).click()
	cy.get('@search').should('have.value', TAG)
  })

  it('Specific Search', () => {
	const SEARCH = 'Web Agency'
	cy.get('@search').type(SEARCH)
	cy.get('@starterSitesTab').find('.starter-site-card').first().should('contain', SEARCH)
  })
})

describe('Switcher & Infinite Scroll', () => {
  beforeEach(() => BEFORE())

  it('Infinite Scroll', () => {
	cy.get('@starterSitesTab').find('.starter-site-card').should('have.length', 9)
	cy.scrollTo(0, 1000)
	cy.get('@starterSitesTab').find('.starter-site-card').should('have.length.greaterThan', 9)
  })

  it('Siwtcher', () => {
	const editors = ['Brizy', 'Beaver Builder', 'Thrive Architect', 'Divi Builder', 'Gutenberg']
	const ELEMENTOR = 'Elementor'
	const BEAVER = 'Beaver Builder'
	cy.get('@starterSitesTab').find('button.ob-dropdown').as('editorSelect')
	cy.get('@editorSelect').should('contain', ELEMENTOR).click()
	cy.get('@editorSelect').find('.options').should('be.visible')
	editors.map(editor => {
	  cy.get('@editorSelect').find('li').contains(editor).should('exist').and('be.visible')
	})
	cy.get('@editorSelect').find('li').contains(BEAVER).click()
	cy.get('@editorSelect').find('.options').should('not.exist')
	cy.get('@editorSelect').should('contain', BEAVER)
	cy.reload()
	cy.get('@editorSelect').should('contain', BEAVER).click()
	cy.get('@editorSelect').find('li').contains(ELEMENTOR).click()
  })
})

describe('Import UI', () => {
  beforeEach(() => BEFORE())

  it('Preview Works', () => {
	cy.get('@starterSitesTab').find('.starter-site-card').first().as('starterSite')
	cy.get('@starterSite').trigger('mouseover')
	cy.get('@starterSite').find('.actions').should('be.visible').and('have.class', 'visible')
	cy.get('@starterSite').find('button').should('have.length', 2)
	cy.get('@starterSite').find('.preview').should('be.visible').click()

	cy.get('@starterSitesTab').find('.ob-preview').as('preview')
	cy.get('@preview').should('be.visible')
	cy.get('@preview').find('.bottom-bar').should('be.visible')

	cy.get('@preview').find('.navigator button').should('have.length', 3)
	cy.get('@preview').find('button.next').click()
	cy.get('@preview').find('button.prev').click()

	cy.get('@preview').find('.actions button').should('contain', 'Import').as('button')
	cy.get('@button').click()

	cy.get('.ob-import-modal').as('modal')
	cy.get('@modal').should('have.class', 'fetching')
	cy.wait('@loadRemoteData').then(req => {
	  expect(req.status).to.be.equal(200)
	})
  })

  it('Import Modal Works', () => {
	cy.get('@starterSitesTab').find('.starter-site-card').first().as('starterSite')
	cy.get('@starterSite').trigger('mouseover')
	cy.get('@starterSite').find('.import').click()

	cy.get('.ob-import-modal').as('modal')
	cy.get('@modal').should('not.have.class', 'fetching')

	cy.get('@modal').find('.options.general ul li').as('generalOptions')

	cy.get('@generalOptions').should('have.length', 3).each($toggle => {
	  cy.wrap($toggle).find('input').as('toggle')
	  cy.get('@toggle').should('be.checked')
	  cy.get('@toggle').uncheck().should('not.be.checked')
	})

	cy.get('@modal').find('button').contains('Import').should('be.disabled')
	cy.get('@generalOptions').each($toggle => {
	  cy.wrap($toggle).find('input').check()
	})

	cy.get('@modal').find('button').contains('Import').should('be.enabled')
	cy.get('@modal').find('button').contains('Close').click()
	cy.get('@modal').should('not.be.visible')
  })

  it('Does Not Import PRO Demo Site', () => {
	const THRIVE = 'Thrive Architect'
	cy.get('@starterSitesTab').find('button.ob-dropdown').as('editorSelect')
	cy.get('@editorSelect').click()
	cy.get('@editorSelect').find('li').contains(THRIVE).click()

	cy.get('@starterSitesTab').find('.starter-site-card').should('contain', 'Premium')
	cy.get('@starterSitesTab').find('.starter-site-card').first().as('starterSiteCard')
	cy.get('@starterSiteCard').trigger('mouseover')
	cy.get('@starterSiteCard').find('.actions button').should('have.length', 1).click()
	cy.get('.ob-preview .actions a').should('contain', 'Upgrade and Import')
  })
})

describe('Import Process', () => {
  const HOMEURL = Cypress.config().baseUrl
  const BACK = 'Back to Sites Library'
  const VIEW = 'View Website'
  const ADD = 'Add your own content'
  beforeEach(() => BEFORE())
  it('Imports properly', () => {
	cy.route('POST', HOMEURL + '/wp-json/ti-sites-lib/v1/install_plugins').as('plugins')
	cy.route('POST', HOMEURL + '/wp-json/ti-sites-lib/v1/import_content').as('content')
	cy.route('POST', HOMEURL + '/wp-json/ti-sites-lib/v1/import_theme_mods').as('mods')
	cy.route('POST', HOMEURL + '/wp-json/ti-sites-lib/v1/import_widgets').as('widgets')

	cy.get('@starterSitesTab').find('.starter-site-card').first().as('starterSiteCard')
	cy.get('@starterSiteCard').trigger('mouseover')
	cy.get('@starterSiteCard').find('.import').click()
	cy.get('.ob-import-modal').should('be.visible').as('modal')
	cy.get('@modal').find('button').contains('Import').click()

	cy.wait('@plugins').then(req => {
	  expect(req.status).to.equal(200)
	})
	cy.wait('@content').then(req => {
	  expect(req.status).to.equal(200)
	})
	cy.wait('@mods').then(req => {
	  expect(req.status).to.equal(200)
	})
	cy.wait('@widgets').then(req => {
	  expect(req.status).to.equal(200)
	})

	cy.get('@modal').find('.icon').should('have.class', 'success')
	cy.get('@modal').find('a').contains(VIEW).should('be.visible')
	cy.get('@modal').find('a').contains(ADD).should('be.visible')
	cy.get('@modal').find('button').contains(BACK).should('be.visible')
  })
})
