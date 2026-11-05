describe("Warm Heart E2E Testing", () => {
  it("opens the home page successfully", () => {
    cy.visit("http://localhost:5173");

    cy.get("#root").should("exist");
    cy.get("body").should("be.visible");
  });

  it("displays the Instagram section", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Follow us on instagram").should("be.visible");
  });
});
