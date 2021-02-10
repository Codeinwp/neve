describe("Changelog Tab - Check Content Parsing and Interaction", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("/wp-admin/themes.php?page=neve-welcome#changelog");
    cy.get(".tab-content.changelog").as("changelogTab");
    cy.get("@changelogTab").find(".accordion.open").as("latestRelease");
  });

  it("Has Content", () => {
    cy.get("@changelogTab")
      .find(".accordion")
      .should("have.length.greaterThan", 4);
  });

  it("Parses Release Properly", () => {
    cy.get("@latestRelease")
      .find(".changelog-category")
      .should("have.length.greaterThan", 0);
    cy.get("@latestRelease")
      .find(".label")
      .should("have.length.greaterThan", 0);
    cy.get("@latestRelease")
      .find(".entries li")
      .should("have.length.greaterThan", 0);
  });

  it("Collapses and Opens Accordion", () => {
    cy.get("@latestRelease").find("button").click();
    cy.get("@latestRelease").should("not.have.class", "open");
    cy.get("@latestRelease")
      .find(".changelog-category")
      .should("not.be.visible");

    cy.get("@latestRelease").find("button").click();
    cy.get("@latestRelease").should("have.class", "open");
    cy.get("@latestRelease").find(".changelog-category").should("be.visible");
  });
});
