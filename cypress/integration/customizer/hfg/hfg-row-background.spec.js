describe("Header Row Background Control", () => {
  before("Setup Customizer Control", () => {
    cy.goToCustomizer();

    // Open customizer panel.
    cy.get("#accordion-panel-hfg_header").should("be.visible").click();

    // Hover main HFG row in builder.
    cy.get(
      ".hfg--cb-body > .hfg--panel-desktop > .hfg--cp-rows > .hfg--row-main"
    )
      .should("be.visible")
      .trigger("mouseover");

    // Check if settings button is visible and click it.
    cy.get(
      ".hfg--cb-body > .hfg--panel-desktop > .hfg--cp-rows > .hfg--row-main > .hfg--cb-row-settings"
    )
      .should("exist")
      .click();

    // Switch to style tab.
    cy.get('#customize-control-hfg_header_layout_main_tabs [data-tab="style"]')
      .should("be.visible")
      .click();

    // Alias control.
    cy.get("#customize-control-hfg_header_layout_main_background .neve-background-control").as("bgCtrl");

    cy.get("@bgCtrl").should("be.visible");
    cy.get("@bgCtrl").children().should("have.length", 3);
    cy.get("@bgCtrl")
      .find(".neve-background-type-control")
      .children()
      .should("have.length", 2);

    cy.get("@bgCtrl").find("button").contains("Image").click();
    cy.get("@bgCtrl").find("button").contains("Add").click();

    cy.get(".media-frame")
      .find(".media-menu-item")
      .contains("Media Library")
      .click();

    cy.get(".attachments-browser .attachments > li.attachment").first().click();
    cy.get(".media-toolbar-primary").find("button").contains("Select").click();
    cy.get("@bgCtrl").find(".components-form-toggle__input").click({
      multiple: true,
    });
    cy.aliasRestRoutes();
    cy.get("#save").click();
    cy.wait("@customizerSave").then((interception) => {
      expect(interception.response.body.success).to.be.true;
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it("Background image control on front end.", () => {
    cy.visit("/");
    cy.get('.header-main[data-show-on="desktop"] .header--row-inner').as("row");

    cy.get("@row").should("be.visible");
    cy.get("@row")
      .should("have.css", "background-attachment")
      .and("contain", "fixed");
    cy.get("@row")
      .should("have.css", "background-image")
      .and("contain", "url(")
      .and("contain", "wp-content/uploads");
  });
});
