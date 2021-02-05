describe("Color Control", () => {
  const color = "#fd8f6a";
  const rgbColor = "rgb(253, 143, 106)";
  const controlSlug = "hfg_header_layout_main_new_text_color";

  before(() => {
    cy.goToCustomizer();
  });

  it("Test Color Control - Customizer", () => {
    cy.getCustomizerControl(controlSlug).as("control");
    cy.get("label.hfg_header_layout_main_new_text_color").click();
    // Open picker.
    cy.get("@control").find("button.is-secondary").click();
    // Set a color.
    cy.get("@control").find("input").clear().type(color).wait(500);
    // Open the picker.
    cy.get("@control").find("button.is-secondary").click().click();
    // Popover should exist and be visible.
    cy.get("@control")
      .find(".components-popover")
      .should("exist")
      .and("be.visible");
    // Clear should not exist as there is no set color.
    cy.get("@control").find("button.clear").should("exist").click();
    // Set a color.
    cy.get("@control").find("button.is-secondary").click();
    cy.get("@control").find("input").clear().type(color);
    // Clear should exist as there is a set color.
    cy.get("@control").find("button.clear").should("not.exist");
    // Click outside to hide popover.
    cy.get("@control").find(".neve-color-control").click();
    // Popover should not exist after click outside.
    cy.get("@control").find(".components-popover").should("not.exist");
    // Button should have a background color and it should be the color translated to RGB.
    cy.get("@control")
      .find("button .color")
      .should("have.css", "background-color")
      .and("eq", rgbColor);
    // Check the actual value of the control set through the API.
    cy.getCustomizerControlValue(controlSlug).should("eq", color);
    // Save the customizer.
    cy.aliasRestRoutes();
    cy.get("#save").click();
    cy.wait("@customizerSave").then((interception) => {
      expect(interception.response.body.success).to.be.true;
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it("Test Color Control - Front End", () => {
    cy.visit("/");
    cy.get(".header-main-inner")
      .should("have.css", "color")
      .and("eq", rgbColor);
  });
});
