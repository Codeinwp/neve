describe("Visual Regression Testing - https://qa-neve.themeisle.com/nv/?amp", () => {
  const url = "https://qa-neve.themeisle.com/nv/?amp";
  it("Should not add any visual change", function () {
    cy.visit(url);
    cy.captureDocument();
  });
});
