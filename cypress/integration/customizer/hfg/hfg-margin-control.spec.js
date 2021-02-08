describe("Header Builder Margin Control", () => {
  before(() => {
    // Login to wp and redirect to customizer.
    cy.goToCustomizer();

    // Open customizer panel.
    cy.get("#accordion-panel-hfg_header").should("be.visible").click();

    // Check if Primary Menu component is visible and click it.
    cy.get(
      '.hfg--builder-show .hfg--panel-desktop .hfg--row-main .grid-stack-item[title="Primary Menu"]'
    )
      .should("be.visible")
      .click();
    // Switch to layout tab.
    cy.get('#customize-control-primary-menu_tabs [data-tab="layout"]')
      .should("be.visible")
      .click();

    // Increase Top Margin value
    cy.get("#customize-control-primary-menu_component_margin .top-input")
      .click()
      .type("{uparrow}{uparrow}")
      .trigger("change");

    // Check if linked values
    cy.get(
      "#customize-control-primary-menu_component_margin .top-input"
    ).should("have.value", "2");
    cy.get(
      "#customize-control-primary-menu_component_margin .bottom-input"
    ).should("have.value", "2");
    cy.get(
      "#customize-control-primary-menu_component_margin .left-input"
    ).should("have.value", "2");
    cy.get(
      "#customize-control-primary-menu_component_margin .right-input"
    ).should("have.value", "2");

    // Click on Reset button
    cy.get(
      "#customize-control-primary-menu_component_margin button.reset"
    ).click();

    // Check if Reset button works
    cy.get(
      "#customize-control-primary-menu_component_margin .top-input"
    ).should("have.value", "0");
    cy.get(
      "#customize-control-primary-menu_component_margin .bottom-input"
    ).should("have.value", "0");
    cy.get(
      "#customize-control-primary-menu_component_margin .left-input"
    ).should("have.value", "0");
    cy.get(
      "#customize-control-primary-menu_component_margin .right-input"
    ).should("have.value", "0");

    // Unlink values
    cy.get(
      "#customize-control-primary-menu_component_margin button.link"
    ).click();

    // Increase Top Margin value
    cy.get("#customize-control-primary-menu_component_margin .top-input")
      .click()
      .type("{uparrow}{uparrow}{uparrow}")
      .trigger("change");

    // Decrease Bottom Padding value
    cy.get("#customize-control-primary-menu_component_margin .bottom-input")
      .click()
      .type("{downarrow}")
      .trigger("change");

    cy.aliasRestRoutes();
  });
  it("Sets up Margin for the Primary Menu Component", () => {
    cy.get("#save").click();
    cy.wait("@customizerSave").then((interception) => {
      expect(interception.response.body.success).to.be.true;
      expect(interception.response.statusCode).to.equal(200);
      cy.checkMarginFrontEnd();
    });
  });
});
