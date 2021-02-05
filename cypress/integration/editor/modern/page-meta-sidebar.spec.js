describe("Single page sidebar", () => {
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

  it("Check sidebar layout", () => {
    cy.login(pageSetup.url);
    cy.get("#wp-admin-bar-edit a").click();
    cy.clearWelcome();

    cy.openNeveSidebar();

    cy.getControl("neve_meta_sidebar")
      .find('.components-radio-control__input[value="full-width"]')
      .parent()
      .click();
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get(".nv-sidebar-wrap").should("not.exist");
    cy.get("#wp-admin-bar-edit a").click();

    cy.getControl("neve_meta_sidebar")
      .find('.components-radio-control__input[value="left"]')
      .parent()
      .click();
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get(".nv-sidebar-wrap").should("exist").and("have.class", "nv-left");
    cy.get("#wp-admin-bar-edit a").click();

    cy.getControl("neve_meta_sidebar")
      .find('.components-radio-control__input[value="right"]')
      .parent()
      .click();
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get(".nv-sidebar-wrap").should("exist").and("have.class", "nv-right");
  });

  it("Check container layout", () => {
    cy.login(pageSetup.url);
    cy.get("#wp-admin-bar-edit a").click();
    cy.clearWelcome();

    cy.openNeveSidebar();

    cy.getControl("neve_meta_container")
      .find(".components-button")
      .contains("Contained")
      .click();
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get(".single-page-container")
      .should("have.class", "container")
      .and("be.visible");
    cy.get("#wp-admin-bar-edit a").click();

    cy.getControl("neve_meta_container")
      .find(".components-button")
      .contains("Full Width")
      .click();
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get(".single-page-container")
      .should("not.have.class", "container")
      .and("be.visible");
  });

  it("Check container width", () => {
    cy.login(pageSetup.url);
    cy.get("#wp-admin-bar-edit a").click();
    cy.clearWelcome();

    cy.openNeveSidebar();

    cy.activateCheckbox(
      ".components-toggle-control__label",
      "Custom Content Width (%)"
    );

    cy.get(".neve_meta_content_width")
      .find("input[type=number]")
      .type("{selectall}")
      .type(60);
    cy.updatePost();
    cy.visit(pageSetup.url);

    cy.get(".nv-single-page-wrap")
      .should("have.css", "max-width")
      .and("eq", "60%");
  });

  it("Check title alignment", () => {
    cy.login(pageSetup.url);
    cy.get("#wp-admin-bar-edit a").click();
    cy.clearWelcome();

    cy.openNeveSidebar();

    cy.get(".neve_meta_title_alignment .nv-align-center").click();
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get(".nv-page-title")
      .should("have.class", "has-text-align-center")
      .and("have.css", "text-align")
      .and("eq", "center");
    cy.get("#wp-admin-bar-edit a").click();

    cy.get(".neve_meta_title_alignment .nv-align-right").click();
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get(".nv-page-title")
      .should("have.class", "has-text-align-right")
      .and("have.css", "text-align")
      .and("eq", "right");
    cy.get("#wp-admin-bar-edit a").click();

    cy.get(".neve_meta_title_alignment .nv-align-left").click();
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get(".nv-page-title")
      .should("have.class", "has-text-align-left")
      .and("have.css", "text-align")
      .and("eq", "left");
    cy.get("#wp-admin-bar-edit a").click();
  });

  it("Check author avatar not to exist for page", () => {
    cy.login(pageSetup.url);
    cy.get("#wp-admin-bar-edit a").click();
    cy.clearWelcome();

    cy.openNeveSidebar();

    cy.get(".components-toggle-control__label")
      .contains("Author Avatar")
      .should("not.exist");
  });

  it("Check post elements", () => {
    cy.login(pageSetup.url);
    cy.get("#wp-admin-bar-edit a").click();
    cy.clearWelcome();

    cy.openNeveSidebar();
    cy.get(".neve-meta-sortable").should("not.exist");

    cy.activateCheckbox(".components-toggle-control__label", "Disable Header");
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get(".hfg_header").should("not.exist");
    cy.get("#wp-admin-bar-edit a").click();

    cy.activateCheckbox(".components-toggle-control__label", "Disable Footer");
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get("footer.site-footer").should("not.exist");
    cy.get("#wp-admin-bar-edit a").click();

    cy.activateCheckbox(".components-toggle-control__label", "Disable Title");
    cy.updatePost();
    cy.visit(pageSetup.url);
    cy.get(".nv-page-title-wrap").should("not.exist");
  });
});
