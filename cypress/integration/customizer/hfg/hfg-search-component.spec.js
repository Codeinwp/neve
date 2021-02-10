describe("Search Icon Component", () => {
  const defaultHFG =
    '{"desktop":{"top":[],"main":{"logo":{"id":"logo","width":4,"x":0,"settings":{"align":"left"}},"primary-menu":{"id":"primary-menu","settings":{"align":"right"},"width":8,"x":4}},"bottom":[]},"mobile":{"top":[],"main":{"logo":{"id":"logo","width":8,"x":0},"nav-icon":{"id":"nav-icon","width":4,"x":8}},"bottom":[],"sidebar":{"primary-menu":{"id":"primary-menu","width":8,"x":0}}}}';
  const withSearch =
    '{"desktop":{"top":[{"x":0,"y":1,"width":1,"height":1,"id":"header_search_responsive"}],"main":[{"x":0,"y":1,"width":4,"height":1,"id":"logo"},{"x":4,"y":1,"width":8,"height":1,"id":"primary-menu"}],"bottom":[]},"mobile":{"top":[],"main":[{"x":0,"y":1,"width":8,"height":1,"id":"logo"},{"x":8,"y":1,"width":4,"height":1,"id":"nav-icon"}],"bottom":[],"sidebar":[{"x":0,"y":1,"width":8,"height":1,"id":"primary-menu"}]}}';

  before(() => {
    cy.setCustomizeSettings({ hfg_header_layout: withSearch });
  });

  after(() => {
    cy.setCustomizeSettings({ hfg_header_layout: defaultHFG });
  });
  it("Canvas Search Works on Front End", () => {
    cy.visit("/");
    cy.get(".builder-item--header_search_responsive .menu-item-nav-search").as(
      "searchIcon"
    );
    cy.get("@searchIcon").find(".nv-nav-search").should("not.be.visible");
    cy.get("@searchIcon").should("have.class", "canvas");
    cy.get("@searchIcon").find("> .nv-search").click();
    cy.get("@searchIcon").should("have.class", "active");
    cy.get("@searchIcon").find(".nv-nav-search").should("be.visible");
    cy.get("@searchIcon").find(".close-responsive-search").click();
    cy.get("@searchIcon").find(".nv-nav-search").should("not.be.visible");
  });

  it("Set search to minimal", () => {
    cy.setCustomizeSettings({
      header_search_responsive_open_type: "minimal",
    });
  });

  it("Minimal Search Works on Front End", () => {
    cy.visit("/");
    cy.get(".builder-item--header_search_responsive .menu-item-nav-search").as(
      "searchIcon"
    );
    cy.get("@searchIcon").find(".nv-nav-search").should("not.be.visible");
    cy.get("@searchIcon").should("have.class", "minimal");
    cy.get("@searchIcon").find("> .nv-search").click();
    cy.get("@searchIcon").should("have.class", "active");
    cy.get("@searchIcon").find(".nv-nav-search").should("be.visible");
    cy.get(".nav-clickaway-overlay").should("exist").click();
    cy.get("@searchIcon").find(".nv-nav-search").should("not.be.visible");
    cy.get(".nav-clickaway-overlay").should("not.exist");
  });

  it("Set search to floating", () => {
    cy.setCustomizeSettings({
      header_search_responsive_open_type: "floating",
    });
  });

  it("Floating Search Works on Front End", () => {
    cy.visit("/");
    cy.get(".builder-item--header_search_responsive .menu-item-nav-search").as(
      "searchIcon"
    );
    cy.get("@searchIcon").find(".nv-nav-search").should("not.be.visible");
    cy.get("@searchIcon").should("have.class", "floating");
    cy.get("@searchIcon").find("> .nv-search").click();
    cy.get("@searchIcon").should("have.class", "active");
    cy.get("@searchIcon").find(".nv-nav-search").should("be.visible");
    cy.get(".nav-clickaway-overlay").should("exist");
    cy.get("@searchIcon").find(".close-responsive-search").click();
    cy.get("@searchIcon").find(".nv-nav-search").should("not.be.visible");
    cy.get(".nav-clickaway-overlay").should("not.exist");
  });
});
