/* eslint-disable array-callback-return */
describe("General UI", () => {
  const TABS = [
    "start",
    "plugins",
    "help",
    "changelog",
    "free-pro",
    "starter-sites",
  ];

  beforeEach(() => {
    cy.login();
    cy.visit("/wp-admin/themes.php?page=neve-welcome");
    cy.intercept("GET", "/wp-json/wp/v2/settings/").as("getSettings");
    cy.intercept("POST", "/wp-json/wp/v2/settings/").as("saveSettings");
  });

  it("Placeholder Loading", () => {
    cy.get(".mock-dash").should("exist.and.be.visible");
    cy.reload();
    cy.wait("@getSettings").then((interception) => {
      cy.get(".mock-dash").should("not.exist");
      expect(interception.response.statusCode).to.equal(200);
    });
  });

  it("Test Logger Flag", () => {
    cy.get(".sidebar-section input").as("loggerToggle");
    cy.get("@loggerToggle").should("not.be.checked");
    cy.get("@loggerToggle").check();
    cy.wait("@saveSettings").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      expect(interception.response.body.neve_logger_flag).to.equal("yes");
    });

    cy.reload();
    cy.get("@loggerToggle").should("be.checked");
  });

  it("URL Hash Tab Focus", () => {
    TABS.map((hash) => {
      cy.reload();
      cy.visit(`/wp-admin/themes.php?page=neve-welcome#${hash}`);
      cy.get(`nav.navigation a.${hash}`).should("have.class", "active");
      cy.get(".tab-content").should("have.class", hash);
    });
  });

  it("Tabs Navigation", () => {
    TABS.map((slug) => {
      cy.get(`nav.navigation a.${slug}`).click().should("have.class", "active");
      cy.get(".tab-content").should("have.class", slug);
    });
  });
});
