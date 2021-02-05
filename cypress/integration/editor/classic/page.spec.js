describe("Page meta box settings", () => {
  const pageSetup = {
    title: "Test Page",
    content: "The Page Content",
    url: null,
  };

  it('Create new page named "' + pageSetup.title + '".', () => {
    cy.insertPost(pageSetup.title, pageSetup.content, "page");

    cy.get(".post-publish-panel__postpublish-header a")
      .contains(pageSetup.title)
      .should("have.attr", "href")
      .then((href) => {
        pageSetup.url = href;
      });
  });

  it("Default page should not have sidebar and use 100% width.", () => {
    cy.visit(pageSetup.url);
    cy.get(".nv-sidebar-wrap").should("not.exist");
    cy.get(".single-page-container")
      .should("not.have.class", "container-fluid")
      .and("be.visible");
    cy.get(".nv-single-page-wrap")
      .should("have.css", "max-width")
      .and("eq", "100%");
    cy.get(".nv-page-title").should("exist").and("contain", pageSetup.title);
    cy.get(".hfg_header").should("exist");
    cy.get("footer.site-footer").should("exist");
    cy.get(".nv-content-wrap").should("contain", pageSetup.content);
  });

  it("Content default width should be preserved", () => {
    const defaultWidth = 1170;
    cy.get(".single-page-container").should(
      "have.css",
      "max-width",
      defaultWidth + "px"
    );
    cy.get("#wp-admin-bar-edit a").click();
    cy.get(".wp-block").should("have.css", "max-width", "1170px");
    cy.clearWelcome();
    cy.insertCoverBlock();
    cy.visit(pageSetup.url);
    cy.matchContentWidth(defaultWidth);
  });

  it("Activates Classic Editor", () => {
    cy.activateClassicEditorPlugin();
  });

  it('Edit meta box content width "' + pageSetup.title + '".', () => {
    cy.login(pageSetup.url);

    cy.get("#wp-admin-bar-edit a").click();
    cy.get("#neve_meta_content_width-range")
      .invoke("val", 70)
      .trigger("change");
    cy.get("#publish").contains("Update").click();

    cy.visit(pageSetup.url);
    cy.get(".single-page-container .nv-content-wrap")
      .invoke("width")
      .should("be.eq", 0.7 * 1170 - 30); //we substract the padding.
  });

  it('Edit meta box settings "' + pageSetup.title + '".', () => {
    cy.login(pageSetup.url);
    cy.get("#wp-admin-bar-edit a").click();
    cy.get('label[for="neve_meta_container_full-width"]').click();
    cy.get('label[for="neve_meta_sidebar_left"]').click();
    cy.get('label[for="neve_meta_disable_title"]').click();
    cy.get('label[for="neve_meta_disable_header"]').click();
    cy.get('label[for="neve_meta_disable_footer"]').click();
    cy.get("#neve_meta_content_width-range")
      .invoke("val", 70)
      .trigger("change");

    cy.get("#publish").contains("Update").click();
  });

  it("Edited meta box settings on front end.", () => {
    cy.visit(pageSetup.url);
    cy.reload();
    cy.get(".nv-sidebar-wrap")
      .should("have.class", "nv-left")
      .and("be.visible");
    cy.get(".single-page-container")
      .should("have.class", "container-fluid")
      .and("be.visible");
    cy.get(".nv-single-page-wrap")
      .should("have.css", "max-width")
      .and("eq", "70%");
    cy.get(".nv-page-title").should("not.exist");
    cy.get(".hfg_header").should("not.exist");
    cy.get("footer.site-footer").should("not.exist");
    cy.get(".nv-content-wrap").should("not.contain", pageSetup.content);
  });

  it("Deactivate Classic Editor", () => {
    cy.deactivateClassicEditorPlugin();
  });
});
