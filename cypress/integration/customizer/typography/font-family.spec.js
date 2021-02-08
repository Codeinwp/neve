const fonts = {
  general: "Arapey",
  headings: "Allerta Stencil",
};

describe("Font Family", () => {
  before(() => {
    cy.setCustomizeSettings({
      neve_body_font_family: fonts.general,
      neve_headings_font_family: fonts.headings,
    });
  });

  it("Font Family on Front End", () => {
    cy.visit("/markup-html-tags-and-formatting/");

    cy.get("body")
      .should("have.css", "font-family")
      .and("match", new RegExp(fonts.general, "g"));

    cy.get("h1, h2, h3, h4, h5, h6")
      .should("have.css", "font-family")
      .and("match", new RegExp(fonts.headings, "g"));
  });

  it("Test Font Family inside the Editor", () => {
    cy.visit("/markup-html-tags-and-formatting/");
    cy.get("#wp-admin-bar-edit > a").click();
    cy.clearWelcome();
    cy.get(".editor-styles-wrapper .block-editor-writing-flow p").as("body");
    cy.get("@body")
      .should("have.css", "font-family")
      .and("match", new RegExp(fonts.general, "g"));

    ["h1", "h2", "h3", "h4", "h5", "h6"].forEach((heading) => {
      cy.get(`.editor-styles-wrapper ${heading}`)
        .should("have.css", "font-family")
        .and("match", new RegExp(fonts.headings, "g"));
    });
  });
});
