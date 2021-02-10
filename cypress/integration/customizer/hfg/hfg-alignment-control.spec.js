describe("Header Builder Alignment Control", () => {
  beforeEach(() => {
    // Login to wp and redirect to customizer.

    cy.goToCustomizer();

    cy.aliasRestRoutes();
    // Open customizer panel.
    cy.get("#accordion-panel-hfg_header").should("be.visible").click();

    // Check if Logo and Site title component is visible and click it.
    cy.get(
      '.hfg--builder-show .hfg--panel-desktop .hfg--row-main .grid-stack-item[title="Logo & Site Identity"]'
    )
      .should("be.visible")
      .click();

    // Switch to layout tab.
    cy.get('#customize-control-logo_tabs [data-tab="layout"]')
      .should("be.visible")
      .click();
  });
  it("Sets up alignment for the Logo to Center", () => {
    cy.alignCenter();
    cy.wait("@customizerSave").then((interception) => {
      expect(interception.response.body.success).to.be.true;
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.checkAlignCenter();
  });

  it("Sets up alignment for the Logo to Right", () => {
    cy.alignRight();
    cy.wait("@customizerSave").then((interception) => {
      expect(interception.response.body.success).to.be.true;
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.checkAlignRight();
  });
});
