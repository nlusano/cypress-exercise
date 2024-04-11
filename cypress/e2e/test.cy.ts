describe("Test", () => {
  it("should visit the app", () => {
    cy.visit("/");

    cy.url().should("equal", "https://test-rpg.vercel.app/");

    cy.get('[data-testid="hero"] > h1').should("contain", "TestRPG");
  });
});
